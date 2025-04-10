// function adjust_main_padding() {
//   const header = document.querySelector("header");
//   const main = document.querySelector("main");
//   if (header && main) {
//     main.style.paddingTop = `${header.offsetHeight + 10}px`;
//   }
// }

// window.addEventListener("load", adjust_main_padding);
// window.addEventListener("resize", adjust_main_padding);

function calc_viewport_height() {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

window.addEventListener("DOMContentLoaded", () => {
  calc_viewport_height();
  calc_body_padding();
});
window.addEventListener("resize", () => {
  calc_viewport_height();
  calc_body_padding();
});
