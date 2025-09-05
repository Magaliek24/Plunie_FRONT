import "./global/global.js";
import "./header/header.js";
import "./accueil/accueil.js";
import "./scroll-to-top/scroll-to-top.js";

import { get_json, post_json } from "./lib/fetchData.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const products = await get_json("/api/products"); // => http://localhost:8090/products
    console.log("products", products);
  } catch (e) {
    console.error("API error:", e);
  }
});

// Exemple POST formulaire contact (si un #contact-form existe)
const form = document.querySelector("#contact-form");
form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const payload = Object.fromEntries(new FormData(form));
  try {
    const res = await post_json(
      "/contact",
      payload /*, { credentials: 'include' }*/
    );
    console.log("contact OK", res);
  } catch (e) {
    console.error("contact KO", e);
  }
});
