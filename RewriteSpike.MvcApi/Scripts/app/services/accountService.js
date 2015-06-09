angular.module('registrationApp')
.factory('accountService', ['$http', '$q', function ($http, $q) {
    return {
        save: function (student) {
            var deffered = $q.defer();

            $http.post('/api/account/save', student)
            .success(function (data) {
                deffered.resolve(data);
            })
            .error(function (data) {
                deffered.reject(data);
            });

            return deffered.promise;
        }
    };
}]);