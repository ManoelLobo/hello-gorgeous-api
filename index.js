const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/|\/$/g, '');

  const method = req.method.toLowerCase();

  res.setHeader('Content-Type', 'application/json');
  let stringResponse = '';
  let statusCode = 200;

  if (method === 'post' && trimmedPath === 'hello') {
    stringResponse = JSON.stringify({
      data: { message: 'Hello, gorgeous!' },
    });
  } else {
    statusCode = 404;
    stringResponse = JSON.stringify({
      data: { error: 'POST hello, maybe?' },
    });
  }

  res.writeHead(statusCode);
  res.end(stringResponse);
});

server.listen(3000, () => {
  console.log('Server is up!');
});
