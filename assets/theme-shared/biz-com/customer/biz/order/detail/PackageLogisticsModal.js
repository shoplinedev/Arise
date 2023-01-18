window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/order/detail/PackageLogisticsModal.js'] = window.SLM['theme-shared/biz-com/customer/biz/order/detail/PackageLogisticsModal.js'] || function () {
  const _exports = {};
  const dayjs = window['dayjs']['*'];
  const { receiverInfoSerializer } = window['@sl/address-serializer'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const TradeModalWithHtml = window['SLM']['theme-shared/biz-com/trade/optimize-modal/base.js'].default;
  const { getCustomLogisticsDataV2, getLogisticsData } = window['SLM']['theme-shared/biz-com/customer/service/orders.js'];
  const loadingSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2" stroke="currentColor" stroke-width="3"/></svg>`;
  const modalId = 'PackageLogisticsModal';
  const EnumExpressTypeSource = {
    OMS: '1',
    CUSTOM: '2',
    CUSTOM_FREIGHT: '3'
  };

  const isOMSDeliveryFn = type => {
    return type === EnumExpressTypeSource.OMS;
  };

  const getCloseIcon = () => {
    const iconElWrap = document.createElement('i');
    iconElWrap.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.0455 4.4545C5.60616 4.01517 4.89384 4.01517 4.4545 4.45451C4.01516 4.89384 4.01517 5.60616 4.4545 6.04549L10.4091 12.0001L4.45469 17.9545C4.01535 18.3939 4.01535 19.1062 4.45469 19.5455C4.89403 19.9849 5.60634 19.9849 6.04568 19.5455L12.0001 13.5911L17.9543 19.5453C18.3937 19.9847 19.106 19.9847 19.5453 19.5453C19.9847 19.106 19.9847 18.3937 19.5453 17.9543L13.5911 12.0001L19.5455 6.04569C19.9848 5.60635 19.9848 4.89404 19.5455 4.4547C19.1062 4.01536 18.3939 4.01536 17.9545 4.4547L12.0001 10.4091L6.0455 4.4545Z" fill="currentColor"/></svg>`;
    return iconElWrap;
  };

  const deliverySvg = `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M36.001 20.998C31.0304 20.998 27.001 25.0275 27.001 29.998C27.001 34.9686 31.0304 38.998 36.001 38.998C40.9715 38.998 45.001 34.9686 45.001 29.998C45.001 25.0275 40.9715 20.998 36.001 20.998ZM31.501 29.998C31.501 27.5128 33.5157 25.498 36.001 25.498C38.4863 25.498 40.501 27.5128 40.501 29.998C40.501 32.4833 38.4863 34.498 36.001 34.498C33.5157 34.498 31.501 32.4833 31.501 29.998Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0001 11.9973C27.9417 2.0556 44.0604 2.0556 54.002 11.9973C63.942 21.9389 63.9419 38.0578 54.0019 47.9994L36.0009 65.9971L18.0001 47.9963C8.05988 38.0561 8.05988 21.9375 18.0001 11.9973ZM21.182 15.1793C29.3663 6.99498 42.6356 6.99494 50.8199 15.1791C59.0028 23.3634 59.0026 36.633 50.8199 44.8174L36.0012 59.6334L21.182 44.8143C12.9992 36.6315 12.9992 23.3621 21.182 15.1793Z" fill="currentColor"/></svg>
`;

  const getDeliveryIcon = () => {
    const iconElWrap = document.createElement('i');
    iconElWrap.innerHTML = deliverySvg;
    return iconElWrap;
  };

  const bem = className => {
    return `package-logistics__${className}`;
  };

  function domToString(node) {
    let tmpNode = document.createElement('div');
    tmpNode.appendChild(node);
    const str = tmpNode.innerHTML;
    tmpNode = null;
    return str;
  }

  function renderLogisticBox(props, instance, {
    logisticsData
  }) {
    const {
      expressCode,
      expressCompany,
      expressUrl,
      pageData
    } = props;

    const addressPackageFn = () => {
      const telList = [];
      const {
        buyerPhone,
        buyerEmail
      } = pageData && pageData.buyerInfo || {};
      let receiverMobileOfBaseInfo = '';

      if (buyerPhone) {
        receiverMobileOfBaseInfo = buyerPhone.startsWith('00') ? buyerPhone.substring(2) : buyerPhone;
      } else if (buyerEmail) {
        receiverMobileOfBaseInfo = buyerEmail;
      }

      if (receiverMobileOfBaseInfo) {
        telList.push(receiverMobileOfBaseInfo);
      }

      return {
        telList
      };
    };

    const {
      telList
    } = addressPackageFn();
    const addressList = receiverInfoSerializer(pageData.receiverInfo);
    const logisticBoxWrapEl = document.createElement('div');
    logisticBoxWrapEl.className = bem('logistic-box-wrap');
    const logisticBoxEl = document.createElement('div');
    logisticBoxEl.className = bem('logistic-box');
    const logisticBoxInnerEl = document.createElement('div');
    logisticBoxInnerEl.className = bem('logistic-box-inner');
    const subTitleEL = document.createElement('div');
    subTitleEL.className = bem('sub-title');
    const subTitleTextEl = document.createTextNode(t('order.shipping.package_tracking'));
    subTitleEL.appendChild(subTitleTextEl);
    const logisticsDataEl = document.createElement('div');
    logisticsDataEl.setAttribute('scroll-lock-scrollable', '');
    logisticsDataEl.className = bem('logistic-data');
    const AddressItemDetailEl = document.createDocumentFragment();
    const shippingTitleEl = document.createElement('div');
    shippingTitleEl.className = bem('shipping-title');
    shippingTitleEl.textContent = t('cart.order.shipping_address');
    AddressItemDetailEl.appendChild(shippingTitleEl);
    const AddressItemDetailContentEl = document.createElement('div');
    AddressItemDetailContentEl.className = bem('address-detail-content');

    if (telList && telList.length !== 0) {
      const addressDetailEl = document.createElement('div');
      addressDetailEl.className = bem('address-detail');
      const pEl = document.createElement('div');
      let pElText = '';
      telList.forEach(addressItemText => {
        pElText = `${pElText + addressItemText},`;
      });
      pElText = pElText.replace(/,$/, '');
      pEl.textContent = pElText;
      addressDetailEl.appendChild(pEl);
      AddressItemDetailContentEl.appendChild(addressDetailEl);
    }

    if (addressList) {
      const addressDetailEl = document.createElement('div');
      addressDetailEl.className = bem('address-detail');
      addressList.forEach(addressItemText => {
        const pEl = document.createElement('div');
        pEl.className = 'information-item';
        pEl.textContent = `${addressItemText}`;
        addressDetailEl.appendChild(pEl);
      });
      AddressItemDetailContentEl.appendChild(addressDetailEl);
    }

    AddressItemDetailEl.appendChild(AddressItemDetailContentEl);
    const packageShipDataWrapEl = document.createElement('div');
    packageShipDataWrapEl.className = bem('packageShipData-wrap');
    const packageShipDataEl = document.createElement('div');
    packageShipDataEl.className = bem('packageShipData');
    const packageShipCompanyEl = document.createElement('span');
    packageShipCompanyEl.className = bem('packageShipData-company');

    if (expressCompany && expressCompany.length > 16) {
      packageShipCompanyEl.classList.add(bem('packageShipData-company__mobile-wrap'));
    }

    packageShipCompanyEl.innerText = expressCompany;
    const packageShipNoEl = document.createElement('span');
    packageShipNoEl.className = bem('packageShipData-no');
    packageShipNoEl.innerText = expressCode ? `${expressCode}` : '';

    if (expressCompany) {
      packageShipDataEl.appendChild(packageShipCompanyEl);
    }

    packageShipDataEl.appendChild(packageShipNoEl);
    packageShipDataWrapEl.appendChild(packageShipDataEl);
    const traceDataListFragmentEl = document.createDocumentFragment();
    const traceData = (logisticsData && logisticsData.traces || []).reverse();

    if (traceData.length === 0 && expressUrl) {
      const packageShipDataLinkTipEl = document.createElement('div');
      packageShipDataLinkTipEl.className = bem('link-tip');
      packageShipDataLinkTipEl.innerText = t('order.order_status.click_to_track');
      const packageShipDataLinkEl = document.createElement('a');
      packageShipDataLinkEl.href = expressUrl;
      packageShipDataLinkEl.target = '_blank';
      packageShipDataLinkEl.innerText = expressUrl;
      packageShipDataLinkEl.className = 'custom-link-color';
      packageShipDataWrapEl.appendChild(packageShipDataLinkTipEl);
      packageShipDataWrapEl.appendChild(packageShipDataLinkEl);
    }

    if (traceData.length !== 0) {
      const traceDataListEl = document.createElement('div');
      traceDataListEl.className = bem('traceDataList');
      traceData.forEach(traceDataItem => {
        const recordEl = document.createElement('div');
        recordEl.className = bem('record');
        const recordTimeEl = document.createElement('div');
        recordTimeEl.className = bem('recordTime');
        recordTimeEl.textContent = dayjs(traceDataItem.acceptTime).format('YYYY-MM-DD HH:mm A');
        const acceptStationEl = document.createElement('div');
        acceptStationEl.className = bem('acceptStation');
        acceptStationEl.textContent = traceDataItem.acceptStation;
        recordEl.appendChild(recordTimeEl);
        recordEl.appendChild(acceptStationEl);
        traceDataListEl.appendChild(recordEl);
      });
      traceDataListFragmentEl.appendChild(traceDataListEl);
    } else if (!expressUrl) {
      const traceNoDataEl = document.createElement('div');
      traceNoDataEl.className = bem('noData');
      const traceNoDataIconEl = getDeliveryIcon();
      traceNoDataIconEl.className = bem('icon');
      traceNoDataEl.appendChild(traceNoDataIconEl);
      const traceNoDataPEl = document.createElement('div');
      traceNoDataPEl.textContent = t('order.shipping.no_info');
      traceNoDataEl.appendChild(traceNoDataPEl);
      traceDataListFragmentEl.appendChild(traceNoDataEl);
    }

    const traceDataShowEl = traceDataListFragmentEl;
    logisticsDataEl.appendChild(AddressItemDetailEl);
    logisticsDataEl.appendChild(packageShipDataWrapEl);
    logisticsDataEl.appendChild(traceDataShowEl);

    const closeModal = () => {
      instance.hide(true);
      instance.destroy();
    };

    const iKnowEl = document.createElement('div');
    iKnowEl.className = bem('i-know');
    const iKnowButtonEl = document.createElement('button');
    iKnowButtonEl.className = `${bem('PackageLogisticsBtn')} btn btn-primary`;
    iKnowButtonEl.textContent = t('cart.cart.got_it');
    iKnowButtonEl.addEventListener('click', closeModal);
    iKnowEl.appendChild(iKnowButtonEl);
    const closeIconEl = getCloseIcon();
    closeIconEl.className = bem('close-icon');
    closeIconEl.addEventListener('click', closeModal);
    logisticBoxEl.appendChild(subTitleEL);
    logisticBoxEl.appendChild(logisticsDataEl);
    logisticBoxEl.appendChild(iKnowEl);
    logisticBoxWrapEl.appendChild(closeIconEl);
    logisticBoxWrapEl.appendChild(logisticBoxEl);
    return logisticBoxWrapEl;
  }

  function renderContentDOM(props) {
    const basicInfo = props.pageData.basicInfo || {};
    const {
      logisticsNo,
      expressCode,
      expressTypeSource,
      expressCompanyCode,
      packageSeq,
      logisticsNoMark
    } = props;
    const {
      orderMark: orderSeqMark,
      orderSeq
    } = basicInfo;
    const contentPlaceHolderDOM = document.createElement('div');
    const uniqueKey = Date.now();
    const contentPlaceHolderDOMId = bem(`placeholder-${uniqueKey}`);
    contentPlaceHolderDOM.id = contentPlaceHolderDOMId;
    contentPlaceHolderDOM.className = bem('placeholder');
    contentPlaceHolderDOM.innerHTML = loadingSvg;
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
      id: modalId
    };
    const baseInstance = new TradeModalWithHtml(baseModalOptions);
    baseInstance.show();

    closeModal = () => {
      baseInstance.hide(true);
    };

    let responsePromise = null;
    const isOMSDelivery = isOMSDeliveryFn(expressTypeSource);

    if (isOMSDelivery) {
      responsePromise = getLogisticsData({
        logisticsNo,
        logisticsNoMark
      });
    } else if (expressCode) {
      responsePromise = getCustomLogisticsDataV2({
        expressCode,
        expressCompanyCode,
        orderSeq,
        orderSeqMark,
        packageSeq
      });
    } else {
      responsePromise = Promise.reject();
    }

    responsePromise.then(response => {
      const contentDOM = renderLogisticBox(props, baseInstance, {
        logisticsData: response.data
      });
      const contentPlaceHolderRealDOM = document.querySelector(`#${contentPlaceHolderDOMId}`);
      const modalContentDom = contentPlaceHolderRealDOM.parentElement;
      modalContentDom.removeChild(contentPlaceHolderRealDOM);
      modalContentDom.appendChild(contentDOM);
    }, () => {
      const contentDOM = renderLogisticBox(props, baseInstance, {
        logisticsData: {}
      });
      const contentPlaceHolderRealDOM = document.querySelector(`#${contentPlaceHolderDOMId}`);
      const modalContentDom = contentPlaceHolderRealDOM.parentElement;
      modalContentDom.removeChild(contentPlaceHolderRealDOM);
      modalContentDom.appendChild(contentDOM);
    });
    return baseInstance;
  }

  function packageLogistics(options) {
    const modalInstance = renderContentDOM(options);
    return {
      raw: modalInstance
    };
  }

  _exports.default = packageLogistics;
  return _exports;
}();