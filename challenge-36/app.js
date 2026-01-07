const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newLi = document.createElement("li");
  newLi.innerText = e.target.listItem.value;
  ul.appendChild(newLi);
});
