window.SLM = window.SLM || {};

window.SLM['cart/script/components/trade-checkbox/index.js'] = window.SLM['cart/script/components/trade-checkbox/index.js'] || function () {
  const _exports = {};
  const { get_func } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const TradeEventBus = window['SLM']['cart/script/utils/event-bus/index.js'].default;

  const changeStyleByCheckBoxStatus = (status, parentEle) => {
    if (status) {
      get_func(parentEle, 'classList.add').exec('trade_checkout_checkbox-checked');
    } else {
      get_func(parentEle, 'classList.remove').exec('trade_checkout_checkbox-checked');
    }
  };

  const handleShowTipCheckboxClick = (event, parentEle, ele) => {
    const isChecked = ele.checked;
    const eleId = ele.getAttribute('id');
    changeStyleByCheckBoxStatus(isChecked, parentEle);

    if (eleId) {
      TradeEventBus.emit(`trade:checkbox-${eleId}`, isChecked);
    }

    const evt = document.createEvent('HTMLEvents');
    evt.initEvent('input', true, true);
    const target = document.getElementById(eleId);
    if (event.target === target) return;

    if (target) {
      target.checked = ele.checked;
      target.dispatchEvent(evt);
    }
  };

  const handleWrapperClick = (event, parentEle, inputEle) => {
    if (event.target !== inputEle) {
      inputEle.checked = !inputEle.checked;
    }

    handleShowTipCheckboxClick(event, parentEle, inputEle);
  };

  const bindListenerToWrapper = (wrapper, parentEle, inputEle) => {
    wrapper.addEventListener('click', event => {
      handleWrapperClick(event, parentEle, inputEle);
    });
  };

  const bindListener = ele => {
    const wrapperEle = ele.parentElement;
    const hasWrapper = get_func(wrapperEle, 'classList.contains').exec('trade_checkout_checkbox_wrapper');
    const inputEle = get_func(ele, 'getElementsByClassName').exec('trade_checkout_checkbox-input')[0];

    if (hasWrapper) {
      bindListenerToWrapper(wrapperEle, ele, inputEle);
    } else {
      inputEle.addEventListener('click', event => {
        handleShowTipCheckboxClick(event, ele, inputEle);
      });
    }
  };

  const updateCheckBoxStatus = (status, parentEle) => {
    Array.from(parentEle).forEach(ele => {
      changeStyleByCheckBoxStatus(status, ele);
      const inputEle = get_func(ele, 'getElementsByClassName').exec('trade_checkout_checkbox-input')[0];
      inputEle.checked = status;
    });
  };

  _exports.updateCheckBoxStatus = updateCheckBoxStatus;

  const initTradeCheckbox = () => {
    const eleList = document.getElementsByClassName('trade_checkout_checkbox');
    Array.from(eleList).forEach(ele => {
      bindListener(ele);
    });
  };

  _exports.default = initTradeCheckbox;
  return _exports;
}();