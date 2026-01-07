const button = document.querySelector("button");
const body = document.querySelector("body");
let ul = document.querySelector("ul");

button.addEventListener("click", () => {
  body.removeChild(body.firstElementChild);
});
