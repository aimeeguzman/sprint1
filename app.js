var myApp = angular.module('myApp', []);

myApp.controller('RegistrationController', ['$scope', function($scope) {

  $scope.register = function() {
    $scope.message = 'Thank you! Your information has been submitted ' + $scope.user.firstname;
  };

}]);