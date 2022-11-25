window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/order/detail/information.js'] = window.SLM['theme-shared/biz-com/customer/biz/order/detail/information.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const get = window['lodash']['get'];
  const { receiverInfoSerializer2D } = window['@sl/address-serializer'];
  const pageData = SL_State.get('customer.order') || {};

  const addressPackageFn = pageData => {
    const telList = [];
    const {
      buyerPhone,
      buyerEmail
    } = get(pageData, 'buyerInfo', {}) || {};
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

  const InformationContentElSelector = '.information-content';

  const renderInformation = () => {
    const {
      telList
    } = addressPackageFn(pageData);
    const addressList = receiverInfoSerializer2D(pageData.receiverInfo);
    const informationContentEl = document.querySelector(InformationContentElSelector);

    if (!informationContentEl) {
      return;
    }

    const AddressItemDetailContentEl = document.createDocumentFragment();
    {
      if (telList && telList.length !== 0) {
        const addressDetailEl = document.createElement('div');
        addressDetailEl.className = 'information-block';
        const pEl = document.createElement('div');
        pEl.className = 'information-item';
        let pElText = '';
        telList.forEach(addressItemText => {
          pElText = `${pElText + addressItemText},`;
        });
        pElText = pElText.replace(/,$/, '');
        pEl.textContent = pElText;
        addressDetailEl.appendChild(pEl);
        AddressItemDetailContentEl.appendChild(addressDetailEl);
      }

      const {
        shippingRequired = true
      } = get(pageData, 'basicInfo', {}) || {};

      if (addressList && shippingRequired) {
        const addressDetailEl = document.createElement('div');
        addressDetailEl.className = 'information-block';
        addressList.forEach(addressItemText => {
          const pEl = document.createElement('div');
          pEl.className = 'information-item';
          pEl.textContent = `${addressItemText}`;
          addressDetailEl.appendChild(pEl);
        });
        AddressItemDetailContentEl.appendChild(addressDetailEl);
      }
    }
    informationContentEl.innerHTML = '';
    informationContentEl.appendChild(AddressItemDetailContentEl);
  };

  _exports.default = renderInformation;
  return _exports;
}();