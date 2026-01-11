var btn = document.querySelector("button");
var list = document.querySelector("li");
var randomList = ["About", "Services", "Contact"];
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    var textIndex = Math.floor(Math.random() * randomList.length);
    list.textContent = randomList[textIndex];
});
