angular.module('registrationApp')
.factory('registrationService', ['$http', function ($http) {
    return {
        get: function () {
            $http.get('/api/registration/get')
            .success(function (data) {
                alert(data);
            })
            .error(function (data) {
                alert(data.message);
            })
        }
    };
}]);