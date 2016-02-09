( function() {
		angular.module("app").config(function($routeProvider){
		$routeProvider
		.when("/",{
			controller:"heros",
			templateUrl:"com/views/heros.html"
		})	
		.when("/movies/:hid",{
			controller:"movies",
			templateUrl:"com/views/movies.html"
		})	
		})
		
	}());
