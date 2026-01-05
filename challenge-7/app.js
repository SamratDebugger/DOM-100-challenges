const button = document.querySelector("button");
const p = document.querySelectorAll("P");

button.addEventListener("click", () => {
  p.forEach((p) => {
    p.style.display = "none";
  });
});
