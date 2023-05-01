class Book {
    constructor(title, author) {
      this.id = Date.now().toString(); // Generate unique ID based on timestamp
      this.title = title;
      this.author = author;
    }
  }

  export default Book;