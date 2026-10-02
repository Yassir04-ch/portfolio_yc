import { reducedMotion } from "./utils.js";

// Effet machine à écrire qui boucle sur une liste de textes.
export function typeRoles(el, roles) {
  if (reducedMotion) {
    el.textContent = roles[0];
    return;
  }
  let word = 0, chars = 0, deleting = false;

  const tick = () => {
    const current = roles[word];
    el.textContent = current.slice(0, chars);
    if (!deleting && chars === current.length) {
      deleting = true;
      return setTimeout(tick, 1600);
    }
    if (deleting && chars === 0) {
      deleting = false;
      word = (word + 1) % roles.length;
    }
    chars += deleting ? -1 : 1;
    setTimeout(tick, deleting ? 40 : 80);
  };
  setTimeout(tick, 900);
}
