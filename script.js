const newBookBtn = document.querySelector(".new-book");
const sideBar = document.querySelector(".sidebar");
const form = document.querySelector("form");
const display = document.querySelector(".main-content");

const title1 = document.createElement("h3");
const author1 = document.createElement("p");
const pages1 = document.createElement("p");
const readIt1 = document.createElement("p");

function hideSidebar() {
  sideBar.classList.toggle("hidden");
}

const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.bookID = function () {
  let id = crypto.randomUUID();
  return id;
};

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  const newBook = new Book(title, author, pages, read);
  const newObject = {
    title: newBook.title,
    author: newBook.author,
    pages: newBook.pages,
    read: newBook.read,
    id: newBook.bookID(),
  };
  myLibrary.push(newObject);
}

function addToDisplay(arr) {
  // take array, create element then display it on DOM
  for (item of arr) {
    const book1 = document.createElement("div");
    let innerEl = [
      document.createElement("h3"),
      document.createElement("p"),
      document.createElement("p"),
      document.createElement("p"),
      document.createElement("p"),
    ];

    const innerEl2 = Array.from(innerEl);

    innerEl2[0].textContent = `Title: ${item.title}`;
    innerEl2[1].textContent = `Author: ${item.author}`;
    innerEl2[2].textContent = `Pages: ${item.pages}`;
    innerEl2[3].textContent = item.read == true ? "Read?: yes" : "Read?: no";
    innerEl2[4].textContent = `Id: ${item.id}`;

    book1.classList.toggle("book");
    for (entry of innerEl) {
      console.log(entry);
      book1.append(entry);
    }
    display.append(book1);
  }
}

function clearDisplay() {
  const books = document.querySelectorAll(".book");
  books.forEach((div) => div.remove());
}

newBookBtn.addEventListener("click", hideSidebar);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = form.elements.title.value;
  const author = form.elements.author.value;
  const pages = form.elements.pages.value;
  const selectedEl = document.querySelector("input[name='read-state']:checked");
  const selectValue = selectedEl.value === "true";

  clearDisplay();

  addBookToLibrary(title, author, pages, selectValue);
  addToDisplay(myLibrary);
  console.log(myLibrary);
  console.log();
});
