const http = require ('http');

const server = http.createServer ((req, res) => {
    const url = req.url;
    const d = new Date();
    let date = d.toISOString();

    if (url === '/'){
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Date Accessed: ${date}`);
    }

    else if (url === '/hello'){
        res.setHeader('Content-Type', 'text/plain');
        res.end("Hello, World!");
    }

    else {
        res.setHeader('Content-Type', 'text/plain');
        res.end("Error: Page Not Found!")
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});