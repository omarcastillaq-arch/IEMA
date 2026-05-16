/* Copyright (c) 2017 Horizon Medical SAS, Cartagena - Colombia.
 * All Rights Reserved.
 */

#ifndef HRZ_ADS1298_H
#define HRZ_ADS1298_H

#ifdef __cplusplus
extern "C" {
#endif

#include "custom_board.h"
#include "nrf_drv_spi.h"
#include "nrf_drv_gpiote.h"
#include "HRZ_ADS1298_LP_Filter.h"

#define ADS1298_SELECT()    nrf_gpio_pin_clear(ADS1298_SPI_SS_PIN)
#define ADS1298_DESELECT()  nrf_gpio_pin_set(ADS1298_SPI_SS_PIN)
#define ADS1298_SPI_BUFFER_SIZE 27  //3 Status bytes + 24 bytes for channels = 216 SCLKs (Datasheet page 60) = 27 bytes

//ADS1298 SPI Commands, datasheet p61
#define ADS1298_WAKEUPC  0x02
#define ADS1298_STANDBYC 0x04
#define ADS1298_RESETC   0x06
#define ADS1298_STARTC   0x08
#define ADS1298_STOPC    0x0A
#define ADS1298_RDATACC  0x10
#define ADS1298_SDATACC  0x11
#define ADS1298_RDATAC   0x12
//Read/write nnnnn registers starting at address rrrrr.
//nnnnn = number of registers to be read/written – 1
//First byte = 001rrrrr, second byte = 000nnnnn.
#define ADS1298_RREGC    0x20
//First byte = 010rrrrr, second byte = 000nnnnn.
#define ADS1298_WREGC    0x40

/**@brief Macro for calling error handler function if there is an error while
 * sending channel data over BLE.
 *
 * @param[in] ERR_CODE Error code supplied to the error handler.
 */
#define SEND_ERROR_CHECK(ERR_CODE)                                  \
    do                                                              \
    {                                                               \
        const uint32_t LOCAL_ERR_CODE = (ERR_CODE);                 \
        if (LOCAL_ERR_CODE == NRF_ERROR_RESOURCES) {                \
          NRF_LOG_ERROR("Buffer full\r\n");                         \
        }                                                           \
        else if ((LOCAL_ERR_CODE != NRF_SUCCESS) &&                 \
              (LOCAL_ERR_CODE != NRF_ERROR_INVALID_STATE) &&        \
              (LOCAL_ERR_CODE != BLE_ERROR_GATTS_SYS_ATTR_MISSING)  \
            )                                                       \
          {                                                         \
              NRF_LOG_ERROR("Error code: %d\r\n", LOCAL_ERR_CODE);  \
              APP_ERROR_HANDLER(LOCAL_ERR_CODE);                    \
          }                                                         \
    } while (0)

/**@brief SPI Bus Data Output for the ADS1298 (Eight Channels) */
typedef struct __attribute__((packed))
{
    uint32_t status : 24;
    uint32_t channel1 : 24;
    uint32_t channel2 : 24;
    uint32_t channel3 : 24;
    uint32_t channel4 : 24;
    uint32_t channel5 : 24;
    uint32_t channel6 : 24;
    uint32_t channel7 : 24;
    uint32_t channel8 : 24;
} hrz_ads1298_data_t;

/**@brief Channel data structure (3 bytes) */
typedef struct
{
  uint8_t b1;
  uint8_t b2;
  uint8_t b3;
} hrz_channel_data_t;

static volatile bool spi_xfer_done;                     /**< SPI completed the transfer. */
static const nrf_drv_spi_t ads1298_spi = NRF_DRV_SPI_INSTANCE(ADS1298_SPI_INSTANCE);  /**< SPI instance. */
extern bool ads1298_data_ready; /**< Received interrupt from ADS1928 indicating that data is available */
extern bool ble_packet_ready;

void hrz_ads1298_spi_init();
void hrz_ads1298_spi_event_handler(nrf_drv_spi_evt_t const * p_event, void * p_context);
void hrz_ads1298_int_init(void);
void hrz_start_ads1298(void);
void hrz_stop_ads1298(void);
void hrz_ads1298_int_pin_handler(nrf_drv_gpiote_pin_t pin, nrf_gpiote_polarity_t action);
void hrz_ads1298_init(void);
void hrz_ads1298_spi_txrx(uint8_t * m_tx_buf, uint8_t m_tx_length, uint8_t m_rx_length);
void hrz_get_ads1298_data();
arm_status hrz_filter_data();
void hrz_send_data_over_BLE();
void hrz_send_filtered_data_over_BLE();
void hrz_send_ecg_channel();

#ifdef __cplusplus
}
#endif

#endif // HRZ_ADS1298_H
