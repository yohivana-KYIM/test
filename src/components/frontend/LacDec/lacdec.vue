<template>
  <br/>
  <h1 class="mb-4 text-4xl font-black md:text-5xl" style="text-align: center;">
    <span class="text-transparent bg-clip-text" style="background-color: #324c9c; -webkit-background-clip: text; color: transparent;">
      {{ $t('presentation_cdec_title') }}
    </span>
  </h1>
  <br/>
  <section class="body_info">
    <div class="mission_info">
      <p v-html="presentation.description"></p>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import PresentationService from '../../../services/PresentationService';
import { useI18n } from 'vue-i18n'; // Import à l'extérieur de setup

export default {
  name: "PresentationCDEC",
  setup() {
    const { t } = useI18n(); // useI18n à l'intérieur de setup
    const presentation = ref({ description: '' }); // Valeur par défaut

    onMounted(async () => {
      try {
        const response = await PresentationService.getAllPresentations();
        console.log("Données récupérées :", response);

        if (Array.isArray(response) && response.length > 0) {
          presentation.value = response[0]; // Premier élément du tableau
        } else if (typeof response === "object" && response !== null) {
          presentation.value = response;
        } else {
          console.warn("Aucune présentation trouvée");
        }
        console.log("Présentation après récupération :", presentation.value);
      } catch (error) {
        console.error("Erreur lors de la récupération des présentations :", error);
      }
    });

    return { presentation, t }; // Retourne t pour l'utiliser dans le template
  }
};
</script>

<style scoped>
@import "../../../css/missions.css";
@import "../../../css/lacdec.css";
</style>