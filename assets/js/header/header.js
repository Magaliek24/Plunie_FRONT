const toggle_nav_mobile = () => {
  let nav_mobile = document.querySelector("nav > #nav");
  let icone_menu = document.querySelector("#toggle-nav");
  nav_mobile.classList.toggle("mobile");
  console.log(icone_menu);
  icone_menu.setAttribute(
    "class",
    nav_mobile.classList.contains("mobile") ? "fas fa-xmark" : "fas fa-bars"
  );
};

const close_menu = () => {
  let nav_mobile = document.querySelector("nav > #nav");
  let icone_menu = document.querySelector("#toggle-nav");
  nav_mobile.classList.remove("mobile");
  icone_menu.setAttribute(
    "class",
    nav_mobile.classList.contains("mobile") ? "fas fa-xmark" : "fas fa-bars"
  );
};

function init_mobile_menu() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    let toggle_nav = document.querySelector("#toggle-nav");
    toggle_nav.style.cursor = "pointer";
    toggle_nav.addEventListener("click", toggle_nav_mobile);
    // Pour fermer la nav mobile en incluant le listener clic partout et pas uniquement sur le main :
    document.body.addEventListener("click", (e) => {
      if (e.target !== toggle_nav) {
        close_menu();
      }
    });

    let nav_links = document.querySelectorAll("nav > #nav > ul > li > a");
    nav_links.forEach((nav_link) => {
      nav_link.addEventListener("click", close_menu);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  // va permettre de mettre en évidence le lien de la page active
  const links = document.querySelectorAll("#nav a");

  const current_page = window.location.pathname.split("/").pop();
  links.forEach((link) => {
    const href = link.getAttribute("href").replace(/^\/+/, "");
    if (href === current_page) {
      link.classList.add("active"); // Ajouter la classe active
    }
  });
  init_mobile_menu();
  window.addEventListener("resize", init_mobile_menu);
  // fermer le menu quand on scrolle
  window.addEventListener("scroll", close_menu);
  // fermer le menu quand on resize la fenêtre
  window.addEventListener("resize", close_menu);
});
