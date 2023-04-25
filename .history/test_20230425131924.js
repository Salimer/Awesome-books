class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.id = new Date.now().toString();
    }
}

class BooksCollection {
    constructor() {
        this.books = [];
    }

    addBook(title, author) {
        const newBook = new Book(title, author);
        this.books.push(newBook);
    }

    removeBook (id) {
        this.books.filter
    }
}