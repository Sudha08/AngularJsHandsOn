var myApp = angular.module('myApp', []);

// use an array to include the dependencies to avoid hitches 
// during javascript minifications (compressing a js code)
// also a best practice

myApp.controller('AvengerController', ['$scope', function($scope) {

    $scope.message = "hey dudes";

    $scope.avengers = ['Iron Man', 'Hulk', 'Thor', 'Cap. America', 'Vision'];
    
    $scope.color = 'orange';
}]);



// myApp.config(function() {
//     // config method is a function that will fire before the app runs
// });

// myApp.run(function() {
//     // run method is a function that will fire when the app runs
// });



// myApp.controller('AvengerController', function($scope) { // this is also valid
    
//     $scope.message = "hey dudes";

//     $scope.avengers = ['Iron Man', 'Hulk', 'Thor', 'Cap. America', 'Vision'];
    
//     $scope.color = 'orange';
// });