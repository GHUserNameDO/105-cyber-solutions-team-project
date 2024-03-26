// Відкриття вікна меню
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();

// Анімація відкриття вікна меню
document.getElementById('toggleMenu').addEventListener('click', function () {
  document.getElementById('mobileMenu').classList.toggle('open');
});

// Закриття вікна меню при натисканні на пункт навігації
var menuLinks = document.querySelectorAll('.menu-nav-link');
var menu = document.querySelector('.menu');
var closeButton = document.querySelector('.menu-close-btn');
function closeMenu() {
  menu.classList.remove('is-open');
}
closeButton.addEventListener('click', function () {
  closeMenu();
});
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    closeMenu();
  });
});
