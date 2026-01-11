const nextColor = document.querySelector("button");
let lists = document.querySelectorAll("li");
let fontFamily = ["roboto", "Montserrat", "DM Sans"];

nextColor.addEventListener("click", () => {
  for (const list of lists) {
    let randomIndex = Math.floor(Math.random() * fontFamily.length);
    list.style.fontFamily = fontFamily[randomIndex];
  }
});
