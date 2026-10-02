import { $ } from "./utils.js";

import { profile, roles } from "./data.js";

import {
  renderOrbit,
  renderMarquee,
  renderSkills,
  renderProjects,
  renderCertificates
} from "./render.js";

import { typeRoles } from "./typing.js";

import {
  initReveal,
  initTimelines,
  initParallax,
  initTilt
} from "./effects.js";

import { initTheme } from "./theme.js";

import { initContactForm } from "./form.js";

import { initGallery } from "./gallery.js";

// 1. Générer le contenu à partir de data.js

renderOrbit();

renderMarquee();

renderSkills();

renderProjects();

renderCertificates();

initGallery();

// 2. Activer les animations (après le rendu, pour que les nouveaux éléments soient pris en compte)

typeRoles($("#typed"), roles);

initReveal();

initTimelines();

initParallax();

initTilt();

// 3. Interactions

initTheme($("#theme"));

initContactForm($("#form"), profile.email);