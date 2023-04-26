// Define page navigation 
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('#close-icon')
const dropDownNav = document.querySelector('.navigation-menu');
const listNav = document.querySelector('#list-nav');
const addNewNav = document.querySelector('#add-new-nav');
const contactNav = document.querySelector('#contact-nav');

// Define page sections 
const viewBooksSection = document.querySelector('.view-books');
const addBookFormSection = document.querySelector('.add-book-form');
const newContactSection = document.querySelector('.new-contact-info');

/* Add event listeners */
// List event listener
listNav.addEventListener('click', () => {
  viewBooksSection.classList.remove('hide');
  addBookFormSection.classList.add('hide');
  newContactSection.classList.add('hide')
});

// New book event listener
addNewNav.addEventListener('click', () => {
  viewBooksSection.classList.add('hide');
  addBookFormSection.classList.remove('hide');
  newContactSection.classList.add('hide')
});

// Contact section event listener
contactNav.addEventListener('click', () => {
  viewBooksSection.classList.add('hide');
  addBookFormSection.classList.add('hide');
  newContactSection.classList.remove('hide')
});

// Hamburger event listener
hamburger.addEventListener('click', () => {
  dropDownNav.classList.remove('navigation-menu', 'hide');
  dropDownNav.classList.add('popup');
  closeIcon.classList.remove('hide');
});

// Close icon event listener
closeIcon.addEventListener('click', () => {
  dropDownNav.classList.add('navigation-menu', 'hide');
  dropDownNav.classList.remove('popup');
  closeIcon.classList.add('hide');
});

// Query selector for mobile navigation
if (window.matchMedia("(min-width: 768px)").matches) {
  hamburger.classList.add('hide');
  dropDownNav.classList.remove('hide');
}

/* Books list page --------------------------------
/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author) {
    this.id = Date.now().toString(); // Generate unique ID based on timestamp
    this.title = title;
    this.author = author;
  }
}
/* eslint-disable max-classes-per-file */

class BooksCollection {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    if (title === '' || author === '') {
      // eslint-disable-next-line no-alert
      alert('Please fill both fields');
    } else {
      const newBook = new Book(title, author);
      this.books.push(newBook);
    }
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }

  viewBooks() {
    // Remove all existing book elements from the container
    const container = document.querySelector('.books');
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Update books
    this.books.forEach((book) => {
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

      // Add event listener to remove button
      button.addEventListener('click', (event) => {
        const { id } = event.target.dataset;
        this.removeBook(id);
        this.viewBooks();
      });

      // Append the container div to the html
      container.appendChild(bookInfo);
    });

    // Update local storage
    this.saveBooks();
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  loadBooks() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  init() {
    this.loadBooks();
    this.viewBooks();

    // Adding new book
    const addBookBtn = document.querySelector('#add-book');
    addBookBtn.addEventListener('click', () => {
      const form = document.getElementById('form');
      const title = document.querySelector('#new-title').value;
      const author = document.querySelector('#new-author').value;
      this.addBook(title, author);
      this.viewBooks();
      form.reset();
    });
  }
}

const booksCollection = new BooksCollection();
booksCollection.init();
/* Books list page --------------------------------