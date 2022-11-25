window.SLM = window.SLM || {};

window.SLM['cart/script/domain/model/cartVerifyItem.js'] = window.SLM['cart/script/domain/model/cartVerifyItem.js'] || function () {
  const _exports = {};
  const cartChangeItemModel = window['SLM']['theme-shared/biz-com/trade/optimize-modal/cartChangeItem.js'].default;
  const cartItemModel = window['SLM']['cart/script/domain/model/cartItem.js'].default;
  const productVerifyTypeVO = window['SLM']['cart/script/domain/vo/productVerifyType.js'].default;

  function makeVerifyList(cartItemList, checkList) {
    const checkItemMap = (checkList || []).reduce((result, item) => {
      result[`${cartChangeItemModel.getGroupId(item)}-${cartChangeItemModel.getSkuId(item)}`] = item;
      return result;
    }, {});
    const results = [];
    (cartItemList || []).forEach(item => {
      if (item) {
        const changeItem = checkItemMap[`${cartItemModel.getGroupId(item)}-${cartItemModel.getSkuId(item)}`];
        results.push({
          verifyType: cartChangeItemModel.getVerifyType(changeItem),
          cartItem: item,
          cartChangeItem: changeItem
        });
      }
    });
    return results;
  }

  function isVerifyFailed(list) {
    if (!Array.isArray(list)) return false;
    if (list.length <= 0) return false;
    return list.find(item => {
      return productVerifyTypeVO.hasError(item);
    });
  }

  function filterFailedList(list) {
    if (!Array.isArray(list)) return [];
    if (list.length <= 0) return [];
    return list.filter(item => {
      return productVerifyTypeVO.hasError(item);
    });
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

  _exports.default = {
    makeVerifyList,
    isVerifyFailed,
    filterFailedList,
    getVerifiedCartItemList
  };
  return _exports;
}();