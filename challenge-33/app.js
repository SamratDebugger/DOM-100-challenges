const button = document.querySelector("button");
let list = document.getElementsByClassName("list");
let ul = document.querySelector("ul");

button.addEventListener("click", () => {
  for (let i = 0; i < list.length; i++) {
    list[i].style.color = "green";
  }
});
