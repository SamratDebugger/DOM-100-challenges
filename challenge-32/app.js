const button = document.querySelector("button");
let list = Array.from(document.getElementsByClassName("list"));
let ul = document.querySelector("ul");

button.addEventListener("click", () => {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.fround(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  ul.innerHTML = "";
  list.forEach((l) => ul.appendChild(l));
});
