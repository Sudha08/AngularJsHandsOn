var myApp = angular.module('myApp', []);

myApp.controller('AvengerController', ['$scope', function($scope) {

    $scope.avengers = ['Iron Man', 'Hulk', 'Thor', 'Cap. America', 'Vision'];
    
}]);