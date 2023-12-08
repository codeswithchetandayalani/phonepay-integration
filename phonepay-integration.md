npm install crypto-js
npm i --save-dev @types/crypto-js

add the following in app.modules 
HttpClientModule in imports  


Initialize a new Node.js project:
Run the following command to initialize a new Node.js project and follow the prompts:
npm init -y

Install Express:
Install Express, a popular Node.js web framework:
npm install express
npm install axios

now make a sever.js file and add the code and run the express js file
node serve.js

now make a callback js file and make sure you change the server port 
then run 
node callback.js 

to show parameters for the callback on the success page 
got to the success page component file do the following steps 
    Import the necessary Angular modules in your component:
    import { Component, OnInit } from '@angular/core';
    import { ActivatedRoute } from '@angular/router';
    Inject/call ActivatedRoute in your component's constructor
    Use ActivatedRoute to get the parameter from the URL in the ngOnInit method:
    and create an if statement to check if the parameter exists or not 
    if the parameter exists then save the parameter or else show the output with 
    your deefault html
