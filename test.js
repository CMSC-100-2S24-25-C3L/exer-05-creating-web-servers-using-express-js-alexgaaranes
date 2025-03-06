import needle from 'needle';

// Send an object containing details about a book
needle.post(
    'http://localhost:3000/add-book',
    {
        bookName: 'The Little Price', 
        isbn: '978-0156012195',
        author: 'Antoine Saint-Exupery',
        year: 1943
    },
    (err, res) => {
     console.log(res.body);
    }
)