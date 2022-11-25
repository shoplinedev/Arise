window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/products/checkedEvent/index.js'] = window.SLM['theme-shared/components/hbs/products/checkedEvent/index.js'] || function () {
  const _exports = {};
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];

  class EventAddCheckoutEnd {
    constructor(name) {
      this.index = 0;
      this.name = 'event_add_checkout_by_le';

      if (name) {
        this.name = name;
      }
    }

    static getUuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }

    getCheckoutKey() {
      this.index += 1;
      return `${this.name}_${EventAddCheckoutEnd.getUuid()}_${this.index}`;
    }

    getUuidAndMonitorCheckoutEnd(eventName, callback) {
      const key = this.getCheckoutKey();
      window.SL_EventBus && window.SL_EventBus.on(eventName, data => {
        const {
          event_status,
          stage
        } = nullishCoalescingOperator(data.data, {});

        if (stage === key) {
          callback(event_status);
        }
      });
      return key;
    }

  }

  const checkoutEnd = new EventAddCheckoutEnd();
  _exports.checkoutEnd = checkoutEnd;
  return _exports;
}();