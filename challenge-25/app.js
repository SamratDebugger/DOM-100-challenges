const div = document.getElementById("div");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  let randomValOne = Math.round(Math.random() * 500);
  let randomValTwo = Math.round(Math.random() * 500);
  div.style.left = `${randomValOne}px`;
  div.style.top = `${randomValTwo}px`;
});
