require('dotenv').config();

var express = require('express');
var path = require('path');
var logger = require('morgan');
var app = express();
const productsRouterV1 = require('./app/product_v1/routes');
// const productsRouterV1 = require('./routes/products');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1', productsRouterV1);

app.use((req, res, next) => {
    res.status(404);res.send({
        status: 'failed',
        message: 'Resource' + req.originUrl + 'Not Found'
    })
})
app.listen(4000, () => console.log('server: http://localhost:4000'));
module.exports = app;



// untuk menjalankan apk ini: npm start 
// untuk melihat koneksi dbs node config\mongodb.js


