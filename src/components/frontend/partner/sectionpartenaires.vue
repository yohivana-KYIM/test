<template>
  <section class="section_partenaire">
    <div class="divider">{{ $t('partners_title') }}</div>

    <div class="img_group_partenaire partner-scroll-wrapper">
      <div v-if="loading" class="loading-message">Chargement des sponsors...</div>
      <div v-else-if="sponsors.length" class="scroll-container">
        <div
            class="animate-scroll"
            :style="{ '--partner-count': sponsors.length }"
        >
          <div
              v-for="(sponsor, index) in sponsors"
              :key="sponsor.id"
              class="partner-item"
          >
            <div class="partner-circle">
              <div class="partner-image-wrapper">
                <img
                    :src="getImageUrl(sponsor.image)"
                    :alt="sponsor.nom || $t('sponsor_logo')"
                    class="partner-image"
                    loading="lazy"
                />
              </div>
            </div>
            <div class="partner-name">{{ sponsor.nom || $t('sponsor') }}</div>
          </div>
          <div
              v-for="(sponsor, index) in sponsors"
              :key="'copy-' + sponsor.id"
              class="partner-item"
          >
            <div class="partner-circle">
              <div class="partner-image-wrapper">
                <img
                    :src="getImageUrl(sponsor.image)"
                    :alt="sponsor.nom || $t('sponsor_logo')"
                    class="partner-image"
                    loading="lazy"
                />
              </div>
            </div>
            <div class="partner-name">{{ sponsor.nom || $t('sponsor') }}</div>
          </div>
        </div>
      </div>
      <div v-else class="no-sponsors">{{ $t('no_sponsors_available') }}</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SponsorService from '../../../services/SponsorService';
import { useI18n } from 'vue-i18n';

const { t } = useI18n(); // Use 't' for translation function
const sponsors = ref([]);
const loading = ref(false);

const getImageUrl = (path) => {
  return path ? path : "/placeholder-image.png";
};

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

onMounted(async () => {
  await fetchSponsors();
});

</script>

<style scoped>
/* Styles are the same as before */
.section_partenaire {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(246, 248, 247, 1);
  padding-bottom: 2rem;
}

.img_group_partenaire {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
  overflow: hidden;
}

.partner-scroll-wrapper {
  mask-image: linear-gradient(
      to right,
      transparent,
      black 5%,
      black 95%,
      transparent
  );
}

.scroll-container {
  width: 200%;
  display: flex;
  overflow: hidden;
}

.partner-item {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
}

.partner-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
}

.partner-image-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.partner-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.partner-name {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: #4a5568;
  font-weight: 500;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.partner-circle:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.partner-circle:hover + .partner-name {
  opacity: 1;
  transform: translateY(0);
}

.animate-scroll {
  display: flex;
  animation: scroll calc(10s * var(--partner-count)) linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}


@media (min-width: 768px) {
  .partner-circle {
    width: 150px;
    height: 150px;
  }

  .partner-name {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .partner-circle {
    width: 100px;
    height: 100px;
  }

  .animate-scroll {
    animation-duration: 20s;
  }

  .partner-image-wrapper {
    padding: 15px;
  }
}

.no-sponsors {
  text-align: center;
  color: #888;
  padding: 20px;
}

.loading-message {
  text-align: center;
  color: #888;
  padding: 20px;
}
</style>