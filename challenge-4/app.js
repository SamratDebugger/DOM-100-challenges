const hero = document.getElementById("hero");
const business = document.getElementById("business");

hero.addEventListener("click", () => {
  business.style.display = "block";
  hero.style.display = "none";
});
