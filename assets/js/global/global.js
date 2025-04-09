function adjust_main_padding() {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  if (header && main) {
    main.style.paddingTop = `${header.offsetHeight + 10}px`;
  }
}

window.addEventListener("load", adjust_main_padding);
window.addEventListener("resize", adjust_main_padding);
