// Create Class
class Book {
  constructor(title, author) {
    this.id = new Date.now().toString();
    this.title = title;
    this.author = author;
  }
}

class BooksCollection {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    this.book.push(newBook);
  }

  removeBook(id) {
    this.books.filter((book) => book.id != id);
  }

  viewBooks() {
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
  }

  saveBooks(books) {
    localStorage.setItem('books', JSON.stringify(books));
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
      const form = document.getElementById("form");
      let title = document.querySelector('#new-title').value;
      const author = document.querySelector('#new-author').value;
      this.addBook(title, author);
      this.viewBooks();
      form.reset();
    });

    // Checking all the remove-book buttons
    const removeButtons = document.querySelectorAll('.remove-book');
    removeButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const { id } = event.target.dataset;
        this.removeBook(id);
        this.viewBooks();
      });
    });
  }
}

const booksCollection = new BooksCollection();
booksCollection.init();
