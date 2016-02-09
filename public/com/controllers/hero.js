( function() {
		function herofun($scope, ajaxfactory,$log) {
			$scope.data = null;
			ajaxfactory.ajax
			.success(function(r, s, x) {
				$scope.data=r.heros;
			}).error(function(err, s, x) {
				$log.error
			})
		}


		angular.module("app").controller("heros", herofun);

	}());
