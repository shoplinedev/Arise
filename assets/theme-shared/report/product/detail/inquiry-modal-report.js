window.SLM = window.SLM || {};

window.SLM['theme-shared/report/product/detail/inquiry-modal-report.js'] = window.SLM['theme-shared/report/product/detail/inquiry-modal-report.js'] || function () {
  const _exports = {};
  const debounce = window['lodash']['debounce'];
  const get = window['lodash']['get'];
  const pageMapping = window['SLM']['theme-shared/utils/report/pageMapping.js'].default;
  const pageMap = window['SLM']['theme-shared/utils/report/page.js'].default;
  const getCurrencyCode = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'].default;
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];
  const alias = window.SL_State.get('templateAlias');
  const eventIdMap = {
    ProductsDetail: '60006253',
    Home: '60006252'
  };
  const unsafeInputMap = {
    email: 101,
    mobile: 110,
    message: 115,
    name: 102,
    region: 104
  };
  const inputMap = {
    email: 102,
    mobile: 105,
    message: 103,
    name: 104,
    region: 106
  };
  const unsafePage = pageMapping[alias];
  const page = pageMap[alias];
  const eventId = eventIdMap[alias];

  function hdReport(options) {
    window.HdSdk && window.HdSdk.shopTracker.collect({
      page,
      module: 119,
      ...options
    });
  }

  function unsafeHdReport(options) {
    window.HdSdk && window.HdSdk.shopTracker.report(eventId, {
      page: unsafePage,
      custom_component: '167',
      ...options
    });
  }

  function concatVal(obj) {
    return Object.entries(obj || {}).reduce((prev, cur) => {
      if (cur[1]) {
        return `${prev}${cur[0]}:${cur[1]}\n`;
      }

      return prev;
    }, '');
  }

  function leadReport({
    spu,
    sku,
    email,
    phone,
    message,
    name,
    region
  }) {
    const {
      title,
      spuSeq: spuId,
      sortationList
    } = spu || {};
    const {
      price,
      skuSeq: skuId
    } = sku || {};
    const currency = getCurrencyCode();
    const value = convertPrice(price);
    window.SL_EventBus.emit('global:thirdPartReport', {
      FBPixel: [['track', 'Lead', {
        content_name: title,
        content_ids: spuId,
        content_type: 'product_group',
        currency,
        value
      }]],
      GAAds: [['event', 'conversion', {
        value,
        currency
      }, 'SUBMIT-LEAD-FORM']],
      GARemarketing: [['event', 'generate_lead', {
        ecomm_prodid: window.SL_GetReportArg('GAR', 'sku_id', skuId),
        ecomm_pagetype: 'product',
        ecomm_totalvalue: value,
        currency,
        ecomm_category: get(sortationList, '[0].sortationId'),
        ecomm_pcat: get(sortationList, '[0].sortationName')
      }]],
      GAR: [['event', 'generate_lead', {
        currency,
        value,
        items: [{
          id: window.SL_GetReportArg('GAR', 'sku_id', skuId),
          google_business_vertical: 'retail'
        }]
      }]],
      GA: [['event', 'generate_lead', {
        value,
        currency
      }]],
      GA4: [['event', 'generate_lead', {
        value,
        currency
      }]]
    });
    const inputBoxVal = concatVal({
      Message: message,
      Name: name,
      'Country/Region': region
    });
    hdReport({
      component: 101,
      event_name: 'Lead',
      content_name: title,
      content_id: spuId,
      currency,
      value,
      input_box_val: inputBoxVal,
      user_data: {
        em: email,
        ph: phone
      }
    });
    unsafeHdReport({
      event_name: '145',
      product_id: spuId,
      product_name: title,
      currency,
      product_price: value,
      variantion_id: skuId,
      phone,
      email,
      input_box_val: inputBoxVal
    });
  }

  _exports.leadReport = leadReport;

  function cancelReport({
    spu,
    sku,
    email,
    phone,
    name,
    message,
    region
  }) {
    const {
      title,
      spuSeq: spuId
    } = spu || {};
    const {
      price,
      skuSeq: skuId
    } = sku || {};
    const value = convertPrice(price);
    const currency = getCurrencyCode();
    const inputBoxVal = concatVal({
      Message: message,
      Name: name,
      'Country/Region': region
    });
    hdReport({
      component: 107,
      action_type: 102,
      content_name: title,
      content_id: spuId,
      currency,
      value,
      input_box_val: inputBoxVal,
      user_data: {
        em: email,
        ph: phone
      }
    });
    unsafeHdReport({
      event_name: '146',
      product_id: spuId,
      product_name: title,
      currency,
      product_price: value,
      variantion_id: skuId,
      phone,
      email,
      input_box_val: inputBoxVal
    });
  }

  _exports.cancelReport = cancelReport;

  function viewReport() {
    hdReport({
      component: -999,
      action_type: 108
    });
    unsafeHdReport({
      event_name: '109'
    });
    unsafeHdReport({
      event_name: '120'
    });
  }

  _exports.viewReport = viewReport;

  function inputReport({
    name,
    value
  }) {
    hdReport({
      action_type: 103,
      component: inputMap[name],
      input_box_val: value
    });
    unsafeHdReport({
      event_name: '133',
      input_box: unsafeInputMap[name],
      input_box_val: value
    });
  }

  _exports.inputReport = inputReport;
  const debounceInput = {
    email: debounce(value => inputReport({
      value,
      name: 'email'
    }), 1000),
    mobile: debounce(value => inputReport({
      value,
      name: 'mobile'
    }), 1000),
    message: debounce(value => inputReport({
      value,
      name: 'message'
    }), 1000),
    name: debounce(value => inputReport({
      value,
      name: 'name'
    }), 1000),
    region: debounce(value => inputReport({
      value,
      name: 'region'
    }), 1000)
  };

  function listenInputChange({
    area
  }) {
    $(area).find('[sl-form-item-name]').on('input', 'input,textarea', function oninput() {
      const input = $(this);
      const formItem = input.parents('[sl-form-item-name]');
      const name = formItem.attr('sl-form-item-name');
      const value = input.val();
      debounceInput[name] && debounceInput[name](value);
    });
  }

  _exports.listenInputChange = listenInputChange;
  return _exports;
}();