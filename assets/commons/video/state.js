window.SLM = window.SLM || {};

window.SLM['commons/video/state.js'] = window.SLM['commons/video/state.js'] || function () {
  const _exports = {};
  const playerState = {
    ended: 'ENDED',
    playing: 'PLAYING',
    paused: 'PAUSED',
    buffering: 'BUFFERING'
  };
  _exports.default = playerState;
  return _exports;
}();