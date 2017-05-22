//Submit controller for userDetails
app.controller('submitForml',function($scope,$http,$location, savedService, userDetailService){

	$scope.back = function(){
    	$location.path('/home');
    }

    $scope.form = userDetailService.getData();

  	$scope.save = function(result){
    	console.log($scope.form); 
    	if(result=="yes"){
			userDetailService.setData($scope.form);
			if($scope.userForm.$valid)
	    	$http.post('/userdetails', $scope.form).then(function(res){
	      		console.log(res);
	      		savedService.set(res.data);
	    	});
	    	$location.path('/userBillingDetails');
	    }
	    else if(result=="no"){
        	$location.path('/checkout');
        	$http.post('/userdetails', $scope.form).then(function(res){
	      		console.log(res);
	      		savedService.set(res.data);
	    	});
			//userDetailService.setData($scope.form);
      	}
	};

});
