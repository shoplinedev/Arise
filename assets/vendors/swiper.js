import swiper, { Autoplay as swiper_autoplay, Navigation as swiper_navigation, Pagination as swiper_pagination, Keyboard as swiper_keyboard, EffectFade as swiper_effect_fade, Lazy as swiper_lazy, Thumbs as swiper_thumbs } from 'swiper';
import { extend as swiper_cjs_utils_utils_extend, bindModuleMethods as swiper_cjs_utils_utils_bind_module_methods } from 'swiper/cjs/utils/utils';
import 'swiper/swiper-bundle.css';
window['swiper'] = {
  'Autoplay': swiper_autoplay,
  'Navigation': swiper_navigation,
  'Pagination': swiper_pagination,
  'Keyboard': swiper_keyboard,
  'EffectFade': swiper_effect_fade,
  'Lazy': swiper_lazy,
  'Thumbs': swiper_thumbs,
  'default': swiper,
  '/cjs/utils/utils': {
    'extend': swiper_cjs_utils_utils_extend,
    'bindModuleMethods': swiper_cjs_utils_utils_bind_module_methods
  }
};