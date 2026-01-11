const nextColor = document.querySelector("button");
let lists = document.querySelectorAll("li");

nextColor.addEventListener("click", () => {
  for (const list of lists) {
    list.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
  }
});
