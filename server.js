var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    port = 3000,
    product = require('./controllers/routes/products'),
    userDetail = require('./controllers/models/userDetail'),
    userBillingDetail = require('./controllers/models/userBillingDetail'),
    config = require('config')

var path = require('path');
 
mongoose.connect("mongodb://127.0.0.1:27017/products");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

if(config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(morgan('combined')); 
}
                                      
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  
app.use(express.static(__dirname + '/'));

app.get('/', function(req,res){
    res.sendfile(__dirname + '/views/index.html');
});

/* API Calling */
// Call API's 
// to get all Products
product.getProducts(app);

function successSave(response, err, userdetail){
    if(err){
        return response.status(400).send({
            message:errorHandler.getErrorMessage(err)
        });
    }else{
        console.log("inside callback");
        response.json(userdetail);
    }
};

app.post('/userdetails', function(req,res){
    var userdetail = new userDetail(req.body);
    console.log(userdetail);
    userdetail.save(successSave.bind(null,res));
    console.log("inside post");
});

function userBillingSuccessSave(response, err, userbillingdetails){
    if(err){
        return response.status(400).send({
            message:errorHandler.getErrorMessage(err)
        });
    }else{
        console.log("inside callback");
        response.json(userbillingdetails);
    }
};

app.post('/userbillingdetails', function(req,res){
    var userbillingdetails = new userBillingDetail(req.body);
    console.log(userbillingdetails);
    userbillingdetails.save(userBillingSuccessSave.bind(null,res));
    console.log("inside post");
});

app.listen(port);
console.log("Listening on product " + port);

module.exports = app; 
