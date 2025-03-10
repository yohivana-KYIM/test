<template>
  <br/>
  <h1 class="mb-4 text-4xl font-black md:text-5xl" style="text-align: center;">
    <span
      class="text-transparent bg-clip-text"
      style="background-color: #324c9c; -webkit-background-clip: text; color: transparent;"
    >
      {{ $t('our_partners') }}
    </span>
  </h1>

  <section class="section_partenaire">
    <div v-if="loading">{{ $t('loading_sponsors') }}...</div>
    <template v-else>
      <div v-for="sponsor in sponsors" :key="sponsor.id" class="div_partenaire">
        <div class="divider">{{ $t(sponsor.nom) }}</div>
        <div class="info_partenaire">
          <img :src="getImageUrl(sponsor.image)" :alt="$t('sponsor_logo', { sponsorName: sponsor.nom })" />
          <p>
            {{ $t(sponsor.description) }}
          </p>
        </div>
      </div>
    </template>
  </section>
</template>

<script setup>
import SponsorService from '../../../services/SponsorService';
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const sponsors = ref([]);
const loading = ref(false);


const getImageUrl = (path) => {
  return path ? path : '/placeholder-image.png'
}

const fetchSponsors = async () => {
  try {
    loading.value = true;
    sponsors.value = await SponsorService.getAllSponsors();
  } catch (error) {
    console.error("Erreur lors du chargement des sponsors :", error);
    sponsors.value = [];
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchSponsors();
});
</script>

<style scoped>
@import "../../../css/nos_partenaires.css";
.info_partenaire p {
  text-align: justify;
}

</style>
