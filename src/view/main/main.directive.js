(function(angular) {
	angular.module('gameSiteApp.main').directive('main', function() {
		return {
			scope: {},
			restrict: 'E',
			teplateUrl: 'main/main.html',
			controller: mainController
		}
		
		function mainController($scope) {
			$scope.title = "main title";
		}
	})
})(angular);