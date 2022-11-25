window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/renderPdf.js'] = window.SLM['theme-shared/utils/renderPdf.js'] || function () {
  const _exports = {};
  const PDFJS = window['pdfjs-dist']['/legacy/build/pdf']['*'];
  const pdfjsWorker = window['pdfjs-dist']['/legacy/build/pdf.worker.entry'].default;
  PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker;
  const FILE_SIZE = {
    KB: 1024,
    MB: 1024 * 1024
  };
  _exports.FILE_SIZE = FILE_SIZE;

  const isFunction = fn => {
    return typeof fn === 'function';
  };

  _exports.isFunction = isFunction;

  const canvasToBlob = (canvas, fileSize, callback) => {
    if (!canvas) {
      console.error('canvas 为空！');
      return;
    }

    let quality = 0.92;

    if (fileSize <= 5 * FILE_SIZE.MB) {
      quality = 1;
    } else if (fileSize > 5 * FILE_SIZE.MB && fileSize <= 10 * FILE_SIZE.MB) {
      quality = 0.7;
    } else if (fileSize > 10 * FILE_SIZE.MB && fileSize <= 15 * FILE_SIZE.MB) {
      quality = 0.6;
    } else {
      quality = 0.5;
    }

    canvas.toBlob(blob => {
      isFunction(callback) && callback(blob);
    }, 'image/jpeg', quality);
  };

  _exports.canvasToBlob = canvasToBlob;

  const getPdfPage = (pdfFile, pageNumber, context, fileSize, callback) => {
    pdfFile.getPage(pageNumber).then(page => {
      const viewport = page.getViewport({
        scale: 1
      });
      const {
        canvas
      } = context;
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      const renderContext = {
        canvasContext: context,
        viewport
      };
      const renderTask = page.render(renderContext);
      renderTask.promise.then(() => {
        canvasToBlob(canvas, fileSize, callback);
      });
    });
  };

  _exports.getPdfPage = getPdfPage;

  const renderPdf = (file, callback) => {
    const fileSize = file.size;
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = e => {
      const typedArray = new Uint8Array(e.target.result);
      const docTask = PDFJS.getDocument(typedArray);
      docTask.promise.then(pdf => {
        if (pdf) {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          const pageNum = 1;
          getPdfPage(pdf, pageNum, context, fileSize, callback);
        }
      }).catch(reason => {
        console.error(`Error: ${reason}`);
      });
    };
  };

  _exports.renderPdf = renderPdf;
  return _exports;
}();