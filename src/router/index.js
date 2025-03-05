import { createRouter, createWebHistory } from "vue-router";

// Importation des composants
// import Conseil from "../components/frontend/ActualiteSection/conseil_administration.vue";
// import Fetetravail from "../components/frontend/ActualiteSection/Fetetravail.vue";
// import Journeefemme from "../components/frontend/ActualiteSection/Journeefemme.vue";
// import Remisefonds from "../components/frontend/ActualiteSection/remisefonds.vue";
import ContactUs from "../components/frontend/ContactUs/contact_us.vue";
import Gouvernance from "../components/frontend/Gouvernance/Gouvernance.vue";
import Usager from "../components/frontend/Inscription/Usager.vue";
import LacDec from "../components/frontend/LacDec/lacdec.vue";
import Missions from "../components/frontend/Missions/missions.vue";
import Organigramme from "../components/frontend/Organigramme/Organigramme.vue";
import Partenaires from "../components/frontend/partenaires/partenaires.vue";

import Communique from "../components/frontend/Publications/communique.vue";
import GuideUtilisateurs from "../components/frontend/Publications/guide_utilisateurs.vue";
import Interviews from "../components/frontend/Publications/Interviews.vue";

import Mediatheque from "../components/frontend/Publications/mediatheque.vue";
import Publications from "../components/frontend/Publications/publications.vue";
import ConsAdmin from "../components/frontend/Serviceslist/cons_admin.vue";
import ConsConvention from "../components/frontend/Serviceslist/cons_convention.vue";
import ConsJudiciaire from "../components/frontend/Serviceslist/cons_judiciaire.vue";
import Depot from "../components/frontend/Serviceslist/depot.vue";
import TextesReglementaires from "../components/frontend/TextesReglementaires/TextesReglementaires.vue";
// Importer le composant ActualiteDetail
import ActualiteDetail from "../components/frontend/Publications/ActualiteDetail.vue";
import VideoList from "../views/Admin/videos/VideoList.vue";
import CommuniqueList from "../views/Admin/communiques/CommuniqueList.vue";
import { useAuthStore } from "../stores/auth";
import ActualiteList from "../views/Admin/actualites/ActualiteList.vue";
import blocslist from "../views/Admin/blocs/blocslist.vue";
import Admin from "../views/Admin/dashboard.vue";
import LoginAdmin from "../views/Admin/loginadmin.vue";
import MissionList from "../views/Admin/missions/MissionList.vue";
import payslist from "../views/Admin/pays/payslist.vue";
import PresentationList from "../views/Admin/presentations/PresentationList.vue";
import DomaineList from "../views/Admin/domaines/DomaineList.vue";
import StatList from "../views/Admin/stats/StatList.vue";
import PublicationList from "../views/Admin/publications/PublicationList.vue";
import ReglementationList from "../views/Admin/reglementations/ReglementationList.vue";
import SlideList from "../views/Admin/slides/SlideList.vue";
import SponsorList from "../views/Admin/sponsors/SponsorList.vue";
import Home from "../views/Home.vue";

import InterviewsList from "../views/Admin/interviews/InterviewsList.vue";
import InterviewDetail from "../components/frontend/Publications/InterviewDetail.vue";
import SubscriberList from "../views/Admin/subscriber/SubscriberList.vue";
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/contact_us", name: "contact_us", component: ContactUs },
  { path: "/lacdec", name: "lacdec", component: LacDec },
  { path: "/missions", name: "missions", component: Missions },
  { path: "/gouvernance", name: "gouvernance", component: Gouvernance },
  { path: "/organigramme", name: "organigramme", component: Organigramme },
  {
    path: "/textes_reglementaires",
    name: "textes_reglementaires",
    component: TextesReglementaires,
  },
  { path: "/partenaires", name: "partenaires", component: Partenaires },
  { path: "/cons_admin", name: "cons_admin", component: ConsAdmin },
  {
    path: "/cons_judiciaire",
    name: "cons_judiciaire",
    component: ConsJudiciaire,
  },
  { path: "/depot", component: Depot },
  {
    path: "/guide_utilisateurs",
    name: "guide_utilisateurs",
    component: GuideUtilisateurs,
  },
  { path: "/publications", name: "publications", component: Publications },

  {
    path: "/interviews", // Page publique pour afficher la liste des interviews
    name: "Interviews",
    component: Interviews,
  },
  {
    path: "/interviews/:slug", // Page publique pour afficher les détails d'une interview
    name: "InterviewDetail",
    component: InterviewDetail,
    props: true, // Permet de passer les paramètres de l'URL en tant que props
  },

  {
    path: "/actualites/:slug", // Route pour le détail d'une actualité par slug
    name: "ActualiteDetail",
    component: ActualiteDetail, // Utiliser le composant importé
    props: true,
  },

  { path: "/mediatheque", name: "mediatheque", component: Mediatheque },

  {
    path: "/cons_convention",
    name: "cons_convention",
    component: ConsConvention,
  },

  {
    path: "/inscription/usager",
    name: "inscription_usager",
    component: Usager,
  },
  { path: "/communique", name: "communique", component: Communique },
  // Supprimer ou commenter ces routes car les composants sont commentés en haut
  // {
  //   path: "/conseil_administration",
  //   name: "conseil_administration",
  //   component: Conseil
  // },
  // { path: "/fetetravail", name: "fetetravail", component: Fetetravail },
  // { path: "/journeefemme", name: "journeefemme", component: Journeefemme },
  // { path: "/remisefonds", name: "remisefonds", component: Remisefonds },
  { path: "/loginadmin", name: "loginadmin", component: LoginAdmin },
  {
    path: "/admin",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Admin,
      },
      {
        path: "slides",
        name: "slideList",
        component: SlideList,
      },
      {
        path: "sponsors",
        name: "sponsorList",
        component: SponsorList,
      },
      {
        path: "missions",
        name: "missionList",
        component: MissionList,
      },
      {
        path: "videos",
        name: "videoList",
        component: VideoList,
      },
      {
        path: "presentation",
        name: "presentationList",
        component: PresentationList,
      },

      { path: "domaines", name: "domaineList", component: DomaineList },

      { path: "stats", name: "statList", component: StatList },

      {
        path: "publications",

        name: "PublicationList",

        component: PublicationList,
      },

      {
        path: "communiques",

        name: "CommuniqueList",

        component: CommuniqueList,
      },

      {
        path: "subscriber",
        name: "SubscriberList",
        component: SubscriberList,
      },

      {
        path: "interviews", // Chez l'admin pour gérer les interviews
        name: "InterviewsList",
        component: InterviewsList,
      },

      {
        path: "reglementations",

        name: "ReglementationList",

        component: ReglementationList,
      },
      {
        path: "actualites",
        name: "actualiteList",
        component: ActualiteList,
      },
      {
        path: "blocs",
        name: "blocslist",
        component: blocslist,
      },
      {
        path: "pays",
        name: "payslist",
        component: payslist,
        meta: { requiresAuth: true },
      },
    ],
  },
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
