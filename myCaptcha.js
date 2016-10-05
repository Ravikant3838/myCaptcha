(function() {
    'use strict';
    var app = angular.module('rkcaptcha', []);
    app.directive('rkCaptcha', function($rootScope) {
        return {
            restrict: 'AE',
            templateUrl: 'my-captcha-temp.html',
            replace: true,
            scope: {
                captchaMatched: "="
            },
            link: function(scope, ele, attrs, ctrl) {
                var code;
                createCaptcha();

                function createCaptcha() {
                	scope.captchaMatched = false;
                	scope.userCaptcha='';

                	var fontStyles=['style1','style2','style2','style3','style4','style5','style6','style7','style8','style9',]
                	scope.fontStyle=fontStyles[Math.floor(Math.random() * fontStyles.length)];
                	
                    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

                    var a = alpha[Math.floor(Math.random() * alpha.length)];
                    var b = alpha[Math.floor(Math.random() * alpha.length)];
                    var c = alpha[Math.floor(Math.random() * alpha.length)];
                    var d = alpha[Math.floor(Math.random() * alpha.length)];
                    var e = alpha[Math.floor(Math.random() * alpha.length)];
                    var f = alpha[Math.floor(Math.random() * alpha.length)];

                    code = a + '' + b + '' + c + '' + d + '' + e + '' + f;
                    scope.captcha = code;
                }

                scope.$watch('userCaptcha', function(newVal, oldVal) {
                    if (scope.captcha === newVal) {
                        scope.captchaMatched = true;
                    } else {
                        scope.captchaMatched = false;
                    }
                });
                scope.$on('refresh-captcha', function() {
                    createCaptcha();
                })
            }
        };
    });
})();