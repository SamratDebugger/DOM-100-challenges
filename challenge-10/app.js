const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const counter = document.getElementById("counter");
let count = 0;

increase.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
decrease.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});
