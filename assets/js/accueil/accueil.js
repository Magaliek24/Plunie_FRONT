// Effet parallaxe
function init_parallax() {
  // seulement sur desktop
  if (window.innerWidth <= 768) {
    document.body.classList.add("no-parallax");
    return;
  }

  const parallax_image = document.querySelector(".parallax-image");
  if (!parallax_image) return;

  const speed = 0.5; // bouge 2x moins vite que le scroll

  function update_parallax() {
    const scroll_y = window.pageYOffset;
    const translate_y = scroll_y * speed;
    parallax_image.style.transform = `translateY(-${translate_y}px)`;
  }

  // Ecoute le scroll
  window.addEventListener("scroll", update_parallax);

  // Position initiale
  update_parallax();

  document.body.classList.remove("no-parallax");
}

function handle_scroll() {
  const header = document.getElementById("homepage-header");
  const span_lines = document.querySelectorAll(".line");
  const hero = document.getElementById("hero-header");

  const scroll_y = window.scrollY;
  const hero_height = hero.offsetHeight;
  const header_height = header.offsetHeight;

  if (scroll_y > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  if (scroll_y + header_height > hero_height) {
    header.classList.add("out-of-hero");
    span_lines.forEach((line) => line.classList.add("out-of-hero"));
  } else {
    header.classList.remove("out-of-hero");
    span_lines.forEach((line) => line.classList.remove("out-of-hero"));
  }
}

// 3. Carrousel des pictogrammes
function init_carousel() {
  const pictos_div = document.getElementById("pictos-div");
  if (!pictos_div) return;

  const pictos = pictos_div.querySelectorAll(".pictos");
  const prev_btn = document.getElementById("prev");
  const next_btn = document.getElementById("next");
  const dots_container = document.getElementById("dots-container");

  if (!prev_btn || !next_btn || !dots_container || pictos.length === 0) return;

  let current_index = 0;
  let autoplay_timeout = null; // Un seul timer pour tout gérer
  const SLIDE_DURATION = 6000;
  const LAST_SLIDE_PAUSE = 4000;
  const RESUME_DELAY = 6000;

  // --- Génération des points ---
  dots_container.innerHTML = ""; // Vide les points au cas où
  pictos.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Voir le pictogramme ${index + 1}`);
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      update_slide(index);
      pause_autoplay();
    });
    dots_container.appendChild(dot);
  });
  const dots = dots_container.querySelectorAll("button");

  // --- Fonctions du carrousel ---
  const update_slide = (index, behavior = "smooth") => {
    // Le paramètre "behavior" nous permet de contrôler l'animation
    if (index < 0) index = pictos.length - 1;
    if (index >= pictos.length) index = 0;
    current_index = index;

    pictos_div.scrollTo({
      left: pictos_div.offsetWidth * current_index,
      behavior: behavior, // Utilise le comportement spécifié
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === current_index);
    });
  };

  // NOUVELLE LOGIQUE D'AUTOPLAY PLUS PRÉCISE
  const play_next_slide = () => {
    clearTimeout(autoplay_timeout); // On s'assure qu'il n'y a pas de timers fantômes

    const is_last_slide = current_index === pictos.length - 1;
    const delay = is_last_slide ? LAST_SLIDE_PAUSE : SLIDE_DURATION;

    autoplay_timeout = setTimeout(() => {
      let next_index = current_index + 1;
      // Pour le retour au début, on utilise un scroll instantané
      if (next_index >= pictos.length) {
        update_slide(0, "instant");
      } else {
        update_slide(next_index, "smooth");
      }
      play_next_slide(); // On relance la boucle
    }, delay);
  };

  const start_autoplay = () => {
    if (!window.matchMedia("(max-width: 768px)").matches) return;
    play_next_slide();
  };

  const pause_autoplay = () => {
    clearTimeout(autoplay_timeout);
    // On programme une relance après le délai d'inactivité
    autoplay_timeout = setTimeout(start_autoplay, RESUME_DELAY);
  };

  // --- Écouteurs d'événements ---
  next_btn.addEventListener("click", () => {
    update_slide(current_index + 1);
    pause_autoplay();
  });

  prev_btn.addEventListener("click", () => {
    update_slide(current_index - 1);
    pause_autoplay();
  });

  // --- Gestion du swipe et du redimensionnement ---
  let touch_start_x = null;
  pictos_div.addEventListener("touchstart", (e) => {
    touch_start_x = e.changedTouches[0].screenX;
    clearTimeout(autoplay_timeout); // Pause immédiate
  });

  pictos_div.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].screenX - touch_start_x;
    if (dx < -50) update_slide(current_index + 1);
    if (dx > 50) update_slide(current_index - 1);
    pause_autoplay(); // Relance le timer d'inactivité
  });

  window.addEventListener("resize", () => {
    clearTimeout(autoplay_timeout);
    update_slide(current_index, "instant");
    start_autoplay();
  });

  // --- Lancement initial ---
  start_autoplay();
}

// Fonction pour déclencher l'animation du H1
function trigger_h1_animation() {
  document.body.classList.add("h1-ready");
}

// Fonction pour indiquer que l'image de fond est chargée
function mark_background_loaded() {
  document.body.classList.add("bg-loaded");
}

// L'addEventListener reste à la fin et appelle toutes les fonctions
window.addEventListener("scroll", handle_scroll);
handle_scroll(); // exécute au chargement le changement de couleur au scroll

// un seul DOMContentLoaded pour tout
document.addEventListener("DOMContentLoaded", () => {
  init_parallax();
  init_carousel();

  // Déclencher l'animation du H1 après un court délai (pour permettre au DOM de se stabiliser)
  setTimeout(() => {
    trigger_h1_animation();
  }, 100);
});

// Préchargement manuel de la photo de fond
var bg_photo = new window.Image();
bg_photo.src = "/assets/photos/plunie_chaussures_barefoot.webp";

bg_photo.onload = function () {
  mark_background_loaded();
};

// Fallback si l'image ne charge pas sous 3 sec
setTimeout(() => {
  if (!document.body.classList.contains("bg-loaded")) {
    mark_background_loaded();
  }
}, 3000);
