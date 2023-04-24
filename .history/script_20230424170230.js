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
function removeBook(title) {
  booksCollection = booksCollection.filter((obj) => obj.title !== title);
}

// Add a new book function
function addBook(title, author) {
  const newBook = Object.create(book);
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

    // Create and append title of the book
    const title = document.createElement('p');
    title.className = 'book-title';
    title.innerHTML = book.title;
    bookInfo.appendChild(title);

    // Create and append author of the book
    const author = document.createElement('p');
    author.className = 'book-author';
    author.innerHTML = book.author;
    bookInfo.appendChild(author);

    // Create and append the button
    const button = document.createElement('button');
    button.className = 'remove-book';
    button.type = 'button';
    button.textContent = 'Remove';
    bookInfo.appendChild(button);

    // Create and append the hr element
    const hr = document.createElement('hr');
    bookInfo.appendChild(hr);

    // Append the container div to the html
    container.appendChild(bookInfo);
  });

  // Update local storage
  saveBooks(booksCollection);

  // Checking all the remove-book buttons
  const removeButtons = document.querySelectorAll('.remove-book');
  removeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const title = event.target.closest('.book-info').querySelector('.book-title').textContent;
      removeBook(title);
      viewBooks();
    });
  });
}
// ------------------------------------------------------------

viewBooks();

// Adding new book
const addBookBtn = document.querySelector('#add-book');
addBookBtn.addEventListener('click', () => {
  const title = document.querySelector('#new-title').value;
  const author = document.querySelector('#new-author').value;
  addBook(title, author);
  viewBooks();
});
