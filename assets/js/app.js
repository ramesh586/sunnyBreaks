var app = angular.module('myApp',["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home'),
    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: "../assets/partials/home.html",
        controller: "homeController"
      })
      .state("packageDetails", {
        url: '/package/:package',
        templateUrl: '/assets/partials/packageDetails.html',
        controller: 'packageController'
      })
      .state("dealDetails", {
        url: '/deal/:deal',
        templateUrl: '/assets/partials/dealDetails.html',
        controller: 'dealController'
      })
      .state("searchResults", {
        url: '/searchResults',
        templateUrl: '/assets/partials/searchResults.html',
        controller: 'homeController'
      })
      .state("contact", {
        url: "/contact",
        templateUrl: "../assets/partials/contact.html",
        controller: "contactController"
      });
});
app.filter('range', function() {
  return function(val, range) {
    range = parseInt(range);
    for (var i=0; i<range; i++)
      val.push(i);
    return val;
  };
});
