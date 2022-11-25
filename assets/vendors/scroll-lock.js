import { disablePageScroll as scroll_lock_disable_page_scroll, enablePageScroll as scroll_lock_enable_page_scroll } from 'scroll-lock';
window['scroll-lock'] = {
  'disablePageScroll': scroll_lock_disable_page_scroll,
  'enablePageScroll': scroll_lock_enable_page_scroll
};