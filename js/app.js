'use strict';

var toggler = document.querySelector('.main-nav__toggler');
var navigation = document.querySelector('.main-nav__navigation-list');
var userPanel = document.querySelector('.main-nav__user-panel-list');
var itemCart = document.querySelectorAll('.catalog-item__cart');
var itemModule = document.querySelector('.item-module');
var orderBtn = document.querySelector('.week-deal__order');
var mapImage = document.querySelector('.contacts__map--image');
var mapIframe = document.querySelector('.contacts__map--iframe');

navigation.classList.add('main-nav__navigation-list--close');
userPanel.classList.add('main-nav__user-panel-list--close');
toggler.classList.remove('main-nav__toggler--hidden');
toggler.classList.add('main-nav__toggler--close');
mapImage.classList.add('contacts__map--hidden');
mapIframe.classList.remove('contacts__map--hidden');

toggler.addEventListener('click', function () {
  navigation.classList.toggle('main-nav__navigation-list--close');
  userPanel.classList.toggle('main-nav__user-panel-list--close');
  toggler.classList.toggle('main-nav__toggler--open');
});

for (var i = 0; i < itemCart.length; i++) {
  closeOnClick(itemCart[i]);
}

function closeOnClick(element) {
  element.addEventListener('click', function() {
    itemModule.classList.remove('item-module--close');
  });
}
itemModule.addEventListener('click', function() {
  itemModule.classList.add('item-module--close');
});

orderBtn.addEventListener('click', function() {
  itemModule.classList.remove('item-module--close');
});
