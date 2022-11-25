window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/trade/optimize-modal/skuFilter.js'] = window.SLM['theme-shared/biz-com/trade/optimize-modal/skuFilter.js'] || function () {
  const _exports = {};
  const { StatusEnum } = window['SLM']['theme-shared/biz-com/trade/optimize-modal/constant.js'];

  function getSkuFilter(list) {
    const limitList = [];
    const filterList = [];
    list.forEach(sku => {
      if (sku.productStatus !== StatusEnum.normal && sku.productStatus !== StatusEnum.user_limit) {
        filterList.push(sku);
      } else if (sku.productStatus === StatusEnum.user_limit) {
        limitList.push(sku);
      }
    });
    return {
      limitList,
      filterList
    };
  }

  function getVerifiedCartItemList(list) {
    if (!list || list.length <= 0) return [];
    return list.map(verifyItem => {
      const {
        cartItem,
        cartChangeItem
      } = verifyItem;
      const {
        errorInfo
      } = cartChangeItem || {};

      if (!errorInfo) {
        return { ...cartItem
        };
      }

      const {
        targetNum
      } = errorInfo;

      if (targetNum > 0) {
        return { ...cartItem,
          num: targetNum
        };
      }

      return null;
    }).filter(v => !!v);
  }

  _exports.getSkuFilter = getSkuFilter;
  _exports.getVerifiedCartItemList = getVerifiedCartItemList;
  return _exports;
}();