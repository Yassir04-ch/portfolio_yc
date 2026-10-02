// Tout le contenu du site est ici : modifiez ce fichier pour mettre à jour le portfolio.

export const profile = {
  email: "yassircherqui.YC@gmail.com",
};

export const roles = ["Développeur Full Stack", "Java et Angular", "Laravel et Vue.js"];

export const tech = ["Java", "Spring Boot", "JEE", "Angular", "Laravel", "Vue.js", "PostgreSQL", "Docker"];

export const marqueeExtra = ["Angular", "REST API", "Git", "Jira"];

export const skills = [
  { title: "Backend", items: ["Java", "PHP", "Laravel", "Spring Boot", "JEE", "REST API", "JDBC"] },
  { title: "Frontend", items: ["Angular", "Vue.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"] },
  { title: "Bases de données", items: ["PostgreSQL", "MySQL", "SQL"] },
  { title: "DevOps et outils", items: ["Git", "GitHub", "Docker", "Jira", "Scrum", "Maven"] },
];

// image : chemin d'une capture d'écran (ex. "assets/img/hotel.png") pour remplacer le visuel généré
export const projects = [
  {
    title: "Hotel Booking v2",
    description: "Application de gestion hôtelière en Java : transactions, Repository Pattern, rôles Client et Admin, tarification dynamique.",
    stack: ["Java", "PostgreSQL", "JDBC"],
    colors: ["#1d4ed8", "#38bdf8"],
    bars: [80, 55, 68],
    link: "https://github.com/Yassir04-ch/Hotel_Booking_v2",
    image: "assets/img/hotel_boking.png",
  },
  {
    title: "DataExpress",
    description: "Gestion des employés, rôles, projets, absences et évaluations, avec notifications temps réel et chatbot IA.",
    stack: ["Laravel", "Vue.js", "WebSocket", "Docker", "MySQL"],
    colors: ["#4f46e5", "#a78bfa"],
    bars: [70, 90, 45],
    link: "https://github.com/Yassir04-ch/Project_Stage",
    image: "assets/img/dataExpress.png",
  },
  {
    title: "FootEvenT",
    description: "Plateforme de tournois de football amateur : équipes, matchs, calendriers, classements et rôles Admin, Organisateur, Joueur.",
    stack: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
    colors: ["#0f766e", "#34d399"],
    bars: [60, 82, 50],
    link: "https://github.com/Yassir04-ch/FootEvenT",
    image: "assets/img/footEvent.png",
  },
];

// Galerie : photos et souvenirs, classés par catégorie.
// 1. Mettez vos images dans assets/img/gallery/
// 2. Renseignez src (ex. "assets/img/gallery/youcode-1.jpg"). Sans src, un bloc coloré s'affiche.
// 3. Pour créer une nouvelle catégorie, il suffit d'écrire un nouveau nom dans category.
// ratio : forme de la vignette ("4/3", "3/4", "1/1", "16/9")
export const gallery = [
  { title: "Portrait professionnel", category: "Portraits", src: "assets/img/yassir.jpg", ratio: "1/1" },
  { title: "Campus YouCode", category: "YouCode", src: "assets/img/gallery/yc.jpg", ratio: "4/3" },
  { title: "Travail en équipe", category: "YouCode", src: "assets/img/gallery/educ.jpg", ratio: "4/3" },
  { title: "Veille", category: "Stage", src: "assets/img/gallery/veille.jpg", ratio: "16/9" },
  { title: "Veille", category: "Stage", src: "assets/img/gallery/veille2.jpg", ratio: "16/9" },
  { title: "Veille", category: "Stage", src: "assets/img/gallery/veille4.jpg", ratio: "16/9" },
  { title: "Souvenir de promotion", category: "Souvenirs", src: "assets/img/gallery/retro.jpg", ratio: "2/3" },
  { title: "Souvenir de promotion", category: "Souvenirs", src: "assets/img/gallery/sout.jpg", ratio: "4/3" },
  { title: "Événement", category: "Événements", src: "assets/img/gallery/gala.jpg", ratio: "4/3" },
  { title: "Événement", category: "Événements", src: "assets/img/gallery/wahid.jpg", ratio: "4/3" },
  { title: "Événement", category: "Événements", src: "assets/img/gallery/wahidimg.jpg", ratio: "4/3" },
];

export const certificates = [
  {
    name: "Java Programming",
    organization: "HackerRank",
    date: "2026",
    link: "https://www.hackerrank.com/certificates/9e207fbc1f5b"
  },
  {
    name: "SQL",
    organization: "HackerRank",
    date: "2026",
    link: "https://www.hackerrank.com/certificates/2beca496086d"
  },
  {
    name: "JavaScript",
    organization: "HackerRank",
    date: "2026",
    link: "https://www.hackerrank.com/certificates/f41ed15eeef6"
  }
];
