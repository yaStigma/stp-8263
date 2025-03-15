document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuToggle || !closeMenu || !mobileMenu) {
    return;
  }

  menuToggle.addEventListener('click', function (event) {
    event.stopPropagation();
    mobileMenu.classList.add('active');
  });

  closeMenu.addEventListener('click', function (event) {
    event.stopPropagation();
    mobileMenu.classList.remove('active');
  });

  document.addEventListener('click', function (event) {
    if (
      !mobileMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      mobileMenu.classList.remove('active');
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      mobileMenu.classList.remove('active');
    }
  });
});
