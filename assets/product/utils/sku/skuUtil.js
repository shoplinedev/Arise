window.SLM = window.SLM || {};

window.SLM['product/utils/sku/skuUtil.js'] = window.SLM['product/utils/sku/skuUtil.js'] || function () {
  const _exports = {};

  class SkuUtil {
    constructor() {
      this.skuResult = {};
    }

    initSku(data) {
      if (!data) return {};
      const skuKeys = Object.keys(data);
      skuKeys.forEach(skuKey => {
        const sku = data[skuKey];
        const skuKeyAttrs = skuKey.split(';');
        const combArr = SkuUtil.combInFlags(skuKeyAttrs);
        combArr.forEach(item => {
          this.skuOptionAttrResult(item, sku);
        });
      });
      return this.skuResult;
    }

    static combInFlags(skuKeyAttrs) {
      if (!skuKeyAttrs || skuKeyAttrs.length <= 0) return [];
      const len = skuKeyAttrs.length;
      const result = [];

      for (let n = 1; n <= len; n++) {
        const flags = SkuUtil.getCombFlags(len, n);
        flags.forEach(flag => {
          const comb = [];
          flag.forEach((item, index) => {
            if (item === 1) {
              comb.push(skuKeyAttrs[index]);
            }
          });
          result.push(comb);
        });
      }

      return result;
    }

    static getCombFlags(m, n) {
      const flagArrs = [];
      const flagArr = [];
      let isEnd = false;

      for (let i = 0; i < m; i += 1) {
        flagArr[i] = i < n ? 1 : 0;
      }

      flagArrs.push(flagArr.concat());

      if (n && m > n) {
        while (!isEnd) {
          let leftCnt = 0;

          for (let i = 0; i < m - 1; i++) {
            if (flagArr[i] === 1 && flagArr[i + 1] === 0) {
              for (let j = 0; j < i; j++) {
                flagArr[j] = j < leftCnt ? 1 : 0;
              }

              flagArr[i] = 0;
              flagArr[i + 1] = 1;
              const aTmp = flagArr.concat();
              flagArrs.push(aTmp);

              if (aTmp.slice(-n).join('').indexOf('0') === -1) {
                isEnd = true;
              }

              break;
            }

            flagArr[i] === 1 && leftCnt++;
          }
        }
      }

      return flagArrs;
    }

    skuOptionAttrResult(combArrItem, sku) {
      const key = combArrItem.join(';');

      if (this.skuResult[key]) {
        const prevPrice = this.skuResult[key].price;
        const curPrice = [sku.price];
        this.skuResult[key] = { ...sku,
          price: prevPrice.concat(curPrice).sort(),
          stock: this.skuResult[key].stock + sku.stock
        };
      } else {
        this.skuResult[key] = { ...sku,
          price: [sku.price]
        };
      }
    }

    static filterValidArr(arr) {
      return arr.filter(item => item).map(item => item.id);
    }

    checkSpecAttrDisabled(selectSpecList, id, index) {
      if (!this.skuResult[id]) return true;
      const newSelectList = selectSpecList.map(item => item && {
        id: item
      });
      newSelectList[index] = {
        id: '',
        ...newSelectList[index]
      };

      if (Number(newSelectList[index].id) !== Number(id)) {
        newSelectList[index].id = id;
        const hitAttrKey = SkuUtil.filterValidArr(newSelectList).join(';');
        return !this.skuResult[hitAttrKey];
      }
    }

    checkSpecAttrActive(selectSpecList, name) {
      const newSelectList = selectSpecList.map(item => ({
        id: item
      }));
      return SkuUtil.filterValidArr(newSelectList).indexOf(name) !== -1 || SkuUtil.filterValidArr(newSelectList).indexOf(Number(name)) !== -1;
    }

    getActionSpecList(selectSpecList, item, index) {
      if (selectSpecList[index] && selectSpecList[index] === item.id) {
        selectSpecList[index] = null;
      } else {
        selectSpecList[index] = item.id;
      }

      if (selectSpecList.length) {
        return selectSpecList.slice();
      }

      return [];
    }

    getPrice(selectSpecList) {
      const skukey = SkuUtil.filterValidArr(selectSpecList).join(';');
      const hitSpecObj = this.skuResult[skukey];
      if (!hitSpecObj) return null;
      const priceArr = hitSpecObj.price;
      const maxPrice = Math.max(...priceArr);
      const minPrice = Math.min(...priceArr);
      return {
        minPrice,
        maxPrice
      };
    }

    getStock(selectSpecList) {
      const skukey = SkuUtil.filterValidArr(selectSpecList).join(';');
      const hitSpecObj = this.skuResult[skukey];
      if (!hitSpecObj) return null;
      return hitSpecObj.stock;
    }

  }

  _exports.default = SkuUtil;
  return _exports;
}();