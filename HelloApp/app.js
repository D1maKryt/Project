
const express = require("express");
const app = express();
app.get("/", function(request, response){
       
    response.send("test start !");
});
app.listen(3000);