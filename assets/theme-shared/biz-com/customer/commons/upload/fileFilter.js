window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/upload/fileFilter.js'] = window.SLM['theme-shared/biz-com/customer/commons/upload/fileFilter.js'] || function () {
  const _exports = {};

  function filterImages(files) {
    if (!Array.isArray(files)) return [];
    return files.filter(file => {
      const {
        name
      } = file;
      if (!name) return false;
      const extCursor = name.lastIndexOf('.');
      if (extCursor < 0) return false;
      const ext = name.slice(extCursor).toLowerCase();
      return validateImageExtension(ext);
    });
  }

  _exports.filterImages = filterImages;
  const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.jfif', '.pjpeg', '.pjp', '.png', '.gif', '.webp'];
  _exports.IMAGE_EXTENSIONS = IMAGE_EXTENSIONS;
  const IMAGE_ACCEPTS = IMAGE_EXTENSIONS.join(',');
  _exports.IMAGE_ACCEPTS = IMAGE_ACCEPTS;

  function validateImageExtension(ext) {
    if (!ext) return false;
    return IMAGE_EXTENSIONS.indexOf(ext) >= 0;
  }

  return _exports;
}();