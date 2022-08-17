#!usr/bin/env node

const http = require('http');
const fs = require('fs');
// const axios = require('axios');
let htmlData;
let about;
let contact;
let notFound;
try {
    const data = fs.readFileSync('./index.html', 'utf8');
    htmlData = data;
  } catch (err) {
    console.error(err);
  }
try {
    const data = fs.readFileSync('./about.html', 'utf8');
    about = data;
  } catch (err) {
    console.error(err);
  }
  try {
    const data = fs.readFileSync('./contact-me.html', 'utf8');
    contact = data;
  } catch (err) {
    console.error(err);
  }
  try {
    const data = fs.readFileSync('./404.html', 'utf8');
    notFound = data;
  } catch (err) {
    console.error(err);
  }
const port = process.env.PORT || 8080;
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    console.log(req);
    if(req.url == '/') {
        res.end(htmlData);
    } else if (req.url == '/about'){
        res.end(about);
    } else if (req.url == '/contact') {
        res.end(contact);
    } else {
        res.end(notFound);
    }
});
server.listen(port, ()=> {
    console.log("listening to port " + port);
})
