(function(){
	var app = angular.module("store",[]);
	app.controller('StoreController',function(){
		this.products = gems;
	});
	app.controller('PanelController',function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab; 
		};
		this.isSelected = function(checkTab){
			return this.tab  === checkTab;
		};
	});
	app.controller('ReviewController',function(){
		this.review = {};
		this.addReview = function(){
			product.reviews.push(this.review);
			this.review={};
		};
	});
	var gems = [
		{
			name:'Dodecahedron',
			price:2.95,
			description:"This is a good one",
			reviews:[{
				stars:5,
				body:"I love this product",
				author:"joe@thomas.com"
				},
				{
				stars:1,
				body:"I hate this product",
				author:"e@thomas.com"
				}
			]
		},
		{
			name:'Dodecahedron',
			price:2.95,
			description:"This is a good one",
			reviews:[{
				stars:5,
				body:"I love this product",
				author:"joe@thomas.com"
				},
				{
				stars:1,
				body:"I hate this product",
				author:"e@thomas.com"
				}
			]
		}
	];
})();
