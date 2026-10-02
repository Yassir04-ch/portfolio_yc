import { $ } from "./utils.js";
import { tech, marqueeExtra, skills, projects, certificates } from "./data.js";

const chips = (items) =>
  `<div class="chips">${items.map((i) => `<span>${i}</span>`).join("")}</div>`;

export function renderOrbit() {
  $("#ring").innerHTML = tech
    .map(
      (t, i) =>
        `<span style="--a:${(i * 360) / tech.length}deg"><b><em>${t}</em></b></span>`
    )
    .join("");
}

export function renderMarquee() {
  // La liste est dupliquée pour que la boucle CSS (-50%) soit continue.
  const base = [...tech, ...marqueeExtra];

  $("#track").innerHTML = [...base, ...base]
    .map((t) => `<span>${t}</span>`)
    .join("");
}

export function renderSkills() {
  $("#skills").innerHTML = skills
    .map(
      (s, i) =>
        `<div class="card rv" style="--d:${i * 0.08}s">
          <h3>${s.title}</h3>
          ${chips(s.items)}
        </div>`
    )
    .join("");
}

export function renderCertificates() {
  $("#certificates").innerHTML = certificates
    .map(
      (c, i) =>
        `<div class="card rv" style="--d:${i * 0.08}s">
          <h3>${c.name}</h3>
          <p>${c.organization}</p>
          <small>${c.date}</small>
          <a href="${c.link}" target="_blank" rel="noopener">
            Voir le certificat
          </a>
        </div>`
    )
    .join("");
}

function projectVisual(p) {
  if (p.image) {
    return `<img src="${p.image}" alt="${p.title}">`;
  }

  const bars = p.bars
    .map((w) => `<i style="--w:${w}%"></i>`)
    .join("");

  return `
    <div class="mock">
      <div class="dots">
        <u></u>
        <u></u>
        <u></u>
      </div>
      ${bars}
    </div>
  `;
}

export function renderProjects() {
  $("#projects").innerHTML = projects
    .map(
      (p, i) =>
        `<article class="proj rv" style="--d:${i * 0.1}s">
          <div class="shot" style="--c1:${p.colors[0]};--c2:${p.colors[1]}">
            ${projectVisual(p)}
          </div>

          <div class="body">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            ${chips(p.stack)}
            <a href="${p.link}" target="_blank" rel="noopener">
              Voir le code sur GitHub
            </a>
          </div>
        </article>`
    )
    .join("");
}
