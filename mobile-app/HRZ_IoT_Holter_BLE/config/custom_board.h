/* Copyright (c) 2017 Horizon Medical SAS, Cartagena - Colombia.
 * All Rights Reserved.
 */

#ifndef BOARD_CUSTOM_H
#define BOARD_CUSTOM_H

#ifdef __cplusplus
extern "C" {
#endif

#include "nrf_gpio.h"

// Definitions for HRZ IoT Holter board
#define LEDS_NUMBER    1

#define LED_START      7
#define LED_1          7

#define LEDS_ACTIVE_STATE 1

#define LEDS_INV_MASK  LEDS_MASK

#define LEDS_LIST { LED_1 }

#define BSP_LED_0      LED_1

#define BUTTONS_NUMBER 1

#define BUTTON_START   6
#define BUTTON_1       6
#define BUTTON_PULL    NRF_GPIO_PIN_PULLUP

#define BUTTONS_ACTIVE_STATE 0

#define BUTTONS_LIST { BUTTON_1 }

#define BSP_BUTTON_0   BUTTON_1

//UART interface
#define RX_PIN_NUMBER  29
#define TX_PIN_NUMBER  30
#define HWFC           false

//SD Card SPI interface
#define SPIM0_SCK_PIN   28  // SPI clock GPIO pin number.
#define SPIM0_MOSI_PIN  26  // SPI Master Out Slave In GPIO pin number.
#define SPIM0_MISO_PIN  27  // SPI Master In Slave Out GPIO pin number.
#define SPIM0_SS_PIN    25  // SPI Slave Select GPIO pin number.

#define SDCARD_SPI_INSTANCE  0
#define SDCARD_SPI_SCK_PIN   SPIM0_SCK_PIN    // SPI clock GPIO pin number.
#define SDCARD_SPI_MOSI_PIN  SPIM0_MOSI_PIN   // SPI Master Out Slave In GPIO pin number.
#define SDCARD_SPI_MISO_PIN  SPIM0_MISO_PIN   // SPI Master In Slave Out GPIO pin number.
#define SDCARD_SPI_SS_PIN    SPIM0_SS_PIN     // SPI Slave Select GPIO pin number.

//ADS1298 SPI interface
#define SPIM1_SCK_PIN   12   // SPI clock GPIO pin number.
#define SPIM1_MOSI_PIN  17   // SPI Master Out Slave In GPIO pin number.
#define SPIM1_MISO_PIN  11   // SPI Master In Slave Out GPIO pin number.
#define SPIM1_SS_PIN    13   // SPI Slave Select GPIO pin number.

#define ADS1298_SPI_INSTANCE  1
#define ADS1298_SPI_SCK_PIN   SPIM1_SCK_PIN    // SPI clock GPIO pin number.
#define ADS1298_SPI_MOSI_PIN  SPIM1_MOSI_PIN   // SPI Master Out Slave In GPIO pin number.
#define ADS1298_SPI_MISO_PIN  SPIM1_MISO_PIN   // SPI Master In Slave Out GPIO pin number.
#define ADS1298_SPI_SS_PIN    SPIM1_SS_PIN     // SPI Slave Select GPIO pin number.

#define ADS1298_DRDY  18      // ADS1298 data ready interrupt pin.
#define ADS1298_PWDN  16      // ADS1298 power down pin.
#define ADS1298_RESET 15      // ADS1298 reset pin.
#define ADS1298_START 14      // ADS1298 start pin.

// Low frequency clock source to be used by the SoftDevice
#define NRF_CLOCK_LFCLKSRC      {.source        = NRF_CLOCK_LF_SRC_XTAL,            \
                                 .rc_ctiv       = 0,                                \
                                 .rc_temp_ctiv  = 0,                                \
                                 .xtal_accuracy = NRF_CLOCK_LF_XTAL_ACCURACY_20_PPM}

#ifdef __cplusplus
}
#endif

#endif // BOARD_CUSTOM_H
