var http = require('http');
var fs = require('fs');
let name;


fetch('https://api.github.com/users').then((res)=>
{ res.json()}).then((res)=>{
console.log(res)
});

const prompt = require('prompt-sync')();
const name = prompt('give your username');
const api_url = `userdata/${name}`;
const response = await fetch(api_url);
const json = await response.json();
console.log(json);













