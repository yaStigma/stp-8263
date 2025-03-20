document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const scrollToTopBtn = document.getElementById('scrollToTop');

  if (
    !header ||
    !hero ||
    !mobileMenu ||
    !menuToggle ||
    !closeMenu ||
    !scrollToTopBtn
  )
    return;

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      window.scrollTo({
        top: target.offsetTop - header.offsetHeight,
        behavior: 'smooth',
      });

      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });

  document.addEventListener('click', e => {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  window.addEventListener('scroll', () => {
    scrollToTopBtn.classList.toggle('show', window.scrollY > 300);
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

//*Зміна колоьру хедер при скролі//*

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  if (!header) {
    console.error("Header element not found!");
    return;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
