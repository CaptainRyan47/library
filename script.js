let myLibrary = [];
let bookCounter = 0;
document.querySelector('#add').addEventListener('click', () => addBookToLibrary())

function Book(title, author, pages, read, number) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.number = number
}

function addBookToLibrary() {
  const form = document.querySelector('form');
  myLibrary.push(
    new Book(form.querySelector('input[name="title"]').value,
      form.querySelector('input[name="author"]').value,
      form.querySelector('input[name="pages"]').value,
      form.querySelector('input[name="read"]').checked,
      bookCounter++));
  displayBooksOnPage();
}

function displayBooksOnPage() {
  const libraryDiv = document.querySelector('#books');
  let bookDivs = libraryDiv.querySelectorAll('div');

  myLibrary.forEach(book => {
    let skip = false;
    bookDivs.forEach(div => {
      if ('book' + book.number === div.id) skip = true;
    });
    if (skip) return;
    const bookElement = document.createElement('div')
    bookElement.setAttribute('id', 'book' + book.number)

    const title = document.createElement('p')
    title.setAttribute('class', 'title')
    title.textContent = book.title;

    const author = document.createElement('p')
    author.setAttribute('class', 'author')
    author.textContent = book.author;

    const pages = document.createElement('p')
    pages.setAttribute('class', 'pages')
    pages.textContent = book.pages;

    const read = document.createElement('p')
    read.setAttribute('class', 'read')
    read.textContent = book.read;

    bookElement.append(title, author, pages, read);
    libraryDiv.append(bookElement);
  });
} 