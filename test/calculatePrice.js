describe('Shopping Cart App Must Be Able To Calculate Price', function(){
	
	var result = element(by.binding('item_itemprice'));
	var totalResult = element(by.binding('totalPrice'));

	beforeEach(function(){
		browser.get('http://localhost:3000/');
	});


	it('should calculate total price when quantity is 1', function(){
		var itemname = "Bata";
		var itemqty = 3;
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('viewPrice')).click();
		expect(result.getText()).toEqual("499");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		expect(totalResult.getText()).toEqual('1497');
		browser.sleep(1000);
	});

});