const tbody = document.querySelector("tbody");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (tbody.lastElementChild) {
    tbody.removeChild(tbody.lastElementChild);
  }
});
