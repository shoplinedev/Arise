window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/orderTracking/form/getFormFields.js'] = window.SLM['theme-shared/biz-com/orderTracking/form/getFormFields.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { emailValidator } = window['SLM']['theme-shared/biz-com/orderTracking/utils/index.js'];
  const formFields = {
    email(config = {}) {
      return {
        name: 'email',
        type: 'email',
        value: '',
        rules: [{
          message: t('customer.general.email_empty_hint'),
          required: true
        }, {
          message: t('customer.general.email_error_hint'),
          validator: value => emailValidator(value)
        }],
        ...config
      };
    },

    phone(config = {}) {
      return {
        name: 'phone',
        type: 'phone',
        value: '',
        dependencies: ['iso2'],
        rules: [{
          message: t('customer.general.phone_empty_message'),
          required: true
        }],
        ...config
      };
    },

    username(config = {}) {
      return {
        name: 'username',
        type: 'username',
        value: '',
        dependencies: ['iso2'],
        rules: [{
          message: t('customer.general.username_empty_hint'),
          required: true
        }],
        ...config
      };
    },

    verifycode(configs = {}) {
      return {
        name: 'verifycode',
        type: 'verifycode',
        value: '',
        rules: [{
          message: t('customer.general.enter_verification_code'),
          required: true
        }],
        ...configs
      };
    },

    orderId(configs = {}) {
      return {
        name: 'orderId',
        type: 'orderId',
        value: '',
        rules: [{
          message: t('general.order_tracking.orderId_error'),
          required: true
        }],
        ...configs
      };
    }

  };

  const getFormFieldsHelper = (types = []) => {
    return types.filter(type => !!type).map(item => {
      if (typeof item === 'string') {
        return formFields[item] && formFields[item]();
      }

      const {
        type,
        ...args
      } = item;
      return formFields[type](args);
    });
  };

  _exports.getFormFieldsHelper = getFormFieldsHelper;
  _exports.default = getFormFieldsHelper;
  return _exports;
}();