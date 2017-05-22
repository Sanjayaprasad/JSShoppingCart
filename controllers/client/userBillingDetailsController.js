app.controller('userBillingDetailsController',function($scope, $location, $http){

	$scope.navigateToCheckoutForm = function(){
		$http.post('/userbillingdetails', $scope.form).then(function(res){
			console.log(res);
	    	$location.path('/checkout');
	    });
	};

	$scope.navigateToShippingFrom = function(){
		$location.path('/userDetails');
	};

});
