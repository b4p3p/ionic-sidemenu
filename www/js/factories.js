/**************************************************
 +	Module:		ionicApp.Factories
 +	Exports:
 +		userService
 **************************************************/

angular.module('ionicApp.Factories', ['ionic'])

.factory('userService', function($http) {

  var users = [];

  return {

    getUsers: function(cb){
      $http.get('https://randomuser.me/api/?results=10')
        .then( function(response){
          users = response.data.results;
          return cb(users);
        });
    },

    getUser: function(index){
      return users[index];
    }

  }
});