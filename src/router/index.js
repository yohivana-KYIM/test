import { createRouter, createWebHistory } from "vue-router";

import Conseil from "../components/frontend/ActualiteSection/conseil_administration.vue";
import Fetetravail from "../components/frontend/ActualiteSection/Fetetravail.vue";
import Journeefemme from "../components/frontend/ActualiteSection/Journeefemme.vue";
import Remisefonds from "../components/frontend/ActualiteSection/remisefonds.vue";

import ContactUs from "../components/frontend/ContactUs/contact_us.vue";
import Gouvernance from "../components/frontend/Gouvernance/Gouvernance.vue";
import Usager from "../components/frontend/Inscription/Usager.vue";
import LacDec from "../components/frontend/LacDec/lacdec.vue";
import Missions from "../components/frontend/Missions/missions.vue";
import Organigramme from "../components/frontend/Organigramme/Organigramme.vue";
import Partenaires from "../components/frontend/partenaires/partenaires.vue";
import Actualites from "../components/frontend/Publications/actualites.vue";
import Communique from "../components/frontend/Publications/communique.vue";
import GuideUtilisateurs from "../components/frontend/Publications/guide_utilisateurs.vue";
import Interviews from "../components/frontend/Publications/Interviews.vue";
import Interviews1 from "../components/frontend/Publications/Interviews1.vue";
import Interviews2 from "../components/frontend/Publications/Interviews2.vue";
import Mediatheque from "../components/frontend/Publications/mediatheque.vue";
import Publications from "../components/frontend/Publications/publications.vue";
import ConsAdmin from "../components/frontend/Serviceslist/cons_admin.vue";
import ConsConvention from "../components/frontend/Serviceslist/cons_convention.vue";
import ConsJudiciaire from "../components/frontend/Serviceslist/cons_judiciaire.vue";
import TextesReglementaires from "../components/frontend/TextesReglementaires/TextesReglementaires.vue";
import { useAuthStore } from "../stores/auth";
import blocslist from "../views/Admin/blocs/blocslist.vue";
import Admin from "../views/Admin/dashboard.vue";
import LoginAdmin from "../views/Admin/loginadmin.vue";
import payslist from "../views/Admin/pays/payslist.vue";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/contact_us", name: "contact_us", component: ContactUs },
  { path: "/lacdec", name: "lacdec", component: LacDec },
  { path: "/missions", name: "missions", component: Missions },
  { path: "/gouvernance", name: "gouvernance", component: Gouvernance },
  { path: "/organigramme", name: "organigramme", component: Organigramme },
  {
    path: "/conseil_administration",
    name: "conseil_administration",
    component: Conseil
  },
  {
    path: "/fetetravail",
    name: "fetetravail",
    component: Fetetravail
  },
  {
    path: "/journeefemme",
    name: "journeefemme",
    component: Journeefemme
  },
  {
    path: "/remisefonds",
    name: "remisefonds",
    component: Remisefonds
  },
  {
    path: "/textes_reglementaires",
    name: "textes_reglementaires",
    component: TextesReglementaires
  },
  { path: "/partenaires", name: "partenaires", component: Partenaires },
  { path: "/cons_admin", name: "cons_admin", component: ConsAdmin },
  {
    path: "/cons_judiciaire",
    name: "cons_judiciaire",
    component: ConsJudiciaire
  },
  {
    path: "/guide_utilisateurs",
    name: "guide_utilisateurs",
    component: GuideUtilisateurs
  },
  { path: "/publications", name: "publications", component: Publications },
  { path: "/interviews", name: "interviews", component: Interviews },
  { path: "/interviews1", name: "interviews1", component: Interviews1 },
  { path: "/interviews2", name: "interviews2", component: Interviews2 },
  { path: "/mediatheque", name: "mediatheque", component: Mediatheque },
  { path: "/actualites", name: "actualites", component: Actualites },
  {
    path: "/cons_convention",
    name: "cons_convention",
    component: ConsConvention
  },
  {
    path: "/inscription/usager",
    name: "inscription_usager",
    component: Usager
  },

  { path: "/communique", name: "communique", component: Communique },
  { path: "/loginadmin", name: "loginadmin", component: LoginAdmin },
  {
    path: "/admin",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Admin
      },
      {
        path: "blocs",
        name: "blocslist",
        component: blocslist
      },
      {
        path: "pays",
        name: "payslist",
        component: payslist,
        meta: { requiresAuth: true }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Middleware pour la protection des routes
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Vérifiez si la route nécessite une authentification
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "loginadmin" }); // Redirige vers la page de connexion
  } else {
    next(); // Autorise l'accès
  }
});

export default router;
