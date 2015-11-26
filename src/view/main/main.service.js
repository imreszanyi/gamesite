(function (angular) {
    'use strict';

    angular.module('gameSiteApp.main').factory('calcService', function () {
		return {
            calculate: calculate
		}

        var myScope;

        function calculate($scope) {
            myScope = $scope;
            $scope.result_less_bet = [0, 0, 0, 0, 0, 0 ]

            //bet arrays, iterate these
            var la = [1, 1, 1, 1, 1, 1];
            var ma = [1, 1, 1, 1, 1, 1];
            return doCalc(la, ma, 2);

        }

        function doCalc(betLessArr, betMoreArr, gnum) {

            var lw = 0;
            var mw = 0;

            for(var i = 0; i < betLessArr.length; i++) {
                if ( gnum < myScope.outs[i] ) {
                    lw = lw + betLessArr[i] * myScope.less_odds[i];
                }
                lw = lw - betLessArr[i];
            }

            for(var i = 0; i < betMoreArr.length; i++) {
                if ( gnum > myScope.outs[i] ) {
                    mw = mw + betMoreArr[i] * myScope.more_odds[i];
                }
                mw = mw - betMoreArr[i];
            }

            return (mw + lw );
        }


    });
})(angular);
