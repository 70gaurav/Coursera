i
const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);
  let dateVal = today.getDate();
  let greeting = "It is still not morning"
  if (dateVal.getHours()>6 && dateVal.getHours()<12) {
    greeting = "Good morning!"
  } else if (dateVal.getHours()>=12 && dateVal.getHours()<18) {
    greeting = "Good afternoon!"
  }else if (dateVal.getHours()>=18 && dateVal.getHours()<21) {
    greeting = "Good evening!"
  }else if (dateVal.getHours()>=21 && dateVal.getHours()<24) {
    greeting = "Good night!"
  }
  res.end(`Hello, ${greeting}`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);

// Lab1 week1


//Completed 
//multer
//validation
//logger
//log4js
//MySQL
//promise
//signNow.js
//nodemailer
//moment




// Create a promise
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation or logic
  // Resolve the promise when successful
  resolve("Promise resolved successfully");

  // Reject the promise when an error occurs
  // reject("Promise rejected with an error");
});

// Using the promise
myPromise
  .then(result => {
    console.log(result); // This will be executed if the promise is resolved
  })
  .catch(error => {
    console.error(error); // This will be executed if the promise is rejected
  });
