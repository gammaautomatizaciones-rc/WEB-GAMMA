/* =====================================================
   CARRUSEL 3D DE SERVICIOS DESTACADOS
===================================================== */

const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
let isAnimating = false;

let cards = Array.from(carousel.querySelectorAll(".course-card"));

function setCarouselPositions() {
  cards.forEach((card, i) => {
    const offset = (i - currentIndex + cards.length) % cards.length;

    // Reset estilos base
    card.style.transition = "transform 0.8s ease, opacity 0.8s ease";
    card.style.zIndex = 1;
    card.style.opacity = 0;

    // Card central
    if (offset === 0) {
      card.style.transform = "translateX(0) scale(1.05)";
      card.style.opacity = 1;
      card.style.zIndex = 3;

    // Card derecha
    } else if (offset === 1) {
      card.style.transform = "translateX(260px) scale(0.9) rotateY(-18deg)";
      card.style.opacity = 0.6;

    // Card izquierda
    } else if (offset === cards.length - 1) {
      card.style.transform = "translateX(-260px) scale(0.9) rotateY(18deg)";
      card.style.opacity = 0.6;

    // Ocultas
    } else {
      card.style.transform = "scale(0.7)";
      card.style.opacity = 0;
    }
  });
}

function nextSlide() {
  if (isAnimating) return;
  isAnimating = true;

  currentIndex = (currentIndex + 1) % cards.length;

  setCarouselPositions();

  setTimeout(() => (isAnimating = false), 800);
}

function prevSlide() {
  if (isAnimating) return;
  isAnimating = true;

  currentIndex = (currentIndex - 1 + cards.length) % cards.length;

  setCarouselPositions();

  setTimeout(() => (isAnimating = false), 800);
}

// EVENTOS
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Swipe en mobile
let startX = 0;

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) nextSlide();  // Swipe left
    else prevSlide();            // Swipe right
  }
});

setCarouselPositions();
