// Carrousel Pictogrammes
class PictogramCarousel {
  constructor() {
    this.container = document.getElementById("pictos-div");
    this.items = document.querySelectorAll(".pictos");
    this.prevBtn = document.getElementById("prev");
    this.nextBtn = document.getElementById("next");

    this.currentIndex = 0;
    this.itemsToShow = 1;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 3000;
    this.transitionDuration = 2000;
    this.isAutoPlaying = false;
    this.isPaused = false;
    this.touchStartX = 0;
    this.touchEndX = 0;

    // Récupérer la position sauvegardée
    this.loadSavedPosition();

    this.init();
  }

  init() {
    if (window.innerWidth <= 768) {
      this.setupCarousel();
      this.startAutoPlay();
    }

    // Event listeners
    this.prevBtn?.addEventListener("click", () => this.prev());
    this.nextBtn?.addEventListener("click", () => this.next());

    // Responsive
    window.addEventListener("resize", () => this.handleResize());

    // Touch events pour mobile
    this.container.addEventListener("touchstart", (e) =>
      this.handleTouchStart(e)
    );
    this.container.addEventListener("touchend", (e) => this.handleTouchEnd(e));

    // Pause au survol (desktop) ou au toucher (mobile)
    this.container.addEventListener("mouseenter", () => this.pauseAutoPlay());
    this.container.addEventListener("mouseleave", () => this.resumeAutoPlay());

    // Pour mobile : pause au premier tap, reprend au second
    this.container.addEventListener("click", (e) => this.handleMobileTouch(e));

    // Sauvegarde de la position quand on quitte la vue
    document.addEventListener("visibilitychange", () =>
      this.handleVisibilityChange()
    );
    window.addEventListener("scroll", () => this.savePosition());
  }

  setupCarousel() {
    // Ajouter une classe pour identifier le mode carrousel
    this.container.classList.add("carousel-mode");

    // Clone les éléments pour créer une boucle infinie
    this.items.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.classList.add("clone");
      this.container.appendChild(clone);
    });

    // // Ajuster la largeur du conteneur
    this.updateContainerWidth();

    // Positionner au bon endroit
    this.goToSlide(this.currentIndex, false);
  }

  updateContainerWidth() {}

  goToSlide(index, animate = true) {
    const allItems = this.container.querySelectorAll(".pictos");
    const itemWidth = 100 / allItems.length;
    const translateX = -index * itemWidth;

    if (animate) {
      this.container.style.transition = `transform ${this.transitionDuration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
    } else {
      this.container.style.transition = "none";
    }

    this.container.style.transform = `translateX(${translateX}%)`;

    // Gérer la boucle infinie
    if (animate && (index >= this.items.length || index < 0)) {
      setTimeout(() => {
        this.container.style.transition = "none";
        if (index >= this.items.length) {
          this.currentIndex = 0;
          this.container.style.transform = `translateX(0%)`;
        } else if (index < 0) {
          this.currentIndex = this.items.length - 1;
          const newTranslateX = -this.currentIndex * itemWidth;
          this.container.style.transform = `translateX(${newTranslateX}%)`;
        }
      }, this.transitionDuration);
    }
  }

  next() {
    this.currentIndex++;
    this.goToSlide(this.currentIndex);
    this.savePosition();
  }

  prev() {
    this.currentIndex--;
    this.goToSlide(this.currentIndex);
    this.savePosition();
  }

  startAutoPlay() {
    if (window.innerWidth <= 768 && !this.isAutoPlaying) {
      this.isAutoPlaying = true;
      this.autoPlayInterval = setInterval(() => {
        if (!this.isPaused) {
          this.next();
        }
      }, this.autoPlayDelay + this.transitionDuration);
    }
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
      this.isAutoPlaying = false;
    }
  }

  pauseAutoPlay() {
    this.isPaused = true;
  }

  resumeAutoPlay() {
    this.isPaused = false;
  }

  handleMobileTouch(e) {
    // Ne pas interférer avec les boutons de navigation
    if (e.target.closest("#prev") || e.target.closest("#next")) {
      return;
    }

    if (window.innerWidth <= 768) {
      if (this.isPaused) {
        this.resumeAutoPlay();
        this.container.classList.remove("paused");
      } else {
        this.pauseAutoPlay();
        this.container.classList.add("paused");
      }
    }
  }

  handleTouchStart(e) {
    this.touchStartX = e.touches[0].clientX;
  }

  handleTouchEnd(e) {
    this.touchEndX = e.changedTouches[0].clientX;
    this.handleSwipe();
  }

  handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next
        this.next();
      } else {
        // Swipe right - prev
        this.prev();
      }
    }
  }

  handleResize() {
    if (window.innerWidth <= 768) {
      if (!this.isAutoPlaying) {
        this.setupCarousel();
        this.startAutoPlay();
      }
    } else {
      this.stopAutoPlay();
      this.resetCarousel();
    }
  }

  resetCarousel() {
    // Retirer la classe carousel-mode
    this.container.classList.remove("carousel-mode");

    // Supprimer les clones
    this.container
      .querySelectorAll(".clone")
      .forEach((clone) => clone.remove());

    // Réinitialiser les styles
    this.container.style.width = "";
    this.container.style.transform = "";
    this.container.style.transition = "";

    this.items.forEach((item) => {
      item.style.width = "";
    });
  }

  savePosition() {
    localStorage.setItem(
      "pictogramCarouselIndex",
      this.currentIndex.toString()
    );
  }

  loadSavedPosition() {
    const savedIndex = localStorage.getItem("pictogramCarouselIndex");
    if (savedIndex !== null) {
      this.currentIndex = parseInt(savedIndex, 10);
      // S'assurer que l'index est valide
      if (this.currentIndex >= this.items.length) {
        this.currentIndex = 0;
      }
    }
  }

  handleVisibilityChange() {
    if (document.hidden) {
      this.stopAutoPlay();
    } else if (window.innerWidth <= 768) {
      this.startAutoPlay();
    }
  }
}

// Initialiser le carrousel quand le DOM est chargé
document.addEventListener("DOMContentLoaded", () => {
  new PictogramCarousel();
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
