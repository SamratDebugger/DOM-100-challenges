const changeBtn = document.querySelector("button");
let list = document.querySelector("li");

changeBtn.addEventListener("click", () => {
  list.textContent = "About";
});
