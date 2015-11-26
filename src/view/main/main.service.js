(function (angular) {
    'use strict';

    angular.module('gameSiteApp.main').factory('calcService', function () {
		return {
            calculate: calculate
		}

        function calculate($scope) {
            
            return $scope.more_odds5 * 2;
        }
    });
})(angular);
