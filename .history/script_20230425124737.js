class BooksCollection {
  constructor() {
    this.books = [];
    this.container = document.querySelector('.books');
    this.allBooksTitle = document.querySelector('.all-books-title');
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }

  viewBooks() {
    // Check if there are any books
    if (this.books.length === 0) {
      // Hide the "All Awesome Books" title and the "View Books" section
      this.allBooksTitle.style.display = 'none';
      this.container.style.display = 'none';
      return;
    } else {
      // Show the "All Awesome Books" title and the "View Books" section
      this.allBooksTitle.style.display = 'block';
      this.container.style.display = 'block';
    }

    // Remove all existing book elements from the container
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
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

      // Append the container div to the html
      this.container.appendChild(bookInfo);
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
