// Fichier à modifier lors de l'ouverture des inscriptions à chaque session.
// Aucun lien Klaxoon fictif : laisser une chaîne vide tant qu'il n'est pas disponible.
// Si QR disponible : déposer le fichier PNG dans qr/ et indiquer le chemin relatif.
window.ESPACE_STAGIAIRES_CONFIG = {
  sessions: {
    "2027-01-14": {
      label: "Session du 14 janvier 2027",
      date: "14/01/2027",
      evaluations: {
        diagnostic: { url: "", qr: "" },
        chaud:      { url: "", qr: "" },
        froid:      { url: "", qr: "" }
      }
    }
  },
  resources: {
    programme: "", // ex. documents/programme-2610-v7.pdf
    livret: ""     // ex. documents/livret-mjpm-v6.pdf
  }
};
