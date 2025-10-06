document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.sticky-top .navbar');
  const lightSections = document.querySelectorAll('.light-section, .bg-tan');

  if (!navbar || lightSections.length === 0) {
    return;
  }

  function checkNavbarColor() {
    const navbarHeight = navbar.offsetHeight;
    let isOverLightSection = false;

    lightSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      // Check if the navbar is vertically within the bounds of the section
      if (sectionTop <= navbarHeight && sectionBottom >= navbarHeight) {
        isOverLightSection = true;
      }
    });

    if (isOverLightSection) {
      navbar.classList.remove('navbar-dark', 'bg-custom-dark');
      navbar.classList.add('navbar-light', 'bg-light');
    } else {
      navbar.classList.remove('navbar-light', 'bg-light');
      navbar.classList.add('navbar-dark', 'bg-custom-dark');
    }
  }

  // Initial check
  checkNavbarColor();

  // Check on scroll
  window.addEventListener('scroll', checkNavbarColor);
});