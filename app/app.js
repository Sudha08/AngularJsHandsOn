var myApp = angular.module('myApp', []);

myApp.controller('AvengerController', ['$scope', function($scope) {

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

    $scope.avengers = [
        {
            name: "Iron Man",
            belt: "red",
            rate: 500,
            available: true,
            thumb: "content/img/im.jpg"
        },
        {
            name: "Hulk",
            belt: "green",
            rate: 200,
            available: true,
            thumb: "content/img/hulk.jpg"
        },
        {
            name: "Thor",
            belt: "black",
            rate: 300,
            available: true,
            thumb: "content/img/thor.jpg"
        },
        {
            name: "Spider Man",
            belt: "orange",
            rate: 50,
            available: true,
            thumb: "content/img/spidey.jpg"
        },
        {
            name: "Captain America",
            belt: "blue",
            rate: 10,
            available: false,
            thumb: "content/img/cap.jpg"
        }
    ];
    
}]);