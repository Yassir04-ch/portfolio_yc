# Portfolio — Yassir Cherqui

Portfolio personnel (HTML, CSS, JavaScript vanilla), sans backend ni dépendance.

## Structure

```
yassir-portfolio/
├── index.html          # Structure de la page
├── assets/img/         # Images (photo, captures de projets)
├── css/
│   ├── base.css        # Variables (thème clair/sombre), reset, typographie
│   ├── layout.css      # Header, navigation, footer
│   ├── hero.css        # Hero, orbite des technologies
│   ├── marquee.css     # Bandeau défilant
│   ├── about.css       # Section À propos
│   ├── skills.css      # Section Compétences
│   ├── timeline.css    # Section Parcours
│   ├── projects.css    # Section Projets
│   ├── gallery.css     # Galerie et lightbox
│   └── contact.css     # Section Contact
└── js/
    ├── data.js         # Tout le contenu (projets, compétences, rôles)
    ├── main.js         # Point d'entrée
    ├── render.js       # Génère le HTML à partir de data.js
    ├── gallery.js      # Galerie : catégories, filtre, lightbox
    ├── effects.js      # Reveal au scroll, timeline, parallaxe, tilt 3D
    ├── typing.js       # Effet machine à écrire
    ├── theme.js        # Bouton thème clair/sombre
    ├── form.js         # Formulaire de contact (mailto)
    └── utils.js        # Helpers ($, $$, reducedMotion)
```

## Lancer en local

Le projet utilise les modules ES (`import`), donc il faut un petit serveur local (ouvrir `index.html` en double-clic ne marche pas).

Avec VS Code : installer l'extension **Live Server**, clic droit sur `index.html`, puis **Open with Live Server**.

Ou en terminal : `python3 -m http.server 5500` puis ouvrir http://localhost:5500

## Modifier le contenu

- Projets, compétences, texte animé : `js/data.js`
- Textes de la page (À propos, Parcours, Contact) : `index.html`
- Couleurs et thème : variables au début de `css/base.css`
- Capture d'écran d'un projet : mettre l'image dans `assets/img/` et renseigner `image` dans `data.js`

## Ajouter des photos à la galerie

1. Copier les images dans `assets/img/gallery/`.
2. Ajouter une ligne dans le tableau `gallery` de `js/data.js` :
   `{ title: "Mon titre", category: "Souvenirs", src: "assets/img/gallery/photo.jpg", ratio: "4/3" }`
3. Une nouvelle catégorie apparaît automatiquement dès qu'une image l'utilise.

Conseil : compresser les images (moins de 300 Ko chacune) pour garder le site rapide.

## Publier sur GitHub Pages

```bash
git init
git add .
git commit -m "feat: portfolio initial"
git branch -M main
git remote add origin https://github.com/Yassir04-ch/portfolio.git
git push -u origin main
```

Puis sur GitHub : **Settings, Pages, Source: Deploy from a branch, branch `main`, dossier `/ (root)`**.
Le site sera disponible sur `https://yassir04-ch.github.io/portfolio/`.
