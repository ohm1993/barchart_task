    var express = require('express'); 
    var app = express(); 
    var Request = require('request');
    app.use(express.static('../client')); 

    app.get('/showdata',function(req,res){
        Request.get('https://api.coinmarketcap.com/v1/ticker/?limit=10',function(error, response, body){
            if (error) {
                throw error;
            }
            const data = JSON.parse(body);
            res.json(data);
            });
    }); 
    app.listen('3000', function(){
        console.log('running on 3000...');
    });