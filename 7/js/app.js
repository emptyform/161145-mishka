'use strict';

var toggler = document.querySelector('.main-nav__toggler');
var navigation = document.querySelector('.main-nav__navigation-list');
var userPanel = document.querySelector('.main-nav__user-panel-list');

navigation.classList.add('main-nav__navigation-list--close');
userPanel.classList.add('main-nav__user-panel-list--close');
toggler.classList.remove('main-nav__toggler--hidden');
toggler.classList.add('main-nav__toggler--close');

toggler.addEventListener('click', function () {
  navigation.classList.toggle('main-nav__navigation-list--close');
  userPanel.classList.toggle('main-nav__user-panel-list--close');
  toggler.classList.toggle('main-nav__toggler--open');
});
