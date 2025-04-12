const main = document.querySelector("main");
const scrollToTopButton = document.querySelector("#scroll-to-top");
const root = document.documentElement;

function posX() {
  if (window.matchMedia("max-width: 576px").matches) {
    const reseau_mobile = document.querySelector("#reseaux-mobile");
    scrollToTopButton.classList.add("mobile");
    reseau_mobile.appendChild(scrollToTopButton);
  } else {
    const pos = (root.clientWidth - main.clientWidth) / 2;
    scrollToTopButton.style.right = `${pos}px`;
    scrollToTopButton.classList.remove("mobile");
    document.body.appendChild(scrollToTopButton);
  }
}

function scrollToTop() {
  const scrollToTopButton = document.querySelector("#scroll-to-top");
  const hero_header = document.querySelector("#hero-header");
  window.addEventListener("scroll", () => {
    // const height = s'il n'y pas de hero_header, alors 200px
    const height = hero_header ? hero_header.offsetHeight : 200;
    if (scrollY >= height) {
      scrollToTopButton.style.display = "block";
    } else if (scrollY === 0) {
      scrollToTopButton.style.display = "none";
    }
    scrollToTopButton.addEventListener("click", () => window.scrollTo(0, 0));
  });
}
window.addEventListener("DOMContentLoaded", () => {
  scrollToTop();
  window.addEventListener("resize", posX);
});
posX();
