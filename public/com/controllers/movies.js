( function() {
		angular.module("app").controller("movies",function($scope,ajaxfactory,$routeParams,$http){
			$scope.data,
			$scope.movies,
			$scope.mt,
			$scope.sl,
			$scope.mp,
			$scope.selectedHero=null;
			$scope.selectedHero=$routeParams.hid;
			
			$scope.addMovies=function(){
				//console.log($scope.movies.length+1);
				var moviedata={
				//sl:$scope.movies.length+1,
                title: $scope.mt,
                poster: $scope.mp
				};
				$http.put("/movies/"+$scope.selectedHero,moviedata)
				.success(function(r, s, x){
					$scope.data=r.heros;
					//$scope.movies = $scope.data[$scope.selectedHero - 1].movieslist;
					listMovies();
				})
				.error(function(e, s, x){
					console.log("Error");
				});
			};
			ajaxfactory.ajax
			.success(function(r, s, x) {
				$scope.data=r.heros;
				listMovies();
			}).error(function(err, s, x) {
				$log(err);
			});
			function listMovies() {
				$scope.movies = $scope.data[$scope.selectedHero - 1].movieslist;
			};
		
		});
		
	}());
