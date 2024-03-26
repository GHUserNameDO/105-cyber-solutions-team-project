window.addEventListener('DOMContentLoaded', function () {
  const headerNavLinks = document.querySelectorAll('.header-menu-link');
  const mobileNavLinks = document.querySelectorAll('.menu-nav-link');

  function highlightNavLink(navLinks) {
    let scrollY = window.pageYOffset;

    navLinks.forEach(link => {
      const sectionId = link.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);

      if (section) {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
          });
          link.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', function () {
    highlightNavLink(headerNavLinks);
    highlightNavLink(mobileNavLinks);
  });

  const heroNavLink = document.querySelector('.header-menu-link[href="#hero"]');
  if (heroNavLink) {
    heroNavLink.addEventListener('click', function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
// =======================================================
