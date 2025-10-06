document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.sticky-top');
  const navbar = header.querySelector('.navbar');
  const lightSection = document.querySelector('.light-section');

  if (!header || !lightSection || !navbar) {
    return;
  }

  function checkSection() {
    const lightSectionTop = lightSection.getBoundingClientRect().top;
    const lightSectionBottom = lightSection.getBoundingClientRect().bottom;
    const navbarHeight = navbar.offsetHeight;

    if (lightSectionTop <= navbarHeight && lightSectionBottom >= navbarHeight) {
      navbar.classList.remove('navbar-dark', 'bg-custom-dark');
      navbar.classList.add('navbar-light', 'bg-light');
    } else {
      navbar.classList.remove('navbar-light', 'bg-light');
      navbar.classList.add('navbar-dark', 'bg-custom-dark');
    }
  }

  // Check on load
  checkSection();

  // Check on scroll
  window.addEventListener('scroll', checkSection);
});
