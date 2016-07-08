// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var ngApp = angular.module('ionicApp', ['ionic', 'ionicApp.Factories'])

.run(function($ionicPlatform, $ionicHistory, $state, $rootScope) {

  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });

  $rootScope.goHome = function () {
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    $state.go('home');
  }
})

.config(function($stateProvider, $urlRouterProvider){
    $stateProvider

      .state('home', {
        url: "/home",
        templateUrl: "templates/home.html",
        controller: 'HomeCtrl'
      })

      .state('userlist', {
        url: "/userlist",
        controller: 'UserListCtrl',
        templateUrl: "templates/userList.html"
      })

      .state('userlistdetail', {
        url: "/userlist/:index",
        controller: 'UserListDetailCtrl',
        templateUrl: "templates/userListDetail.html",
        cache: false
      });

    $urlRouterProvider.otherwise('/home');

  });
