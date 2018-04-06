var app = angular.module('myApp');
app.controller('mainController', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.subscribeEmail = '';
    $scope.subscribeName = '';








    $scope.subscribeNow = function(subscribeData){
      if($scope.subscribeForm.$valid){

        var messageData = 	"Name : "+ subscribeData.subscribeName + "<br />"
                        + "Email : "+  subscribeData.subscribeEmail + "<br />";

        var smtp_Server = "smtp.elasticemail.com";
        var userName = "rummy586@gmail.com";
        var password = "b562eb53-6d30-45a1-b85e-07908734668a";

        Email.send(userName,
          subscribeData.subscribeEmail,
          "Subscribe Deals",
          messageData,
          smtp_Server,
          userName,
          password,
          function done(message) {
            console.log(message);
            if(message == "ok"){
              $('#subscribeModal').modal('hide');
            }
          }
        );
        $('#subscribeModal').modal('hide');
        //$('#subscribeModal').remove();
      }


    }
});
//homeController
app.controller('homeController',function($scope,$http,$rootScope){
  $('[data-toggle="tooltip"]').tooltip();

  $scope.popularDestination = [];
  $scope.recommendedDeals = [];
  $scope.searchDropdown = false;
  $scope.kids = 0;
  $scope.adults  = 0 ;
  $scope.infant  = 0;
  $scope.rooms  = 0;

  //popularDestination
  $http({
    headers:  {
        'Accept': 'application/json',
    },
    url: '/assets/data/destinations.json',
    }).then(function (response) {
      console.log(response);
      $scope.popularDestination = response.data;
      //$rootScope.popularDestination = response.data;
      localStorage.setItem('popularDestination', JSON.stringify(response.data));
    });

    //recommendedDeals
    $http({
      headers:  {
          'Accept': 'application/json',
      },
      url: '/assets/data/deals.json',
      }).then(function (response) {
        console.log(response);
        $scope.recommendedDeals = response.data;
        //$rootScope.recommendedDeals = response.data;
        localStorage.setItem('recommendedDeals', JSON.stringify(response.data));
      });

      $scope.showSearchDropdown = function(){
        $scope.searchDropdown = !($scope.searchDropdown);
      }








});
//packageController
app.controller('packageController',function($scope,$stateParams,$rootScope){
  console.log($stateParams.package);
  scrolltop();
  packageCarousel();

  $scope.totalRating = 5;
  console.log($rootScope.popularDestination);

  var destinations = localStorage.getItem('popularDestination');

  angular.forEach(JSON.parse(destinations),function(value,key){
    if(value.name == $stateParams.package){
      console.log(value);
      $scope.popularDestinationDetails = value;
      $scope.rating =  value.rating;
    }
  });

  $scope.noRating = $scope.totalRating - $scope.rating;

});
//dealController
app.controller('dealController',function($scope,$stateParams,$rootScope){
  console.log($stateParams.deal);
  scrolltop();
  packageCarousel();

  $scope.totalRating = 5;

  console.log($rootScope.popularDestination);

  var recommendedDeals = localStorage.getItem('recommendedDeals');

  angular.forEach(JSON.parse(recommendedDeals),function(value,key){
    if(value.name == $stateParams.deal){
      console.log(value);
      $scope.recommendedDealsDetails = value;
      $scope.rating = value.rating;
    }
  });

  $scope.noRating = $scope.totalRating - $scope.rating;

});
//contactController
app.controller('contactController',function($scope){

});
