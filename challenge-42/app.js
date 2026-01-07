const button = document.querySelectorAll("button");
const li = document.querySelectorAll("li");
const ul = document.querySelector("ul");

for (let i = 0; i < li.length; i++) {
  button[i].addEventListener("click", () => {
    let copyLi = li[i].cloneNode(true);
    ul.appendChild(copyLi);
  });
}
