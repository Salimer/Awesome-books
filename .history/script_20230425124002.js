class Book {
  constructor(title, author) {
    this.id = Date.now().toString(); // Generate unique ID based on timestamp
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
    this.books.push(newBook);
    this.saveBooks();
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
    this.saveBooks();
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  loadBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    this.books = books.map((bookData) => {
      const book = new Book();
      book.id = bookData.id;
      book.title = bookData.title;
      book.author = bookData.author;
      return book;
    });
  }

  renderBooks() {
    const container = document.querySelector('.books');
    container.innerHTML = '';

    this.books.forEach((book) => {
      const bookInfo = document.createElement('div');
      bookInfo.className = 'book-info';
      bookInfo.innerHTML = `<p><span class="book-title">"${book.title}"</span> by <span class="book-author"> ${book.author}</span></p>`;

      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-book';
      removeBtn.type = 'button';
      removeBtn.textContent = 'Remove';
      removeBtn.dataset.id = book.id;
      bookInfo.appendChild(removeBtn);

      container.appendChild(bookInfo);
    });

    const removeButtons = document.querySelectorAll('.remove-book');
    removeButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const { id } = event.target.dataset;
        this.removeBook(id);
        this.renderBooks();
      });
    });
  }
}

const booksCollection = new BooksCollection();
booksCollection.loadBooks();
booksCollection.renderBooks();

const form = document.getElementById("form");
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('#new-title').value;
  const author = document.querySelector('#new-author').value;
  booksCollection.addBook(title, author);
  form.reset();
});
