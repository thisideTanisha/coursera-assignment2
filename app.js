(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// To Buy Controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

// Already Bought Controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

// Service
function ShoppingListCheckOffService() {
  var service = this;

  // Initial to buy list
  var toBuyItems = [
    { name: "Milk", quantity: "2" },
    { name: "Donuts", quantity: "200" },
    { name: "Cookies", quantity: "300" },
    { name: "Chocolate", quantity: "5" },
    { name: "Apples", quantity: "10" }
  ];

  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    var item = toBuyItems.splice(itemIndex, 1)[0];
    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
