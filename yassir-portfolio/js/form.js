// Pas de backend : le formulaire ouvre l'application mail de l'utilisateur.
export function initContactForm(form, email) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { name, from, message } = Object.fromEntries(
      ["name", "from", "message"].map((k) => [k, form.elements[k].value])
    );
    const subject = encodeURIComponent("Contact depuis votre portfolio");
    const body = encodeURIComponent(`${message}\n\n${name} (${from})`);
    location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
}
