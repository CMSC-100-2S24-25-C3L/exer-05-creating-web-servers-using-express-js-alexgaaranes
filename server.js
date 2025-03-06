import express from 'express';
import { appendFileSync, readFileSync } from 'node:fs';

// instantiate the server
const port = 3000;
const app = express();
// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// GET endpoint at root
app.get('/', (req, res) => {
    console.log(req);
    res.send(`
        <h1> Exercise 05 </h1>
    `);
});

// POST endpoint at /add-book
app.post('/add-book', (req, res) => {
    res.send(`Received ISBN: ${req.body.isbn}`);
});

// GET endpoint for /find-by-isbn-author
app.get('find-by-isbn-author', (req, res) => {
    console.log(req.query);
});

// GET endpoint for /find-by-author
app.get('find-by-author', (req, res) => {
    console.log(req.query);
})

// Start the server at port 3000
app.listen(port, () => { console.log(`Server started at port ${port}`); });