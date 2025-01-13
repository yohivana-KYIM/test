<template>
  <div
    class="min-h-screen font-sans text-gray-900 bg-gray-100 opacity-0 animate-fade-in"
  >
    <!-- Hero Section -->
    <header class="relative py-12 bg-white border-b border-gray-200 lg:py-20">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid items-start gap-8 lg:grid-cols-2">
          <div class="space-y-6 lg:sticky lg:top-24">
            <h1
              class="text-3xl font-bold leading-tight tracking-tight text-gray-900 lg:text-4xl"
              style="font-family: 'Poppins', sans-serif"
            >
              {{ articleData.title }}
            </h1>
            <router-link
              to="/interviews"
              class="inline-flex items-center gap-2 px-2 py-1 text-gray-600 transition-colors rounded-md hover:text-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              <ChevronLeft
                class="w-4 h-4 -translate-x-0.5 group-hover:-translate-x-1 transition-transform"
              />
              <span class="font-medium">Retour aux interviews</span>
            </router-link>
          </div>
          <div class="relative overflow-hidden shadow-lg rounded-xl">
            <div
              style="
                max-height: 550px;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <img
                :src="articleData.image"
                alt="Image d'illustration de l'article"
                class="object-cover max-w-full max-h-full"
                @error="setImageError(true)"
              />
            </div>

            <div
              v-if="imageError"
              class="absolute inset-0 flex items-center justify-center text-lg text-white bg-gray-700/90"
            >
              Image non disponible
            </div>
          </div>
        </div>
        <div class="flex flex-wrap gap-3 mt-6">
          <span
            class="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full ring-1 ring-blue-100"
          >
            {{ articleData.source }}
          </span>
          <span
            class="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full ring-1 ring-gray-200"
          >
            {{ articleData.date }}
          </span>
        </div>
      </div>
    </header>

    <!-- Content -->
    <main class="max-w-4xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
      <!-- Article Quote -->
      <div class="mb-16">
        <blockquote
          class="relative p-6 border-l-4 border-blue-400 bg-blue-50 rounded-xl"
        >
          <div
            class="absolute flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full -top-3 -left-3"
          >
            "
          </div>
          <p
            class="text-xl italic leading-relaxed text-gray-700"
            style="font-family: 'Merriweather', serif"
          >
            {{ articleData.excerpt }}
          </p>
        </blockquote>
      </div>

      <!-- Article Content -->
      <div
        class="p-8 space-y-6 transition-shadow bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-lg"
      >
            <h2 class="mb-4 text-2xl font-semibold text-gray-900">
          Analyse de l'interview
        </h2>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
           Il fallait s’y attendre. Au Cameroun, le Directeur général (DG) de la
          Caisse des dépôts et consignations (CDEC), Richard Evina Obam ne s’est
          pas embarrassé de formules toutes faites pour réagir à la sortie du
          Secrétaire général (SG) de la Commission bancaire d’Afrique centrale
          (Cobac), lui demandant de sursoir au processus de transfert des avoirs
          en déshérence dans les établissements de crédit au Cameroun.
          Pour le dirigeant camerounais, il est incompréhensible que le
          régulateur du marché bancaire de la Cemac, chargé de veiller au
          respect, par les établissements de crédit, des dispositions
          législatives et réglementaires édictées par les Autorités nationales,
          en vienne à requérir le report de l'application d'un décret du Premier
          ministre, pris en application d’une loi d’un Etat souverain, ceci,
          fait-il savoir, en contradiction avec l’article 1er de l’annexe de la
          convention portant création d’une Commission Bancaire de l’Afrique
          Centrale du 16 octobre 1990 qu’il reprend dans cette interview
          accordée à EcoMatin : « Il est institué une Commission bancaire de
          l’Afrique Centrale chargée de veiller au respect par les
          établissements de crédit des dispositions législatives et
          réglementaires édictées par les Autorités nationales, par la Banque
          des Etats de l’Afrique Centrale ou par elle-même et qui leur sont
          applicables, et de sanctionner les manquements constatés ». Selon les
          mots du DG de la CDEC, ces missions ont été outrepassées et de fait,
          questionnent d’autant plus que le gouverneur de la Beac, dans une
          correspondance adressée au ministre des Finances du Cameroun, autorité
          monétaire, le 8 septembre 2023, que nombre d’acteurs de l’écosystème
          financier camerounais se dérobaient de leurs obligations.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Aussi faisait-il observer dans cette correspondance que « les règles
          communautaires […] ou nationales applicables, particulièrement celles
          régissant les dépôts et consignations au Cameroun, ne sont pas
          respectées ». Dans cet entretien, Richard Evina Obam clarifie aussi la
          notion de fonds en déshérence devant être reversés à la CDEC, au sens
          du décret du Premier ministre du 1er décembre 2023 pris en conformité
          avec le règlement de la Commission interafricaine des marchés
          d’assurance (Cima) de 2018. Ce règlement Cima dispose que les montants
          frappés de prescription et non versés aux bénéficiaires des contrats
          d’assurance-vie doivent être reversés aux Caisses des dépôts et
          consignations ou tout organisme assimilé.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          De plus, sur l’absence de cadre réglementaire Cemac clarifiant la
          nature des avoirs en déshérence et définissant les modalités de leur
          conservation, de leur gestion et de leur restitution, le DG de la
          Caisse met en avant la souveraineté des Etats qui en restent
          détenteurs de la liberté d’appliquer leurs législations nationales.
          Pour Richard Evina Obam, certaines banques connues veulent
          instrumentaliser la Cobac comme dernier sursaut et se soustraire à
          leur obligation de transférer les avoirs frappés de prescription et
          les avoirs en déshérence. Le DG de la CDEC, en attendant une réaction
          officielle des autorités camerounaises sur la question, reste
          cependant ouvert au dialogue avec les banques et entend poursuivre le
          processus de transfert des avoirs en déshérence et frappés de
          prescription à l’institution qu’il dirige.
        </p>
      </div>

      <!-- Actions -->
      <div
        class="flex flex-col items-center justify-between gap-6 p-6 mt-16 bg-white border border-gray-200 shadow-md sm:flex-row rounded-xl"
      >
        <button
          class="inline-flex items-center gap-2 px-3 py-2 text-gray-600 transition-colors rounded-md hover:text-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          aria-label="Partager l'article"
        >
          <Share2 class="w-4 h-4" />
          <span>Partager</span>
        </button>
        <a
          :href="articleData.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-5 py-3 font-medium text-white transition-colors bg-green-500 hover:bg-green-600 rounded-xl focus:outline-none focus:ring focus:ring-green-200 focus:ring-offset-1"
        >
          <span>Lire l'article original</span>
          <ExternalLink class="w-4 h-4 ml-2" />
        </a>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ChevronLeft, Share2, ExternalLink } from "lucide-vue-next";

