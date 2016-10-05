//inject the captcha factory our module
var app = angular.module("app", ["rkcaptcha"]);

//inject the captcha factory our controller
app.controller("homeController", function($scope)
{   
    //create a function, for example to make a login form
    //and check if the captcha passes validation
    var vm=this;
    $scope.captchaMatched=false;
    $scope.$watch('captchaMatched',function(newVal,oldVal){
        console.log('captcha matched : ' + newVal);
    });
    $scope.login=function(){
        alert("captcha matched");
    }
    $scope.refresh=function(){
        $scope.$broadcast('refresh-captcha');
    }
});