const button = document.querySelector("button");
const p = document.querySelectorAll("p");

button.addEventListener("click", () => {
  p.forEach((para) => {
    para.style.color = `#${Math.floor(Math.random() * 0xfff)}`;
  });
});
