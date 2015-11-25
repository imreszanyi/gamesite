(function (angular) {
    'use strict';

    angular.module('gameSiteApp.main').factory('calcService', function () {
		return {
            calculate: calculate
		}

        function calculate() {
            return 112;
        }
    });
})(angular);
