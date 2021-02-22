const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const http = require('http');
const app = express();


app.get('/userdata/:name', async(request, response)=>
{
 const name = request.params.name;   
const api_url = `https://api.github.com/users/${name}`;
console.log(name);
const fetch_response = await fetch(api_url);
const json = await fetch_response.json();
response.json(json);
});






app.use(express.json());
app.listen(3000, function () {
    console.log('Server started on port 3000...');
  });
