/* Copyright (c) 2017 Horizon Medical SAS, Cartagena - Colombia.
* All Rights Reserved.
*/

#include "HRZ_ADS1298.h"
#include "HRZ_ecg_service.h"
#include "HRZ_ble.h"
#include "HRZ_ADS1298_LP_Filter.h"

#define NRF_LOG_MODULE_NAME "ADS1298"
#include "nrf_log.h"
#include "nrf_log_ctrl.h"
#include "nrf_delay.h"

static uint8_t spi_tx_buffer[ADS1298_SPI_BUFFER_SIZE];
static uint8_t spi_rx_buffer[ADS1298_SPI_BUFFER_SIZE];
bool ads1298_data_ready = false;
bool ads1298_data_received = false;
bool ads1298_configured = false;
bool ble_packet_ready = false;
hrz_ads1298_data_t *ads1298_data;

// ECG Channels buffers
static q31_t hrz_channel1[HRZ_SAMPLES_PER_PACKET];
static q31_t hrz_channel2[HRZ_SAMPLES_PER_PACKET];
static q31_t hrz_channel3[HRZ_SAMPLES_PER_PACKET];
static q31_t hrz_channel4[HRZ_SAMPLES_PER_PACKET];
static q31_t hrz_channel5[HRZ_SAMPLES_PER_PACKET];
static q31_t hrz_channel6[HRZ_SAMPLES_PER_PACKET];
static q31_t hrz_channel7[HRZ_SAMPLES_PER_PACKET];
static q31_t hrz_channel8[HRZ_SAMPLES_PER_PACKET];
static hrz_channel_data_t hrz_channel1_raw[HRZ_SAMPLES_PER_PACKET];
static hrz_channel_data_t hrz_channel2_raw[HRZ_SAMPLES_PER_PACKET];
static hrz_channel_data_t hrz_channel3_raw[HRZ_SAMPLES_PER_PACKET];
static hrz_channel_data_t hrz_channel4_raw[HRZ_SAMPLES_PER_PACKET];
static hrz_channel_data_t hrz_channel5_raw[HRZ_SAMPLES_PER_PACKET];
static hrz_channel_data_t hrz_channel6_raw[HRZ_SAMPLES_PER_PACKET];
static hrz_channel_data_t hrz_channel7_raw[HRZ_SAMPLES_PER_PACKET];
static hrz_channel_data_t hrz_channel8_raw[HRZ_SAMPLES_PER_PACKET];
static q31_t hrz_filtered_channel1[HRZ_SAMPLES_PER_PACKET];
static q31_t hrz_filtered_channel2[HRZ_SAMPLES_PER_PACKET];
static q31_t hrz_filtered_channel3[HRZ_SAMPLES_PER_PACKET];
static q31_t hrz_filtered_channel4[HRZ_SAMPLES_PER_PACKET];
static q31_t hrz_filtered_channel5[HRZ_SAMPLES_PER_PACKET];
static q31_t hrz_filtered_channel6[HRZ_SAMPLES_PER_PACKET];
static q31_t hrz_filtered_channel7[HRZ_SAMPLES_PER_PACKET];
static q31_t hrz_filtered_channel8[HRZ_SAMPLES_PER_PACKET];


/**@brief ADS1298 SPI Module init
*/
void hrz_ads1298_spi_init(void)
{
  nrf_drv_spi_config_t ads1298_spi_config = NRF_DRV_SPI_DEFAULT_CONFIG;
  // ads1298_spi_config.ss_pin   = ADS1298_SPI_SS_PIN;
  ads1298_spi_config.miso_pin = ADS1298_SPI_MISO_PIN;
  ads1298_spi_config.mosi_pin = ADS1298_SPI_MOSI_PIN;
  ads1298_spi_config.sck_pin  = ADS1298_SPI_SCK_PIN;
  ads1298_spi_config.frequency = SPI_FREQUENCY_FREQUENCY_K500;
  ads1298_spi_config.mode = NRF_SPI_MODE_1;
  APP_ERROR_CHECK(nrf_drv_spi_init(&ads1298_spi, &ads1298_spi_config, hrz_ads1298_spi_event_handler, NULL));
  nrf_gpio_cfg_output(ADS1298_SPI_SS_PIN);
  ADS1298_DESELECT();
  NRF_LOG_INFO("ADS SPI configured\r\n")
}

