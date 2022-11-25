window.SLM = window.SLM || {};

window.SLM['product/utils/sku/skuFilter.js'] = window.SLM['product/utils/sku/skuFilter.js'] || function () {
  const _exports = {};
  const get = window['lodash']['get'];

  function getSkuComMap(skuList) {
    const validSkuMap = {};
    const invalidSkuMap = {};

    if (!skuList) {
      return {
        validSkuMap,
        invalidSkuMap
      };
    }

    skuList.forEach((sku) => {
      if (sku.skuAttributeIds) {
        const skuKey = sku.skuAttributeIds.sort((a, b) => (a.attributeWeight || 0) - (b.attributeWeight || 0)).map(item => `${item.id}:${item.valueId}`).join(';');

        if (!sku.available) {
          invalidSkuMap[skuKey] = { ...sku
          };
        } else {
          validSkuMap[skuKey] = {
            price: sku.price,
            stock: sku.stock,
            skuSeq: sku.skuSeq,
            spuSeq: sku.spuSeq
          };
        }
      }
    });
    return {
      validSkuMap,
      invalidSkuMap
    };
  }

  _exports.getSkuComMap = getSkuComMap;

  function getSku(selectSkuArr, skuList, sourceSkuList) {
    const skuKey = selectSkuArr.map(item => item).join(';');
    if (!skuKey) return null;
    const hitSku = sourceSkuList.find(item => item.skuSeq === get(skuList[skuKey], 'skuSeq'));
    return hitSku || null;
  }

  _exports.getSku = getSku;

  function transSkuSpecList(skuAttributeMap) {
    const resultArr = [];

    if (!skuAttributeMap) {
      return resultArr;
    }

    Object.entries(skuAttributeMap).sort(([, a], [, b]) => (a.attributeWeight || 0) - (b.attributeWeight || 0)).forEach(([nameId, item]) => {
      const specAttrListResult = [];
      Object.entries(item.skuAttributeValueMap).sort(([, a], [, b]) => (a.attributeValueWeight || 0) - (b.attributeValueWeight || 0)).forEach(([attrId, attr]) => {
        const id = `${nameId}:${attrId}`;
        const name = attr.defaultValue;
        const imgUrl = attr.imgUrl || '';
        specAttrListResult.push({
          id,
          name,
          imgUrl
        });
      });
      const skuSpecObj = {
        hidden: item.hidden,
        nameId,
        specName: item.defaultName,
        specAttrList: specAttrListResult,
        onlyShowAttrImg: specAttrListResult.every(item => item.imgUrl)
      };
      resultArr.push(skuSpecObj);
    });
    return resultArr;
  }

  _exports.transSkuSpecList = transSkuSpecList;

  function getAttrValue(specList, currentAttrId, index) {
    if (!Array.isArray(specList)) return '';

    if (specList[index] && Array.isArray(specList[index].specAttrList)) {
      return specList[index].specAttrList.find(item => item.id === currentAttrId) || null;
    }

    return null;
  }

  _exports.getAttrValue = getAttrValue;
  return _exports;
}();