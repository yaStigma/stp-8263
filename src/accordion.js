document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    function toggleItem() {
      const isActive = item.classList.contains('active');

      items.forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    }

    header.addEventListener('click', toggleItem);
    content.addEventListener('click', toggleItem);
  });
});
