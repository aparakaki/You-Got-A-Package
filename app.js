var keys = require("./keys.js");
accountSid = keys.accountSid;
authToken = keys.authToken; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Hello', 
         from: '+16266584299',       
         to: keys.phone
       }) 
      .then(function(response) {

      }) 
      .done();