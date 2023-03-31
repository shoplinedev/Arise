window.SLM = window.SLM || {};

window.SLM['theme-shared/report/stage/const.js'] = window.SLM['theme-shared/report/stage/const.js'] || function () {
  const _exports = {};
  const sectionTypeEnum = {
    header: '页头',
    footer: '页脚',
    'collection-list': '商品分类',
    'custom-html': '自定义HTML',
    faqs: '常见问题',
    'featured-collection': '精选商品',
    'image-with-text': '图文模块',
    'large-image-with-text-box': '单图',
    'logo-list': '图标申明',
    slideshow: '轮播图',
    'text-columns-with-images': '图文列表',
    video: '视频',
    'footer-promotion': '页脚推广',
    'featured-product': '单个商品',
    'rich-text': '富文本',
    'sign-up-and-save': '邮箱订阅',
    'icon-list': '商标列表',
    'promotion-grid': '活动推广',
    'split-slideshow': '特色轮播图',
    grid: '图文网格',
    mosaic: '特色推荐',
    'multilevel-filter': '多级筛选',
    'shoppable-image': '购物图片',
    testimonials: '评论模块',
    timeline: '时间线',
    blog: '博客',
    'contact-form': '联系我们表单',
    'image-banner': '图片横幅',
    'multi-media-splicing': '媒体拼接',
    'custom-page': '自定义页面',
    map: '地图',
    'carousel-collection-list': '轮播商品分类',
    'carousel-images-with-text': '图文轮播',
    'featured-logo-list': '特色图标申明',
    'collection-with-image': '带封面的精选商品',
    offers: '优惠横幅',
    'product-list': '商品列表'
  };
  _exports.sectionTypeEnum = sectionTypeEnum;
  const virtualComponentEnum = {
    user: 101,
    cart: 102,
    search: 103,
    localeItem: 104,
    locale: 105,
    currencyItem: 106,
    currency: 107,
    navItem: 108,
    announcement: 109,
    socialItem: 110,
    newsletter: 111,
    searchSuggest: 112
  };
  _exports.virtualComponentEnum = virtualComponentEnum;
  const virtualPageEnum = {
    fixedSction: 132,
    dynamicSection: 145
  };
  _exports.virtualPageEnum = virtualPageEnum;
  return _exports;
}();