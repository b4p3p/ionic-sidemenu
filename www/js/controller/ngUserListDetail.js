ngApp.controller("UserListDetailCtrl", function($scope, $stateParams,
                                                $state,
                                                userService){

  console.log("UserListDetailCtrl");

  var index = $stateParams.index;
  $scope.item = userService.getUser(index);

  // if($scope.item == null) return $state.go('userlist');
});