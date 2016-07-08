ngApp.controller("UserListCtrl", function($scope, userService){

  $scope.name = "UserListCtrl";
  $scope.users = null;

  userService.getUsers(function(users){
    $scope.users = users;
  });

});