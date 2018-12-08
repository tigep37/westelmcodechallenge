const express     = require("express"),
    app         = express(),
    request     = require('request');

app.use(express.static("public"));
app.set("view engine", "ejs");

//landing page
app.get('/', function(req, res){
    let url = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            let data = JSON.parse(body);
            res.render('landing', { data: data });
        }
    });
});

app.listen(3000, '127.0.0.1', function(){
    console.log("WS APP SERVER HAS STARTED");
});
