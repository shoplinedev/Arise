window.SLM = window.SLM || {};

window.SLM['product/commons/js/sku-trade/sku-trade-select.js'] = window.SLM['product/commons/js/sku-trade/sku-trade-select.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const imgUrlUtil = window['SLM']['theme-shared/components/hbs/shared/utils/imgUrl.js'].default;
  const ImagesModal = window['SLM']['theme-shared/components/hbs/productImages/js/modal.js'].default;
  const { disablePageScroll, enablePageScroll } = window['SLM']['commons/components/modal/common.js'];
  const BaseSkuTrade = window['SLM']['product/commons/js/sku-trade/base-sku-trade.js'].default;
  const isMobile = window['SLM']['commons/utils/isMobile.js'].default;

  class SkuTradeSelect extends BaseSkuTrade {
    constructor(...args) {
      super(...args);
      this.currentIndex = null;
      this.currentEntry = null;
      this.currentDropdown = null;

      this.closeItem = () => {
        this.currentEntry && this.currentEntry.removeClass && this.currentEntry.removeClass('open');
        this.currentDropdown && this.currentDropdown.fadeOut && this.currentDropdown.fadeOut(200);
        this.hidePopup();
        this.currentEntry = null;
        this.currentDropdown = null;
        this.currentIndex = null;
        $(window).off('click', this.closeItem);
      };

      this.openItem = (entry, dropdown) => {
        const currentIndex = entry.data('index');

        if (this.currentIndex !== null) {
          if (this.currentIndex !== currentIndex) {
            this.closeItem();
          } else if (this.currentIndex === currentIndex) {
            this.closeItem();
            return;
          }
        }

        this.currentEntry = entry.addClass('open');
        this.currentIndex = currentIndex;
        this.currentDropdown = dropdown;
        dropdown.fadeIn(200);
        this.showPopup();
        $(window).on('click', this.closeItem);
      };
    }

    initFirstChecked() {
      super.initFirstChecked(true);
    }

    createPopupDom() {
      const that = this;
      const popupId = `skutradeselectpopup_${Date.now()}`;
      this.popup = $(`<div id="${popupId}" class="product-sku-trade-select-popup"><div class="select-options body-font select-popup"><div><div>`).on('click', e => {
        if (e.target.classList.contains('product-sku-trade-select-popup')) {
          this.closeItem();
        }

        e.stopPropagation();
      });
      const dropdown = this.popup.children('.select-popup');
      dropdown.on('click', '.select-item .select-img', function (e) {
        e.stopPropagation();
        const items = [{
          src: $(this).attr('src'),
          w: 0,
          h: 0
        }];
        ImagesModal.openModal(items, 0, false);
      });
      dropdown.on('click', '.select-item', function (e) {
        e.stopPropagation();
        const i = $(this).data('index');
        const active = $(this).prop('active');

        if (!active) {
          that.clickAttr(that.currentIndex, i);
        }

        that.closeItem();
      });
      $(document.body).append(this.popup);
    }

    showPopup() {
      if (!this.popup) {
        this.createPopupDom();
      }

      const index = this.currentIndex;
      const popupBody = this.popup.show().animate({
        opacity: 1
      }, 200).children('.select-popup').addClass('open');

      if (isMobile()) {
        disablePageScroll(popupBody.get(0));
      }

      if (this.dataPool.attrArray[index] && Array.isArray(this.dataPool.attrArray[index].specAttrList)) {
        this.dataPool.attrArray[index].specAttrList.forEach((valueItem, i) => {
          const disabled = this.dataPool.skuUtil.checkSpecAttrDisabled(this.dataPool.currentSpecList, valueItem.id, index);
          const active = this.dataPool.skuUtil.checkSpecAttrActive(this.dataPool.currentSpecList, valueItem.id);
          const valueEl = $(`<div class="select-item ${disabled ? 'disabled' : ''} ${active ? 'active' : ''}">${valueItem.imgUrl ? `<img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  class="select-img" src="${imgUrlUtil(valueItem.imgUrl, {
            width: 32,
            scale: 4
          })}" />` : ''}<span class="select-text">${valueItem.name}</span><span class="select-checked"></span></div>`);
          valueEl.data('index', i);
          valueEl.prop('active', active);
          popupBody.append(valueEl);
        });
      }
    }

    hidePopup() {
      if (!this.popup) return;

      if (isMobile()) {
        enablePageScroll(this.popup.children('.select-popup').get(0));
      }

      this.popup.animate({
        opacity: 0
      }, 200, function () {
        $(this).hide().children('.select-popup').empty();
      }).children('.select-popup').removeClass('open');
    }

    initDom() {
      const that = this;
      this.root.children('.spec-box').each((_, el) => {
        const box = $(el);
        const index = box.data('index');
        const selectBox = box.children('.select-box');
        const entry = selectBox.children('.select-entry');
        const dropdown = selectBox.children('.select-dropdown');
        entry.on('click', e => {
          e.stopPropagation();
          this.openItem(entry, dropdown);
        });
        dropdown.on('click', '.select-item', function () {
          const i = $(this).data('index');
          const active = $(this).prop('active');
          that.closeItem();

          if (!active) {
            that.clickAttr(index, i);
          }
        });
      });
    }

    createAndInitDom() {
      this.clearRoot();
      const that = this;
      this.root.addClass('product-sku-trade-select');
      this.dataPool.attrArray.forEach((spec, index) => {
        if (!spec.hidden) {
          const specBox = $('<div class="spec-box"></div>').data('index', index);
          this.root.append(specBox);
          const selectBox = $(`<div class="select-box"></div>`);
          specBox.append(`<div class="spec-name body6 ls-30p text-uppercase">${spec.specName}</div>`, selectBox);
          const entry = $(`<div class="select-entry"><img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  style="display: none" class="entry-img" src=""><span class="entry-text body3"></span><span class="entry-arrow"></span></div>`).data('index', index);
          const dropdown = $('<div class="select-options body-font select-dropdown"></div>');
          selectBox.append(entry, dropdown);
          spec.specAttrList.forEach((value, i) => {
            const {
              imgUrl,
              name
            } = value;
            dropdown.append($(`<div class="select-item">${imgUrl ? `<img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  class="select-img" src="${imgUrl}" >` : ''}<span class="select-text">${name}</span><span class="select-checked"></span></div>
              `).data('index', i));
          });
          entry.on('click', e => {
            e.stopPropagation();
            this.openItem(entry, dropdown);
          });
          dropdown.on('click', '.select-item', function () {
            const i = $(this).data('index');
            const active = $(this).prop('active');
            that.closeItem();

            if (!active) {
              that.clickAttr(index, i);
            }
          });
        }
      });
    }

    render() {
      super.beforeUpdate();
      this.root.children('.spec-box').each((_, el) => {
        const boxEl = $(el);
        const index = boxEl.data('index');
        const currentValue = this.getAttrValue(index);
        const seletBox = boxEl.children('.select-box').children('.select-entry');
        const {
          name,
          imgUrl
        } = currentValue || {};
        const img = seletBox.children('.entry-img');
        const text = seletBox.children('.entry-text');

        if (imgUrl) {
          img.show().prop('src', imgUrlUtil(imgUrl, {
            width: 32,
            scale: 4
          }));
        } else {
          img.hide().prop('src', '');
        }

        if (name) {
          text.text(name);
        } else if (currentValue) {
          text.text('');
        } else {
          text.text(t('products.product_details.default_placeholder', {
            attrName: this.dataPool.attrArray[index].specName
          }));
        }

        boxEl.children('.select-box').children('.select-options').children('.select-item').each((__, el_) => {
          const valueEl = $(el_);
          const i = valueEl.data('index');
          const valueItem = this.dataPool.attrArray[index].specAttrList[i];
          const disabled = this.dataPool.skuUtil.checkSpecAttrDisabled(this.dataPool.currentSpecList, valueItem.id, index);
          const active = this.dataPool.skuUtil.checkSpecAttrActive(this.dataPool.currentSpecList, valueItem.id);

          if (disabled) {
            valueEl.addClass('disabled');
          } else {
            valueEl.removeClass('disabled');
          }

          if (active) {
            valueEl.addClass('active').prop('active', true);
          } else {
            valueEl.removeClass('active').prop('active', false);
          }
        });
      });
      super.afterUpdate();
    }

    destory() {
      super.destory();
      this.closeItem();

      if (this.popup) {
        this.popup.remove();
      }

      this.popup = null;
    }

  }

  _exports.default = SkuTradeSelect;
  return _exports;
}();