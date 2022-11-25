window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/address/const/fields.js'] = window.SLM['theme-shared/biz-com/customer/biz/address/const/fields.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const addressInfo = SL_State.get('customer_edit_address') || {};
  const FIELDS = [{
    name: 'firstName',
    value: addressInfo.firstName || '',
    rules: []
  }, {
    name: 'lastName',
    value: addressInfo.lastName || '',
    rules: [{
      message: t('customer.address.edit_last_name_hint'),
      required: true
    }]
  }, {
    name: 'mobilePhone',
    value: addressInfo.mobilePhone || '',
    rules: [{
      required: true,
      message: t('customer.address.edit_phone_hint')
    }, {
      pattern: /^[+()\s-\d]{2,16}$/,
      message: t('customer.general.phone_number_error_message')
    }]
  }];
  _exports.FIELDS = FIELDS;
  const MAX_LENGTH_64 = 64;
  const MIN_LENGTH_2 = 2;
  const ruleConfig = {
    generalMax(max = MAX_LENGTH_64, props = {}) {
      return {
        validator: value => {
          return new Promise((resolve, reject) => {
            if (value.length <= max) {
              return resolve();
            }

            return reject();
          });
        },
        message: t('customer.address.common_max', {
          max
        }),
        ...props
      };
    },

    generalMin(min = MIN_LENGTH_2, props = {}) {
      return {
        validator: value => {
          return new Promise((resolve, reject) => {
            if (value.length >= min) {
              return resolve();
            }

            return reject();
          });
        },
        message: t('customer.address.common_min', {
          min
        }),
        ...props
      };
    }

  };
  const ADDRESS_RULES = {
    country: [ruleConfig.generalMax(), ruleConfig.generalMin()],
    province: [ruleConfig.generalMax(), ruleConfig.generalMin()],
    city: [ruleConfig.generalMax(), ruleConfig.generalMin()],
    district: [ruleConfig.generalMax(), ruleConfig.generalMin()],
    postcode: [ruleConfig.generalMax(10), ruleConfig.generalMin()],
    company: [ruleConfig.generalMax(255), ruleConfig.generalMin(1)],
    address: [ruleConfig.generalMax(255), ruleConfig.generalMin()],
    address2: [ruleConfig.generalMax(255), ruleConfig.generalMin()],
    firstName: [],
    lastName: [{
      message: t('customer.address.edit_last_name_hint'),
      required: true
    }],
    mobile: [{
      validator: value => {
        if (value && !/^[+()\s-\d]{2,16}$/.test(value)) {
          return Promise.reject(t('customer.general.phone_number_error_message'));
        }

        return Promise.resolve();
      }
    }]
  };
  _exports.ADDRESS_RULES = ADDRESS_RULES;
  const FIELD_ATTRS = {
    firstName: {
      maxlength: 128
    },
    lastName: {
      maxlength: 128
    },
    mobile: {
      maxlength: 25
    }
  };
  _exports.FIELD_ATTRS = FIELD_ATTRS;

  const getFieldAttrs = fieldName => {
    const attrs = FIELD_ATTRS[fieldName];

    if (attrs) {
      return Object.keys(attrs).reduce((attrStr, key) => {
        attrStr += `${key}=${attrs[key]} `;
        return attrStr;
      }, '');
    }

    return '';
  };

  _exports.getFieldAttrs = getFieldAttrs;
  return _exports;
}();