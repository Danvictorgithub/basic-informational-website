#!usr/bin/env node
const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 8080;
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    if (req.url == '/') {
      try {
        const data = fs.readFileSync('./index.html', 'utf8');
        res.end(data);
      } catch (err) {
        res.end('error');
      }
    } else {
      try {
        const data = fs.readFileSync(`.${req.url}.html`, 'utf8');
        res.end(data);
      } catch (err) {
        const data = fs.readFileSync(`./404.html`, 'utf8');
        res.end(data);
      }
    }
});
server.listen(port, ()=> {
    console.log("listening to port " + port);
})
