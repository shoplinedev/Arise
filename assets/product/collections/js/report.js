window.SLM = window.SLM || {};

window.SLM['product/collections/js/report.js'] = window.SLM['product/collections/js/report.js'] || function () {
  const _exports = {};
  const { collectObserver } = window['SLM']['theme-shared/utils/report/index.js'];
  const ProductItemReport = window['SLM']['theme-shared/report/product/product-item.js'].default;
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const getCurrencyCode = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'].default;
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];
  const hdReport = new ProductItemReport();
  const eventid = '60006260';
  const productItemClassName = '__sl-custom-track-product-list-item';
  const productItemSelector = `.${productItemClassName}`;
  const productMenuClassName = '__sl-custom-track-product-menu';
  const productMenuSelector = `.${productMenuClassName}`;
  const productMenuItemClassName = '__sl-custom-track-product-menu-item';
  const productMenuItemSelector = `.${productMenuItemClassName}`;

  const _productList = SL_State.get('products.list');

  const productList = _productList !== undefined ? _productList : null;

  const _productSortation = SL_State.get('productSortation');

  const productSortation = _productSortation !== undefined ? _productSortation : null;

  if (productList) {
    hdReport.itemListView({
      productsInfo: {
        productSortation,
        productList
      }
    });
    productList.forEach((product, index) => {
      hdReport.itemView({
        baseParams: {
          module: 109,
          component: 101,
          action_type: 101
        },
        productInfo: { ...product,
          index
        }
      });
    });
  }

  const report = function (event_id, value) {
    if (window.HdSdk && window.HdSdk.shopTracker && window.HdSdk.shopTracker.report) {
      window.HdSdk.shopTracker.report(event_id, value);
    }
  };

  window.SL_EventBus.on('global:hdReport:expose', target => {
    const $target = $(target);

    if ($target.hasClass(productItemClassName)) {
      const product_id = $target.data('id');
      const product_name = $target.data('name');
      const product_price = convertPrice($target.data('price'));
      const position = $target.data('index') + 1;
      const status = $target.data('status') ? 'soldout' : 'selling';
      report(eventid, {
        event_name: 'product_view',
        product_id,
        product_name,
        currency: getCurrencyCode(),
        product_price,
        position,
        status
      });
    } else if ($target.hasClass(productMenuClassName)) {
      report(eventid, {
        page: 'product_list',
        event_name: 'component_view',
        custom_component: 'product_menu'
      });
      report(eventid, {
        event_name: 'menu_view',
        product_menu: ($target.data('all-show-sortation-ids') || '').split(', ')
      });
    }
  });
  collectObserver({
    selector: productItemSelector
  });
  collectObserver({
    selector: productMenuSelector
  });
  const sortBy = {
    1: 'default',
    2: 'default',
    3: 'newestToOldest',
    4: 'priceLowToHigh',
    5: 'priceHighToLow'
  };
  $(document.body).on('click', productMenuSelector, function () {
    report(eventid, {
      event_name: 'click_component',
      page: 'product_list',
      custom_component: 'product_menu'
    });
  }).on('click', productMenuItemSelector, function () {
    report(eventid, {
      event_name: 'menu_click',
      product_menu: [$(this).data('sortation-id')]
    });
  }).on('change', '#collection-sort', function () {
    report(eventid, {
      event_name: 'sort_click',
      sort_by: sortBy[$(this).val()] || sortBy[1]
    });
  });
  window.SL_EventBus.emit('global:hdReport:exit', [eventid]);
  return _exports;
}();