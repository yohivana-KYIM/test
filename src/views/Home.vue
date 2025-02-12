<template>
  <div class="home">
    <!-- Loader component for displaying loading state -->
    <Loader :isLoading="isLoading" />
    <carrousel />
    <services />
    <Domaine />
    <Dg />
    <indicateur />
    <ActualiteSection />
    <sectionpartenaires />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import carrousel from "../components/frontend/carrousel/carrousel.vue";
import services from "../components/frontend/services/services.vue";
import indicateur from "../components/frontend/indicateur/indicateur.vue";
import Domaine from "../components/frontend/Domaine/Domaine.vue";
import sectionpartenaires from "../components/frontend/partner/sectionpartenaires.vue";
import Dg from "../components/frontend/Dg/Dg.vue";
import ActualiteSection from "../components/frontend/ActualiteSection/ActualiteSection.vue";
import Loader from "../components/Loader.vue"; // Import the Loader component

const isLoading = ref(true);

onMounted(() => {
  // Simulate a loading time of 2 seconds
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style scoped>
@import "../css/accueil.css";

/* Autres styles ici */
</style>