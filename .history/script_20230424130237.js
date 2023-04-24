const book = {
    title: "",
    author: ""
};

let booksCollection = [];

function addBook (title, author) {
    const newBook = Object.create(book);
    newBook.title = title;
    newBook.author = author;
    booksCollection.push(newBook);
};

function removeBook ()