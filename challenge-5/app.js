const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const inputVal = e.target.myLi.value;
  li.innerText = inputVal;
  ul.appendChild(li);
  e.target.myLi.value;
});
