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

// View books --------------------------------------------------
function viewBooks () {

}

// ------------------------------------------------------------

// Checking all the remove-book buttons 
const removeButtons = document.querySelectorAll(".remove-book");
removeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const title = event.target.closest('.book-title');
        removeBook(title);
    });
});

// Adding new book
const addBookBtn = document.querySelector('#add-book');
addBookBtn.addEventListener('click', () => {
    const title = document.querySelector('#new-title').value;
    const author = document.querySelector('#new-author').value;
    addBook(title, author);
});

console.log(booksCollection);
