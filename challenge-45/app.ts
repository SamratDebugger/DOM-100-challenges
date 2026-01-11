const btn: HTMLButtonElement | null = document.querySelector("button");
const list: HTMLLIElement | null = document.querySelector("li");
const randomList: string[] = ["About", "Services", "Contact"];
btn?.addEventListener("click", () => {
    let textIndex: number = Math.floor(Math.random() * randomList.length);
    list!.textContent = randomList[textIndex];
 })