//avec Claude
document.addEventListener("DOMContentLoaded", () => {
  const pictos_div = document.querySelector("#pictos-div");
  const controls = document.querySelector("#carrousel-controls");
  const prev_button = document.querySelector("#prev");
  const next_button = document.querySelector("#next");

  // Fonction pour vérifier si on est sur mobile
  const is_mobile = () => window.innerWidth < 768;

  // Récupérer les pictogrammes originaux
  const original_pictos = Array.from(document.querySelectorAll(".pictos"));

  // Cloner les pictos pour le carrousel mobile
  function setupCarousel() {
    // Nettoyer les éléments clonés précédents si besoin
    document.querySelectorAll(".clone").forEach((clone) => clone.remove());

    if (is_mobile()) {
      // Ajouter les classes pour l'apparition
      original_pictos.forEach((picto) => {
        picto.classList.add("appear");
      });

      // Cloner le premier et le dernier picto
      const first_clone = original_pictos[0].cloneNode(true);
      const last_clone =
        original_pictos[original_pictos.length - 1].cloneNode(true);

      first_clone.classList.add("clone");
      first_clone.id = "first-clone";
      last_clone.classList.add("clone");
      last_clone.id = "last-clone";

      // Ajouter les clones au début et à la fin
      pictos_div.insertBefore(last_clone, original_pictos[0]);
      pictos_div.appendChild(first_clone);

      // Positionner initialement sur le premier élément réel (index 1)
      current_index = 1;
      pictos_div.style.transition = "none";
      pictos_div.style.transform = `translateX(-${current_index * 100}vw)`;

      // Forcer un reflow pour que la transition "none" soit appliquée avant la prochaine
      void pictos_div.offsetWidth;

      // Activer le carrousel
      startCarousel();
    } else {
      // Sur desktop, réinitialiser la position
      pictos_div.style.transition = "none";
      pictos_div.style.transform = "translateX(0)";

      // Ajouter l'effet d'apparition au scroll
      setupScrollObserver();
    }
  }

  // Variable pour l'index courant et l'intervalle
  let current_index = 1;
  let carousel_interval;

  // Fonctions pour le carrousel
  function updateTransform() {
    pictos_div.style.transition = "transform 0.6s ease-in-out";
    pictos_div.style.transform = `translateX(-${current_index * 100}vw)`;
  }

  function nextSlide() {
    current_index++;
    updateTransform();
  }

  function prevSlide() {
    current_index--;
    updateTransform();
  }

  function startCarousel() {
    if (is_mobile()) {
      stopCarousel(); // Pour éviter les doublons
      carousel_interval = setInterval(nextSlide, 4000);
    }
  }

  function stopCarousel() {
    clearInterval(carousel_interval);
  }

  // Gestion de la fin de transition pour le carrousel infini
  pictos_div.addEventListener("transitionend", () => {
    if (!is_mobile()) return;

    const all_pictos = Array.from(pictos_div.children);

    if (all_pictos[current_index].id === "last-clone") {
      pictos_div.style.transition = "none";
      current_index = all_pictos.length - 2;
      pictos_div.style.transform = `translateX(-${current_index * 100}vw)`;
    } else if (all_pictos[current_index].id === "first-clone") {
      pictos_div.style.transition = "none";
      current_index = 1;
      pictos_div.style.transform = `translateX(-${current_index * 100}vw)`;
    }

    // Forcer un reflow pour que la transition "none" soit appliquée avant la prochaine
    void pictos_div.offsetWidth;
  });

  // Configuration de l'observer pour l'effet d'apparition au scroll
  function setupScrollObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.2 }
    );

    original_pictos.forEach((el) => observer.observe(el));
  }

  // Événements pour les boutons de navigation
  next_button.addEventListener("click", () => {
    stopCarousel();
    nextSlide();
    // Redémarrer le carrousel après un délai
    setTimeout(startCarousel, 5000);
  });

  prev_button.addEventListener("click", () => {
    stopCarousel();
    prevSlide();
    // Redémarrer le carrousel après un délai
    setTimeout(startCarousel, 5000);
  });

  // Pause au survol/toucher
  pictos_div.addEventListener("mouseenter", stopCarousel);
  pictos_div.addEventListener("mouseleave", startCarousel);
  pictos_div.addEventListener("touchstart", stopCarousel);
  pictos_div.addEventListener("touchend", () =>
    setTimeout(startCarousel, 5000)
  );

  // Gestion du redimensionnement
  function handleResize() {
    stopCarousel();
    setupCarousel();
  }

  window.addEventListener("resize", handleResize);

  // Configuration initiale
  setupScrollObserver();
  handleResize();
});

//changement de couleur au scroll
window.addEventListener("scroll", handle_scroll);
handle_scroll(); // exécute au chargement

function handle_scroll() {
  const header = document.getElementById("homepage-nav");
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
