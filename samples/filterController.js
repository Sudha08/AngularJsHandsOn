var myApp = angular.module('myApp', []);

myApp.controller('filterController', ['$scope', function($scope) {

    $scope.avengers = [
        {
            name: "Iron Man",
            belt: "red",
            rate: 500
        },
        {
            name: "Hulk",
            belt: "green",
            rate: 200
        },
        {
            name: "Thor",
            belt: "black",
            rate: 300
        },
        {
            name: "Spider Man",
            belt: "blue",
            rate: 50
        }
    ];
    
}]);