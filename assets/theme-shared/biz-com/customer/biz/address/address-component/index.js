window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/address/address-component/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/address/address-component/index.js'] || function () {
  const _exports = {};
  const { createHost } = window['@sl/address-component'];
  const { FieldNameEnum } = window['@sl/address-component']['/domain-model'];
  const { createAdapter } = window['SLM']['theme-shared/biz-com/customer/biz/address/address-component/adapter.js'];
  const { createRenderer } = window['SLM']['theme-shared/biz-com/customer/biz/address/address-component/renderer.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const Form = window['SLM']['theme-shared/utils/form/index.js'].default;
  const customerAddressKeyMapper = {
    country: 'country',
    countryCode: 'countryCodeStr',
    province: 'province',
    provinceCode: 'provinceCode',
    city: 'city',
    cityCode: 'cityCode',
    district: 'district',
    districtCode: 'districtCode',
    name: 'contactName',
    firstName: 'firstName',
    lastName: 'lastName',
    address: 'addr',
    address2: 'addrTwo',
    company: 'company',
    postcode: 'zipCode',
    mobile: 'mobilePhone'
  };
  _exports.customerAddressKeyMapper = customerAddressKeyMapper;

  function createAddressComponent({
    rootId
  }) {
    const adapter = createAdapter();
    const initAddressTemplate = SL_State.get('customer_address_template');
    let initAddressInfo = SL_State.get('customer_edit_address');

    if ((initAddressInfo == null || Object.keys(initAddressInfo).length <= 0) && initAddressTemplate && initAddressTemplate.country !== 'DEFAULT') {
      initAddressInfo = {
        [customerAddressKeyMapper.countryCode]: initAddressTemplate.country
      };
    }

    const host = createHost({
      adapter,
      initState: {
        addressInfo: unmarshalAddressInfo(initAddressInfo)
      },
      initProps: {
        addressTemplateDecorator(model) {
          model.forceFLNameMode();
        },

        fieldLayoutGroupDecorator(factory) {
          const model = hasStringTemplateConfig() ? factory.takeGroupModelWithStringifyTemplate(getStringTemplate(factory.country)) : factory.takeGroupModel();
          model.prependGroup(FieldNameEnum.FirstName, FieldNameEnum.LastName);
          return model;
        }

      }
    });
    const renderer = createRenderer({
      host,
      rootId
    });
    return {
      host,
      renderer,

      async getAddressInfo() {
        const model = await host.exhaustModel();
        return marshalAddressInfo(model.addressInfo);
      },

      validate() {
        const form = Form.takeForm(rootId);
        return form.validateFields();
      }

    };
  }

  _exports.createAddressComponent = createAddressComponent;

  function unmarshalAddressInfo(customerInfo) {
    const mapper = {};
    Object.keys(customerAddressKeyMapper).forEach(k => {
      mapper[customerAddressKeyMapper[k]] = k;
    });
    const info = {};
    Object.keys(customerInfo || {}).forEach(key => {
      if (Reflect.has(mapper, key)) {
        info[mapper[key]] = customerInfo[key];
      }
    });
    return info;
  }

  function marshalAddressInfo(addressInfo) {
    const customerInfo = {};
    Object.entries(addressInfo).forEach(([key, value]) => {
      const formatKey = customerAddressKeyMapper[key];
      customerInfo[formatKey] = value;
    });
    return customerInfo;
  }

  function hasStringTemplateConfig() {
    const addressTemplate = SL_State && SL_State.get('customer_address_template');
    const config = addressTemplate && addressTemplate.stringAddressTemplateInfo;
    if (!config) return false;
    return !!config.StringTemplateMap && !!config.CountryCodeToStringTemplateMap;
  }

  function getStringTemplate(countryCode = '') {
    const addressTemplate = SL_State && SL_State.get('customer_address_template');
    const {
      StringTemplateMap,
      CountryCodeToStringTemplateMap
    } = addressTemplate && addressTemplate.stringAddressTemplateInfo || {};
    countryCode = countryCode.toUpperCase();
    const index = CountryCodeToStringTemplateMap[countryCode];

    if (typeof index === 'number' && index >= 0) {
      return StringTemplateMap[index];
    }

    return StringTemplateMap[0];
  }

  _exports.getStringTemplate = getStringTemplate;
  return _exports;
}();