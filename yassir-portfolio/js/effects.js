import { $, $$, reducedMotion } from "./utils.js";

// Fait apparaître les éléments .rv quand ils entrent dans l'écran.
export function initReveal() {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        observer.unobserve(e.target);
      }),
    { threshold: 0.15 }
  );
  $$(".rv").forEach((el) => observer.observe(el));
}

// La ligne bleue de chaque timeline se remplit pendant le scroll.
export function initTimelines() {
  const lines = $$(".tl");
  const update = () =>
    lines.forEach((tl) => {
      const r = tl.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (innerHeight * 0.7 - r.top) / r.height));
      tl.style.setProperty("--fill", progress * 100 + "%");
    });
  addEventListener("scroll", update, { passive: true });
  update();
}

// La photo du hero suit légèrement la souris.
export function initParallax() {
  const stage = $("#stage"), photo = $("#photo");
  stage.addEventListener("pointermove", (e) => {
    const r = stage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    photo.style.transform = `translate(${x * 18}px, ${y * 18}px)`;
  });
  stage.addEventListener("pointerleave", () => (photo.style.transform = ""));
}

// Effet 3D au survol (photo "à propos" et cartes de projets).
function tilt(el, strength) {
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg)`;
  });
  el.addEventListener("pointerleave", () => (el.style.transform = ""));
}

export function initTilt() {
  if (reducedMotion) return;
  tilt($("#tilt"), 10);
  $$(".proj").forEach((card) => tilt(card, 6));
}
