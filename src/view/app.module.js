(function(angular) {
	
	angular.module('gameSiteApp', ['gameSiteApp.main', 'ui.router'])
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			
			$urlRouterProvider.otherwise('/');
			
			$stateProvider
				.state('/', {
					url: '/',
					views: {
						'@': {
							template: '<main></main>'
						}
					}	
				})
		}])
})(angular);