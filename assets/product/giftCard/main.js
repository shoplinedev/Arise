window.SLM = window.SLM || {};

window.SLM['product/giftCard/main.js'] = window.SLM['product/giftCard/main.js'] || function () {
  const _exports = {};
  const QRCode = window['qrcode']['default'];
  const JsBarcode = window['jsbarcode']['default'];
  const barcodeContainer = document.querySelector('.giftCardBarcode');

  if (barcodeContainer) {
    const opts = {
      displayValue: false
    };
    const {
      giftCode
    } = barcodeContainer.dataset;
    JsBarcode('#giftCardBarcodeImg', giftCode, opts);
  }

  const opts = {
    errorCorrectionLevel: 'H',
    type: 'image/jpeg',
    margin: 2
  };
  const qrcodeContainer = document.querySelector('.giftCardQrCode');

  if (qrcodeContainer) {
    const {
      giftCode
    } = qrcodeContainer.dataset;

    if (giftCode) {
      QRCode.toDataURL(giftCode, opts).then(url => {
        const img = document.createElement('img');
        img.src = url;
        qrcodeContainer.insertAdjacentElement('afterbegin', img);
      }).catch(err => {
        console.error(err);
      });
    }
  }

  return _exports;
}();