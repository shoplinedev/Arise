window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/trade/optimize-modal/index.js'] = window.SLM['theme-shared/biz-com/trade/optimize-modal/index.js'] || function () {
  const _exports = {};
  const previewImage = window['@yy/sl-pod-preview-image']['default'];
  const get = window['lodash']['get'];
  const optimizeContent = window['SLM']['theme-shared/biz-com/trade/optimize-modal/content.js'].default;
  const TradeModalWithHtml = window['SLM']['theme-shared/biz-com/trade/optimize-modal/base.js'].default;
  const { getSkuFilter } = window['SLM']['theme-shared/biz-com/trade/optimize-modal/skuFilter.js'];
  const { unmarshalFromCartVerifyList } = window['SLM']['theme-shared/biz-com/trade/optimize-modal/skuInfo.js'];
  const { prefixer } = window['SLM']['theme-shared/biz-com/trade/optimize-modal/tool.js'];
  const { sourceEnum, productSignEid, productTypeMap } = window['SLM']['theme-shared/biz-com/trade/optimize-modal/constant.js'];
  const { hidooRp } = window['SLM']['theme-shared/utils/tradeReport/hdReport.js'];
  const { pageMap } = window['SLM']['theme-shared/utils/tradeReport/const.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const currencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { redirectTo } = window['SLM']['theme-shared/utils/url.js'];

  const setHID = () => {
    const templateAlias = window.Shopline.uri.alias;
    const cid = templateAlias === 'Cart' ? pageMap.Cart : pageMap.MiniCart;
    return cid;
  };

  const ComponentType = {
    part: 101,
    all: 102,
    backToCart: 103,
    continue: 104
  };
  const componentView = '120';
  const customComponent = {
    part: '171',
    all: '174',
    backToCart: '172',
    continue: '173'
  };
  const ActionType = {
    click: 102,
    view: 108
  };
  const CART_PAGE = 106;
  const CART_MODULE = 123;

  class OptimizeModal {
    constructor(config) {
      this.modalInstance = null;
      this.isMobile = SL_State.get('request.is_mobile');
      this.callbackMap = {};
      this.$content = config && config.content || $('<div class="sl-sku-filter-modal"></div>');
      this.initModal();
      this.cid = setHID();
      this.isB2B = false;
      this.moreInfoV1 = {};
      this.moreInfoV2 = {};
      this.getCartId();
    }

    initModal() {
      const modalContent = {
        maskClosable: false,
        closable: false,
        id: 'checkout-sku-mp-modal',
        bodyClassName: this.isMobile ? '' : 'trade-sku-filter-modal-body'
      };
      this.modalInstance = new TradeModalWithHtml(modalContent);
      this.modalInstance.init();
    }

    initOptimize({
      source,
      verifyList,
      isPaypal,
      activeCartItemList,
      callback,
      isB2B
    }) {
      this.isB2B = isB2B;
      this.createOptimize(source, verifyList, activeCartItemList, callback, isPaypal);
    }

    createOptimize(source, verifyList, activeCartItemList, callback, isPaypal = false) {
      const {
        skuList,
        productLimit
      } = unmarshalFromCartVerifyList(verifyList);
      const len = activeCartItemList && activeCartItemList.length || 0;
      const {
        limitList,
        filterList
      } = getSkuFilter(skuList);
      this.collectMoreInfo({
        limitList,
        filterList
      });
      const $content = $('<div class="sl-sku-filter-modal"></div>');
      const {
        btnClass: btnClassList,
        modal
      } = optimizeContent({
        effectList: filterList,
        limitList,
        len,
        productLimit,
        isPaypal,
        isMobile: this.isMobile
      });
      $content.html(modal);
      this.modalInstance.setContent($content);

      if (len <= 0) {
        this.modalInstance.$modal.find('.trade-modal-container').addClass('trade-modal-container-empty');
      } else {
        this.modalInstance.$modal.find('.trade-modal-container').addClass('trade-modal-container-product');
      }

      this.showModal();
      const isEmp = len <= 0;
      const custom_component = isEmp ? customComponent.all : customComponent.part;
      const component = isEmp ? ComponentType.all : ComponentType.part;
      this.reportSign({
        event_name: componentView,
        custom_component,
        action_type: ActionType.view,
        component
      });

      try {
        hidooRp.event({
          event_name: 'inventory_shortage',
          custom_component: 'continue'
        }, this.cid);
      } catch (e) {}

      this.eventCallback(source, btnClassList, callback);
    }

    getCartId() {
      const that = this;
      window.Shopline && window.Shopline.event.emit('Cart::GetCartId', {
        onSuccess(res) {
          if (res && res.success) {
            that.cartId = res.data;
          }
        }

      });
    }

    collectMoreInfo({
      limitList,
      filterList
    }) {
      if (!this.isB2B) {
        return;
      }

      const contentIds = new Set();
      const variantion_id = [];
      const product_price = [];
      const productNameSet = new Set();
      const signTypeSet = new Set();
      let value = 0;
      let quantity = 0;
      const productType = new Set();
      const list = limitList && limitList.length > 0 ? limitList : filterList;
      list.forEach(product => {
        const {
          productPrice,
          productNum,
          productMarkList,
          productSeq,
          productSku,
          productName,
          businessType
        } = product;
        value += productPrice * productNum;
        product_price.push(currencyUtil.formatNumber(productPrice));
        quantity += productNum;
        contentIds.add(productSeq);
        variantion_id.push(productSku);
        productNameSet.add(productName);

        if (productTypeMap[businessType]) {
          productType.add(productTypeMap[businessType]);
        }

        if (!productMarkList) {
          signTypeSet.add('101');
        } else {
          productMarkList.forEach(mark => {
            signTypeSet.add(productSignEid[mark]);
          });
        }
      });
      const moreInfoV1 = {
        content_ids: [...contentIds.values()],
        product_name: [...productNameSet.values()],
        variantion_id,
        quantity,
        cart_id: this.cartId,
        product_type: [...productType.values()],
        product_price,
        product_mark_list: [...signTypeSet.values()]
      };
      const moreInfoV2 = {
        currency: SL_State.get('currencyCode'),
        value: currencyUtil.formatNumber(value),
        num_items: quantity,
        content_ids: [...contentIds.values()],
        variantion_id,
        cart_id: this.cartId,
        product_mark_list: [...signTypeSet.values()]
      };
      this.moreInfoV1 = moreInfoV1;
      this.moreInfoV2 = moreInfoV2;
    }

    reportSign({
      event_name,
      custom_component,
      action_type,
      component
    }) {
      if (!this.isB2B) {
        return;
      }

      hidooRp.event({ ...this.moreInfoV1,
        event_name,
        custom_component
      }, this.cid);
      window.HdSdk && window.HdSdk.shopTracker.collect({ ...this.moreInfoV2,
        page: CART_PAGE,
        module: CART_MODULE,
        component,
        action_type
      });
    }

    hideModal() {
      this.modalInstance.hide();
    }

    showModal() {
      this.modalInstance.show();
    }

    eventCallback(source, btnClassList, callback) {
      switch (source) {
        case sourceEnum.CHECKOUT:
          this.initBtnEvent(btnClassList, {
            'btn-continue': $target => {
              callback && callback($target);
            },
            'btn-back': () => {
              window.location.href = redirectTo('/cart');
              return false;
            }
          });
          break;

        default:
          this.initBtnEvent(btnClassList, {
            'btn-continue': async $target => {
              this.reportSign({
                event_name: 'click_component',
                custom_component: customComponent.continue,
                action_type: ActionType.click,
                component: ComponentType.continue
              });

              try {
                const id = this.cid;
                hidooRp.event({
                  event_name: 'click_component',
                  custom_component: 'continue'
                }, id);
              } catch (e) {}

              callback && (await callback($target));
              this.hideModal();
              return this;
            },
            'btn-back': () => {
              this.reportSign({
                event_name: 'click_component',
                custom_component: customComponent.backToCart,
                action_type: ActionType.click,
                component: ComponentType.backToCart
              });

              try {
                const id = this.cid;
                hidooRp.event({
                  event_name: 'click_component',
                  custom_component: 'back'
                }, id);
              } catch (e) {}

              window.location.href = redirectTo('/cart');
              return false;
            },
            'btn-limit': () => {
              this.reportSign({
                event_name: 'click_component',
                custom_component: customComponent.backToCart,
                action_type: ActionType.click,
                component: ComponentType.backToCart
              });

              try {
                const id = this.cid;
                hidooRp.event({
                  event_name: 'click_component',
                  custom_component: 'back'
                }, id);
              } catch (e) {}

              window.location.href = redirectTo('/cart');
              return false;
            }
          });
      }
    }

    bindEvent(className, callback) {
      const btn = $(`.${prefixer(className)}`);
      btn && btn.on('click', e => {
        if (typeof callback === 'function') {
          if (callback(e.target) === false) {
            return;
          }
        }

        this.hideModal();
      });
    }

    initBtnEvent(btnClassList, cbMap) {
      btnClassList && btnClassList.forEach(className => {
        this.bindEvent(className, cbMap[className]);
      });
      const previewBtn = $(`.preview_btn`);
      previewBtn && previewBtn.on('click', e => {
        const list = get(e, 'target.dataset.list', undefined);
        const urls = JSON.parse(list) || [];
        if (urls && urls.length) previewImage({
          urls
        });
      });
    }

  }

  _exports.default = OptimizeModal;
  return _exports;
}();