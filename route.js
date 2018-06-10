const url = require('url');
const fs = require('fs');

function renderHTML(path, res) {
  fs.readFile(path, (err, html)=>{
    if (err) {
      res.statusCode = 404;
      res.write('file not found');
    } else {
      res.write(html);
    }
    res.end();
  });
}

module.exports = {
  handleRequest: function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');

    const path = url.parse(req.url).pathname;
    switch (path) {
      case '/':
        renderHTML('index.html', res);
        break;
      case '/login':
        renderHTML('login.html', res);
        break;    
      default:
        res.statusCode = 404;
        res.write('Route not defined');
        res.end();
        break;
    }
  }
}