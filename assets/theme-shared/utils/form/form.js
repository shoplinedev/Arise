window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/form/form.js'] = window.SLM['theme-shared/utils/form/form.js'] || function () {
  const _exports = {};
  const { SL_EventEmitter } = window['SLM']['theme-shared/utils/event-bus.js'];
  const ValidateTrigger = {
    ONCHANGE: 'onChange',
    MANUAL: 'manual',
    ONBLUR: 'manual',
    ONNATIVECHANGE: 'onNativeChange'
  };
  _exports.ValidateTrigger = ValidateTrigger;

  const isPromiseFulfilledResult = result => {
    return result.status === 'fulfilled';
  };

  const formItemName = 'sl-form-item-name';
  const REQUIRED_SYMBOL = Symbol('required');

  class CustomForm {
    constructor(fid = '', {
      onDestory
    } = {
      onDestory: () => {}
    }) {
      this.fid = fid;
      this.onDestory = onDestory;
      this.formEntity = null;
      this.validateRecord = {};
      this.config = {
        validateTrigger: ValidateTrigger.MANUAL,
        requiredErrMsg: `这是必填字段!`,
        defaultErrMsg: '请输入合法的值',
        errContainerClss: 'errClass',
        validateWhenInit: false,
        emitChangeWhenInit: false
      };
      this.canValidate = false;
      this.canEmitChange = true;
      this.hadInit = false;
      this.el = document.querySelector(`#${fid}`);
      const eventBus = new SL_EventEmitter();
      this.eventBus = eventBus;
      this.on = this.eventBus.on.bind(eventBus);
      this.emit = this.eventBus.emit.bind(eventBus);
    }

    init(config) {
      if (this.hadInit) return false;

      try {
        this.initFormConfig(config);
        const formItems = this.el.querySelectorAll(`[${formItemName}]`);
        const {
          initialData,
          childrenProps
        } = this.calculatePropsAndInitialData(formItems);
        this.formEntity = {
          data: initialData,
          childrenProps,
          el: this.el
        };
        this.initEventListener(this.el);
        this.hadInit = true;
      } catch (e) {
        console.warn(`${this.fid} is not found, ${e}`);
      }
    }

    initFormConfig(config) {
      if (config) {
        Object.assign(this.config, config);
        if (config && config.validateWhenInit) this.canValidate = true;
        if (config && config.emitChangeWhenInit) this.canEmitChange = true;
      }
    }

    initEventListener(el) {
      el.addEventListener('input', e => this.handleFormInputEvent(e));
      const formItems = el.querySelectorAll(`[${formItemName}]`);
      formItems.forEach(el => {
        const inp = el.querySelector('input,textarea');

        if (inp) {
          inp.addEventListener('change', e => {
            if (this.config.validateTrigger === ValidateTrigger.ONNATIVECHANGE) {
              const target = e.target;
              const parentNode = this.recursionFindParent(target, formItemName);
              if (!parentNode) return;
              const targetName = parentNode.getAttribute(formItemName);
              this.validateFields([targetName]);
            }
          });
          inp.addEventListener('blur', e => {
            const target = e.target;
            const parentNode = this.recursionFindParent(target, formItemName);
            if (!parentNode) return;
            const targetName = parentNode.getAttribute(formItemName);

            if (this.config.validateTrigger === ValidateTrigger.ONBLUR) {
              this.validateFields([targetName]);
            }

            if (this.config.blurSucHandler || this.config.blurErrHandler) {
              this.validateFields([targetName], false).then(res => {
                if (!res) return;

                if (res.pass) {
                  this.config && this.config.blurSucHandler && this.config.blurSucHandler(targetName, target.value, this.formEntity.data);
                } else {
                  this.config && this.config.blurErrHandler && this.config.blurErrHandler(res);
                }
              });
            }
          });
        }
      });
    }

    handleFormInputEvent(e) {
      if (!this.fid) return;
      const target = e.target;
      const parentNode = this.recursionFindParent(target, formItemName);
      if (!parentNode) return;
      const targetName = parentNode.getAttribute(formItemName);

      if (targetName) {
        this.canValidate = true;

        if (this.isRadioOrCheckbox(target, ['checkbox'])) {
          this.setLocalsValue(targetName, target.checked);
        } else {
          this.setLocalsValue(targetName, target.value);
        }
      }
    }

    recursionFindParent(el, attr) {
      const parent = el.parentElement;
      if (!parent) return null;
      const val = parent.getAttribute(attr);
      if (val) return parent;
      return this.recursionFindParent(parent, attr);
    }

    calculatePropsAndInitialData(nodeList) {
      if (nodeList.length === 0) return {
        initialData: {},
        childrenProps: []
      };
      let childrenProps = [];
      const initialData = {};

      try {
        childrenProps = Array.from(nodeList).map(formItem => {
          const name = formItem.getAttribute(formItemName);
          const child = formItem.querySelector('input,select,textarea');
          const attrs = child.getAttributeNames();
          const childAttrs = attrs.reduce((acc, curAttr) => {
            if (curAttr === 'value') {
              initialData[name] = child.getAttribute(curAttr) || child.value;
            }

            return { ...acc,
              [curAttr]: child.getAttribute(curAttr)
            };
          }, {});
          return Object.assign(childAttrs, {
            name
          });
        });
      } catch (e) {
        console.error(`${this.fid} calculate form item error: `, e);
      }

      return {
        initialData,
        childrenProps
      };
    }

    setValues(fields) {
      fields.forEach(({
        name,
        value,
        rules
      }) => {
        this.setDomValue(this.el, name, value);
        this.setRule(rules, name);
        this.setLocalsValue(name, value);
      });
    }

    setRule(rules, name) {
      const target = this.formEntity.childrenProps.find(prop => prop.name === name);
      if (target) target.rules = rules || [];
    }

    isRadioOrCheckbox(target, nodeTypeList = ['radio', 'checkbox']) {
      const nodeType = target && target.getAttribute('type');
      if (!nodeType) return false;
      return target.nodeName.toLocaleLowerCase() === 'input' && nodeTypeList.includes(nodeType);
    }

    setDomValue(parent, name, value) {
      const targets = parent.querySelectorAll(`[${formItemName}=${name}] input,[${formItemName}=${name}] select,[${formItemName}=${name}] textarea`);

      if (targets.length) {
        targets.forEach(target => {
          if (this.isRadioOrCheckbox(target)) {
            if (target.value === value) {
              target.click();
            }
          } else if (!target.name || target.name === name) {
            target.value = value !== null && value !== undefined ? value : '';
          }
        });
      }
    }

    setLocalsValue(name, value) {
      const changedValue = {
        [name]: value
      };
      const allValues = Object.assign(this.formEntity && this.formEntity.data, changedValue);
      let validateResultPro = null;

      if (this.canValidate && this.config.validateTrigger === ValidateTrigger.ONCHANGE) {
        validateResultPro = this.validateFields([name]);
      }

      if (this.canEmitChange) {
        this.eventBus.emit('valuesChange', {
          changedValue,
          allValues,
          validateResult: validateResultPro
        });
      }
    }

    flattenRulesList(list) {
      return list.reduce((acc, field) => {
        const subRules = field && field.rules.map(rule => ({ ...rule,
          name: field.name
        })) || [];
        return [...acc, ...subRules];
      }, []);
    }

    getErrTmpStr(messages, className = '') {
      return messages.reduce((acc, message) => acc += `<div class="${className}" style="margin-top: 6px;color: #f04949;font-size: 12px;line-height: 1.4;">${message}</div>`, '');
    }

    getErrListContainer(id, formItemContainer) {
      const target = this.el.querySelector(`[${id}]`);
      if (target) return target;
      const div = document.createElement('div');
      div.setAttribute(id, '1');
      formItemContainer.appendChild(div);
      return div;
    }

    setErrMsgIntoDom(errFields) {
      errFields.forEach(({
        name,
        messages
      }) => {
        const errTmp = this.getErrTmpStr(messages, this.config.errContainerClss);
        const id = `cf-${this.fid}-${name}`;
        const target = this.el.querySelector(`[${formItemName}=${name}]`);

        if (!Array.from(target.classList).includes(this.config.errContainerClss)) {
          target.classList.add(this.config.errContainerClss);
        }

        const container = this.getErrListContainer(id, target);
        container.innerHTML = errTmp;
      });
    }

    removeErrList(fields) {
      fields.forEach(name => {
        const target = this.el.querySelector(`[cf-${this.fid}-${name}]`);
        if (target) target.remove();

        if (this.config.errContainerClss) {
          const formItemWrapper = this.el.querySelector(`[${formItemName}=${name}]`);
          formItemWrapper && formItemWrapper.classList && formItemWrapper.classList.remove && formItemWrapper.classList.remove(this.config.errContainerClss);
        }
      });
    }

    setErrFields(target, errFields, name, errMsg) {
      if (!target) {
        errFields.push({
          name,
          messages: [errMsg]
        });
      } else {
        target.messages.push(errMsg);
      }
    }

    setFields(fields, callback, needEmit = true, needValidate = false) {
      try {
        this.canValidate = needValidate;
        this.canEmitChange = needEmit;
        this.setValues(fields);
        callback && callback();
      } catch (e) {
        console.warn(`${this.fid} set fields fail,`, e);
      } finally {
        this.canEmitChange = true;
      }
    }

    setRules(rulesField) {
      rulesField.forEach(({
        name,
        rules
      }) => {
        this.setRule(rules, name);
      });
    }

    getFieldValue(fieldName) {
      this.init();
      return this.formEntity.data[fieldName];
    }

    getFieldsValue() {
      this.init();
      return this.formEntity && this.formEntity.data;
    }

    async getLegalFieldsValue() {
      const result = await this.validateFields([], false);
      if (result && result.pass) return this.formEntity && this.formEntity.data;
      const unPassFields = result && result.errFields && result.errFields.map(field => field.name);
      return Object.entries(this.formEntity.data).reduce((acc, [k, v]) => {
        if (unPassFields.includes(k)) return acc;
        return { ...acc,
          [k]: v
        };
      }, {});
    }

    async validateFields(fields, handleError = true) {
      if (!this.formEntity) return null;
      const {
        childrenProps
      } = this.formEntity;
      const data = JSON.parse(JSON.stringify(this.formEntity.data));
      const needValidateFieldsName = fields && fields.length ? fields : Object.keys(this.formEntity.data);
      const needValidatefields = childrenProps.filter(prop => prop.rules && prop.rules.length > 0 && needValidateFieldsName && needValidateFieldsName.includes(prop.name));
      const validateList = [];
      const needValidateRules = this.flattenRulesList(needValidatefields);

      try {
        needValidateRules.forEach(rule => {
          const {
            required,
            validator,
            pattern,
            name
          } = rule || {};
          const value = data[name];
          this.validateRecord[name] = value;

          if (value) {
            if (validator) {
              validateList.push(validator(value, data));
            } else if (pattern) {
              validateList.push(new RegExp(pattern).test(value));
            } else {
              validateList.push(true);
            }
          } else if (validator && required) {
            validateList.push(validator(value, data));
          } else {
            validateList.push(required ? REQUIRED_SYMBOL : true);
          }
        });
      } catch (e) {
        console.warn(`${this.fid} calculate validator list fail:`, e);
      }

      const validateResult = await Promise.allSettled(validateList);
      const errFields = [];
      const successFields = new Set();

      for (let i = 0; i < validateResult.length; i++) {
        const {
          name,
          message
        } = needValidateRules[i];
        if (this.validateRecord[name] !== data[name]) return null;
        const result = validateResult[i];
        const target = errFields.find(err => err.name === name);

        if (isPromiseFulfilledResult(result)) {
          if (result.value === REQUIRED_SYMBOL) {
            const requiredErrMsg = needValidateRules[i] && needValidateRules[i].message || this.config.requiredErrMsg;

            if (!target) {
              errFields.push({
                name,
                messages: [requiredErrMsg]
              });
            }
          } else if (result.value === false) {
            const errMsg = message || this.config.defaultErrMsg;
            this.setErrFields(target, errFields, name, errMsg);
          } else {
            successFields.add(name);
          }
        } else {
          const errMsg = message || result.reason || this.config.defaultErrMsg;
          this.setErrFields(target, errFields, name, errMsg);
        }
      }

      if (handleError) {
        this.removeErrList(successFields);
        this.setErrMsgIntoDom(errFields);

        if (errFields.length) {
          this.config.validateTrigger = this.config.validateTriggerAfterValidationFailed || ValidateTrigger.ONCHANGE;
        }
      }

      return errFields.length ? {
        pass: false,
        errFields
      } : {
        pass: true
      };
    }

    resetErrStatus(fields = Object.keys(this.formEntity.data)) {
      this.removeErrList(fields);
    }

    destroy() {
      this.el.removeEventListener('input', this.handleFormInputEvent);
      this.hadInit = false;
      this.el = null;
      this.eventBus = null;
      this.formEntity = null;
      this.onDestory && this.onDestory(this.fid);
      this.fid = null;
    }

  }

  _exports.default = CustomForm;
  return _exports;
}();