import * as pdfjs_dist_legacy_build_pdf from 'pdfjs-dist/legacy/build/pdf';
import pdfjs_dist_legacy_build_pdf_worker_entry from 'pdfjs-dist/legacy/build/pdf.worker.entry';
window['pdfjs-dist'] = {
  '/legacy/build/pdf': {
    'default': pdfjs_dist_legacy_build_pdf.default,
    '*': pdfjs_dist_legacy_build_pdf
  },
  '/legacy/build/pdf.worker.entry': {
    'default': pdfjs_dist_legacy_build_pdf_worker_entry
  }
};