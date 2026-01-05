const p = document.querySelectorAll("p");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  p.forEach((para) => {
    para.classList.toggle("hide");
  });
});
