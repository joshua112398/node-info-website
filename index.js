const http = require('http');
var fs = require('fs/promises');

async function read(filepath) {
  try {
    const data = await fs.readFile(filepath, { encoding: 'utf8' });
  } catch (err) {
    console.log(err);
  }
}

http.createServer(async function (req, res) {
  try {
    let filepath;
    if (req.url === '/') {
      filepath='index.html';
    } else if (req.url === '/about') {
      filepath='about.html';
    } else if (req.url === '/contact-me') {
      filepath='contact-me.html';
    } else {
      filepath='404.html';
    }

    const data = await fs.readFile(filepath, { encoding: 'utf8' });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  } catch (err) {
    console.log(err);
  }
}).listen(8080);