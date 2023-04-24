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
function removeBook (title) {
    booksCollection = booksCollection.filter(obj => obj.title !== title);
};

// Add a book article
booksCollection.forEach((book) => {

    //Create the container div
    const bookInfo = document.createElement('div');
    bookInfo.className = "book-info";

    // Create and append title of the book
    const title = document.createElement('p');
    title.className = "";
    title.innerHTML = book.title;
    bookInfo.appendChild(title);

    // Create and append author of the book
    const author = document.createElement('p');
    author.className = "";
    author.innerHTML = book.author;
    bookInfo.appendChild(author);

    // Create and append the button 
    const button = document.createElement('button');
    button.className = "remove-book";
    button.type = "button";
    button.textContent = "Remove";
    bookInfo.appendChild(button);

    // Create and append the hr element
    const hr = document.createElement('hr');
    bookInfo.appendChild(hr);

    // Append the container div to the html 
    const container = document.querySelector('.books');
    container.appendChild(bookInfo);
});

// Checking all the remove-book buttons 
const removeButtons = document.querySelectorAll(".remove-book");
removeButtons.forEach((button))
addEventListener
