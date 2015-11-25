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
		}
	})
})(angular);
