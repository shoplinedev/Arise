window.SLM = window.SLM || {};

window.SLM['product/commons/js/sku-trade/sku-trade-flatten.js'] = window.SLM['product/commons/js/sku-trade/sku-trade-flatten.js'] || function () {
  const _exports = {};
  const get = window['lodash']['get'];
  const BaseSkuTrade = window['SLM']['product/commons/js/sku-trade/base-sku-trade.js'].default;
  const isMobile = window['SLM']['commons/utils/isMobile.js'].default;

  class SkuTrade extends BaseSkuTrade {
    getAttrValueName(index) {
      return get(this.getAttrValue(index), 'name');
    }

    initDom() {
      const isInMobile = isMobile();
      this.root.children('.spec-box').each((_, el) => {
        const box = $(el);
        const index = box.data('index');
        box.children('.attr-box').children('.attr-value').each((__, valueEl) => {
          const valueJQ = $(valueEl);
          const i = valueJQ.data('index');
          valueJQ.on('click', () => {
            this.clickAttr(index, i);
          });
          const specItem = this.dataPool.attrArray[index];

          if (!isInMobile && specItem && specItem.onlyShowAttrImg) {
            valueJQ.tooltip({
              targetContainer: this.targetContainer,
              title: get(specItem, `specAttrList[${i}].name`)
            });
          }
        });
      });
    }

    createAndInitDom() {
      this.clearRoot();
      const isInMobile = isMobile();
      const root = this.root.addClass('product-sku-trade');
      this.dataPool.attrArray.forEach((spec, index) => {
        if (!spec.hidden) {
          const specBox = $('<div class="spec-box"></div>');
          specBox.data('index', index);
          specBox.append(`<div class="spec-name body6 ls-30p text-uppercase">${spec.specName}</div>`);
          const attrBox = $('<div class="attr-box body3"></div>');
          specBox.append(attrBox);
          spec.specAttrList.forEach((value, i) => {
            const {
              imgUrl
            } = value;
            let valueJQ;

            if (imgUrl) {
              valueJQ = $(`<div class="attr-value with-img"><img${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  class="value-img" src="${imgUrl}"></div>`);

              if (!isInMobile && spec.onlyShowAttrImg) {
                valueJQ.tooltip({
                  targetContainer: this.targetContainer,
                  title: value.name
                });
              } else {
                valueJQ.append(`<span class="value-text">${value.name}</span>`);
              }
            } else {
              valueJQ = $(`<div class="attr-value"><span>${value.name}</span></div>`);
            }

            valueJQ.data('index', i);
            attrBox.append(valueJQ);
            valueJQ.on('click', () => {
              this.clickAttr(index, i);
            });
          });
          root.append(specBox);
        }
      });
    }

    isPreview() {
      return window.SL_State && window.SL_State.get('templateAlias') === 'PreviewProductsDetail';
    }

    render() {
      super.beforeUpdate();
      this.root.children('.spec-box').each((_, el) => {
        const boxEl = $(el);
        const valueEls = boxEl.children('.attr-box').children('.attr-value');
        const index = boxEl.data('index');
        const nameItem = this.dataPool.attrArray[index];

        if (nameItem.onlyShowAttrImg) {
          const attrValue = this.getAttrValueName(index);

          if (attrValue) {
            boxEl.find('.spec-name').text(`${nameItem.specName}：${attrValue}`);
          } else {
            boxEl.find('.spec-name').text(nameItem.specName);
          }
        }

        valueEls.each((__, el_) => {
          const valueEl = $(el_);
          const i = valueEl.data('index');
          const valueItem = nameItem.specAttrList[i];
          const disabled = !this.isPreview() ? this.dataPool.skuUtil.checkSpecAttrDisabled(this.dataPool.currentSpecList, valueItem.id, index) : false;
          const active = this.dataPool.skuUtil.checkSpecAttrActive(this.dataPool.currentSpecList, valueItem.id);

          if (disabled) {
            valueEl.addClass('disabled').prop('disabled', true);
          } else {
            valueEl.removeClass('disabled').prop('disabled', false);
          }

          if (active) {
            valueEl.addClass('active');
          } else {
            valueEl.removeClass('active');
          }
        });
      });
      super.afterUpdate();
    }

  }

  _exports.default = SkuTrade;
  return _exports;
}();