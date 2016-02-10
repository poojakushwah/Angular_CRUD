( function() {
		function herofun($scope, ajaxfactory,$http) {
			$scope.data = null;
			$scope.ht,$scope.hp,$scope.hc,$scope.hpo=null;
			
			$scope.addHero=function(){
				//console.log($scope.data.heros.length)
				var postdata={
				//id:Number($scope.data.length+1),
		        movies: 0,
		        title:$scope.ht,
		        city: $scope.hc,
		        power:$scope.hpo,
		        photo: $scope.hp,
		        movieslist: []	
				}
				$http.post("/heros",postdata).success(function(r,s,x){
					$scope.data=r;
				})
			}
			
			
			$scope.filterData='';
				$scope.sortOrder='join';
				$scope.rev=false;
				$scope.fun=function(param){
					$scope.sortOrder = param;
					$scope.rev = !$scope.rev;
				};
			ajaxfactory.ajax
			.success(function(r, s, x) {
				$scope.data=r;
			}).error(function(err, s, x) {
				$log.error
			})
		}


		angular.module("app").controller("heros", herofun);

	}());
