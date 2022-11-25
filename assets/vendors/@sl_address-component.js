import { createHost as sl_address_component_create_host, distinctUntil as sl_address_component_distinct_until } from '@sl/address-component';
import { FieldNameEnum as sl_address_component_domain_model_field_name_enum, FieldInteractionEnum as sl_address_component_domain_model_field_interaction_enum } from '@sl/address-component/domain-model';
window['@sl/address-component'] = {
  'createHost': sl_address_component_create_host,
  'distinctUntil': sl_address_component_distinct_until,
  '/domain-model': {
    'FieldNameEnum': sl_address_component_domain_model_field_name_enum,
    'FieldInteractionEnum': sl_address_component_domain_model_field_interaction_enum
  }
};