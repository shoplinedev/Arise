window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/productRecently/fetchTemplate.js'] = window.SLM['theme-shared/components/hbs/productRecently/fetchTemplate.js'] || function () {
  const _exports = {};
  const axios = window['axios']['default'];
  const qs = window['query-string']['default'];
  const getCurrencyCode = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'].default;
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];
  const { BaseReport } = window['SLM']['theme-shared/report/common/baseReport.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const http = axios.create({
    baseURL: '/leproxy',
    timeout: 30e3,
    withCredentials: true,

    paramsSerializer(params) {
      return qs.stringify(params);
    }

  });

  async function getProductsInfo(excludeProductIds, productIds) {
    const recentlyProductIds = nullishCoalescingOperator(productIds, window.localStorage.getItem('history_browse_products'));
    const realRecentlyProductIds = recentlyProductIds && recentlyProductIds.split(',').filter(item => {
      if (excludeProductIds && excludeProductIds.length > 0) {
        return excludeProductIds.indexOf(item) === -1;
      }

      return item;
    });

    if (!realRecentlyProductIds || !realRecentlyProductIds.join(',')) {
      return [];
    }

    const {
      data: {
        data
      }
    } = await http.get('/api/product/detail/info/batch/query', {
      params: {
        productIdStr: realRecentlyProductIds.join(',')
      }
    });
    const sortProductInfoVoList = recentlyProductIds.split(',').map(item => {
      const hitProduct = data && data.productInfoVoList.find(_item => _item.spuSeq === item);
      if (hitProduct) return hitProduct;
      return null;
    });
    return sortProductInfoVoList.filter(item => !!item);
  }

  _exports.getProductsInfo = getProductsInfo;

  async function fetchRecentlySection({
    sectionName = 'product/detail/recently-viewed-products',
    excludeProductIds,
    productIds,
    context,
    mode = ''
  }) {
    const productInfoVoList = await getProductsInfo(excludeProductIds, productIds);
    let query = {
      sectionId: sectionName,
      context: {
        historyBrowseProducts: productInfoVoList,
        ...context
      }
    };
    let queryPath = '/page/section';

    if (mode === 'SINGLE') {
      query = {
        data: query
      };
      query.mode = mode;
      queryPath = `/page${SL_State.get('request.uri.url') || window.location.pathname + window.location.search}`;
    }

    const {
      data
    } = await http.post(queryPath, query);
    const html = mode === 'SINGLE' ? data && data.html : data;
    return nullishCoalescingOperator(html, '');
  }

  _exports.fetchRecentlySection = fetchRecentlySection;

  function initRecentlyReport(wrapperSelector, mountDom) {
    const report = new BaseReport();
    report.view({
      selector: wrapperSelector,
      customParams: {
        module: 108,
        component: -999
      }
    });
    const recentlyItemCls = `.__sl-custom-track-product-recently-viewed-item`;
    const itemList = mountDom.querySelectorAll(`${recentlyItemCls}`);

    if (itemList && itemList.length > 0) {
      report.view({
        targetList: itemList,
        customParams: target => {
          const {
            id: spuId
          } = target.dataset;
          return {
            module: 108,
            component: 101,
            history_product_id: spuId
          };
        }
      });
      $('body').on('click', `${recentlyItemCls}`, function () {
        const content_ids = $(this).attr('data-id');
        const sku_id = $(this).attr('data-sku-id');
        const content_name = $(this).attr('data-name');
        const currency = getCurrencyCode();
        const value = $(this).attr('data-price');
        const position = Number($(`${recentlyItemCls}`).index($(this))) + 1;
        const customParams = {
          content_ids,
          sku_id,
          content_name,
          currency,
          value: convertPrice(value),
          position
        };
        report.selectContent({
          customParams
        });
      });
    }
  }

  async function initProductRecentlyList({
    selector,
    sectionName,
    excludeProductIds,
    productIds,
    context,
    mode
  }) {
    const data = await fetchRecentlySection({
      sectionName,
      excludeProductIds,
      productIds,
      context,
      mode
    });
    const mountDom = document.querySelector(selector);

    if (mountDom) {
      mountDom.innerHTML = data;
      initRecentlyReport(selector, mountDom);
      window.lozadObserver && window.lozadObserver.observe && window.lozadObserver.observe();
    } else {
      console.error('请添加有效的最近浏览商品模块挂载点');
    }

    return data;
  }

  _exports.initProductRecentlyList = initProductRecentlyList;
  return _exports;
}();