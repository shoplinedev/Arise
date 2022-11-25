window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/import-chunk.js'] = window.SLM['theme-shared/utils/import-chunk.js'] || function () {
  const _exports = {};
  const chunkList = [];

  function importChunk(chunkName) {
    if (chunkList.includes(chunkName)) {
      return;
    }

    const {
      js,
      css
    } = window.__CHUNK_URL__[chunkName];
    const link = document.createElement('link');
    link.href = css;
    link.rel = 'stylesheet';
    const script = document.createElement('script');
    script.src = js;
    document.head.append(link);
    document.body.append(script);
    chunkList.push(chunkName);
  }

  _exports.default = importChunk;
  return _exports;
}();