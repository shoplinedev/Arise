window.SLM = window.SLM || {};

window.SLM['stage/multi-media-splicing/index.js'] = window.SLM['stage/multi-media-splicing/index.js'] || function () {
  const _exports = {};
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const Video = window['SLM']['stage/video/utils/video.js'].default;

  class MultiMediaSplicing {
    constructor(container) {
      this.instances = [];
      const $videos = container.find(`[data-block-type='video']`);
      if (!$videos.length) return;
      $videos.each((_, video) => {
        this.instances.push(new Video($(video), {
          clickCallback: () => {
            container.find('.video__controll').toggleClass('d-none', false);
          }
        }));
      });
    }

    onUnload() {
      if (this.instances.length) {
        this.instances.forEach(instance => {
          instance.onUnload();
        });
      }
    }

  }

  MultiMediaSplicing.type = 'multi-media-splicing';
  registrySectionConstructor(MultiMediaSplicing.type, MultiMediaSplicing);
  return _exports;
}();