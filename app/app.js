var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'AvengerController'
        }).otherwise({
            redirectTo: '/home'
        });
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

    $http({
        method: 'GET',
        url: 'data/avengers.json'
     }).then(function (response){
        $scope.avengers = response.data;  
     },function (error){
        throw error;
     });

}]);