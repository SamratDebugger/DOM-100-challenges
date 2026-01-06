const div = document.querySelector("div");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const maxX = window.innerWidth - div.offsetWidth;
  const maxY = window.innerHeight - div.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  div.style.left = randomX + "px";
  div.style.top = randomY + "px";
});
