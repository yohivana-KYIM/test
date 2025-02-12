<template>
  <br />
  <h1 class="mb-4 text-4xl font-black md:text-5xl text-center">
    <span
      class="text-transparent bg-clip-text"
      style="background-color: #324c9c; -webkit-background-clip: text; color: transparent;"
    >
      {{ $t('presentation_cdec_title') }}
    </span>
  </h1>
  <br />
  <section class="body_info">
    <div class="mission_info" v-if="presentation">
      <p>{{ presentation.description }}</p>
    </div>
    <div v-else>
      <p>Chargement en cours...</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PresentationService from '../../../services/PresentationService';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const presentation = ref(null);

const fetchPresentation = async () => {
  try {
    const data = await PresentationService.getAllPresentations();
    if (data.length > 0) {
      presentation.value = data[0]; // Supposons qu'on affiche la première présentation
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des présentations:", error);
  }
};

onMounted(fetchPresentation);
</script>

<style scoped>
@import "../../../css/missions.css";
@import "../../../css/lacdec.css";
</style>
