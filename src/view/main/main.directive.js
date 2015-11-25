(function(angular) {
	angular.module('gameSiteApp.main').directive('mainPage', function() {
		return {
			scope: {},
			restrict: 'E',
			templateUrl: 'main/mainPage.html',
			controller: mainController
		}

		function mainController($scope) {
			$scope.less_odds1 = 11.5;
			$scope.less_odds2 = 3.6;
			$scope.less_odds3 = 1.9;
			$scope.less_odds4 = 1.35;
			$scope.less_odds5 = 1.12;
			$scope.less_odds6 = 1.03;

			$scope.more_odds1 = 1.03;
			$scope.more_odds2 = 1.22;
			$scope.more_odds3 = 1.7;
			$scope.more_odds4 = 2.7;
			$scope.more_odds5 = 4.65;
			$scope.more_odds6 = 10.5;

			$scope.calc = function() {
				$scope.result = "-1231";
			}



		}

	})
})(angular);
