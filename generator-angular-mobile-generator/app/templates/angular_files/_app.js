'use strict';

angular.module('myApp', [
    'appServices',
    'ionic',
    "angucomplete"
]).
config(['$stateProvider','$urlRouterProvider','$compileProvider',  function ($stateProvider,$urlRouterProvider,$compileProvider) {
   
    $stateProvider
    .state('home', {url: "/home", templateUrl: "partials/home.html",controller: 'Home_Controller'});//END OF ROUTES

    $urlRouterProvider.otherwise("/home");

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|tel):/);
      
}]);


angular.bootstrap(document, ['myApp']);
