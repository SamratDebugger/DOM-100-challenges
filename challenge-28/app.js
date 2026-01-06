const button = document.querySelector("button");
const li = document.querySelectorAll("li");

button.addEventListener("click", () => {
  li.forEach((list) => {
    list.style.textTransform = "uppercase";
  });
});