/**
* @brief ADS1298 SPI event handler.
* @param event
*/
void hrz_ads1298_spi_event_handler(nrf_drv_spi_evt_t const * p_event, void * p_context)
{
  spi_xfer_done = true;
  //If connected, notifying and not configuring ADS1298 registers
  if (m_ecgs.conn_handle != BLE_CONN_HANDLE_INVALID && ads1298_configured == true) {
    // ads1298_data = (hrz_ads1298_data_t *) spi_rx_buffer; //ads1298_data is not needed anymore, we're using the spi buffer directly, the packed attributed changed the byte order.
    ads1298_data_received = true;
    // NRF_LOG_INFO("Receiving\r\n")
    NRF_LOG_HEXDUMP_INFO(spi_rx_buffer, ADS1298_SPI_BUFFER_SIZE);
  }
}

/**
* @brief Function for configuring ADS1298_INT_PIN for input
* and GPIOTE to give an interrupt on low to high pin change.
*/
void hrz_ads1298_int_init(void)
{
  ret_code_t err_code;

  nrf_drv_gpiote_in_config_t in_config = GPIOTE_CONFIG_IN_SENSE_HITOLO(true);
  in_config.pull = NRF_GPIO_PIN_PULLUP;

  err_code = nrf_drv_gpiote_in_init(ADS1298_DRDY, &in_config, hrz_ads1298_int_pin_handler);
  APP_ERROR_CHECK(err_code);
  nrf_drv_gpiote_in_event_enable(ADS1298_DRDY, true);
  NRF_LOG_INFO("Interrupt configured\r\n")
}

/**
* @brief Start ADS1298
*/
void hrz_start_ads1298(void)
{
  nrf_gpio_pin_set(ADS1298_START);
}

/**
* @brief Stop ADS1298
*/
void hrz_stop_ads1298(void)
{
  nrf_gpio_pin_clear(ADS1298_START);
}

/**
* @brief External DRDY interrupt handler
* @param pin     DRDY pin input
* @param action  Action polarity
*/
void hrz_ads1298_int_pin_handler(nrf_drv_gpiote_pin_t pin, nrf_gpiote_polarity_t action)
{
  // NRF_LOG_INFO("ADS1298 Interrupt Received\r\n");
  ads1298_data_ready = true;
}

/**
* @brief ADS1298 initialization routine
*/
void hrz_ads1298_init(void)
{
  NRF_LOG_INFO("Initializing ADS1298...\r\n");
  hrz_ads1298_spi_init();
  hrz_ads1298_int_init();
  nrf_gpio_cfg_output(ADS1298_PWDN);
  nrf_gpio_cfg_output(ADS1298_RESET);
  nrf_gpio_cfg_output(ADS1298_START);

  //Power up
  nrf_gpio_pin_clear(ADS1298_START);  //Do not start yet
  nrf_gpio_pin_set(ADS1298_PWDN);
  nrf_gpio_pin_set(ADS1298_RESET);

  //Maximum tCLK = 514ns, datasheet p17
  //Wait tPOR = tCLK * 2^18 = 134742016ns ~ 135ms, datasheet p96
  nrf_delay_ms(135);

  //Issue reset pulse 2 * tCLK = 1028ns ~ 2us, datasheet p96
  nrf_gpio_pin_clear(ADS1298_RESET);
  nrf_delay_us(2);
  nrf_gpio_pin_set(ADS1298_RESET);

  //Wait 16 * tCLK = 8224ns ~ 9us, datasheet p96
  nrf_delay_us(9);
  //At this point the device is ready to use
  NRF_LOG_INFO("ADS1298 Initialized\r\n");

  //Device Wakes Up in Read Data Continuous Mode.
  //Send Stop Data Continuous command so that registers can be written
  uint8_t sdatac = ADS1298_SDATACC;
  hrz_ads1298_spi_txrx(&sdatac, 1, 0);
  nrf_delay_ms(200);

  //Read ID
  uint8_t readID[2] = { 0x20, 0x00 };
  hrz_ads1298_spi_txrx(readID, sizeof(readID), 3);

  //Write to registers from CONFIG1 to CH8SET
  uint8_t command[14] =
  //{opcode1, opcode2, CONFIG1, ..., CH8SET}
  { 0x41, 0x0B, 0x46, 0x10, 0xCE, 0x00, 0x60, 0x60, 0x60, 0x60, 0x60, 0x60, 0x60, 0x60 }; //0x05 = test signal, 0x01 = input shorted, 0x81 = off, 0x00 = normal electrode input, 0x60 = normal input gain 12
  hrz_ads1298_spi_txrx(command, sizeof(command), 0);

  nrf_delay_ms(10);
  // Enable WCT
  // Write two WCT registers starting from address 0x18
  // 001 = Channel 1 negative input connected to WCTA amplifier, RA electrode
  // 000 = Channel 1 positive input connected to WCTB amplifier, LA electrode
  // 010 = Channel 2 positive input connected to WCTC amplifier, LL electrode
  uint8_t wct[4] = {(0x40 | 0x18), 0x01, 0x09, 0xC2};
  hrz_ads1298_spi_txrx(wct, sizeof(wct), 0);

  //Read registers
  uint8_t readRegs[2] = { 0x21, 0x0B };
  hrz_ads1298_spi_txrx(readRegs, sizeof(readRegs), 14);

  //Enable Read Data Continuous mode
  uint8_t rdatac = ADS1298_RDATACC;
  hrz_ads1298_spi_txrx(&rdatac, 1, 0);

  //Don't start yet
  hrz_stop_ads1298();

  ads1298_configured = true;
}

