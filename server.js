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
    console.log(`Received ISBN: ${req.body.isbn}`);

    // Initialize add status object
    let status = { success: false };

    // Check if the book obj contains all info
    if (req.body.bookName == undefined ||
        req.body.isbn == undefined ||
        req.body.author == undefined ||
        req.body.year == undefined
    )   res.send(status);
    else{
        // Read ./books.txt
        try{
            const data = readFileSync('./books.txt', 
            { encoding: 'utf-8', flag: 'r'});

            let isUnique = true;
            // Check if ISBN exists
            data.split('\n').forEach(entry =>{
                if(entry.split(',')[1] == req.body.isbn)
                    isUnique = false;
            });
            isUnique?addBook(status, req, res):res.send(status);
            
        } catch (err){
            appendFileSync('./books.txt', '');  // create file
            addBook(status, req, res);
        }
    }
});

// GET endpoint for /find-by-isbn-author
app.get('/find-by-isbn-author', (req, res) => {
    console.log(req.query);
});

// GET endpoint for /find-by-author
app.get('/find-by-author', (req, res) => {
    console.log(req.query);
})

// Start the server at port 3000
app.listen(port, () => { console.log(`Server started at port ${port}`); });


// Other Functions
const addBook = (status, req, res) => {
    // Save the book details in books.txt
    let bookDetails = `${req.body.bookName},${req.body.isbn},${req.body.author},${req.body.year}\n`;
    try{
        appendFileSync("./books.txt", bookDetails);
        status.success = true;
    } catch(err) {  // if an error occurred
        console.log(err);
    } finally{      // send add status
        res.send(status);
    }
}