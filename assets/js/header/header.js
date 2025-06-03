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
});
