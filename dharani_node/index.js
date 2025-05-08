const http = require('http');
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

const PORT = 8449;

// Serve index.html or API response
const server = http.createServer(async (req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }

    else if (req.url === '/api') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const uri = "mongodb+srv://dharani:ravanam@cluster0.wngwft6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        const client = new MongoClient(uri);

        try {
            await client.connect();
            const data = await findsomedata(client);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        } catch (e) {
            console.error(e);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error fetching places');
        } finally {
            await client.close();
        }
    }

    else {
        // Handle other static files
        const filePath = path.join(__dirname, 'public', req.url);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            } else {
                const ext = path.extname(filePath).toLowerCase();
                const mimeTypes = {
                    '.js': 'application/javascript',
                    '.css': 'text/css',
                    '.json': 'application/json',
                    '.png': 'image/png',
                    '.jpg': 'image/jpeg'
                };
                res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
                res.end(data);
            }
        });
    }
});

async function findsomedata(client) {
    const cursor = client.db("wondersBook").collection("bookcollection").find({});
    const results = await cursor.toArray();
    return results.map(({ _id, ...rest }) => rest);
}

// Start server
server.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
