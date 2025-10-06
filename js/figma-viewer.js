(function () {
  if (window.__figmaViewerInitialized) return;
  window.__figmaViewerInitialized = true;

  document.addEventListener('DOMContentLoaded', () => {
    const modalEl = document.getElementById('figmaModal');
    if (!modalEl) return;

    const iframe = modalEl.querySelector('iframe');
    const bsModal = new bootstrap.Modal(modalEl, { keyboard: true });

    function loadFigma(src) {
      if (!iframe) return;
      iframe.src = src;
    }

    function openFigma(src) {
      loadFigma(src);
      bsModal.show();
    }

    function closeFigma() {
      if (!iframe) return;
      iframe.src = '';
    }

    modalEl.addEventListener('shown.bs.modal', function (event) {
      const button = event.relatedTarget;
      if (!button) return;
      const figmaSrc = button.getAttribute('data-figma-src');
      if (figmaSrc) {
        loadFigma(figmaSrc);
      }
    });

    modalEl.addEventListener('hidden.bs.modal', () => {
      closeFigma();
    });
  });
})();
