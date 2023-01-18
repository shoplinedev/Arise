window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/order/detail/payModal.js'] = window.SLM['theme-shared/biz-com/customer/biz/order/detail/payModal.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const dayjs = window['dayjs']['*'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { format } = window['@sl/currency-tools-core'];
  const TradeModalWithHtml = window['SLM']['theme-shared/biz-com/trade/optimize-modal/base.js'].default;
  const { PayStatusI18n, PAY_MODAL_Id } = window['SLM']['theme-shared/biz-com/customer/biz/order/constants.js'];

  const getCloseIcon = () => {
    const iconElWrap = document.createElement('i');
    iconElWrap.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.0455 4.4545C5.60616 4.01517 4.89384 4.01517 4.4545 4.45451C4.01516 4.89384 4.01517 5.60616 4.4545 6.04549L10.4091 12.0001L4.45469 17.9545C4.01535 18.3939 4.01535 19.1062 4.45469 19.5455C4.89403 19.9849 5.60634 19.9849 6.04568 19.5455L12.0001 13.5911L17.9543 19.5453C18.3937 19.9847 19.106 19.9847 19.5453 19.5453C19.9847 19.106 19.9847 18.3937 19.5453 17.9543L13.5911 12.0001L19.5455 6.04569C19.9848 5.60635 19.9848 4.89404 19.5455 4.4547C19.1062 4.01536 18.3939 4.01536 17.9545 4.4547L12.0001 10.4091L6.0455 4.4545Z" fill="currentColor"/></svg>`;
    return iconElWrap;
  };

  const bem = className => {
    return `detail_pay_modal_${className}`;
  };

  function domToString(node) {
    let tmpNode = document.createElement('div');
    tmpNode.appendChild(node);
    const str = tmpNode.innerHTML;
    tmpNode = null;
    return str;
  }

  function getPayChannelName(payChannelName, payMethod, defaultDesensitizedPayerAccount) {
    const {
      value,
      type
    } = payChannelName;

    if (type === 'i18n_code') {
      return t(value);
    }

    if (payMethod === 'GiftCard') {
      return `${value}-(••••${defaultDesensitizedPayerAccount})`;
    }

    return value;
  }

  function renderContentBox(props, instance) {
    const boxWrapEl = document.createElement('div');
    boxWrapEl.className = bem('box-wrap');
    const boxContentEl = document.createElement('div');
    boxContentEl.className = bem('box-content');
    const mainTitleEL = document.createElement('div');
    mainTitleEL.className = bem('main-title');
    const subTitleTextEl = document.createTextNode(t('cart.payment.payment_details'));
    mainTitleEL.appendChild(subTitleTextEl);
    boxContentEl.appendChild(mainTitleEL);
    const paymentInfoList = SL_State.get('customer.order.paymentInfoList') || [];
    const settleCurrencyCode = SL_State.get('customer.order.basicInfo.settleCurrencyCode');
    const payInfo = paymentInfoList && paymentInfoList.find(pay => pay.paySeq === props.paySeq);
    const {
      payChannelName,
      payAmount,
      payChannelDealId,
      createTime,
      updateTime,
      payStatus,
      payMethod,
      defaultDesensitizedPayerAccount
    } = payInfo || {};
    const infoList = [{
      title: t('cart.payment.channel'),
      text: getPayChannelName(payChannelName, payMethod, defaultDesensitizedPayerAccount) || '-'
    }, {
      title: t('cart.payment.sum'),
      isNotranslate: true,
      isNoChange: true,
      payAmount,
      text: format(payAmount, {
        code: settleCurrencyCode
      }) || '-'
    }, {
      title: t('cart.payment.reference_number'),
      text: payChannelDealId || '-'
    }, {
      title: t('cart.payment.create_time'),
      text: createTime && dayjs(createTime).format('YYYY-MM-DD HH:mm A') || '-'
    }, {
      title: t('cart.payment.update_time'),
      text: updateTime && dayjs(updateTime).format('YYYY-MM-DD HH:mm A') || '-'
    }, {
      title: t('cart.payment.status'),
      text: PayStatusI18n[payStatus] || '-'
    }];
    infoList.map(({
      title,
      text,
      isNotranslate,
      payAmount,
      isNoChange
    }) => {
      const subTitleEL = document.createElement('p');
      subTitleEL.className = bem('box-content-sub-title');
      const subTitleTextEl = document.createTextNode(title);
      subTitleEL.appendChild(subTitleTextEl);
      boxContentEl.appendChild(subTitleEL);
      const subTextEL = document.createElement('p');
      const subTexClassList = ['box-content-sub-text'];

      if (isNoChange) {
        subTexClassList.push('no-change');
      }

      if (isNotranslate) {
        subTexClassList.push('notranslate');
        subTextEL.setAttribute('data-amount', payAmount);
      }

      subTextEL.className = bem(subTexClassList.join(' '));
      const subTextValueEl = document.createTextNode(text);

      if (typeof payAmount === 'number') {
        subTextEL.innerHTML = text;
      } else {
        subTextEL.appendChild(subTextValueEl);
      }

      boxContentEl.appendChild(subTextEL);
      return {
        title,
        text
      };
    });

    const closeModal = () => {
      instance.hide(true);
      instance.destroy();
    };

    const closeIconEl = getCloseIcon();
    closeIconEl.className = bem('close-icon');
    closeIconEl.addEventListener('click', closeModal);
    const iKnowEl = document.createElement('div');
    iKnowEl.className = bem('i-know');
    const iKnowButtonEl = document.createElement('button');
    iKnowButtonEl.className = `${bem('i-know-btn')} btn btn-primary`;
    iKnowButtonEl.textContent = t('cart.cart.got_it');
    iKnowButtonEl.addEventListener('click', closeModal);
    iKnowEl.appendChild(iKnowButtonEl);
    boxWrapEl.appendChild(closeIconEl);
    const requestData = SL_State.get('request') || {};

    if (!requestData.is_mobile) {
      boxContentEl.appendChild(iKnowEl);
    }

    boxWrapEl.appendChild(boxContentEl);
    return boxWrapEl;
  }

  function renderContentDOM(props) {
    const contentPlaceHolderDOM = document.createElement('div');
    const uniqueKey = Date.now();
    const contentPlaceHolderDOMId = bem(`placeholder-${uniqueKey}`);
    contentPlaceHolderDOM.id = contentPlaceHolderDOMId;
    contentPlaceHolderDOM.className = bem('placeholder');
    let closeModal = null;
    const baseModalOptions = {
      content: domToString(contentPlaceHolderDOM),
      ...props,
      closable: false,
      handleClickMask: () => {
        if (closeModal) {
          closeModal();
        }
      },
      destroyedOnClosed: true,
      maskClosable: false,
      id: PAY_MODAL_Id
    };
    const baseInstance = new TradeModalWithHtml(baseModalOptions);
    baseInstance.show();

    closeModal = () => {
      baseInstance.hide(true);
    };

    const contentDOM = renderContentBox(props, baseInstance, {});
    const contentRealDOM = $(`#${contentPlaceHolderDOMId}`);
    contentRealDOM.append($(contentDOM));
    return baseInstance;
  }

  function handlePayModal(options) {
    const modalInstance = renderContentDOM(options);
    return {
      raw: modalInstance
    };
  }

  _exports.default = handlePayModal;
  return _exports;
}();