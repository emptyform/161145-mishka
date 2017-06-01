var toggler = document.querySelector('.main-nav__toggler');
var mainNav = document.querySelector('.main-nav');

toggler.addEventListener('click', function () {
  mainNav.classList.toggle('main-nav--hidden');
  toggler.classList.toggle('main-nav__toggler--close');
  toggler.classList.toggle('main-nav__toggler--open')
});
