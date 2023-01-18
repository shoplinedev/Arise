window.SLM = window.SLM || {};

window.SLM['product/commons/js/sku-trade/base-sku-trade.js'] = window.SLM['product/commons/js/sku-trade/base-sku-trade.js'] || function () {
  const _exports = {};
  const DataWatcher = window['SLM']['theme-shared/utils/sku/DataWatcher.js'].default;
  const get = window['lodash']['get'];
  const SkuUtil = window['SLM']['product/utils/sku/skuUtil.js'].default;
  const { getSku, getSkuComMap, transSkuSpecList, getAttrValue } = window['SLM']['product/utils/sku/skuFilter.js'];

  class BaseSkuTrade {
    constructor({
      sku,
      spu,
      initialSkuSeq,
      dataPool,
      modalContainer,
      root,
      domReady,
      onInit,
      onChange,
      onDestory,
      mixins
    }) {
      this.mixins = mixins;
      this.root = $(root);
      this.id = root.replace('#product-detail-sku-trade_', '');
      const quickViewModal = modalContainer ? modalContainer.find('.product-preview-modal-content') : null;
      const quickAddModal = modalContainer ? modalContainer.find('.quick-add-modal__container .mp-modal__body') : null;
      const isExistQuickViewModal = quickViewModal && quickViewModal.length > 0;
      this.targetContainer = isExistQuickViewModal ? quickViewModal : quickAddModal;

      if (dataPool) {
        this.dataPool = dataPool;
      } else {
        this.dataPool = new DataWatcher();
      }

      if (!this.dataPool.inited) {
        this.dataPool.sku = sku || {};
        this.dataPool.spu = spu || {};
        this.dataPool.attrArray = [];
        this.dataPool.currentSpecList = [];
        this.dataPool.skuType = '';
        this.dataPool.validSkuMap = {};
        this.dataPool.invalidSkuMap = {};
        this.dataPool.activeSku = null;
        this.dataPool.initialSkuSeq = initialSkuSeq;
      }

      this.onInit = onInit;
      this.onChange = onChange;
      this.onDestory = onDestory;
      this.init(domReady);
    }

    beforeInitDom() {
      if (Array.isArray(this.mixins)) {
        this.mixins.forEach(item => {
          if (item && item.beforeInitDom) {
            item.beforeInitDom.call(this, this);
          }
        });
      }
    }

    afterInitDom() {
      if (Array.isArray(this.mixins)) {
        this.mixins.forEach(item => {
          if (item && item.afterInitDom) {
            item.afterInitDom.call(this, this);
          }
        });
      }
    }

    beforeUpdate() {
      if (Array.isArray(this.mixins)) {
        this.mixins.forEach(item => {
          if (item && item.beforeUpdate) {
            item.beforeUpdate.call(this, this);
          }
        });
      }
    }

    afterUpdate() {
      if (Array.isArray(this.mixins)) {
        this.mixins.forEach(item => {
          if (item && item.afterUpdate) {
            item.afterUpdate.call(this, this);
          }
        });
      }
    }

    init(domReady) {
      if (!this.dataPool.inited) {
        this.dataPool.skuUtil = new SkuUtil();
        this.initAttrArray();
        this.initSkuComMap();
        this.initFirstChecked();
      }

      this.dataPool.watch(['currentSpecList'], () => {
        this.render();
      });
      this.beforeInitDom();

      if (domReady) {
        this.initDom();
      } else {
        this.createAndInitDom();
      }

      this.afterInitDom();
      this.render();
      this.dataPool.inited = true;
      window.Shopline.event.on('global:rerenderSku', ({
        sku,
        id
      }) => {
        if (id !== this.id) return;

        for (const skuItem of sku.skuList) {
          const hitIndex = this.dataPool.sku.skuList.findIndex(item => item.skuSeq === skuItem.skuSeq);

          if (hitIndex > -1) {
            this.dataPool.sku.skuList[hitIndex] = skuItem;
          }
        }

        this.dataPool.skuUtil.skuResult = {};
        this.initSkuComMap();
        this.render();

        if (this.dataPool.activeSku) {
          this.dataPool.activeSku = sku.skuList.find(item => {
            return item.skuSeq === this.dataPool.activeSku.skuSeq;
          });
        }

        window.Shopline.event.emit('Product::SkuUpdate', {
          activeSku: this.dataPool.activeSku,
          id,
          SkuTradeDataPool: this.dataPool
        });
      });

      try {
        this.onInit && this.onInit(this, this.dataPool.activeSku, this.root);
      } catch (e) {
        setTimeout(() => {
          throw e;
        });
      }
    }

    initSkuComMap() {
      const {
        validSkuMap,
        invalidSkuMap
      } = getSkuComMap(this.dataPool.sku.skuList);
      this.dataPool.validSkuMap = this.dataPool.skuUtil.initSku(validSkuMap);
      this.dataPool.invalidSkuMap = invalidSkuMap;
    }

    initAttrArray() {
      this.dataPool.attrArray = transSkuSpecList(this.dataPool.sku.skuAttributeMap);

      if (this.dataPool.attrArray.length) {
        this.dataPool.skuType = 'multi';
      } else {
        this.dataPool.skuType = 'single';
      }
    }

    isPreview() {
      return window.SL_State && window.SL_State.get('templateAlias') === 'PreviewProductsDetail';
    }

    initFirstChecked(allowNotAvailable) {
      if (this.dataPool.skuType === 'single') {
        [this.dataPool.activeSku] = this.dataPool.sku.skuList;
      } else {
        const {
          initialSkuSeq
        } = this.dataPool;

        if (initialSkuSeq) {
          const filterSkuList = this.dataPool.sku.skuList;
          const validSkuList = allowNotAvailable ? this.dataPool.sku.skuList : filterSkuList;

          if (validSkuList) {
            const hitSku = validSkuList.find(item => item.skuSeq === initialSkuSeq);

            if (hitSku) {
              this.dataPool.activeSku = hitSku;

              if (Array.isArray(hitSku.skuAttributeIds)) {
                this.dataPool.currentSpecList = hitSku.skuAttributeIds.map(item => `${item.id}:${item.valueId}`);
              }
            }
          }
        }

        this.dataPool.attrArray.forEach((spec, index) => {
          if (spec.hidden) {
            this.dataPool.currentSpecList[index] = spec.specAttrList[0].id;
          }
        });
      }
    }

    clearRoot() {
      if (this.root) {
        this.root.empty();
      }
    }

    getActiveSku() {
      if (this.dataPool.skuType === 'single') {
        return get(this, 'dataPool.sku.skuList[0]') || null;
      }

      if (this.dataPool.skuType === 'multi') {
        if (this.dataPool.currentSpecList.filter(Boolean).length === this.dataPool.attrArray.length) {
          return getSku(this.dataPool.currentSpecList, this.dataPool.validSkuMap, this.dataPool.sku.skuList) || getSku(this.dataPool.currentSpecList, this.dataPool.invalidSkuMap, this.dataPool.sku.skuList) || null;
        }
      }

      return null;
    }

    clickAttr(specIndex, attrIndex) {
      const item = get(this, `dataPool.attrArray[${specIndex}].specAttrList[${attrIndex}]`);
      this.dataPool.currentSpecList = this.dataPool.skuUtil.getActionSpecList(this.dataPool.currentSpecList, item, specIndex);
      const activeSku = this.getActiveSku();

      if (activeSku !== this.dataPool.activeSku) {
        this.dataPool.activeSku = activeSku;
      }

      try {
        this.onChange && this.onChange(activeSku);
      } catch (e) {
        setTimeout(() => {
          throw e;
        });
      }
    }

    getAttrValue(index) {
      return getAttrValue(this.dataPool.attrArray, this.dataPool.currentSpecList[index], index);
    }

    destory() {
      this.clearRoot();
      this.dataPool = null;
      this.root = null;
      this.onInit = null;
      this.onChange = null;
      this.onDestory && this.onDestory();
      this.onDestory = null;
    }

  }

  _exports.default = BaseSkuTrade;
  return _exports;
}();