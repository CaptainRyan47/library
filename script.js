let bookCounter = 0;
let myLibrary = [
  new Book('Dune', 'Frank Herbert', 658, true, bookCounter++),
  new Book('Leviathan Wakes', 'James S.A. Corey', 592, false, bookCounter++)
];
displayBooksOnPage();

document.querySelector('#add').addEventListener('click', () => {
  addBookToLibrary();
})

function Book(title, author, pages, read, number) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.number = number
}

Book.prototype.toggleRead = function () {
  if (this.read) this.read = false;
  else this.read = true;
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
    if ('d' + book.number == id) return;
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

    const read = document.createElement('input')
    read.setAttribute('class', 'read')
    read.id = 'r' + book.number;
    read.setAttribute('type', 'checkbox')
    book.read ? read.setAttribute('checked', '') :
      read.removeAttribute('checked');
    read.addEventListener('change', (event) => {
      book.toggleRead();
    })

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete'
    deleteButton.id = 'd' + book.number;
    deleteButton.innerText = 'Remove Book'
    deleteButton.addEventListener('click', (event) => {
      removeBookFromLibrary(event.target.id);
    })

    bookElement.append(title, author, pages, read, deleteButton);
    libraryDiv.append(bookElement);
  });
}