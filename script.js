//Mostrar backgroud do header ao scrollar a pág
window.addEventListener("scroll", () => {
  const scrollBar = document.querySelector("header");
  if (window.scrollY > 50) {
    scrollBar.classList.add("scrolled");
  } else {
    scrollBar.classList.remove("scrolled");
  }
});
//Menu hamburguer

const menu = document.querySelector(".menu-hamburguer");
const navList = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");

menu.addEventListener("click", () => {
  navList.classList.toggle("active");
  menu.classList.toggle("active");

  //Ação do leitor de tela ao clicar no menu hamburguer,
  // Verifica se está aberto ou fechado
  const isExpanded = navList.classList.contains("active");

  // Atualiza aria-expanded dinamicamente
  menu.setAttribute("aria-expanded", isExpanded);

  if (isExpanded) {
    navLinks[0].focus();
  } else {
    menu.focus();
  }
});

// Fechar o menu ao clicar em um link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove a classe active do menu e da lista
    navList.classList.remove("active");
    menu.classList.remove("active");

    // Atualiza o aria-expanded para false também ao clicar no link
    menu.setAttribute("aria-expanded", "false");
    menu.focus();
  });
});
// para uso do teclado
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navList.classList.contains("active")) {
    navList.classList.remove("active");
    menu.classList.remove("active");
    menu.setAttribute("aria-expanded", "false");
    menu.focus();
  }
});

// Intersection Observer para animações ao scroll
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  },
);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

//ano automatico
document.getElementById("year").textContent = new Date().getFullYear();
