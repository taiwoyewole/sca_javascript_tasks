class Booklist {
    constructor(bookRead, bookNotRead, nextBook, currentBook, lastBook) {
        this.bookRead = bookRead;
        this.bookNotRead = bookNotRead;
        this.nextBook = nextBook;
        this.currentBook = currentBook;
        this.lastBook = lastBook;
        
        this.books = [ this.bookRead, this.bookNotRead, this.nextBook , this.currentBook, this.lastBook];
    }
    addBook(book) {
        return this.books.push(book);
    }
    
    finishCurrentBook(doneOrnot) {
        return doneOrnot;
    }
}

class Book extends Booklist {
    constructor(bookRead, bookNotRead, nextBook, currentBook, lastBook, title, genre, author, read, readDate) {
        super(bookRead, bookNotRead, nextBook, currentBook, lastBook)
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}
const B = new Book('blue hisbiscuss', 'half of a yellow sun', 'oliver twist', 'current book', 'last book', )


// Every Booklist should have a few methods:

// .add(book)
// should add a book to the books list.

// .finishCurrentBook()
// should mark the book that is currently being read as "read"
// Give it a read date of new Date(Date.now())
// Change the last book read to be the book that just got finished
// Change the current book to be the next book to be read
// Change the next book to be read property to be the first unread book you find in the list of books
