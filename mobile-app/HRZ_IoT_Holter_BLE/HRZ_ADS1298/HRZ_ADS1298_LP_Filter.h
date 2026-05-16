/* Copyright (c) 2018 Horizon Medical SAS, Cartagena - Colombia. All Rights Reserved.
 */

#ifndef HRZ_LP_FILTER
#define HRZ_LP_FILTER

#ifdef __cplusplus
extern "C" {
#endif

#include "nrf.h"
#include "arm_math.h"

arm_status hrz_ads1298_filter_data(q31_t *inputF32, q31_t *outputF32);

#ifdef __cplusplus
}
#endif

#endif // HRZ_LP_FILTER
