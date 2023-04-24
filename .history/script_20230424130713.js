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

function removeBook (title, author) {
    booksCollection = myArray.filter(obj => obj.name !== "Mary");
}