﻿var app = angular.module('registrationApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/Registration/Courses', { templateUrl: '/templates/courses.html', controller: 'CoursesController' });
    $routeProvider.when('/Registration/Instructors', { templateUrl: '/templates/instructors.html', controller: 'InstructorsController' });
    $routeProvider.when('/Registration/CreateAccount', { templateUrl: '/templates/create-account.html', controller: 'AccountController' });

    $locationProvider.html5Mode(true);
});

