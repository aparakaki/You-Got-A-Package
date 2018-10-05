var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var keys = require("./keys.js");
accountSid = keys.accountSid;
authToken = keys.authToken;
const client = require('twilio')(accountSid, authToken);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/sendText", function (req, res) {
console.log(req.body)
var number =  req.body.phone.replace(/\D/g,'');
console.log(number);
  client.messages
    .create({
      body: req.body.msg,
      from: '+16266584299',
      to: number
    })
    .then(function (response) {

    })
    .done();
});

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
