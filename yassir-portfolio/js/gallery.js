import { $, $$, reducedMotion } from "./utils.js";
import { gallery } from "./data.js";

// Les catégories sont déduites automatiquement de data.js
const categories = ["Tous", ...new Set(gallery.map((g) => g.category))];
const hue = (category) => (categories.indexOf(category) * 70 + 215) % 360;

// Image réelle, ou bloc coloré si aucune image n'est encore renseignée
const visual = (g) =>
  g.src
    ? `<img src="${g.src}" alt="${g.title}" loading="lazy">`
    : `<div class="ph" style="--h:${hue(g.category)}"><span>${g.title}</span></div>`;

const countOf = (cat) => (cat === "Tous" ? gallery.length : gallery.filter((g) => g.category === cat).length);

function renderFilters(container) {
  container.innerHTML = categories
    .map(
      (c, i) =>
        `<button type="button" class="${i ? "" : "active"}" data-cat="${c}" aria-pressed="${i === 0}">${c}<small>${countOf(c)}</small></button>`
    )
    .join("");
}

function renderGrid(container) {
  container.innerHTML = gallery
    .map(
      (g, i) => `<figure class="gi" data-cat="${g.category}" data-i="${i}" style="--ratio:${g.ratio || "4/3"}">
        <button type="button" aria-label="Agrandir : ${g.title}">${visual(g)}</button>
        <figcaption><strong>${g.title}</strong><small>${g.category}</small></figcaption>
      </figure>`
    )
    .join("");
}

function initFilters(filters, grid) {
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const cat = btn.dataset.cat;

    $$("button", filters).forEach((b) => {
      b.classList.toggle("active", b === btn);
      b.setAttribute("aria-pressed", b === btn);
    });

    const items = $$(".gi", grid);
    items.forEach((el) => el.classList.add("out"));
    setTimeout(() => {
      let n = 0;
      items.forEach((el) => {
        const show = cat === "Tous" || el.dataset.cat === cat;
        el.hidden = !show;
        el.style.transitionDelay = show ? `${n++ * 40}ms` : "0ms";
      });
      requestAnimationFrame(() => items.forEach((el) => el.classList.remove("out")));
    }, reducedMotion ? 0 : 220);
  });
}

function initLightbox(grid) {
  const box = $("#lightbox"), stage = $("#lbStage"), caption = $("#lbCaption");
  let list = [], pos = 0;

  const show = () => {
    const g = gallery[list[pos]];
    stage.innerHTML = visual(g);
    caption.innerHTML = `<strong>${g.title}</strong><small>${g.category} · ${pos + 1}/${list.length}</small>`;
  };
  const move = (step) => {
    pos = (pos + step + list.length) % list.length;
    show();
  };

  grid.addEventListener("click", (e) => {
    const fig = e.target.closest(".gi");
    if (!fig) return;
    list = $$(".gi:not([hidden])", grid).map((el) => +el.dataset.i); // navigation dans la catégorie affichée
    pos = list.indexOf(+fig.dataset.i);
    show();
    box.showModal();
  });

  $("#lbPrev").addEventListener("click", () => move(-1));
  $("#lbNext").addEventListener("click", () => move(1));
  $("#lbClose").addEventListener("click", () => box.close());
  box.addEventListener("click", (e) => e.target === box && box.close()); // clic sur le fond
  box.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") move(-1);
    if (e.key === "ArrowRight") move(1);
  });
}

export function initGallery() {
  const filters = $("#galleryFilters"), grid = $("#galleryGrid");
  renderFilters(filters);
  renderGrid(grid);
  initFilters(filters, grid);
  initLightbox(grid);
}
