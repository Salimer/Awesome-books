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

    //Create the container div
    const bookInfo = document.createElement('div');
    bookInfo.className = "book-info";

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
    button.setAttribute("id", "RemoveBook");
    button.className = "";
    button.type = "button";
    button.textContent = "Remove";
    bookInfo.appendChild(button);

    // Append the container div to the html 
    const container = document.querySelector('.books');
    container.appendChild(bookInfo);
});
