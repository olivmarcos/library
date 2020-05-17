function Book(title, author, pages, year) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
}

let myLibrary = JSON.parse(localStorage.getItem("library") || "[]");

// myLibrary = [
//   new Book("A Game of Thrones", "George R.R. Martin", "694", "1996"),
//   new Book("A Clash of Kings", "George R.R. Martin", "761", "1998"),
//   new Book("A Storm of Swords", "George R.R. Martin", "973", "2000"),
//   new Book("A Feast for Crows", "George R.R. Martin", "753", "2005"),
//   new Book("A Dance of Dragons", "George R.R. Martin", "1.016", "2011"),
// ];

function addBookToLibrary(title, author, pages, year) {
  myLibrary.push(new Book(title, author, pages, year));
  localStorage.setItem("library", JSON.stringify(myLibrary))
}

function render() {
  const books = document.querySelector(".books");
  myLibrary.forEach((book) => {
    let divBook = document.createElement("DIV");
    let title = document.createElement("H2");
    let author = document.createElement("H2");
    let pages = document.createElement("H3");
    let year = document.createElement("H3");

    divBook.classList.add("book");
    title.innerHTML = book.title;
    author.innerHTML = `By: ${book.author}`;
    pages.innerHTML = `Pages: ${book.pages}`;
    year.innerHTML = `Year: ${book.year}`;

    divBook.appendChild(title);
    divBook.appendChild(author);
    divBook.appendChild(pages);
    divBook.appendChild(year);

    books.appendChild(divBook);
  });
}

function renderForm() {
  const form = document.querySelector(".form");
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

  divBook.classList.add("divBook");
  buttonSave.classList.add("btnSave");

  titleLabel.innerHTML = "Title";
  authorLabel.innerHTML = "Author";
  pagesLabel.innerHTML = "Pages";
  yearLabel.innerHTML = "Year";
  buttonSave.innerHTML = "Save";

  divBook.appendChild(titleLabel);
  divBook.appendChild(titleInput);
  divBook.appendChild(authorLabel);
  divBook.appendChild(authorInput);
  divBook.appendChild(pagesLabel);
  divBook.appendChild(pagesInput);
  divBook.appendChild(yearLabel);
  divBook.appendChild(yearInput);
  divBook.appendChild(buttonSave);

  form.appendChild(divBook);
}

function getFormInfo() {
  let values = document.querySelectorAll("INPUT");
  const array = [];

  values.forEach((value) => {
      array.push(value.value)
  })

  addBookToLibrary(array[0], array[1], array[2], array[3]);
}

document.addEventListener("click", (e) => {
  if (!e.target.matches(".btn")) return;
  renderForm();
});

document.addEventListener("click", (e) => {
  if (!e.target.matches(".btnSave")) return;
  getFormInfo();
});

render();
