const button = document.querySelectorAll("button");
const li = document.querySelectorAll("li");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    li[i].remove();
  });
}
