var toggler = document.querySelector('.main-nav__toggler');
var navigation = document.querySelector('.main-nav__navigation-list');
var userPanel = document.querySelector('.main-nav__user-panel-list');

toggler.addEventListener('click', function () {
  navigation.classList.toggle('main-nav__navigation-list--close');
  userPanel.classList.toggle('main-nav__user-panel-list--close');
  toggler.classList.toggle('main-nav__toggler--open');
});
