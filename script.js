let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

const book0 = new Book('Dune', 'Frank Herbert', 858, true);
console.log(book0);

function addBookToLibrary() {
  myLibrary[0] = book0
 }

function displayBooksOnPage() { }