import needle from 'needle';

// Send an object containing details about a book
needle.post(
    'http://localhost:3000/add-book',
    {
        bookName: "Harry Potter and the Chamber of Secrets", 
        isbn: '0-7475-3849-2',
        author: 'J.K Rowling',
        year: 1997
    },
    (err, res) => {
     err?console.log(err):console.log(res.body);
    }
)