const button = document.querySelector("button");
const lists = document.querySelectorAll("li");

button.addEventListener("click", () => {
  for (const list of lists) {
    list.classList.toggle("bounce");
  }
});
