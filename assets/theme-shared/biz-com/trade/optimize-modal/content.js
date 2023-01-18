window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/trade/optimize-modal/content.js'] = window.SLM['theme-shared/biz-com/trade/optimize-modal/content.js'] || function () {
  const _exports = {};
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const currencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { StatusEnum, btnEnum, PropertyTypeEnum, ErrorTypeEnum } = window['SLM']['theme-shared/biz-com/trade/optimize-modal/constant.js'];
  const { splitSku, prefixer } = window['SLM']['theme-shared/biz-com/trade/optimize-modal/tool.js'];

  const skuNumber = ({
    num,
    stockNum,
    autoAdjust
  }) => {
    return `<div class=${prefixer('number')}>
        x ${num}
        ${autoAdjust ? `<span style="margin:0 10px">&gt;&gt;</span>` : ''}
        ${autoAdjust ? `<span style="color: #eb8d00;">x ${stockNum}</span>` : ``}
      </div>`;
  };

  const skuTip = (errorType, targetNum) => {
    const isProduct = errorType === ErrorTypeEnum.LIMITED_ACTIVE_SKU_OVER;
    const isUnderProduct = errorType === ErrorTypeEnum.LIMITED_ACTIVE_STOCK_OVER;
    const isUser = errorType === ErrorTypeEnum.LIMITED_ACTIVE_OVER;
    const isLimit = isUser || isProduct || isUnderProduct;
    return `   ${isLimit ? `<p class=${prefixer('tips')}>
          ${t(isUser ? 'cart.discount_price.buy_limit2' : 'cart.discount_price.buy_limit3', {
      stock: `${targetNum || 0}`
    })}
   </p>` : ``}`;
  };

  const skuInfo = (info, isMobile) => {
    const {
      productName: name = '',
      productNum: num = 0,
      productStatus: status,
      productSkuAttrList,
      productPrice: price,
      productLimitInfo: limitInfo,
      properties = [],
      errorInfo = {}
    } = info;
    const attrs = nullishCoalescingOperator(productSkuAttrList, ['']);
    let propertiesContent = '';
    properties.forEach(prop => {
      if (prop.type === PropertyTypeEnum.picture) {
        propertiesContent += `<div>${prop.name}：<span class="pod_btn preview_btn" data-list=${JSON.stringify(prop.urls)}>${t('cart.item.custom_preview')}</span></div>`;
      } else if (prop.type === PropertyTypeEnum.link) {
        propertiesContent += `<div>${prop.name}：<a class="pod_btn" href=${prop.urls && prop.urls[0]} target="_blank" className="pod_btn">${t('cart.item.click_to_view')}</a></div>`;
      } else {
        propertiesContent += `<div>${prop.name}：<span>${prop.value}</span></div>`;
      }
    });
    return `<div class=${prefixer('info')}>
    <div class=${prefixer('info-name')}>
      <div class=${prefixer('name')}>
        <p class="${prefixer('product-name')} entry-text">${name}</p>
        ${!isMobile ? skuNumber({
      num,
      status,
      stockNum: errorInfo && errorInfo.targetNum,
      limitInfo,
      autoAdjust: errorInfo && errorInfo.autoAdjust
    }) : ''}
      </div>
      <p class=${prefixer('skuAttr')}>${splitSku(attrs)}</p>
      <div class=${prefixer('item-pod')}>${propertiesContent}</div>
    </div>
    <div class=${prefixer('price')}>
      <b class="customize-sale notranslate">${currencyUtil.format(Number(price))}</b>
      ${isMobile ? skuNumber({
      num,
      status,
      stockNum: errorInfo && errorInfo.targetNum,
      limitInfo,
      autoAdjust: errorInfo && errorInfo.autoAdjust
    }) : ''}
    </div>
    ${skuTip(errorInfo && errorInfo.errorType, errorInfo && errorInfo.targetNum)}
  </div>`;
  };

  const checkSoldOut = sku => {
    const errorType = sku.errorInfo && sku.errorInfo.errorType;
    return [ErrorTypeEnum.SOLD_OUT, ErrorTypeEnum.SHELF_OFF, ErrorTypeEnum.DELETE, ErrorTypeEnum.GIFT_INVALID].includes(errorType);
  };

  const getMaskText = errorType => {
    let text = t('products.product_list.sold_out');

    if ([ErrorTypeEnum.SHELF_OFF, ErrorTypeEnum.GIFT_INVALID].includes(errorType)) {
      text = t('transaction.item.removed');
    }

    if (errorType === ErrorTypeEnum.DELETE) {
      text = t('transaction.order.deleted');
    }

    return text;
  };

  const createContent = (effectList, isMobile) => {
    let content = '';
    let num = 0;

    if (Array.isArray(effectList)) {
      effectList.forEach(sku => {
        num += 1;
        content += `
        <div class="${checkSoldOut(sku) ? prefixer('item-disabled') : ''}  ${prefixer('item')}">
          <div class=${prefixer('image')}>
            <img class=${prefixer('img')} src="${sku.productImage}" alt="" />
            ${checkSoldOut(sku) ? `<div class=${prefixer('sold-out')}>${getMaskText(sku.errorInfo && sku.errorInfo.errorType)}</div>` : ''}
            ${sku && sku.bindProductImages ? ` <span class=${prefixer('pod-circle')}>
                  <img src=${sku && sku.bindProductImages} />
                  </span>` : ''}
            </div>
            ${skuInfo(sku, isMobile)}
            </div>
        `;
      });
    }

    return {
      content,
      num
    };
  };

  const createLimitList = ({
    list,
    isMobile
  }) => {
    let content = '';

    if (Array.isArray(list)) {
      list.forEach(sku => {
        if (sku.productStatus === StatusEnum.user_limit) {
          content += `
        <div class="${prefixer('item')}">
          <div class=${prefixer('image')}>
            <img class=${prefixer('img')} src="${sku.productImage}" alt="" />
            ${checkSoldOut(sku) ? `<div class=${prefixer('sold-out')}>${getMaskText(sku.errorInfo && sku.errorInfo.errorType)}</div>` : ''}
            ${sku && sku.bindProductImages ? ` <span class=${prefixer('pod-circle')}>
                  <img src=${sku && sku.bindProductImages} />
                  </span>` : ''}
          </div>
            ${skuInfo(sku, isMobile)}
            </div>
        `;
        }
      });
    }

    return content;
  };

  const createTitle = ({
    isLimit,
    continueBtnHide
  }) => {
    const text = isLimit || continueBtnHide ? 'cart.notices.excess_product' : 'cart.checkout_proceeding.checkout_proceed';
    return `<p class=${prefixer('title')}>${t(text)}</p>`;
  };

  const createBtn = (status, continueBtnHide) => {
    let btn = ``;

    switch (status) {
      case btnEnum.paypal:
        btn = `<button  class="${prefixer('btn-back')}">${t('cart.checkout_proceeding.return_to_cart')}</button>
      <div id=${prefixer('btn-paypal')}></div>`;
        break;

      case btnEnum.empty:
        btn = `<button  class="${prefixer('btn-confirm')}">${t('cart.checkout_proceeding.confirm')}</button>`;
        break;

      case btnEnum.limit:
        btn = `<button  class="${prefixer('btn-limit')}">${t('cart.checkout_proceeding.return_to_cart')}</button>`;
        break;

      default:
        btn = `<button  class="${prefixer('btn-back')}">${t('cart.checkout_proceeding.return_to_cart')}</button>
      ${!continueBtnHide ? `<button class="${prefixer('btn-continue')}">${t('cart.checkout_proceeding.continue')}</button>` : ''}`;
    }

    const res = `<div class=${prefixer('btn-box')}>${btn}</div>`;
    return res;
  };

  const setEmpty = () => {
    return `<div class=${prefixer('none-product-modal')}>
  <p class="${prefixer('none-product-title')} entry-text">${t('cart.notices.product_selected_invalid')}</p>
  ${createBtn(btnEnum.empty, true)} 
  </div>`;
  };

  const setContent = ({
    effectList,
    limitList,
    isMobile,
    isPaypal
  }) => {
    let content = ``;
    let btnClass = [];

    if (limitList && limitList.length > 0) {
      const continueBtnHide = limitList.some(sku => sku.errorInfo && sku.errorInfo.autoAdjust === false);
      content = `<div class=${prefixer('content-box')}>

    ${createTitle({
        isLimit: true,
        continueBtnHide
      })}
    <div class=${prefixer('content')}>
    ${createLimitList({
        list: limitList,
        isMobile
      })}
    </div>
    </div>
    ${createBtn(btnEnum.limit, continueBtnHide)}`;
      btnClass = ['btn-limit'];
    } else {
      const itemContent = createContent(effectList, isMobile);
      const continueBtnHide = effectList && effectList.some(sku => sku.errorInfo && sku.errorInfo.autoAdjust === false);
      const status = isPaypal ? btnEnum.paypal : btnEnum.checkout;
      content = `<div class=${prefixer('content-box')}>
    ${createTitle({
        isLimit: false,
        continueBtnHide
      })}
    <div class=${prefixer('content')}>
    ${itemContent && itemContent.content}
    </div>
    </div>
    ${createBtn(status, continueBtnHide)}`;
      btnClass = isPaypal ? ['btn-back'] : ['btn-continue', 'btn-back'];
    }

    return {
      content,
      btnClass
    };
  };

  const optimizeContent = ({
    effectList,
    limitList,
    len,
    productLimit,
    isPaypal,
    isMobile
  }) => {
    let btnClass = ['btn-confirm'];
    let modal = setEmpty();

    if (limitList && limitList.length > 0) {
      const content = setContent({
        effectList,
        limitList,
        isMobile,
        isPaypal
      });
      modal = `<div id="optimize-modal">
    ${content.content}
  </div>`;
      btnClass = content.btnClass;
    }

    if (len > 0) {
      const content = setContent({
        effectList,
        limitList,
        productLimit,
        isMobile,
        isPaypal
      });
      modal = `<div id="optimize-modal">
    ${content.content}
  </div>`;
      btnClass = content.btnClass;
    }

    return {
      modal,
      btnClass
    };
  };

  _exports.default = optimizeContent;
  return _exports;
}();