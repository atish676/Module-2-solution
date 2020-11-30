(function(){
	'use strict';
	
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
	
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController (ShoppingListCheckOffService){
		var buy = this;
		
		buy.getItems = ShoppingListCheckOffService.getBuyItems();
		
		buy.message = function(){
			return (buy.getItems == "");
		};
		
		buy.changeToBought = function(index){
			ShoppingListCheckOffService.changeToBought(index);
		};
	}
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController (ShoppingListCheckOffService){
		var bought = this;
		
		bought.getItems = ShoppingListCheckOffService.getBoughtItems();	

		bought.message = function(){
			return (bought.getItems == "");
		};
	}
	
	function ShoppingListCheckOffService(){
		var service = this;
		var buyArray = [
				{
					name: "Maggi",
					quantity: "10"
				},
				{
					name: "Biscuits",
					quantity: "5"
				},
				{
					name: "Fruitcake",
					quantity: "5"
				},
				{
					name: "Cold Drink",
					quantity: "3"
				},
				{
					name: "Soup",
					quantity: "3"
				},
				{
					name: "Pasta",
					quantity: "4"
				}
			];
		var boughtArray = [];
		
		service.changeToBought = function(index){
			boughtArray.push(buyArray.splice(index, 1)[0]);	
		};
		
		service.getBuyItems = function(){
			return buyArray;
		};
		
		service.getBoughtItems = function(){
			return boughtArray;
		};
	}
})();