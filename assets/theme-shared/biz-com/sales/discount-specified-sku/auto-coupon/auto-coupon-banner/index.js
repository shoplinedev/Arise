window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/auto-coupon-banner/index.js'] = window.SLM['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/auto-coupon-banner/index.js'] || function () {
  const _exports = {};
  const { SL_EventBus } = window['SLM']['theme-shared/utils/event-bus.js'];
  const { convertFormat } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  const { getAutoCouponBannerHtml } = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/get-html.js'];
  const effectFc = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/helpers/effectFc.js'].default;
  const Drawer = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/helpers/drawer.js'].default;
  const { isMobile } = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/helpers/index.js'];
  const vars = {
    containerSel: '.sales__autoCouponBanner-container-hook',
    tagsSel: '.sales__autoCouponBanner-couponItem-hook',
    downIconSel: '.sales__autoCouponBanner-downIcon-hook',
    clickAreaSel: '.sales__autoCouponBanner-left',
    modalSel: '.sales__autoCouponModal-container',
    modalPopupClassName: 'sales__autoCouponModal-container--show',
    containerShowStateClassName: 'sales__autoCouponBanner-container--popup',
    drawerId: 'salesAutoCouponDrawer',
    modelListItemsSel: '.sales__autoCouponModal-listItem',
    shopMoreText: '.sales__autoCouponBanner-shopMoreText-hook'
  };

  const isAllowPopupFn = parentDom => {
    const $tags = $(parentDom).find(vars.modelListItemsSel);
    const isMob = isMobile();
    return $tags.length > 2 || isMob && $tags.length > 1;
  };

  const handlePlatformChange = () => {
    const containerDoms = $(vars.containerSel);
    const isMob = isMobile();
    Array.prototype.slice.call(containerDoms).forEach(containerDom => {
      const tagsChildren = $(containerDom).find(vars.tagsSel);

      if (tagsChildren.length) {
        const $tags = $(tagsChildren);

        if ($tags) {
          if (isMob) {
            $tags.css('display', 'none').eq(0).css('display', 'inline-block');
          } else {
            $tags.css('display', 'inline-block');
          }
        }

        const downIconDom = $(containerDom).find(vars.downIconSel);
        const $downIcon = $(downIconDom);
        const clickArea = $(containerDom).find(vars.clickAreaSel);
        const $clickArea = $(clickArea);
        const isAllowPopup = isAllowPopupFn(containerDom);
        $downIcon.css('display', isAllowPopup ? 'block' : 'none');
        $clickArea.css('cursor', isAllowPopup ? 'pointer' : 'default');
        const shopMoreTextDom = $(containerDom).find(vars.shopMoreText);

        if (shopMoreTextDom.length) {
          $(shopMoreTextDom).css('display', isMob ? 'none' : 'block');
        }
      }
    });
  };

  const run = effectFc(function (parent) {
    const {
      useEffect
    } = this;

    const getContainerDoms = () => {
      const $parent = $(parent || document.body);
      const containerDoms = $parent.find(vars.containerSel);

      if (containerDoms.length) {
        return containerDoms;
      }

      return null;
    };

    const handlePopup = () => {
      const containerDoms = $(vars.containerSel);
      const currentClickObj = {
        seq: '',
        isShow: false
      };

      const getSeqMap = () => {
        const seqMap = {};
        Array.prototype.slice.call(containerDoms).forEach(containerDom => {
          const seq = $(containerDom).attr('data-seq');
          const modalDom = $(containerDom).find(vars.modalSel);
          const drawer = new Drawer({
            id: `${vars.drawerId}-${seq}`,

            onSwitch(flag) {
              if (!flag) {
                seqMap[seq].close();
              }
            }

          });
          seqMap[seq] = {};

          seqMap[seq].open = () => {
            if (isMobile() && $(modalDom).hasClass(vars.modalPopupClassName)) {
              $(modalDom).removeClass(vars.modalPopupClassName);
            } else if (drawer.isShow) {
              drawer.hide();
            }

            const isAllowPopup = isAllowPopupFn(containerDom);
            if (!isAllowPopup) return;

            if (isMobile() && !drawer.isShow) {
              drawer.show();
            } else if (!$(modalDom).hasClass(vars.modalPopupClassName)) {
              $(modalDom).addClass(vars.modalPopupClassName);
            }

            if (!$(containerDom).hasClass(vars.containerShowStateClassName)) {
              $(containerDom).addClass(vars.containerShowStateClassName);
            }

            currentClickObj.seq = seq;
            currentClickObj.isShow = true;
          };

          seqMap[seq].close = () => {
            if (isMobile() && drawer.isShow) {
              drawer.hide();
            } else if ($(modalDom).hasClass(vars.modalPopupClassName)) {
              $(modalDom).removeClass(vars.modalPopupClassName);
            }

            if ($(containerDom).hasClass(vars.containerShowStateClassName)) {
              $(containerDom).removeClass(vars.containerShowStateClassName);
            }

            currentClickObj.seq = seq;
            currentClickObj.isShow = false;
          };
        });
        return seqMap;
      };

      const seqMap = getSeqMap();

      const openModalBySeq = seq => {
        if (currentClickObj.seq === seq) {
          if (currentClickObj.isShow) {
            seqMap[seq].close();
          } else {
            seqMap[seq].open();
          }
        } else {
          if (currentClickObj.isShow) {
            seqMap[currentClickObj.seq].close();
          }

          seqMap[seq].open();
        }
      };

      const clickAreasDoms = $(vars.clickAreaSel);

      if (!clickAreasDoms.length) {
        return;
      }

      Array.prototype.slice.call(clickAreasDoms).forEach(clickAreasDom => {
        useEffect($(clickAreasDom), 'on,off', 'click', () => {
          const seq = $(clickAreasDom).attr('data-seq');
          openModalBySeq(seq);
        });
      });
      useEffect(SL_EventBus, 'on,off', 'global:platformChange', () => {
        if (currentClickObj.isShow) {
          seqMap[currentClickObj.seq].open();
        }

        handlePlatformChange();
      });
      useEffect($(vars.modalSel), 'on,off', 'click', e => {
        e.stopPropagation();
      });
      Object.keys(seqMap).forEach(seq => {
        useEffect($(`#${vars.drawerId}-${seq}`), 'on,off', 'click', e => {
          e.stopPropagation();
        });
      });
      useEffect($(document.body), 'on,off', 'click', e => {
        const {
          target
        } = e;

        if (currentClickObj.isShow) {
          const targetDom = Array.prototype.slice.call(clickAreasDoms).find(item => $(item).attr('data-seq') === currentClickObj.seq);

          if ($.contains(targetDom, target) || targetDom === target) {
            return;
          }

          seqMap[currentClickObj.seq].close();
        }
      });
    };

    window.SL_EventBus.on('global:currency:format', () => {
      const containerDoms = getContainerDoms();
      if (!containerDoms) return;
      Array.prototype.slice.call(containerDoms).forEach(container => {
        const $container = $(container);
        const amountNode = $container.find('[data-amount]');
        amountNode.each(function () {
          $(this).text(convertFormat($(this).data('amount')));
        });
        const seq = $container.attr('data-seq');
        const drawerAmountNode = $(`#${vars.drawerId}-${seq}`).find('[data-amount]');
        drawerAmountNode.each(function () {
          $(this).text(convertFormat($(this).data('amount')));
        });
      });
    });
    if (!getContainerDoms()) return;
    handlePlatformChange();
    handlePopup();
  });

  const getFilterAutoDiscountActivityList = (id, spuInfo, autoDiscountActivityList) => {
    if (Array.isArray(autoDiscountActivityList) && autoDiscountActivityList.length) {
      return autoDiscountActivityList.filter(autoDiscountActivityItem => autoDiscountActivityItem.benefitConditions && id === 'productDetail' && !spuInfo.inquiry && autoDiscountActivityItem.discountStyleType === 1);
    }

    return [];
  };

  const getHtml = (id, spuInfo, autoDiscountActivityList) => {
    let result = '';
    const items = getFilterAutoDiscountActivityList(id, spuInfo, autoDiscountActivityList);

    if (items.length) {
      items.forEach(item => {
        result += getAutoCouponBannerHtml(item);
      });
    }

    return result;
  };

  const isRender = (id, spuInfo, autoDiscountActivityList) => {
    const result = getFilterAutoDiscountActivityList(id, spuInfo, autoDiscountActivityList);
    return !!(result && result.length);
  };

  const render = () => {
    return {
      isRender,
      getHtml,
      run
    };
  };

  _exports.default = render;
  return _exports;
}();