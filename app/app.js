var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'AvengerController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController'            
        })
        .when('/contact-success', {
            templateUrl: 'views/contact-success.html',
            controller: 'contactController'            
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'AvengerController'
        }).otherwise({
            redirectTo: '/home'
        });
}]);

myApp.directive('randomAvenger', [function(){    
    return {
        restrict: 'E',
        scope: {
            avengers: '=',
            title: '=',
            name: '='
        },
        templateUrl: 'views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope) {
            $scope.random = Math.floor(Math.random() * 4);
        }
    };
}]);

myApp.controller('AvengerController', ['$scope', '$http', function($scope, $http) {

    $scope.removeAvenger = function(avenger) {
        var removedAvenger = $scope.avengers.indexOf(avenger);
        $scope.avengers.splice(removedAvenger, 1);
    };

    $scope.addAvenger = function() {
        $scope.avengers.push(
            {
                name: $scope.newAvenger.name,
                belt: $scope.newAvenger.belt,
                rate: parseInt($scope.newAvenger.rate),
                available: true
            });

        $scope.newAvenger.name = "";
        $scope.newAvenger.belt = "";
        $scope.newAvenger.rate = "";
    };

    $scope.removeAll = function() {
        $scope.avengers = [];
    }

    $http({
        method: 'GET',
        url: 'data/avengers.json'
     }).then(function (response){
        $scope.avengers = response.data;  
     },function (error){
        throw error;
     });

}]);

myApp.controller('contactController', ['$scope', '$location', function($scope, $location) {
    $scope.sendMessage = function() {
        $location.path('contact-success');
    };
}]);