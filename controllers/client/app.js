var app = angular.module('submitExample', ['ui.router']);

(function(){
  
  app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }]);

  app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '/views/home.html'
    })//Route to userDetails
    .state('userDetails',{
      url:'/userDetails',
      templateUrl: '/views/userDetails.html'
    })//Route to checkout
    .state('checkout',{
      url:'/checkout',
      templateUrl: '/views/checkout.html'
    })
    .state('/shippingConformation',{
      url:'/shippingConformation',
      templateUrl:'/views/shippingConformation.html'
    })
    .state('/userBillingDetails',{
      url:'/userBillingDetails',
      templateUrl: '/views/userBillingDetails.html'
    })
  });

})();