function Book(title, author, pages, year, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.isRead = isRead;
}

let myLibrary = JSON.parse(localStorage.getItem("library") || "[]");

// myLibrary = [
//   new Book("A Game of Thrones", "George R.R. Martin", "694", "1996", false),
//   new Book("A Clash of Kings", "George R.R. Martin", "761", "1998", false),
//   new Book("A Storm of Swords", "George R.R. Martin", "973", "2000", false),
//   new Book("A Feast for Crows", "George R.R. Martin", "753", "2005", false),
//   new Book("A Dance of Dragons", "George R.R. Martin", "1.016", "2011", false),
// ];

function addBookToLibrary(title, author, pages, year, isRead) {
  myLibrary.push(new Book(title, author, pages, year, isRead));
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem("library", JSON.stringify(myLibrary))
}

function render() {
  const books = document.querySelector(".books");
  books.innerHTML = '';
  myLibrary.forEach((book) => {
    let divBook = document.createElement("DIV");
    let title = document.createElement("H2");
    let author = document.createElement("H2");
    let pages = document.createElement("H3");
    let year = document.createElement("H3");
    let remove = document.createElement("IMG");
    let position = myLibrary.indexOf(book);
    let isRead = document.createElement("IMG");

    title.innerHTML = book.title;
    author.innerHTML = `By: ${book.author}`;
    pages.innerHTML = `Pages: ${book.pages}`;
    year.innerHTML = `Year: ${book.year}`;
    divBook.setAttribute("value", book.isRead);

    if(book.isRead == true) {
      isRead.src = "./img/toggle-on.png";
    }
    else {
      isRead.src = "./img/toggle-off.png";
    }
    remove.src  = "./img/deleteBtn.png";
    isRead.classList.add("isRead");
    isRead.setAttribute('onclick', `isRead(${position})`);
    remove.classList.add("remove");
    remove.setAttribute("onclick", `remove(${position})`);
    divBook.classList.add("book");

    divBook.appendChild(remove);
    divBook.appendChild(title);
    divBook.appendChild(author);
    divBook.appendChild(pages);
    divBook.appendChild(year);
    divBook.appendChild(isRead);

    books.appendChild(divBook);
  });
}

function renderForm() {
  const form = document.querySelector(".form");
  form.innerHTML = '';

  form.style.visibility = "visible";

  const divBook = document.createElement("DIV");
  const titleLabel = document.createElement("LABEL");
  const titleInput = document.createElement("INPUT");
  const authorLabel = document.createElement("LABEL");
  const authorInput = document.createElement("INPUT");
  const pagesLabel = document.createElement("LABEL");
  const pagesInput = document.createElement("INPUT");
  const yearLabel = document.createElement("LABEL");
  const yearInput = document.createElement("INPUT");
  const buttonSave = document.createElement("BUTTON");
  let close = document.createElement("IMG");

  close.src  = "./img/deleteBtn.png";
  close.classList.add("remove");
  close.classList.add("btnForm");
  close.setAttribute("onclick", "closeForm()");
  divBook.classList.add("divBook");
  buttonSave.classList.add("btnSave");

  titleLabel.innerHTML = "Title";
  authorLabel.innerHTML = "Author";
  pagesLabel.innerHTML = "Pages";
  yearLabel.innerHTML = "Year";
  buttonSave.innerHTML = "Save";

  titleInput.setAttribute("name", "title");
  authorInput.setAttribute("name", "author");
  pagesInput.setAttribute("name", "pages");
  yearInput.setAttribute("name", "year");

  divBook.appendChild(close)
  divBook.appendChild(titleLabel);
  divBook.appendChild(titleInput);
  divBook.appendChild(authorLabel);
  divBook.appendChild(authorInput);
  divBook.appendChild(pagesLabel);
  divBook.appendChild(pagesInput);
  divBook.appendChild(yearLabel);
  divBook.appendChild(yearInput);

  form.appendChild(divBook);
  form.appendChild(buttonSave);
}

document.addEventListener('click', (e) => {
  if (!e.target.matches('.check')) return;
  e.target.value = true;
})

function getFormInfo() {
  let values = document.querySelectorAll("INPUT");
  const array = [];
  
  values.forEach((value) => {
      array.push(value.value)
  })
  addBookToLibrary(array[0], array[1], array[2], array[3], array[4], array[5]);
}

document.addEventListener("click", (e) => {
  if (!e.target.matches(".btn")) return;
  renderForm();
});

document.addEventListener("click", (e) => {
  if (!e.target.matches(".btnSave")) return;
  getFormInfo();
});

function remove(position) {  
  myLibrary.splice(position, 1);
  saveToLocalStorage();
  render();
}

function closeForm() {
  const form = document.querySelector(".form");
  form.style.visibility = "hidden"
}

function isRead(position) {
  if (!myLibrary[position].isRead) {
    myLibrary[position].isRead = true;
    saveToLocalStorage();
    render();
    return;
  }
  myLibrary[position].isRead = false;
  saveToLocalStorage();
  render();
}

function validateForm() {
  let title = document.querySelector()
}

render();