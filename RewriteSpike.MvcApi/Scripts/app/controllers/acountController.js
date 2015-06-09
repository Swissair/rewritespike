angular.module('registrationApp')
.controller('AccountController', ['$scope', 'accountService', '$location', function ($scope, accountService, $location) {
    $scope.save = function (student) {
        $scope.error = false;
        
        accountService.save(student)
        .then(function () {
            $location.url('Registration/Courses');
        },
        function () {
            alert('saving failure');
        });
    };


}]);