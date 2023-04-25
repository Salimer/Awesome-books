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
        this.books.filter((book) => book.id !== id);
    }

    viewBooks() {
        const container = document.querySelector('.books');
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
        
        this.books.forEach((book) => {
            // Create the div
            const bookInfo = document.createElement('div');
            bookInfo.className = 'book-info';
            bookInfo.innerHTML = '<[>lsjalf;jsaldfj;'

            // button 
            const button = document.createElement('button');
            button.className = 'remove-book';
            button.type = 'button';
            button.textContent = "Remove";
            button.dataset.id = book.id;

            // Add event listener to remove button
            button.addEventListener('click', (event) => {
                const id = event.target.dataset.id;
                this.removeBook(id);
                this.viewBooks();
        });

        // Append the container div to the html
        container.appendChild(bookInfo);
        })
    }

    saveBooks() {
        localStorage.setItem('books', JSON.stringify(this.books));
    }

    loadBooks() {
        this.books = JSON.parse(localStorage)
    }
}