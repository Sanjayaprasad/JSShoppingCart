//User controller for searching the item
app.controller('UserController', function($scope,$filter, $http, detailsOfSelectedProductService){
  
  if(detailsOfSelectedProductService.get().item_id != undefined || detailsOfSelectedProductService.get().item_id != null || detailsOfSelectedProductService.get().item_id != ""){

    $scope.selectedProduct = detailsOfSelectedProductService.get();
    $scope.item_quantity=$scope.selectedProduct.item_quantity;
    
  }

  $scope.IsVisible = false;
  // API - To get all products
  // TODO - Move to Services because values should come form services or model in MVC 
  $http.get("/api/products").then(function(response) {

    $scope.products = response.data.data;

  });
  
  // Get valid Item into $scope
  $scope.calculateTotalPrice = function(){
    
    var itemQty = $scope.item_quantity;
    if($scope.productData.qty > 0 && $scope.productData.qty <= $scope.item_quantity){
      $scope.totalPrice = $scope.productData.qty * $scope.item_itemprice ;
      $scope.message = '';
      detailsOfSelectedProductService.set({item_ItemName:$scope.item_ItemName, totalPrice: $scope.totalPrice, item_id:$scope.item_id, item_qty: $scope.productData.qty, item_quantity:itemQty});
      return $scope.totalPrice;
    }else if($scope.productData.qty == 0){
      $scope.message = "Please check the quantity";
      $scope.totalPrice ='';
    }else{
      $scope.message = "sorry! Asked quantity is not available";
      $scope.totalPrice ='';
    }

  };

  $scope.validateItem = false;

  // Single Item Price
  $scope.singleItemPrice = function(){

    angular.forEach($scope.products, function(value, key){
      if($filter('lowercase')(value.itemname) == $filter('lowercase')($scope.item_ItemName)){
        $scope.item_itemprice = value.itemprice;
        $scope.item_quantity = value.quantity; 
        $scope.IsVisible = $scope.IsVisible ? false : true;
        $scope.item_sizes = (!!value.sizes) ? value.sizes.split(',').join(' '):'' ;
        return false;
      }
    });

  };
  
  //clear all fields
  $scope.clearValues = function(){

    $scope.productData = {};
    $scope.item_itemprice = '';
    $scope.item_ItemName = '';
    $scope.validateItem = false;
    $scope.totalPrice ='';
    $scope.message = '';
    $scope.IsVisible = '';

  };

  $scope.itemlist = function(rowData) {

    $scope.item_ItemName = rowData.itemname;
    $scope.item_itemprice = rowData.itemprice;
    $scope.item_quantity = rowData.quantity;
    $scope.item_id = rowData._id;
    $scope.item_sizes = (!!rowData.sizes) ? rowData.sizes.split(',').join(' '):'' ;
    $scope.IsVisible = $scope.IsVisible ? false : true;

  };

  $scope.buynow = function(){

    $state.go('#/userDetails');

  };
  
});
