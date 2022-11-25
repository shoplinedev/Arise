window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/utils/getYouTubeCover.js'] = window.SLM['theme-shared/components/hbs/shared/utils/getYouTubeCover.js'] || function () {
  const _exports = {};

  const getYouTubeCover = videoResource => {
    if (typeof videoResource !== 'string') {
      return null;
    }

    const youTubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

    const getYouTubeIdByVideoUrl = url => {
      const matches = url && url.match(youTubeRegex) || [];
      return matches[1];
    };

    const getVideoCover = videoId => {
      const coverUrlPrefix = `https://i.ytimg.com/vi/${videoId}`;
      return {
        maxQuality: `${coverUrlPrefix}/maxresdefault.jpg`,
        aboveMiddle: `${coverUrlPrefix}/sddefault.jpg`,
        middle: `${coverUrlPrefix}/mqdefault.jpg`,
        lowerMiddle: `${coverUrlPrefix}/hqdefault.jpg`,
        minQuality: `${coverUrlPrefix}/default.jpg`,
        videoId
      };
    };

    if (videoResource.indexOf('www.youtube.com') !== -1) {
      const videoId = getYouTubeIdByVideoUrl(videoResource);
      return getVideoCover(videoId);
    }

    return getVideoCover(videoResource);
  };

  _exports.default = getYouTubeCover;
  return _exports;
}();