// the book object
const book = {
    title: "",
    author: ""
};

// books collection object
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

// Add a new book function 
function addBook (title, author) {
    const newBook = Object.create(book);
    newBook.title = title;
    newBook.author = author;
    booksCollection.push(newBook);
};

// Remove an existing book function 
function removeBook (title, author) {
    booksCollection = booksCollection.filter(obj => obj.title !== title || obj.author !== author);
};

// Add a book article
booksCollection.forEach((book) => {
    // Craete container article
    const container = document.createElement('article');
    container.className = "books";
    bookInfo = document.createElement('div')

    //Create and append book info div
    bookInfo.className = "book-info";
    container.appendChild(bookInfo);

    // Create and append title of the book
    const title = document.createElement('p');
    title.className = "";
    bookInfo.appendChild(title);

    // Create and append author of the book
    const author = document.createElement('p');
    author.className = "";
    bookInfo.appendChild(author);

    // Create and append the button 
    const button = document.createElement('button');
    button.classList
});