/**
* @brief ADS1298 SPI transmit receive function
* @param tx_buf  TX buffer
* @param tx_len  TX buffer length
* @param rx_len  RX buffer length
*/
void hrz_ads1298_spi_txrx(uint8_t * tx_buf, uint8_t tx_len, uint8_t rx_len)
{
  // NRF_LOG_INFO("Start SPI transmission\r\n")
  // Reset RX buffer and transfer done flag
  memset(spi_rx_buffer, 0, ADS1298_SPI_BUFFER_SIZE);
  spi_xfer_done = false;

  //Start SPI transfer
  ADS1298_SELECT();
  APP_ERROR_CHECK(nrf_drv_spi_transfer(&ads1298_spi, tx_buf, tx_len, spi_rx_buffer, rx_len));

  //Wait for SPI transfer to end
  while (!spi_xfer_done)
  {
    __WFE();
  }
  ADS1298_DESELECT();
  // NRF_LOG_INFO("Sending\r\n")
  // NRF_LOG_HEXDUMP_INFO(tx_buf, tx_len)
}

/**
* @brief Function to pack each channel sample
*/
q31_t hrz_convert_24bit_twos_complement_to_int(uint8_t *buffer, uint8_t channel){
  if (channel < 1 || channel > 8)
  {
    NRF_LOG_ERROR("Invalid channel number. The channel must be from 1 to 8");
    return -1;
  }
  
  channel = channel * 3 ; //Start from the fourth byte, the previous three ones are status bytes
  q31_t result = ((buffer[channel] << 24) | (buffer[channel + 1] << 16) | (buffer[channel + 2] << 8)) >> 8; 
  return result;
}

/**
* @brief Returns the sample per channel 
*/
hrz_channel_data_t hrz_get_sample_from_buffer(uint8_t *buffer, uint8_t channel){
  channel = channel * 3 ;
  hrz_channel_data_t result;
  result.b1 = buffer[channel];
  result.b2 = buffer[channel + 1];
  result.b3 = buffer[channel + 2];
  NRF_LOG_HEXDUMP_INFO(buffer, ADS1298_SPI_BUFFER_SIZE);
  NRF_LOG_HEXDUMP_INFO((uint8_t*)&result, 3);
  return result;
}

/**
* @brief Function for receiving and processing data from ADS1298
*/
void hrz_get_ads1298_data()
{
  static size_t sample_count = 0;
  hrz_ads1298_spi_txrx(spi_tx_buffer, 0, ADS1298_SPI_BUFFER_SIZE);

  //Wait to receive one sample from all channels
  while (!ads1298_data_received);

  //Save each channel in its own buffer;
  hrz_channel1_raw[sample_count] = hrz_get_sample_from_buffer(spi_rx_buffer, 1);
  hrz_channel2_raw[sample_count] = hrz_get_sample_from_buffer(spi_rx_buffer, 2);
  hrz_channel3_raw[sample_count] = hrz_get_sample_from_buffer(spi_rx_buffer, 3);
  hrz_channel4_raw[sample_count] = hrz_get_sample_from_buffer(spi_rx_buffer, 4);
  hrz_channel5_raw[sample_count] = hrz_get_sample_from_buffer(spi_rx_buffer, 5);
  hrz_channel6_raw[sample_count] = hrz_get_sample_from_buffer(spi_rx_buffer, 6);
  hrz_channel7_raw[sample_count] = hrz_get_sample_from_buffer(spi_rx_buffer, 7);
  hrz_channel8_raw[sample_count] = hrz_get_sample_from_buffer(spi_rx_buffer, 8);

  sample_count++;

  //Reset sample count when reaching buffer size
  if(sample_count >= HRZ_SAMPLES_PER_PACKET)
  {
    sample_count = 0;
    ble_packet_ready = true;
  }
}

