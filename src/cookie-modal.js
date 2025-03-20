document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('cookie-modal');
  const acceptBtn = document.getElementById('accept-cookies');
  const declineBtn = document.getElementById('decline-cookies');

  if (localStorage.getItem('cookieConsent')) {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  acceptBtn.addEventListener('click', function () {
    localStorage.setItem('cookieConsent', 'accepted');
    closeModal();
  });

  declineBtn.addEventListener('click', function () {
    localStorage.setItem('cookieConsent', 'declined');
    closeModal();
  });
});
