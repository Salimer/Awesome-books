// Create Class
class 

// the book object
const book = {
  id: '',
  title: '',
  author: '',
};

// Check local storage for books collection object
let booksCollection = JSON.parse(localStorage.getItem('books')) || [];

// Save books to local storage
function saveBooks(books) {
  localStorage.setItem('books', JSON.stringify(books));
}

// Remove an existing book function
function removeBook(id) {
  booksCollection = booksCollection.filter((obj) => obj.id !== id);
}

// Add a new book function
function addBook(title, author) {
  const newBook = Object.create(book);
  newBook.id = Date.now().toString(); // Generate unique ID based on timestamp
  newBook.title = title;
  newBook.author = author;
  booksCollection.push(newBook);
}

// View books --------------------------------------------------
function viewBooks() {
  // Remove all existing book elements from the container
  const container = document.querySelector('.books');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Update books
  booksCollection.forEach((book) => {
    // Create the container div
    const bookInfo = document.createElement('div');
    bookInfo.className = 'book-info';
    bookInfo.innerHTML = `<p><span class="book-title">"${book.title}"</span> by <span class="book-author"> ${book.author}</span></p>`;

    // Create and append the button
    const button = document.createElement('button');
    button.className = 'remove-book';
    button.type = 'button';
    button.textContent = 'Remove';
    button.dataset.id = book.id; // Set the book ID as a data attribute
    bookInfo.appendChild(button);

    // Append the container div to the html
    container.appendChild(bookInfo);
  });

  // Update local storage
  saveBooks(booksCollection);

  // Checking all the remove-book buttons
  const removeButtons = document.querySelectorAll('.remove-book');
  removeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const { id } = event.target.dataset;
      removeBook(id);
      viewBooks();
    });
  });
}
// ------------------------------------------------------------

viewBooks();

// Adding new book
const addBookBtn = document.querySelector('#add-book');
addBookBtn.addEventListener('click', () => {
  const form = document.getElementById("form");
  let title = document.querySelector('#new-title').value;
    const author = document.querySelector('#new-author').value;
    addBook(title, author);
    viewBooks();
    form.reset();
});
