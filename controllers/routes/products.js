var mongoose = require('mongoose'),
 Product = require('../models/product')

var getProducts = function(application,callback){
    callback = function(req, res){
        Product.find({},function(err,data){
            if(err) throw err;
            return res.json({message:'Succefully Get the Data',data:data});
        });
    };
    application.get('/api/products', callback)
};

module.exports = { getProducts };