const imageError = ref(false);

const articleData = {
  id: 2,
  title:
    "Dépôts et consignations : au Cameroun, Richard Evina Obam répond au SG de la Cobac",
  source: "EcoMatin",
  date: "17 Juillet 2024",
  excerpt: `Dans une interview accordée et disponible dans l’édition EcoMatin de ce mercredi, le Directeur général de la Caisse des dépôts et consignations (CDEC) du Cameroun invoque les dispositions pertinentes des règlements de la Commission interafricaine des marchés d’assurances ; de l’acte de création de la Commission bancaire d’Afrique centrale ainsi que les principes fondateurs de la Cemac. Il démontre également la violation de la souveraineté du Cameroun par la sortie de Marcel Ondele.`,
  image: "/images/interview1.jpg",
  url: "https://ecomatin.net/depots-et-consignations-au-cameroun-richard-evina-obam-repond-au-sg-de-la-cobac",
};

onMounted(() => {
  // On ajoute une légère animation au chargement du composant.
  setTimeout(() => {
    const element = document.querySelector(".animate-fade-in");
    if (element) {
      element.style.opacity = 1;
    }
  }, 100);
});

function setImageError(errorState) {
  imageError.value = errorState;
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Open+Sans:wght@400;500;700&family=Poppins:wght@400;600&display=swap");

.animate-fade-in {
  transition: opacity 0.3s ease-in-out;
}
</style>
