const button = document.querySelector("button");
let list = document.getElementsByClassName("list");
let ol = document.querySelector("ol");

button.addEventListener("click", () => {
  for (let i = 0; i < list.length; i++) {
    list[i].style.listStyle = "decimal";
  }
});
