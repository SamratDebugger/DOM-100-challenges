const button = document.querySelector("button");
let list = Array.from(document.getElementsByClassName("list"));
let ul = document.querySelector("ul");

button.addEventListener("click", () => {
  list.sort((a, b) => a.textContent.localeCompare(b.textContent));
  ul.innerHTML = "";
  list.forEach((l) => ul.appendChild(l));
});
