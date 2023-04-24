// Get the form and container elements from the HTML document
const form = document.querySelector('#book-form');
const container = document.querySelector('.container');

// Load books from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    // Get books from local storage or an empty array if no books are stored
    const books = JSON.parse(localStorage.getItem('books')) || [];
    // Loop through each book and add it to the UI
    books.forEach((book) => {
        const mybooks = document.createElement('div');
        mybooks.classList.add('book');
        mybooks.innerHTML = `<p><span class="book-name">${book.name}</span></p>
                        <p><span class="book-author"> ${book.author}</span></p>
                        <button class="remove">Remove</button>
                        <hr>`;
        container.appendChild(mybooks);
    });
});

// Save books to local storage


// Add book to UI and local storage
const addBook = (book) => {
    const mybooks = document.createElement('div');
    mybooks.classList.add('book');
    mybooks.innerHTML = `${book.name} <br> ${book.author}<br>
                    <button class="remove">Remove</button>
                    <hr>`;
    container.appendChild(mybooks);
    // Get existing books from local storage or an empty array if no books are stored
    const books = JSON.parse(localStorage.getItem('books')) || [];
    // Add the new book to the array of existing books
    books.push(book);
    // Save the updated array of books to local storage
    saveBooks(books);
};

// Remove book from UI and local storage
const removeBook = (mybooks) => {
    // Get the name and author of the book to remove from the UI
    const bookName = mybooks.querySelector('.book-name').textContent;
    const bookAuthor = mybooks.querySelector('.book-author').textContent.replace('by ', '');
    // Get existing books from local storage or an empty array if no books are stored
    const books = JSON.parse(localStorage.getItem('books')) || [];
    // Filter out the book to remove from the array of existing books
    const filteredBooks = books.filter((book) => book.name !== bookName || book.author !== bookAuthor);
    // Save the updated array of books to local storage
    saveBooks(filteredBooks);
    // Remove the book from the UI
    mybooks.remove();
};

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get the values of the book name and author inputs from the form
    const bookName = document.querySelector('#book-name').value;
    const bookAuthor = document.querySelector('#book-author').value;

    // If both inputs have a value, add the book to the UI and local storage
    if (bookName && bookAuthor) {
        const book = { name: bookName, author: bookAuthor };
        addBook(book);
        // Clear the input values after adding the book
        document.querySelector('#book-name').value = '';
        document.querySelector('#book-author').value = '';
    }
});

container.addEventListener('click', (e) => {
    // If the remove button is clicked, remove the book from the UI and local storage
    if (e.target.classList.contains('remove')) {
        removeBook(e.target.parentElement);
    }
});