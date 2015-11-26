(function(angular) {
	angular.module('gameSiteApp.main').directive('mainPage', function() {
		return {
			scope: {},
			restrict: 'E',
			templateUrl: 'main/mainPage.html',
			controller: mainController
		}

		function mainController($scope, calcService) {

			$scope.outs = [ 0.5, 1.5, 2.5, 3.5, 4.5, 5.5 ];

			$scope.less_odds = [ 11.5, 3.6, 1.9, 1.35, 1.12, 1.03 ];
			$scope.less_bet = [ 0, 0, 0, 0, 0, 0 ];

			$scope.more_odds = [ 1.03, 1.22, 1.7, 2.7, 4.65, 10.5 ];
			$scope.more_bet = [ 0, 0, 0, 0, 0, 0 ];

			$scope.betText = "bt";
			$scope.oddsText = "od";

			$scope.calc = function() {
				$scope.result = calcService.calculate($scope);
			}

		}

	})
})(angular);
