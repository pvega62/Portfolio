
document.addEventListener('DOMContentLoaded', () => {
  const markdownCards = document.querySelectorAll('[data-md]');

  markdownCards.forEach(card => {
    const markdownUrl = card.dataset.md;
    const cardBody = card.querySelector('.card-body');

    if (markdownUrl && cardBody) {
      fetch(markdownUrl)
        .then(response => response.text())
        .then(markdown => {
          const html = markdownToHtml(markdown);
          const preview = document.createElement('div');
          preview.innerHTML = html;
          preview.classList.add('markdown-preview');

          const placeholder = card.querySelector('.bd-placeholder-img');
          if (placeholder) {
            placeholder.replaceWith(preview);
          }
        });
    }
  });

  function markdownToHtml(markdown) {
    // A simple markdown to html converter
    let html = markdown
      .replace(/^### (.*$)/gim, '<h2>$1</h2>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
      .replace(/**(.*?)**/gim, '<b>$1</b>')
      .replace(/*(.*?)*/gim, '<i>$1</i>')
      .replace(/! [(.*?)]((.*?))/gim, '<img alt="$1" src="$2">')
      .replace(/ [(.*?)]((.*?))/gim, '<a href="$2">$1</a>')
      .replace(/\n/g, '<br>');

    return html.trim();
  }
});