/**
* @brief Function to filter all channels
*/
arm_status hrz_filter_data()
{
  arm_status error_code;
  error_code = hrz_ads1298_filter_data(hrz_channel1, hrz_filtered_channel1);
  error_code = hrz_ads1298_filter_data(hrz_channel2, hrz_filtered_channel2);
  error_code = hrz_ads1298_filter_data(hrz_channel3, hrz_filtered_channel3);
  error_code = hrz_ads1298_filter_data(hrz_channel4, hrz_filtered_channel4);
  error_code = hrz_ads1298_filter_data(hrz_channel5, hrz_filtered_channel5);
  error_code = hrz_ads1298_filter_data(hrz_channel6, hrz_filtered_channel6);
  error_code = hrz_ads1298_filter_data(hrz_channel7, hrz_filtered_channel7);
  error_code = hrz_ads1298_filter_data(hrz_channel8, hrz_filtered_channel8);
  return error_code;
}

/**
* @brief Function to send all channels over BLE
*/
void hrz_send_data_over_BLE()
{

  //Send samples over BLE
  hrz_send_ecg_channel(m_ecgs.ecg_channel_1_handles, (uint8_t *)hrz_channel1_raw);
  hrz_send_ecg_channel(m_ecgs.ecg_channel_2_handles, (uint8_t *)hrz_channel2_raw);
  hrz_send_ecg_channel(m_ecgs.ecg_channel_3_handles, (uint8_t *)hrz_channel3_raw);
  hrz_send_ecg_channel(m_ecgs.ecg_channel_4_handles, (uint8_t *)hrz_channel4_raw);
  hrz_send_ecg_channel(m_ecgs.ecg_channel_5_handles, (uint8_t *)hrz_channel5_raw);
  hrz_send_ecg_channel(m_ecgs.ecg_channel_6_handles, (uint8_t *)hrz_channel6_raw);
  hrz_send_ecg_channel(m_ecgs.ecg_channel_7_handles, (uint8_t *)hrz_channel7_raw);
  hrz_send_ecg_channel(m_ecgs.ecg_channel_8_handles, (uint8_t *)hrz_channel8_raw);
  ble_packet_ready = false;
}

/**
* @brief Function to send all filtered channels over BLE
*/
void hrz_send_filtered_data_over_BLE()
{
  //Send samples over BLE
  hrz_send_ecg_channel(m_ecgs.ecg_channel_1_handles, (uint8_t *)hrz_filtered_channel1);
  hrz_send_ecg_channel(m_ecgs.ecg_channel_2_handles, (uint8_t *)hrz_filtered_channel2);
  hrz_send_ecg_channel(m_ecgs.ecg_channel_3_handles, (uint8_t *)hrz_filtered_channel3);
  hrz_send_ecg_channel(m_ecgs.ecg_channel_4_handles, (uint8_t *)hrz_filtered_channel4);
  hrz_send_ecg_channel(m_ecgs.ecg_channel_5_handles, (uint8_t *)hrz_filtered_channel5);
  hrz_send_ecg_channel(m_ecgs.ecg_channel_6_handles, (uint8_t *)hrz_filtered_channel6);
  hrz_send_ecg_channel(m_ecgs.ecg_channel_7_handles, (uint8_t *)hrz_filtered_channel7);
  hrz_send_ecg_channel(m_ecgs.ecg_channel_8_handles, (uint8_t *)hrz_filtered_channel8);
  ble_packet_ready = false;
}

/**
* @brief Function to one channel data over BLE
*/
void hrz_send_ecg_channel(ble_gatts_char_handles_t handle, uint8_t * data)
{
  ret_code_t err_code;

  err_code = hrz_ecg_send(&m_ecgs, handle, data, HRZ_ECGS_MAX_BUFFER_SIZE);
  if (err_code == NRF_ERROR_RESOURCES) {
    buffer_is_free = false;
    while (buffer_is_free == false);
    err_code = hrz_ecg_send(&m_ecgs, handle, data, HRZ_ECGS_MAX_BUFFER_SIZE);
    NRF_LOG_WARNING("BLE buffer full, handle value: %d\r\n", handle.value_handle);
  }else{
    SEND_ERROR_CHECK(err_code);
  }
}
