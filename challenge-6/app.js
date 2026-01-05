const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  ul.removeChild(ul.firstElementChild);
});
