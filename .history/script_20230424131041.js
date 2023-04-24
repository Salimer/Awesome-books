const book = {
    title: "",
    author: ""
};

let booksCollection = [
    {
        title: "Lorem ipsum",
        author: "Testeroo Testyy"
    },
    {
        title: "Second book",
        author: "Testeroo Testyy"
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