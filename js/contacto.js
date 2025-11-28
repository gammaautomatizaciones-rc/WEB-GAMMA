// Animación de reveal suave
document.addEventListener("DOMContentLoaded", () => {
  const fields = document.querySelectorAll(".field");

  fields.forEach((f, i) => {
    f.style.opacity = "0";
    f.style.transform = "translateY(15px)";
    setTimeout(() => {
      f.style.transition = "all .6s ease";
      f.style.opacity = "1";
      f.style.transform = "translateY(0)";
    }, 120 * i);
  });
});

// Microinteracción del botón
const btn = document.querySelector(".btn-send");
if (btn) {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => btn.style.transform = "scale(1)", 130);
  });
}
