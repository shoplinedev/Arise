window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/js/input.js'] = window.SLM['theme-shared/components/hbs/shared/js/input.js'] || function () {
  const _exports = {};

  const createDomHtml = (option = {}) => {
    const domHtml = `
    <div>
        ${option}
        <input type="input">
    </div>`;
    return domHtml;
  };

  const defaultOption = {
    ele: null,
    type: 'input',
    width: '100%'
  };

  class SLInput {
    constructor(option = {}) {
      this.$dom = null;
      this.option = { ...defaultOption,
        ...option
      };
      this.init();
    }

    init() {
      this.initDom();
    }

    initDom() {
      const domHtml = createDomHtml();
      this.$dom = $(domHtml);

      if (this.option.ele) {
        $(ele).append(this.$dom);
      }
    }

  }

  _exports.SLInput = SLInput;
  return _exports;
}();