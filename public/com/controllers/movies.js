( function() {
		angular.module("app").controller("movies",function($scope,ajaxfactory,$routeParams){
			$scope.data = null;
			$scope.selectedHero=0;
			$scope.selectedHero=$routeParams.hid;
			ajaxfactory.ajax
			.success(function(r, s, x) {
				$scope.data=r.heros;
				function listMovies() {
				$scope.movies = $scope.data[$scope.selectedHero - 1].movieslist;
				};
				listMovies();
			}).error(function(err, s, x) {
				$log(err)
			})
		
		});
		
	}());
