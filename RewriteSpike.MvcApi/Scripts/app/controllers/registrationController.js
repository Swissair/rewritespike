﻿angular.module('registrationApp')
.controller('RegistrationController', ['$scope', 'registrationService', function ($scope, registrationService) {
    $scope.greeting = "Hello";
    $scope.wasSuccessful = '';

    var init = function () {
        registrationService.get()
        .then(function(data) {
            $scope.wasSuccessful = data;
        }, function(data) {
            $scope.wasSuccessful = 'Failed with: ' + data.message;
        });
    };

    // init();
}]);