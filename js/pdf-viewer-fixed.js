// PDF and Markdown Viewer shared module
(function () {
  if (window.__pdfViewerInitialized) return;
  window.__pdfViewerInitialized = true;

  const modalHtml = `
  <div class="modal fade" id="pdfModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="pdfModalLabel">Document Viewer</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-0 position-relative">
          <div id="pdfSpinner" class="position-absolute top-50 start-50 translate-middle" style="z-index:1051; display:none;">
            <div class="spinner-border text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>
          </div>
          <div id="pdfModalContainer" style="height: 100%;">
            <iframe id="pdfModalIframe" class="w-100 h-100" src="" title="PDF viewer" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = modalHtml;
    document.body.appendChild(wrapper);

    const modalEl = document.getElementById('pdfModal');
    const modalLabel = document.getElementById('pdfModalLabel');
    const iframe = document.getElementById('pdfModalIframe');
    const spinner = document.getElementById('pdfSpinner');
    const bsModal = new bootstrap.Modal(modalEl, { keyboard: true });

    function showSpinner(show) {
      if (spinner) spinner.style.display = show ? 'block' : 'none';
    }

    function openPdf(src, title) {
      if (!iframe || !modalEl) return;
      modalLabel.textContent = title || 'Document Viewer';
      iframe.srcdoc = '';
      iframe.src = encodeURI(src);
      showSpinner(true);
      bsModal.show();
    }

    function openMarkdown(html, title) {
      if (!iframe || !modalEl) return;
      modalLabel.textContent = title || 'Document Viewer';
      iframe.src = '';
      iframe.srcdoc = `<style>body { padding: 2rem; } img { max-width: 100%; }</style>${html}`;
      showSpinner(false);
      bsModal.show();
    }

    iframe.addEventListener('load', () => {
      if (!iframe.srcdoc) showSpinner(false);
    });

    modalEl.addEventListener('hidden.bs.modal', () => {
      iframe.src = '';
      iframe.srcdoc = '';
    });

    function loadScript(url) {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${url}"]`)) return resolve();
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
        document.head.appendChild(script);
      });
    }

    async function renderPreview(wrapper, url, type) {
      const thumb = wrapper.nextElementSibling;
      try {
        if (type === 'pdf') {
          try {
            await loadScript('https://cdn.jsdelivr.net/npm/pdfjs-dist@3.9.179/build/pdf.min.js');
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.9.179/build/pdf.worker.min.js';
            const pdf = await window.pdfjsLib.getDocument(encodeURI(url)).promise;
            const page = await pdf.getPage(1);
            const canvas = document.createElement('canvas');
            const rect = wrapper.getBoundingClientRect();
            const scale = (rect.width * window.devicePixelRatio) / page.getViewport({ scale: 1 }).width;
            const viewport = page.getViewport({ scale });
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
            canvas.style.width = '100%';
            canvas.style.height = 'auto';
            wrapper.appendChild(canvas);
          } catch (e) {
            if (location.protocol === 'file:') {
              const iframe = document.createElement('iframe');
              iframe.className = 'w-100 h-100';
              iframe.src = encodeURI(url);
              wrapper.appendChild(iframe);
            } else {
              throw e;
            }
          }
        } else if (type === 'md') {
          await loadScript('https://cdn.jsdelivr.net/npm/showdown/dist/showdown.min.js');
          const response = await fetch(url);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const markdown = await response.text();
          const converter = new showdown.Converter();
          const html = converter.makeHtml(markdown);
          const previewContent = document.createElement('div');
          previewContent.innerHTML = `<style>div{padding:1rem;background:#fff;height:100%;overflow:auto;}img{max-width:100%}</style><div>${html}</div>`;
          wrapper.appendChild(previewContent);
        }
        if (thumb && thumb.matches('.card-img-top')) thumb.style.display = 'none';
      } catch (e) {
        console.warn(`${type.toUpperCase()} preview render failed`, e);
      }
    }

    const previewObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const wrapper = entry.target;
        const pdfUrl = wrapper.dataset.pdf;
        const mdUrl = wrapper.dataset.md;
        if (pdfUrl) renderPreview(wrapper, pdfUrl, 'pdf');
        else if (mdUrl) renderPreview(wrapper, mdUrl, 'md');
        obs.unobserve(wrapper);
      });
    }, { rootMargin: '300px 0px' });

    document.querySelectorAll('.sample-card').forEach(card => {
      const pdf = card.getAttribute('data-pdf');
      const md = card.getAttribute('data-md');
      const href = card.getAttribute('data-href');
      const title = (card.querySelector('.card-title') || {}).textContent || '';
      const thumb = card.querySelector('.card-img-top');

      if (thumb && (pdf || md)) {
        const previewWrapper = document.createElement('div');
        previewWrapper.className = 'ratio ratio-4x3 mb-3 preview-wrapper';
        if (pdf) previewWrapper.dataset.pdf = pdf;
        if (md) previewWrapper.dataset.md = md;
        thumb.parentNode.insertBefore(previewWrapper, thumb);
        previewObserver.observe(previewWrapper);
      }

      card.addEventListener('click', async () => {
        console.log('Card clicked', { pdf, md, href });
        if (href) window.open(href, '_blank', 'noopener');
        else if (pdf) openPdf(pdf, title.trim());
        else if (md) {
          try {
            showSpinner(true);
            await loadScript('https://cdn.jsdelivr.net/npm/showdown/dist/showdown.min.js');
            const response = await fetch(md);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const markdown = await response.text();
            const converter = new showdown.Converter();
            const html = converter.makeHtml(markdown);
            openMarkdown(html, title.trim());
          } catch (e) {
            console.error('Failed to open markdown', e);
            showSpinner(false);
          }
        }
      });
    });
  });
})();
