window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/form/install.js'] = window.SLM['theme-shared/biz-com/customer/commons/form/install.js'] || function () {
  const _exports = {};
  const Username = window['SLM']['theme-shared/biz-com/customer/commons/form-item/username.js'].default;
  const Phone = window['SLM']['theme-shared/biz-com/customer/commons/form-item/phone.js'].default;
  const Password = window['SLM']['theme-shared/biz-com/customer/commons/form-item/password.js'].default;
  const Verifycode = window['SLM']['theme-shared/biz-com/customer/commons/form-item/verifycode.js'].default;
  const map = {
    phone: Phone,
    username: Username,
    password: Password,
    verifycode: Verifycode
  };

  _exports.default = (formInstance, fields, defaultFormValue = {}) => {
    const formItems = {};
    const initFields = fields.map(({
      type,
      name,
      value,
      dependencies,
      rules = [],
      on = {},
      ...args
    }) => {
      const Constructor = map[type];
      const dependenciesValue = dependencies && dependencies.reduce((values, key) => {
        values[key] = defaultFormValue[key];
        return values;
      }, {});

      if (Constructor) {
        const instance = new Constructor({
          name,
          form: formInstance,
          formId: formInstance.fid,
          value,
          on,
          ...args,
          ...dependenciesValue
        });

        if (defaultFormValue[name]) {
          $(formInstance.el).find(`input[name=${name}]`).val(defaultFormValue[name]);
        }

        const {
          rules: defaultRules = []
        } = instance && instance.install && instance.install() || {};
        formItems[name] = instance;
        return {
          name,
          value,
          rules: rules.concat(defaultRules)
        };
      }

      return {
        name,
        value,
        rules
      };
    });
    initFields.forEach(({
      name,
      value,
      rules
    }) => {
      formInstance.setRule(rules, name);

      if (value) {
        formInstance.setLocalsValue(name, value);
      }
    });
    formInstance.on('valuesChange', ({
      changedValue
    }) => {
      const keys = Object.keys(changedValue);
      const key = keys && keys[0];
      const subscriptField = fields.filter(item => item && item.watch && item.watch.includes(key)) || [];
      subscriptField && subscriptField.forEach(field => {
        const currentInstance = formItems[field && field.type];
        const $$watch = currentInstance && currentInstance.$$watch;

        if (typeof $$watch === 'function') {
          $$watch && $$watch.call(currentInstance, {
            name: key,
            value: changedValue[key]
          });
        } else if (typeof $$watch === 'object') {
          $$watch && $$watch[key] && $$watch[key].call(currentInstance, changedValue[key]);
        }
      });
    });
    return formItems;
  };

  return _exports;
}();