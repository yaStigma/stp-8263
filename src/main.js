document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = document.querySelectorAll('.nav-link');
  const scrollToTopBtn = document.getElementById('scrollToTop');

  if (!menuToggle || !closeMenu || !mobileMenu || !scrollToTopBtn) {
    return;
  }

  function toggleMenu() {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active')
      ? 'hidden'
      : '';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  closeMenu.addEventListener('click', function (event) {
    event.stopPropagation();
    closeMobileMenu();
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 85,
          behavior: 'smooth',
        });
      }

      closeMobileMenu();
    });
  });

  document.addEventListener('click', function (event) {
    if (
      !mobileMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMobileMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMobileMenu();
    }
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});

//*Динамічна зміна scroll-margin-top//*

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('section');

  function updateScrollMargin() {
    const headerHeight = header.classList.contains('scrolled') ? 80 : 100;
    const extraOffset = 10;
    sections.forEach(section => {
      section.style.scrollMarginTop = `${headerHeight + extraOffset}px`;
    });
  }

  window.addEventListener('scroll', updateScrollMargin);
  updateScrollMargin();
});
