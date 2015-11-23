(function(angular) {
	
	angular.module('gameSiteApp', ['gameSiteApp.main', 'ui.router'])
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			
			$urlRouterProvider.otherwise('/');
			
			$stateProvider
				.state('/', {
					url: '/',
					views: {
						'@': {
							template: '<main-page></main-page>'
						}
					}	
				})
				.state('/home', {
					url: '/home',
					views: {
						'@': {
							template: '<div>home page</div>'
						}
					}	
				})
				
		}])
})(angular);