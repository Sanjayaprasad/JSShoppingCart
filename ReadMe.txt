// Clone the project

git clone https://github.com/Sanjayaprasad/ShoppingCart.git

//Change the directory to ShoppingCart

cd ShoppingCart

//specify path to start mongoose server by editing mongoServer.sh

vim mongoServer.sh
mongod -dbpath <YOUR Path>/ShoppingCart/db/data

//Start the mongoose server by running the script

sh mongoServer.sh

//Open new terminal and Inside your project folder run

mongo < insertData.sh

//Start node server 

node server

//open browser and run "localhost:3000" to see your app up and running

//To run Protractor test

cd test
protractor conf.js
