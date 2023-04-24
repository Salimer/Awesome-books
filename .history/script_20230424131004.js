const book = {
    title: "",
    author: ""
};

let booksCollection = [
    {
        title: "Lorem ipsum",
        author: "http://127.0.0.1:3000/index.html"
    },
    {
        title: "",
        author: ""
    }
];

function addBook (title, author) {
    const newBook = Object.create(book);
    newBook.title = title;
    newBook.author = author;
    booksCollection.push(newBook);
};

function removeBook (title, author) {
    booksCollection = booksCollection.filter(obj => obj.title !== title || obj.author !== author);
};