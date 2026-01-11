const button = document.querySelector("button");
const lists = document.querySelectorAll("li");
const randomTrans = () => {
  let randomVal = Math.round(Math.random() * 100);
  for (const list of lists) {
    list.style.rotate = `${randomVal}deg`;
  }
};
