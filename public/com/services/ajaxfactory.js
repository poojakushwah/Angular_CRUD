( function() {
		angular.module("app").factory("ajaxfactory",function($http){
		return{
			ajax:$http.get("/heros")	
		}
		})
		
	}());
