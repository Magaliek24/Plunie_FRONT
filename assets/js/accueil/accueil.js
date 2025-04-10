// window.addEventListener("scroll", () => {
//   const elements = document.querySelectorAll("#homepage-nav, #logo");
//   elements.forEach((element) => {
//     if (window.scrollY > 50) {
//       element.classList.add("scrolled");
//     } else {
//       element.classList.remove("scrolled");
//     }
//   });
// });

window.addEventListener("scroll", () => {
  const header = document.getElementById("homepage-nav");
  const toggle_nav = document.getElementById("toggle-nav");
  const hero = document.getElementById("hero-header");

  const scroll_y = window.scrollY;
  const hero_height = hero.offsetHeight;
  const header_height = header.offsetHeight;

  if (scroll_y > 50) {
    header.classList.add("scrolled");
    toggle_nav.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    toggle_nav.classList.remove("scrolled");
  }

  if (scroll_y + header_height > hero_height) {
    header.classList.add("out-of-hero");
    toggle_nav.classList.add("out-of-hero");
  } else {
    header.classList.remove("out-of-hero");
    toggle_nav.classList.remove("out-of-hero");
  }
});
