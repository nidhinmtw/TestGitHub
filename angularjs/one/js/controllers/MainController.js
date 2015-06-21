app.controller('MainController', ['$scope', function($scope) {
	$scope.title = 'Top Sellers in CDs';
	$scope.promo = 'Buy 2 Get 1 on all Books';
	$scope.products = [ 
				  { 
				    name: 'The Book of Trees', 
				    price: 19, 
				    pubdate: new Date('2014', '03', '08'), 
				    cover: 'img/the-book-of-trees.jpg',
				    likes: 0,
				    dislikes: 0
				  }, 
				  { 
				    name: 'Program or be Programmed', 
				    price: 8, 
				    pubdate: new Date('2013', '08', '01'), 
				    cover: 'img/program-or-be-programmed.jpg',
				    likes: 0,
				    dislikes: 0
				  },
				  {
				  	name: 'Lord of the Rings',
				  	price: 4,
				  	pubdate: new Date(1998, 03, 03),
				  	cover: 'img/the-book-of-trees.jpg',
				  	likes: 0,
				    dislikes: 0
				  },
				  {
				  	name: 'Tarzan of the Apes',
				  	price: 2.5,
				  	pubdate: new Date(1898, 03, 03),
				  	cover: 'img/the-book-of-trees.jpg',
				  	likes: 0,
				    dislikes: 0
				  }
				]
				$scope.plusOne = function(index)
				{
					$scope.products[index].likes+=1;
				};
				$scope.minusOne = function(index)
				{
					$scope.products[index].dislikes+=1;
				};
}]);