const nextColor = document.querySelector("button");
let lists = document.querySelectorAll("li");

nextColor.addEventListener("click", () => {
  for (const list of lists) {
    let randomFont = +Math.round(Math.random() * 100).toString(16);
    list.style.fontSize = randomFont + "px";
  }
});
