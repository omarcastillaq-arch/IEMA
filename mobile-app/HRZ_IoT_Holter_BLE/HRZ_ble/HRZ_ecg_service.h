/* Copyright (c) 2017 Horizon Medical SAS, Cartagena - Colombia. All Rights Reserved.
 */

#ifndef HRZ_ECG_SERVICE_H
#define HRZ_ECG_SERVICE_H

#include <stdint.h>
#include <stdbool.h>
#include "ble.h"
#include "ble_srv_common.h"
#include "nrf_ble_gatt.h"
#include "HRZ_ADS1298.h"

#ifdef __cplusplus
extern "C" {
#endif

#define BLE_UUID_ECG_SERVICE                0x805B  /**< ECG service UUID. */
#define BLE_UUID_ECG_STATUS                 0x8170  /**< ECG Status characteristic UUID */
#define BLE_UUID_ECG_CHANNEL_1              0x8171  /**< ECG Channel 1 characteristic UUID */
#define BLE_UUID_ECG_CHANNEL_2              0x8172  /**< ECG Channel 2 characteristic UUID */
#define BLE_UUID_ECG_CHANNEL_3              0x8173  /**< ECG Channel 3 characteristic UUID */
#define BLE_UUID_ECG_CHANNEL_4              0x8174  /**< ECG Channel 4 characteristic UUID */
#define BLE_UUID_ECG_CHANNEL_5              0x8175  /**< ECG Channel 5 characteristic UUID */
#define BLE_UUID_ECG_CHANNEL_6              0x8176  /**< ECG Channel 6 characteristic UUID */
#define BLE_UUID_ECG_CHANNEL_7              0x8177  /**< ECG Channel 7 characteristic UUID */
#define BLE_UUID_ECG_CHANNEL_8              0x8178  /**< ECG Channel 8 characteristic UUID */
#define HRZ_CHANNEL_LEN                     3       /**< Number of bytes per sample per channel. 3 for non filtered data, 4 for filtered */
#define HRZ_SAMPLES_PER_PACKET              28      /**< Number of samples per BLE packet. Max 28 without crashing */
#define HRZ_ECGS_MAX_BUFFER_SIZE            (HRZ_CHANNEL_LEN * HRZ_SAMPLES_PER_PACKET)      /**< Total number of bytes per channel per BLE send. Usually 84 */


/**@brief ECG Service event type. */
typedef enum
{
    HRZ_ECGS_EVT_NOTIFICATION_ENABLED,                   /**< ECG Samples value notification enabled event. */
    HRZ_ECGS_EVT_NOTIFICATION_DISABLED                   /**< ECG Samples value notification disabled event. */
} hrz_ecgs_evt_type_t;

/**@brief ECG Service event. */
typedef struct
{
    hrz_ecgs_evt_type_t evt_type;                        /**< Type of event. */
} hrz_ecgs_evt_t;

// Forward declaration of the hrz_ecgs_t type.
typedef struct hrz_ecgs_s hrz_ecgs_t;

/**@brief ECG Service event handler type. */
typedef void (*hrz_ecgs_evt_handler_t) (hrz_ecgs_t * p_ecgs, hrz_ecgs_evt_t * p_evt);

/**@brief ECG Service init structure. This contains all options and data needed for
 *        initialization of the service. */
typedef struct
{
    hrz_ecgs_evt_handler_t       evt_handler;                                          /**< Event handler to be called for handling events in the ECG Service. */
    ble_srv_cccd_security_mode_t ecgs_attr_md;                                      /**< Initial security level for ECG Service measurement attribute */
    ble_srv_cccd_security_mode_t ecg_channel_1_attr_md;                                      /**< Initial security level for ECG Service measurement attribute */
} hrz_ecgs_init_t;

/**@brief ECG Service structure. This contains various status information for the service. */
struct hrz_ecgs_s
{
    hrz_ecgs_evt_handler_t       evt_handler;                                          /**< Event handler to be called for handling events in the ECG Service. */
    uint16_t                     service_handle;                                       /**< Handle of ECG Service (as provided by the BLE stack). */
    ble_gatts_char_handles_t     ecg_status_handles;                                          /**< Handles related to the ECG Samples characteristic. */
    ble_gatts_char_handles_t     ecg_channel_1_handles;                                /**< Handles related to ECG channel 1 characteristic. */
    ble_gatts_char_handles_t     ecg_channel_2_handles;                                /**< Handles related to ECG channel 2 characteristic. */
    ble_gatts_char_handles_t     ecg_channel_3_handles;                                /**< Handles related to ECG channel 3 characteristic. */
    ble_gatts_char_handles_t     ecg_channel_4_handles;                                /**< Handles related to ECG channel 4 characteristic. */
    ble_gatts_char_handles_t     ecg_channel_5_handles;                                /**< Handles related to ECG channel 5 characteristic. */
    ble_gatts_char_handles_t     ecg_channel_6_handles;                                /**< Handles related to ECG channel 6 characteristic. */
    ble_gatts_char_handles_t     ecg_channel_7_handles;                                /**< Handles related to ECG channel 7 characteristic. */
    ble_gatts_char_handles_t     ecg_channel_8_handles;                                /**< Handles related to ECG channel 8 characteristic. */
    uint16_t                     conn_handle;                                          /**< Handle of the current connection (as provided by the BLE stack, is BLE_CONN_HANDLE_INVALID if not in a connection). */
};

/**@brief ECG sample structure from ADS1298 */
typedef struct
{
    uint8_t c0 : 4;
    uint8_t loff_stap;
    uint8_t loff_stan;
    uint8_t gpio : 4;
} hrz_ads1298_channel_t;

/**@brief Function for initializing the ECG Service.
 *
 * @param[out]  p_ecgs      ECG Service structure. This structure will have to be supplied by
 *                          the application. It will be initialized by this function, and will later
 *                          be used to identify this particular service instance.
 * @param[in]   p_ecgs_init Information needed to initialize the service.
 *
 * @return      NRF_SUCCESS on successful initialization of service, otherwise an error code.
 */
uint32_t hrz_ecgs_init(hrz_ecgs_t * p_ecgs, const hrz_ecgs_init_t * p_ecgs_init);

/**@brief Function for handling the application's BLE Stack events.
 *
 * @details Handles all events from the BLE stack of interest to the ECG Service.
 *
 * @param[in]   p_ecgs     ECG Service structure.
 * @param[in]   p_ble_evt  Event received from the BLE stack.
 */
void hrz_ecgs_on_ble_evt(hrz_ecgs_t * p_ecgs, ble_evt_t * p_ble_evt);
uint32_t hrz_ecg_char_add(hrz_ecgs_t * p_ecgs,
                          ble_gatts_char_handles_t * char_handle,
                          uint16_t ble_uuid_value);
void on_connect(hrz_ecgs_t * p_ecgs, ble_evt_t * p_ble_evt);
void on_disconnect(hrz_ecgs_t * p_ecgs, ble_evt_t * p_ble_evt);
void on_write(hrz_ecgs_t * p_ecgs, ble_evt_t * p_ble_evt);
uint32_t hrz_ecg_send(hrz_ecgs_t * p_ecgs,
                              ble_gatts_char_handles_t char_handles,
                              uint8_t * data,
                              uint16_t len);
#ifdef __cplusplus
}
#endif

#endif // HRZ_ECG_SERVICE_H
