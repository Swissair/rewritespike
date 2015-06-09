angular.module('registrationApp')
.controller('registrationController', ['$scope', 'registrationService', function ($scope, registrationService) {
    $scope.greeting = "Hello";

    var init = function () {
        registrationService.get();
    };

    init();
}]);