import { ApiCart as sl_cart_lib_api_cart_api_cart } from '@sl/cart/lib/api-cart';
import { initReductionCodeComponent as sl_cart_lib_reduction_code_index_init_reduction_code_component } from '@sl/cart/lib/ReductionCode/index';
import { createCartPageReductionCodeFactory as sl_cart_lib_reduction_code_services_index_create_cart_page_reduction_code_factory, ReductionCodeService as sl_cart_lib_reduction_code_services_index_reduction_code_service } from '@sl/cart/lib/ReductionCode/services/index';
import sl_cart_lib_utils_store from '@sl/cart/lib/utils/store';
import { initDetailModal as sl_cart_lib_summations_detail_modal_init_detail_modal, updateDetailModal as sl_cart_lib_summations_detail_modal_update_detail_modal } from '@sl/cart/lib/summations/detailModal';
import { servicesList as sl_cart_lib_config_reduction_code_service_services_list } from '@sl/cart/lib/config/reductionCode/service';
import '@sl/cart/lib/utils/cartData';
window['@sl/cart'] = {
  '/lib/api-cart': {
    'ApiCart': sl_cart_lib_api_cart_api_cart
  },
  '/lib/ReductionCode/index': {
    'initReductionCodeComponent': sl_cart_lib_reduction_code_index_init_reduction_code_component
  },
  '/lib/ReductionCode/services/index': {
    'createCartPageReductionCodeFactory': sl_cart_lib_reduction_code_services_index_create_cart_page_reduction_code_factory,
    'ReductionCodeService': sl_cart_lib_reduction_code_services_index_reduction_code_service
  },
  '/lib/utils/store': {
    'default': sl_cart_lib_utils_store
  },
  '/lib/summations/detailModal': {
    'initDetailModal': sl_cart_lib_summations_detail_modal_init_detail_modal,
    'updateDetailModal': sl_cart_lib_summations_detail_modal_update_detail_modal
  },
  '/lib/config/reductionCode/service': {
    'servicesList': sl_cart_lib_config_reduction_code_service_services_list
  }
};