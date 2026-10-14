// Espace stagiaires MJPM — configuration des sessions et ressources.
// État des évaluations : "a_venir", "ouvert" ou "termine".
// La page ne montre le lien et le QR code que si l'état vaut "ouvert".
// ATTENTION : ces états ne protègent pas les URLs ; gérer également les accès dans Klaxoon.
window.ESPACE_STAGIAIRES_CONFIG = {
  sessions: {
    "2027-01-14": {
      label: "Session du 14 janvier 2027",
      date: "14/01/2027",
      evaluations: {
        diagnostic: {
          etat: "ouvert",
          url: "https://go.klaxoon.com/KKK2GJR",
          qr: "qr/diagnostic-2027-01-14.png"
        },
        chaud: {
          etat: "a_venir",
          url: "https://go.klaxoon.com/AKKDJKV",
          qr: "qr/chaud-2027-01-14.png"
        },
        froid: {
          etat: "a_venir",
          url: "https://go.klaxoon.com/2JYXFDU",
          qr: "qr/froid-2027-01-14.png"
        }
      }
    }
  },
  resources: {
    programme: "programme-mjpm1-2610-v7.pdf",
    livret: "livret-stagiaire-mjpm1-2610-v6.pdf"
  }
};
