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
        this.books = new Book();
        this.books
    }
}