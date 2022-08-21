#!usr/bin/env node
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const router = express.Router();

router.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname+'/index.html'));
});
router.get('/about', (req,res)=>{
  res.sendFile(path.join(__dirname+'/about.html'));
});
router.get('/contact', (req,res)=>{
  res.sendFile(path.join(__dirname+'/contact.html'));
});
app.use('/',router);
app.listen(port,function() {
  console.log(`listening to port ${port}`);
})

// const http = require('http');
// const fs = require('fs');
// const port = process.env.PORT || 8080;
// const server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/html');
//     if (req.url == '/') {
//       try {
//         const data = fs.readFileSync('./index.html', 'utf8');
//         res.end(data);
//       } catch (err) {
//         res.end('error');
//       }
//     } else {
//       try {
//         const data = fs.readFileSync(`.${req.url}.html`, 'utf8');
//         res.end(data);
//       } catch (err) {
//         const data = fs.readFileSync(`./404.html`, 'utf8');
//         res.end(data);
//       }
//     }
// });
// server.listen(port, ()=> {
//     console.log("listening to port " + port);
// })
