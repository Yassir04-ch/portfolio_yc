export const $ = (selector, root = document) => root.querySelector(selector);
export const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
export const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
