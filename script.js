//Mostrar backgroud do header ao scrollar a pág
window.addEventListener("scroll", () => {
  const scrollBar = document.querySelector("header");
  if (window.scrollY > 50) {
    scrollBar.classList.add("scrolled");
  } else {
    scrollBar.classList.remove("scrolled");
  }
});
