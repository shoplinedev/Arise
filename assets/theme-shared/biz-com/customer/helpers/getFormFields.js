window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/helpers/getFormFields.js'] = window.SLM['theme-shared/biz-com/customer/helpers/getFormFields.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { MEMBER_PASSWORD_PATTERN } = window['SLM']['theme-shared/biz-com/customer/constant/pattern.js'];
  const { emailValidator } = window['SLM']['theme-shared/biz-com/customer/helpers/pattern.js'];
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

    password() {
      return {
        name: 'password',
        type: 'password',
        value: '',
        rules: [{
          message: t('customer.general.password_empty_hint'),
          required: true
        }, {
          message: t('customer.general.set_password'),
          pattern: MEMBER_PASSWORD_PATTERN
        }]
      };
    },

    loginPassword() {
      return {
        name: 'password',
        type: 'password',
        value: '',
        rules: [{
          message: t('customer.general.password_empty_hint'),
          required: true
        }, {
          message: t('unvisiable.customer.error_message_1001'),
          pattern: MEMBER_PASSWORD_PATTERN
        }]
      };
    },

    repeatPassword() {
      return {
        name: 'repeatPassword',
        type: 'password',
        value: '',
        rules: [{
          message: t('customer.general.send_verification_code_hint'),
          required: true
        }, {
          message: t('customer.general.set_password'),
          pattern: MEMBER_PASSWORD_PATTERN
        }, {
          validator: (v, record) => {
            if (!MEMBER_PASSWORD_PATTERN.test(v)) {
              return true;
            }

            return record.password === record.repeatPassword;
          },
          message: t('customer.general.repeat_passport_error')
        }]
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
    }

  };

  const getAccountFieldType = type => {
    const typeToFormFieldType = {
      member: 'username',
      mobile: 'phone'
    };
    return typeToFormFieldType[type] || type;
  };

  _exports.getAccountFieldType = getAccountFieldType;

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