const button = document.querySelector("button");
const li = document.querySelectorAll("li");

button.addEventListener("click", () => {
  for (let i = 0; i < li.length; i++) {
    li[i].classList.toggle("hide");
  }
});
