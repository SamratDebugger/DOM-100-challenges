const h1 = document.querySelector("h1");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  h1.innerText = e.target.head.value;
});
