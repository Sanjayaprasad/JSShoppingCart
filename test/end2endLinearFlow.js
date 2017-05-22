describe('ShoppingCart home page', function(){
		
	var result = element(by.binding('item_itemprice'));
	var totalResult = element(by.binding('totalPrice'));

	beforeEach(function(){
		browser.get('http://localhost:3000/');
	});

	it('should navigate to UserBillingDetails if user clicks on Yes', function(){
		var itemname = "Adidas";
		var itemqty = 2;
		var username = "test";
		var useremail = "test@email.com";
		var userphonenumber = 9845098450;
		var useraddress = "Bengaluru";	
		var userBillingName = "test";
		var userBillingAddress = "Residency Road";
		var userBillingPhoneNumber = 9845698456;

		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('viewPrice')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		expect(totalResult.getText()).toEqual('1000');
		element(by.id('BuyNowButton')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/userDetails');
		element(by.model('form.user_name')).sendKeys(username);
		element(by.model('form.user_phonenumber')).sendKeys(userphonenumber);
		element(by.model('form.user_email')).sendKeys(useremail);
		element(by.model('form.user_Address')).sendKeys(useraddress);
		element(by.id('billing-yes')).click();
		element(by.id('btncontinue')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/userBillingDetails');
		element(by.model('form.name')).sendKeys(userBillingName);
		element(by.model('form.phonenumber')).sendKeys(userBillingPhoneNumber);
		element(by.model('form.Address')).sendKeys(userBillingAddress);
		element(by.id('btnContinue')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/checkout');
		element(by.id('rdobtn')).click();
		element(by.id('btnsubmit')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/shippingConformation')
		browser.sleep(1000);
	});

	it('should navigate to Checkout page if user clicks on No', function(){
		var itemname = "Adidas";
		var itemqty = 2;
		var username = "test";
		var useremail = "test@email.com";
		var userphonenumber = 9845098450;
		var useraddress = "Bengaluru";	
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('viewPrice')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		expect(totalResult.getText()).toEqual('1000');
		element(by.id('BuyNowButton')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/userDetails');
		element(by.model('form.user_name')).sendKeys(username);
		element(by.model('form.user_phonenumber')).sendKeys(userphonenumber);
		element(by.model('form.user_email')).sendKeys(useremail);
		element(by.model('form.user_Address')).sendKeys(useraddress);
		element(by.id('billing-no')).click();
		element(by.id('btncontinue')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/checkout');
		element(by.id('rdobtn')).click();
		element(by.id('btnsubmit')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/shippingConformation')
		browser.sleep(1000);
	});
});