(function(){
	var app = angular.module("store",[]);
	app.controller('StoreController',function(){
		this.products = gems;
	});
	var gems = [
		{
			name:'Dodecahedron',
			price:2.95,
			description:"This is a good one"
		},
		{
			name:'Test',
			price:1.95,
			description:"This is nice"
		}
	];
})();
