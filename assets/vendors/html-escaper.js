import { escape as html_escaper_escape, unescape as html_escaper_unescape } from 'html-escaper';
window['html-escaper'] = {
  'escape': html_escaper_escape,
  'unescape': html_escaper_unescape
};