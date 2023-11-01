
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


passport.js


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


// 0auth
// ipc renderer


Setting up React Native on a Windows system involves several steps. Here's a step-by-step guide to help you get started:

Prerequisites:

Windows 10 or higher.
Node.js and npm installed (https://nodejs.org/).
Python 2.7 installed (https://www.python.org/downloads/).
Java Development Kit (JDK) installed (https://www.oracle.com/java/technologies/javase-downloads.html).
Android Studio with Android SDK (https://developer.android.com/studio).
Visual Studio Code (or your preferred code editor) installed (https://code.visualstudio.com/).
Step 1: Install Chocolatey (optional but recommended)
Chocolatey is a package manager for Windows that can simplify some installations.

Open PowerShell as an administrator and run this command to install Chocolatey:
sql
Copy code
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
Step 2: Install Node.js and Python 2.7

Install Node.js and npm using Chocolatey or download from the official website.
Copy code
choco install nodejs.install
Install Python 2.7 (not Python 3) and make sure it's added to your system's PATH.
Step 3: Install JDK and Android Studio

Download and install the Java Development Kit (JDK) from the official Oracle website.
Download and install Android Studio with Android SDK. During installation, make sure to select the necessary SDK components.
Step 4: Set Environment Variables

Open the System Properties (You can search for it in the Windows start menu).

Click on the "Advanced" tab, then click on "Environment Variables."

Under "System Variables," click "New" and add the following variables:

JAVA_HOME: Set this to the location of your JDK installation (e.g., C:\Program Files\Java\jdk1.8.0_251).

ANDROID_HOME: Set this to the location of your Android SDK (e.g., C:\Users<YourUsername>\AppData\Local\Android\Sdk).

In the "Path" variable, add the following two entries:

perl
Copy code
%JAVA_HOME%\bin
%ANDROID_HOME%\platform-tools
Step 5: Install React Native CLI and Initialize Your Project

Open a Command Prompt or PowerShell window.

Install React Native CLI globally:

java
Copy code
npm install -g react-native-cli
Create a new React Native project:

csharp
Copy code
npx react-native init YourProjectName
Step 6: Run Your React Native App

Navigate to your project folder:

bash
Copy code
cd YourProjectName
Start your React Native app:

arduino
Copy code
npx react-native run-android



swagger

const express = require('express');
const app = express();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// Swagger definition
const swaggerDefinition = {
  info: {
    title: 'My API',
    version: '1.0.0',
    description: 'API documentation for My API',
  },
  host: 'localhost:3000', // Replace with your host and port
  basePath: '/',
};

const options = {
  swaggerDefinition,
  apis: ['*.js'], // Replace with the paths to your API routes
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Your API routes go here
app.get('/', (req, res) => {
  res.send('Hello, Swagger!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




