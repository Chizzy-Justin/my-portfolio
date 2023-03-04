const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const portImage1 = {
    images: [
    "images/background.png",
    "images/workbg.jpg",
    "images/background.png"],
    name: "Justin Store"
}
const portImage2 = {
    images: [
        "images/Accstro.jpg",
        "images/Accstro Logo.jpg",
        "images/Brand.jpg",
        "images/Color Variation.jpg"
    ],
    name: "Accstro"
}
var imageArray = [portImage1, portImage2, portImage1, portImage2];


app.get("/", function(req, res){
    //imageArray.push(portImage1);

    res.render("index", {imageArray: imageArray});
})


app.listen(3000, function(){
    console.log("the portfolio is live on port 3000!")
});

