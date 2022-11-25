window.SLM = window.SLM || {};

window.SLM['product/detail/js/discount-coupon/index.js'] = window.SLM['product/detail/js/discount-coupon/index.js'] || function () {
  const _exports = {};
  const { SL_EventBus } = window['SLM']['theme-shared/utils/event-bus.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const request = window['SLM']['theme-shared/utils/request.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { nullishCoalescingOperator, get_func, get } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const { convertFormat } = window['SLM']['theme-shared/utils/newCurrency/index.js'];
  const Hiido = window['SLM']['theme-shared/report/hiido/index.js'].default;
  const dayjs = window['dayjs']['default'];
  const Drawer = window['SLM']['sales/js/drawer/Drawer.js'].default;
  const effectFc = window['SLM']['commons/utils/effectFc.js'].default;
  const isMobile = window['SLM']['commons/utils/isMobile.js'].default;
  const Toast = window['SLM']['commons/components/toast/index.js'].default;
  const nc = nullishCoalescingOperator;
  const hd = new Hiido({
    page: 105
  });
  const {
    spu
  } = nc(SL_State.get('product'), {});
  const {
    discountCodeActivityList
  } = nc(SL_State.get('productActivity'), {});
  const vars = {
    containerIdSel: '.sales__discountCouponBanner-container-hook',
    tagsSel: '.sales__discountCouponBanner-couponItem-hook',
    modalSel: '#salesCouponModalHook',
    drawerId: 'salesDiscountCoupon_DiscountDrawer',
    modalShowClassName: 'sales-coupon-modal__container--show',
    couponsSel: '.sales-discount-coupon-hook',
    applyClass: 'sales-discount-coupon--apply',
    btnSel: '.sales-discount-coupon-card-btn-hook',
    onlyOneContainerSel: '.sales__discountCouponOnlyOne-container-hook',
    onlyOneClickSel: '.sales__discountCouponOnlyOne-applyBtn-hook',
    onlyOneApplyClass: 'sales__discountCouponOnlyOne-container--apply',
    onlyOneBtnSel: '.sales__discountCouponOnlyOne-applyBtn-hook'
  };

  function getCartId() {
    return new Promise((resolve, reject) => {
      get_func(window, 'Shopline.event.emit').exec('Cart::GetCartId', {
        onSuccess(res) {
          if (get(res, 'success')) {
            const ownerId = res.data;
            resolve(ownerId);
          }

          reject(res);
        },

        onError(error) {
          reject(error);
        }

      });
    });
  }

  function handleTagsShow() {
    const $tags = $(vars.tagsSel);

    if (!$tags[0]) {
      return;
    }

    if (isMobile()) {
      $tags.css('display', 'none').eq(0).css('display', 'inline-block');
    } else {
      $tags.css('display', 'inline-block');
    }
  }

  const initDiscountCoupon = effectFc(function () {
    const {
      useEffect
    } = this;
    const container = $(vars.containerIdSel);
    const onlyOneContainer = $(vars.onlyOneContainerSel);
    const drawer = new Drawer({
      id: vars.drawerId,

      onSwitch(isShow) {
        if (isShow) {
          const hdOptions = {
            module: 129,
            spu_id: get(spu, 'spuSeq'),
            activity_id: get_func(get_func(discountCodeActivityList, 'map').exec(({
              activitySeq
            } = {}) => activitySeq), 'join').exec(',')
          };
          hd.exposure(`#${vars.drawerId}`, {
            event_id: 1319,
            ...hdOptions
          });
          hd.exposure(`#${vars.drawerId}`, {
            event_id: 1320,
            ...hdOptions
          }, {
            effective: true
          });
        }
      }

    });

    const modalShow = () => {
      const modal = $(vars.modalSel);
      modal.addClass(vars.modalShowClassName);
      const hdOptions = {
        module: 129,
        spu_id: get(spu, 'spuSeq'),
        activity_id: get_func(get_func(discountCodeActivityList, 'map').exec(({
          activitySeq
        } = {}) => activitySeq), 'join').exec(',')
      };
      hd.exposure('.sales-coupon-modal__container', {
        event_id: 1319,
        ...hdOptions
      });
      hd.exposure('.sales-coupon-modal__container', {
        event_id: 1320,
        ...hdOptions
      }, {
        effective: true
      });
    };

    const modalHide = () => {
      const modal = $(vars.modalSel);

      if (modal.hasClass(vars.modalShowClassName)) {
        modal.removeClass(vars.modalShowClassName);
      }
    };

    const modalToggle = () => {
      const modal = $(vars.modalSel);

      if (modal.hasClass(vars.modalShowClassName)) {
        modalHide();
      } else {
        modalShow();
      }
    };

    let isStopBtnApply = false;

    const bindCouponApply = ({
      clickSel,
      onApplySuccess
    }) => {
      const $clickEl = $(clickSel);
      useEffect($clickEl, 'on,off', 'click', e => {
        if (isStopBtnApply) {
          return;
        }

        const $el = $(e.currentTarget);
        const discountCode = $el.data('discount-code');

        if (!discountCode) {
          Toast.init({
            content: t('sales.discount_coupon.coupon_not_found')
          });
          return;
        }

        const cartIdPromise = getCartId();
        cartIdPromise.then(ownerId => {
          return request.post('/sale/coupon/bind/cart', {
            ownerId,
            discountCode
          });
        }).then(() => {
          isStopBtnApply = true;
          setTimeout(() => {
            isStopBtnApply = false;
          }, 500);
          Toast.init({
            content: t('sales.discount_coupon.applied_successfully')
          });

          if (typeof onApplySuccess === 'function') {
            onApplySuccess(discountCode);
          }
        }).catch(() => {
          Toast.init({
            content: t('sales.discount_coupon.failed_to_apply_coupon_code')
          });
        });
        cartIdPromise.then(() => {
          window.sessionStorage.setItem('tradeExtraInfo', JSON.stringify({
            discountCode: {
              value: discountCode,
              source: 'Activity'
            }
          }));
        });
        hd.collect({
          event_id: 1321,
          module: 129,
          component: 101,
          spu_id: get(spu, 'spuSeq'),
          activity_id: get(get_func(discountCodeActivityList, 'find').exec((item = {}) => item.discountCode === discountCode), 'activitySeq')
        });
      });
    };

    if (container.length) {
      useEffect(container, 'on,off', 'click', () => {
        if (isMobile()) {
          drawer.show();
        } else {
          modalToggle();
        }

        hd.collect({
          event_id: 1318,
          module: 128,
          spu_id: get(spu, 'spuSeq')
        });
      });
      useEffect($(vars.modalSel), 'on,off', 'click', e => {
        e.stopPropagation();
      });
      useEffect($(document.body), 'on,off', 'click', e => {
        const {
          target
        } = e;
        const containerDom = container.get(0);

        if (containerDom.contains(target) || containerDom === target) {
          return;
        }

        const drawerContainer = document.querySelector(`#${vars.drawerId}`);

        if (drawerContainer && drawerContainer.contains(target) || drawerContainer === target) {
          return;
        }

        if (isMobile() && drawer.getShowStatus()) {
          drawer.hide();
        }

        if (!isMobile()) {
          modalHide();
        }
      });
      useEffect(SL_EventBus, 'on,off', 'global:platformChange', () => {
        handleTagsShow();

        if (!isMobile() && drawer.getShowStatus()) {
          drawer.hide();
          modalShow();
        }

        if (isMobile()) {
          const modal = $(vars.modalSel);

          if (modal.hasClass(vars.modalShowClassName)) {
            drawer.show();
          }

          modalHide();
        }
      });
      window.SL_EventBus.on('global:currency:format', () => {
        const amountNode = container.find('[data-amount]');
        amountNode.each(function () {
          $(this).text(convertFormat($(this).data('amount')));
        });
        const drawerAmountNode = $(`#${vars.drawerId}`).find('[data-amount]');
        drawerAmountNode.each(function () {
          $(this).text(convertFormat($(this).data('amount')));
        });
      });
      bindCouponApply({
        clickSel: vars.couponsSel,
        onApplySuccess: discountCode => {
          const $coupon = $(vars.couponsSel);
          const $btns = $coupon.find(vars.btnSel);
          const btnData = $btns.data();
          $coupon.removeClass(vars.applyClass);
          $btns.text(btnData.apply || '');
          $btns.each(function () {
            const $self = $(this);
            const selfData = $self.data();

            if (selfData.isCustom === true) {
              $self.css({
                'background-color': selfData.btnBgColor,
                color: selfData.btnTextColor,
                border: 'none'
              });
            }
          });
          $coupon.each(function () {
            const $self = $(this);
            const $btnItems = $self.find(vars.btnSel);

            if ($self.data('discount-code') === discountCode) {
              $self.addClass(vars.applyClass);
              $btnItems.text($btnItems.data('applied'));
              const btnItemsData = $btnItems.data();

              if (btnItemsData.isCustom === true) {
                $btnItems.css({
                  color: btnItemsData.btnBgColor,
                  'background-color': 'transparent',
                  border: `1px solid ${btnItemsData.btnBgColor}`
                });
              }
            }
          });
        }
      });
      handleTagsShow();
    } else if (onlyOneContainer.length) {
      useEffect(onlyOneContainer, 'on,off', 'click', () => {
        hd.collect({
          event_id: 1318,
          module: 128,
          spu_id: get(spu, 'spuSeq')
        });
      });
      bindCouponApply({
        clickSel: vars.onlyOneClickSel,
        onApplySuccess: discountCode => {
          const $coupon = $(vars.onlyOneContainerSel);
          const $btns = $coupon.find(vars.onlyOneBtnSel);
          const btnData = $btns.data();
          $coupon.removeClass(vars.onlyOneApplyClass);
          $btns.text(btnData.apply || '');
          $coupon.each(function () {
            const $self = $(this);
            const $btnItems = $self.find(vars.onlyOneBtnSel);

            if ($self.data('discount-code') === discountCode) {
              $self.addClass(vars.onlyOneApplyClass);
              $btnItems.text($btnItems.data('applied'));
            }
          });
        }
      });
      window.SL_EventBus.on('global:currency:format', () => {
        const amountNode = onlyOneContainer.find('[data-amount]');
        amountNode.each(function () {
          $(this).text(convertFormat($(this).data('amount')));
        });
      });
    }

    if (get(discountCodeActivityList, 'length')) {
      hd.exposure(`${vars.onlyOneContainerSel},${vars.containerIdSel}`, {
        event_id: 1317,
        module: 128,
        spu_id: get(spu, 'spuSeq'),
        activity_id: get_func(get_func(discountCodeActivityList, 'map').exec(({
          activitySeq
        } = {}) => activitySeq), 'join').exec(',')
      });
      $(`${vars.couponsSel} [data-timestamp]`).each(function () {
        const timestamp = $(this).data('timestamp');

        if (timestamp) {
          const format = $(this).data('format');
          $(this).html(dayjs(timestamp).format(format));
        }
      });
    }
  });
  _exports.default = initDiscountCoupon;
  return _exports;
}();