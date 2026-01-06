const button = document.querySelector("button");
const table = document.querySelector("table");
button.addEventListener("click", () => {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  table.appendChild(tr);
  table.appendChild(td);
  table.appendChild(td2);
  table.appendChild(td3);
});
