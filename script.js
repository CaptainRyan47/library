let myLibrary = [];
let bookCounter = 0;
let deleteButtons = getDeleteButtonEventListeners();

document.querySelector('#add').addEventListener('click', () => {
  addBookToLibrary();
  deleteButtons = getDeleteButtonEventListeners();
})

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

function removeBookFromLibrary(id) {
  let tempArray = [];
  let i = 0;
  myLibrary.forEach((book, index) => {
    if (book.number == id.charAt(1)) return;
    else tempArray[i++] = myLibrary[index];
  });
  myLibrary = tempArray;
  document.querySelector('#books').querySelectorAll('div').forEach(div => {
    if (id.charAt(1) === div.id.charAt(4)) div.remove();
  });
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

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete'
    deleteButton.id = 'd' + book.number;
    deleteButton.innerText = 'Remove Book'

    bookElement.append(title, author, pages, read, deleteButton);
    libraryDiv.append(bookElement);
  });
}

function getDeleteButtonEventListeners() {
  return document.querySelectorAll('.delete').forEach(button => {
    button.addEventListener('click', (event) => {
      removeBookFromLibrary(event.target.id);
    })
  });
}