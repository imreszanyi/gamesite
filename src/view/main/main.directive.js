(function(angular) {
	angular.module('gameSiteApp.main').directive('mainPage', function() {
		return {
			scope: {},
			restrict: 'E',
			templateUrl: 'main/mainPage.html',
			controller: mainController
		}

		function mainController($scope) {
			$scope.title = "gglsz";
			$scope.less_odds1 = 11.5;
			$scope.less_odds2 = 3.6;
			$scope.less_odds3 = 1.9;
			$scope.less_odds4 = 1.35;
			$scope.less_odds5 = 1.12;
			$scope.less_odds6 = 1.03;
		}
	})
})(angular);
