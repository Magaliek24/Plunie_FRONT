function calc_viewport_height() {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

window.addEventListener("DOMContentLoaded", () => {
  calc_viewport_height();
  // calc_body_padding();
});
window.addEventListener("resize", () => {
  calc_viewport_height();
  // calc_body_padding();
});
