const form = document.querySelector("form");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  form.reset();
});
