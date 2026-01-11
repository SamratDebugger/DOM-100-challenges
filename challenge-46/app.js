const nextColor = document.querySelector("button");
let lists = document.querySelectorAll("li");

nextColor.addEventListener("click", () => {
  for (const list of lists) {
    let randomColor = "#" + Math.round(Math.random() * 2500000).toString(16);
    list.style.color = randomColor;
  }
});
