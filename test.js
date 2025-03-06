import needle from 'needle';

// Send an object containing details about a book
needle.post(
    'http://localhost:3000/add-book',
    {
        bookName: "The Little Prince", 
        isbn: '978-0156012195',
        author: 'Antoine Saint-Exupery',
        year: 1943
    },
    (err, res) => {
     err?console.log(err):console.log(res.body);
    }
)