const http = require('http');
const fs = require('fs');

// creating server using http
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        return res.end("Hello from '/' route");
    }
    else if (req.url == "/about") {
        return res.end("Hello from '/about' route");
    }
    else if (req.url == "/contact") {
        return res.end("Hello from '/contact' route");
    }
    else if (req.url == "/readFile") {
        fs.readFile('./assets/fileToRead.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            return res.end(data);
        });
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        return res.end("<h1>404 Page Not Found</h1>");
    }
});

try {
    server.listen(3000, () => {
        console.log('Server is listening on port 3000');
    });
} catch (error) {
    console.error('Error starting the server:', error.message);
}