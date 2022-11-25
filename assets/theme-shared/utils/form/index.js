window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/form/index.js'] = window.SLM['theme-shared/utils/form/index.js'] || function () {
  const _exports = {};
  const CustomForm = window['SLM']['theme-shared/utils/form/form.js'].default;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  class Form {
    static takeForm(fid) {
      if (this.formInstanceList[fid]) return this.formInstanceList[fid];
      this.formInstanceList[fid] = new CustomForm(fid, {
        onDestory: fid => {
          Reflect.deleteProperty(this.formInstanceList, fid);
        }
      });
      return this.formInstanceList[fid];
    }

  }

  _defineProperty(Form, 'formInstanceList', {});

  _exports.default = Form;
  return _exports;
}();