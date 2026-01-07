const button = document.querySelector("button");
let list = document.getElementsByClassName("list");
let ul = document.querySelector("ul");

button.addEventListener("click", () => {
  ul.innerHTML = "";
});
