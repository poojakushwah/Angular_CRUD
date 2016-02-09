( function() {
		angular.module("app").factory(function($http){
		return{
			ajax:$http.get("/heros")
		}
		})
		
	}());
