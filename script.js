const newBookBtn = document.querySelector(".new-book");
const sideBar = document.querySelector(".sidebar");
const form = document.querySelector("form");

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

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

newBookBtn.addEventListener("click", hideSidebar);

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
