const newBookBtn = document.querySelector(".new-book");
const sideBar = document.querySelector(".sidebar");
const form = document.querySelector("form")

function hideSidebar() {
  sideBar.classList.toggle("hidden");
}

newBookBtn.addEventListener("click", hideSidebar);
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(e)
})