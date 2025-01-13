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
          Les prémices de l’opérationnalisation de la Caisse des Dépôts et
          Consignations du Cameroun (CDEC) ont été lancé le 20 janvier 2023 par
          le Chef de l’Etat, Son Excellence PAUL BIYA, à travers la nomination
          de ses premiers dirigeants. Le temps d’arrêt observé depuis sa
          création par la loi du 14 avril 2008 a permis aux différents acteurs
          de se réajuster et se préparer à l’arrivée de ce nouvel acteur
          important dans l’écosystème qui vient en complémentarité contribuer au
          développement socio-économique du Cameroun.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Dans la perspective du démarrage effectif des activités de la CDEC,
          nous nous sommes mis résolument au travail, en traçant tout d’abord la
          feuille de route et en définissant les actions prioritaires à mettre
          en œuvre dans le court terme. La constitution du Conseil
          d’Administration le 14 avril 2023 a permis à cet organe délibérant de
          tenir ses deux premières sessions au cours desquelles, plusieurs
          résolutions ont été adoptées portant notamment sur l’approbation du
          Plan Stratégique Triennal (2023-2025) de la CDEC, du budget au titre
          de l’exercice 2023, de certains textes internes, sur la nomination du
          Caissier Général, et sur l’organisation et le fonctionnement du Comité
          de Surveillance.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Par ailleurs, un certain nombre de textes d’application de la loi du
          14 avril 2008 régissant les dépôts et consignations ont été élaborés
          par l’équipe projet que j’ai mise en place au moment de ma nomination
          et sont en cours de signatures par les autorités compétentes.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          L’opérationnalisation de la CDEC a également consisté à trouver,
          aménager et équiper les locaux devant abriter le siège de la CDEC, en
          vue de satisfaire et faciliter les conditions de travail. Un immeuble
          à l’image de l’institution dotée du label « tiers de confiance » a été
          à cet effet mis à sa disposition au quartier Bastos.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Dans le même sillage, un contrat a été signé avec la Société SOPRA
          Banking Software pour mettre en place la solution AMPLITUDE à la CDEC,
          afin de gérer avec sureté et efficacité l’ensemble des ressources qui
          lui sont dévolues.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Sur le plan opérationnel, notamment en ce qui concerne la mobilisation
          des ressources, des discutions ont été engagées et se poursuivent avec
          la majorité des acteurs détenteurs dans leurs livres des fonds et
          valeurs dévolus à la CDEC. Il s’agit notamment des banques, des
          compagnies d’assurances, des professions judiciaires et d’autres
          entités publiques et privées (MINMAP, ARMP, CAMWATER, CAMTEL, ORANGE,
          MTN, etc.). Ces discussions ont permis de rassurer l’ensemble des
          acteurs sur la complémentarité de la CDEC en tant que nouvel acteur
          appelé à contribuer au financement du développement socio-économique,
          tout en veillant au maintien des équilibres existants de l’écosystème.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          A ce jour, je puisse dire que la Caisse des Dépôts et Consignations du
          Cameroun est opérationnelle. Elle reçoit progressivement les
          consignations ainsi que les premiers transferts des ressources
          identifiées auprès des différents acteurs.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Les établissements de crédit ne veulent pas déclarer les fonds à
          transférer à la CDEC. Qu’est ce qui explique cette résistance malgré
          vos rappels à l’ordre ?
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Je pense qu’il faudrait nuancer cette observation pour relever qu’il
          ne s’agit pas de toute les banques qui font la résistance, mais plus
          tôt de quelques-unes. La plupart des banques qui se veulent citoyennes
          et enclines à se conformer à la réglementation, comprennent l’enjeux
          de la réforme et ont procédé à la déclaration. Les discussions se
          poursuivent d’ailleurs avec celles-ci en vue de la préparation des
          transferts et de la mise en place des relations de partenariats
          privilégiées.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          S’agissant de celles qui affichent encore un comportement de méfiance,
          peut-être voient elles en la CDEC une concurrente ou alors ont-elles
          peur du changement ou de voir « leurs ressources » diminuer, je dirais
          que c’est à tort. Les banques devraient être rassurées au terme des
          rencontres que nous avons eu aussi bien dans le cadre de l’APECCAM que
          des visites de courtoisie que nous avons effectuées auprès des
          dirigeants desdites banques. Le message que nous avons véhiculé a
          pleinement rassuré ces derniers étant entendu que la CDEC n’est pas
          arrivée pour fragiliser le système bancaire, encore moins se
          substituer aux banques.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Les banques et la CDEC sont complémentaires. Elles sont amenées à
          collaborer et travailler ensemble comme des partenaires. La CDEC a
          pris l’option de loger ses ressources dans le système bancaire et ne
          compte pas déplacer la trésorerie détenue par chaque banque dans la
          mesure où les comptes CDEC seront ouverts dans les livres de celles-ci
          pour recevoir cette trésorerie.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Aussi, pour fructifier ses ressources, la CDEC est appelée à
          travailler avec le secteur bancaire pour effectuer conformément à sa
          stratégie d’investissement, des placements auprès des banques et
          recourir de manière générale à l’accompagnement de celles-ci. Aussi,
          la CDEC et les établissements bancaires contribueront ensemble au
          financement de certains projets d’intérêt général qui visent le
          développement économique du Cameroun.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Les banques ne sont pas les seules structures qui retiennent les fonds
          devant être transférés. Qu’est ce qui est fait pour que le greffe et
          les notaires se conforment ?
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Il faut rappeler que la CDEC assure un service public qui est celui
          des dépôts et des consignations. La sécurisation des fonds des tiers
          notamment dans le domaine de la justice est une priorité pour elle.
          Ainsi, pour assurer une saine collaboration et éviter de perturber
          l’équilibre existant dans ce domaine déjà bien maitrisé par les
          acteurs concernés, il faudrait que des mécanismes soient mis en place
          de façon collaborative et concertée avec les différents acteurs de la
          justice.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Aussi, je tiens à ce que le positionnement de la CDEC comme un nouvel
          intervenant, ne constitue pas un goulot d’étranglement dans les
          procédures existantes, n’ajoute pas des lourdeurs et ne contribue pas
          au rallongement des délais. Nous pensons à cet effet mettre en place
          une plateforme digitale de gestion des flux financiers qui pourra
          faciliter les opérations des greffiers, des notaires, des huissiers
          auprès de la CDEC, en leur offrant un service de qualité.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          La Caisse des dépôts et Consignations est par nature la banque des
          professions judiciaires. Elle apporte une sécurité et une protection
          optimale aux fonds des tiers déposés auprès de ces acteurs soit à
          titre conservatoire soit à titre libératoire.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Des échanges ont déjà été entrepris avec ces professions en vue de
          mettre en place un véritable cadre collaboratif. D’ailleurs une
          convention de partenariat est en cours d’élaboration avec la Chambre
          Nationale des Notaires.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Face à tous ces freins quelle sera la démarche de la CDEC ?
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Comme dans toute réforme, nous avions anticiper certaines résistances
          dans la première phase de l’opérationnalisation de la CDEC. Le
          dialogue reste la démarche la plus appropriée lorsque l’on met en
          marche une réforme et la CDEC continuera de privilégier cette démarche
          et l’approche participative et partenariale. Nous allons poursuivre la
          sensibilisation des différents acteurs pour les amener à adhérer
          pleinement au positionnement de la Caisse des Dépôts et Consignations,
          comme un acteur majeur dévoué à la sécurisation des fonds des tiers et
          au financement de l’intérêt général.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Toutefois, il faut indiquer que pour ceux qui continueront de
          présenter une opposition manifeste à la bonne conduite de cette
          réforme, le législateur et les pouvoirs publics ont doté la CDEC des
          moyens et instruments lui permettant de procéder au recouvrement forcé
          des ressources qui lui sont dévolues. Bénéficiant du privilège du
          Trésor, la CDEC dispose des moyens d’investigation auxquels on ne
          saurait opposer ni le secret professionnel ni le secret bancaire. À ce
          titre, nous allons tenir compte des réalités de chaque acteur
          détenteur des fonds et valeurs de la CDEC, mais il est important que
          la loi s’applique à tous.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          En outre, compte tenu des diverses contraintes et dans le but
          d’optimiser l’utilisation des ressources qui lui sont dévolues par la
          loi, et d’en faire un levier important au financement de l’économie,
          la CDEC s’appuiera également sur la gestion sous mandat de certains
          fonds spéciaux, ainsi que le partenariat avec les institutions
          financières multilatérales de développement, les fonds
          d’investissement, les banques commerciales et d’autres sociétés
          spécialisées notamment dans le cadre des PPP.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Il s’agit d’une structure qui sous d’autres cieux est un levier pour
          le développement de l’économie. Pouvez-vous rappeler les avantages en
          ce qui concerne le Cameroun ?
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          La Caisse des Dépôts et Consignations est un investisseur
          institutionnel de long terme sur qui l’État va s’appuyer pour mettre
          en œuvre des projets d’envergure porteurs de croissance. Cet
          établissement public de type particulier a été mis en place pour
          fonctionner selon un modèle économique simple à savoir : recevoir,
          conserver, sécuriser et gérer des ressources qui, de par leur nature
          ou leur origine, requièrent une protection particulière, d’une part ;
          et investir dans les projets d’intérêt général pour transformer
          structurellement l’économie camerounaise, d’autre part.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Certes les défis sont énormes, mais les atouts et le potentiel de
          ressources dévolues à la CDEC me fonde à croire qu’elle aura un impact
          significatif, dans la mesure où, elle ambitionne de se positionner
          comme une institution stratégique, et de devenir le premier soutien et
          catalyseur des politiques publiques à travers les stratégies
          sectorielles et les grands programmes d’infrastructures.
        </p>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          Elle devra également jouer un rôle central dans la modernisation de
          l’économie camerounaise, et l’émergence de nouvelles filières
          porteuses, avec des effets à l’échelle macroéconomique sur l’emploi,
          la productivité et la croissance.
        </p>
      </div>

      <!-- Actions -->
      <div
        class="flex flex-col items-center justify-between gap-6 p-6 mt-16 bg-white border border-gray-200 shadow-md sm:flex-row rounded-xl"
      >
        <div class="flex items-center space-x-4">
          <button
            class="inline-flex items-center gap-2 px-3 py-2 text-gray-600 transition-colors rounded-md hover:text-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            <Share2 class="w-4 h-4" />
            <span>Partager</span>
          </button>
        </div>

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
  id: 1,
  title:
    "Richard Evina Obam : « Les pouvoirs publics ont doté la CDEC des moyens lui permettant de procéder au recouvrement forcé »",
  source: "L'Économie",
  date: "31 Octobre 2023",
  excerpt: `Dans une interview accordée à l'Économie, le Directeur général de la Caisse des Dépôts et Consignations du Cameroun affirme que la structure qu'il dirige reçoit progressivement les premiers transferts de ressources identifiées auprès des différents acteurs.`,
  image: "/images/dg.png",
  url: "https://leconomie.info/richard-evina-obam-les-pouvoirs-publics-ont-dote-la-cdec-des-moyens-lui-permettant-de-proceder-au-recouvrement-force/",
};

onMounted(() => {
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
