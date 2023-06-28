let myLibrary = [];
document.querySelector('#add').addEventListener('click', () => addBookToLibrary())

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  const form = document.querySelector('form');
  myLibrary.push(
    new Book(form.querySelector('input[name="title"]').value,
      form.querySelector('input[name="author"]').value,
      form.querySelector('input[name="pages"]').value,
      form.querySelector('input[name="read"]').checked));
}

function displayBooksOnPage() { }