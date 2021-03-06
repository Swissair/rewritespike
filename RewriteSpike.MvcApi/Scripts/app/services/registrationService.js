﻿angular.module('registrationApp')
.factory('registrationService', ['$http', '$q', function ($http, $q) {
    return {
        get: function () {
            var deffered = $q.defer();

            $http.get('/api/registration/get')
            .success(function (data) {
                deffered.resolve(data);
            })
            .error(function (data) {
                deffered.reject(data);
            })
            return deffered.promise;
        }
    };
}]);