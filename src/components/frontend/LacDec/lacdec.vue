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
      <p v-html="presentationDescription" style="text-align: justify; line-height: 1.6;"></p>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import PresentationService from '../../../services/PresentationService';
import { useI18n } from 'vue-i18n';

export default {
  name: "PresentationCDEC",
  setup() {
    const { t } = useI18n();
    const presentationData = ref(null);

    const presentationDescription = computed(() => {
      if (presentationData.value?.data?.[0]?.description) {
        return presentationData.value.data[0].description;
      }
      return '';
    });

    const fetchPresentation = async () => {
      try {
        const response = await PresentationService.getAllPresentations();
        presentationData.value = response;
        console.log("Données récupérées :", presentationData.value);
      } catch (error) {
        console.error("Erreur lors de la récupération de la présentation:", error);
      }
    };

    onMounted(() => {
      fetchPresentation();
    });

    return {
      presentationDescription,
      t
    };
  }
};
</script>

<style scoped>
@import "../../../css/missions.css";
@import "../../../css/lacdec.css";

.mission_info p {
  text-align: justify;
  line-height: 1.6;
  margin-bottom: 1rem;
  white-space: pre-line;
}
</style>