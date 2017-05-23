describe('ShoppingCart home page', function(){
		
	var result = element(by.binding('item_itemprice'));
	var totalResult = element(by.binding('totalPrice'));

	beforeEach(function(){
		browser.get('http://localhost:3000/');
	});

	it('Should display the home page', function(){
		expect(browser.getTitle()).toEqual('Shopping-cart-submit-production');
	});

	it('should get the item price', function(){
		var itemname = "Adidas";
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('viewPrice')).click();
		expect(result.getText()).toEqual("500");
		browser.sleep(1000);
	});

	it('should select a radio button', function(){
		var input = element.all(by.model('item_quantity'));
		var selection = element(by.binding('items.itemname'));

		input.get(1).click();
		expect(selection.getText()).toContain('Adidas');
	});

	it('should display an error message "Please check the quantity" when quantity is 0', function(){
		var itemname = "Adidas";
		var itemqty = 0;
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('viewPrice')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		expect(element(by.css('.message')).isDisplayed()).toBe(true);
		browser.sleep(1000);
	});

	it('Should display a error message if quantity is not available', function(){
		var itemname = "Adidas";
		var itemqty = 34;
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('viewPrice')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		expect(element(by.css('.message')).isDisplayed()).toBe(true);
		browser.sleep(1000);
	});

	it('should clear all the fields if CLEAR button is clicked', function(){
		var itemname = "Adidas";
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('viewPrice')).click();
		expect(result.getText()).toEqual("500");
		browser.sleep(1000);
		element(by.id('cleardata')).click();
		expect(element(by.model('item_ItemName')).getAttribute('value')).toBe('');
		expect(element(by.model('productData.qty')).getAttribute('value')).toBe('');
		browser.sleep(1000);
	});

	it('buy now button should be disabled if totalprice is equal to " "', function(){
		var itemname = "Adidas";
		var itemqty = 2;
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('viewPrice')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('BuyNowButton')).click();
		expect(element(by.css('.home-page')).getAttribute('disabled')).toBeFalsy();
		browser.sleep(1000);
	});

	it('should navigate to "UserDetails" only when the totalprice is dispalyed', function(){
		var itemname = "Adidas";
		var itemqty = 2;
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('viewPrice')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		expect(totalResult.getText()).toEqual('1000');
		element(by.id('BuyNowButton')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/userDetails');
	});

	it('should navigate to "Home Page" from "UserDetails" if Back button is clicked', function(){
		var itemname = "Adidas";
		var itemqty = 2;
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('viewPrice')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		expect(totalResult.getText()).toEqual('1000');
		element(by.id('BuyNowButton')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/userDetails');
		element(by.id('btnBack')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/home');
	});

});