const express = require('express');
const cors = require('cors');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 8249;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); // <-- serve static files

/**
 * Route to serve index.html at "/"
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/**
 * API route at "/api"
 */
app.get('/api', async (req, res) => {
    const uri = "mongodb+srv://dharani:ravanam@cluster0.wngwft6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const results = await findsomedata(client);
        res.json(results);
    } catch (e) {
        console.error(e);
        res.status(500).send("Error fetching places");
    } finally {
        await client.close();
    }
});

/**
 * MongoDB fetch logic (same)
 */
async function findsomedata(client) {
    const cursor = client.db("wondersBook").collection("bookcollection").find({});
    const results = await cursor.toArray();
    return results.map(({ _id, ...rest }) => rest);
}

/**
 * Server start
 */
async function main() {
    try {
        app.listen(PORT, () => {
            console.log(`✅ Server running at http://localhost:${PORT}`);
        });
    } catch (e) {
        console.error("Server error:", e);
    }
}

main().catch(console.error);
