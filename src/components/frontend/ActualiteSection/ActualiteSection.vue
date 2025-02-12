



<template>
  <section class="actualite">
   <div class="divider">{{ $t('latest_news_title') }}</div>

    <div class="relative w-full px-4 mx-auto max-w-7xl overflow-hidden">
      <div
        ref="carouselRef"
        class="relative flex transition-transform duration-700 ease-out"
        :style="{ transform: `translateX(-${currentOffset}px)` }"
        @mouseenter="pauseAutoScroll"
        @mouseleave="resumeAutoScroll"
      >
        <div
          v-for="(actualite, index) in actualites"
          :key="index"
          class="flex-shrink-0"
          :class="isMobile ? 'w-full' : 'w-1/3'"
        >
          <div class="mx-3">
            <div class="h-full bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
              <div class="relative aspect-video overflow-hidden rounded-t-xl">
                <img
                  :src="getImageUrl(actualite.image)"
                  :alt="actualite.titre"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  @error="handleImageError"
                />
              </div>

              <div class="p-5">
                <h3 class="text-lg font-semibold text-blue-900 mb-2 line-clamp-2">
                  {{ actualite.titre }}
                </h3>
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                  {{ actualite.description }}
                </p>

                <div class="flex items-center justify-between pt-3 border-t border-gray-100">
                  <time class="text-sm text-gray-500">{{ formatDate(actualite.datePublication) }}</time>
                  <router-link
                    :to="{ name: 'ActualiteDetail', params: { slug: actualite.slug } }"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-lg transition-all duration-300 hover:bg-blue-800 hover:shadow-md"
                  >
                    Voir plus
                    <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dots de navigation -->
      <div class="flex justify-center mt-8 space-x-2">
        <button
          v-for="index in Math.ceil(actualites.length / itemsPerPage)"
          :key="index"
          @click="goToPage(index - 1)"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="[
            currentPage === index - 1 
              ? 'w-6 bg-blue-900' 
              : 'bg-blue-200 hover:bg-blue-300'
          ]"
          aria-label="Aller à la page"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import ActualiteService from '../../../services/ActualiteService';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const actualites = ref([]);
const currentOffset = ref(0);
const carouselRef = ref(null);
const currentPage = ref(0);
const autoScrollInterval = ref(null);
const isMobile = ref(false);

const itemsPerPage = computed(() => isMobile.value ? 1 : 3);

const getImageUrl = (path) => path || '/placeholder-image.png';

const handleImageError = (event) => {
  event.target.src = '/placeholder-image.png';
};

const formatDate = (date) => {
  if (!date) return 'Date inconnue';
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const updateOffset = () => {
  if (!carouselRef.value) return;
  const containerWidth = carouselRef.value.offsetWidth;
  currentOffset.value = currentPage.value * (containerWidth / itemsPerPage.value);
};

const goToPage = (page) => {
  currentPage.value = page;
  updateOffset();
};

const nextSlide = () => {
  const maxPage = Math.ceil(actualites.value.length / itemsPerPage.value) - 1;
  currentPage.value = currentPage.value >= maxPage ? 0 : currentPage.value + 1;
  updateOffset();
};

const startAutoScroll = () => {
  autoScrollInterval.value = setInterval(nextSlide, 5000);
};

const pauseAutoScroll = () => {
  if (autoScrollInterval.value) {
    clearInterval(autoScrollInterval.value);
  }
};

const resumeAutoScroll = () => {
  pauseAutoScroll();
  startAutoScroll();
};

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
  updateOffset();
};

// Initialisation
const init = async () => {
  try {
    actualites.value = await ActualiteService.getAllActualites();
    handleResize();
    startAutoScroll();
  } catch (error) {
    console.error('Erreur lors du chargement des actualités:', error);
  }
};

// Watchers et Lifecycle hooks
watch(isMobile, () => {
  currentPage.value = 0;
  updateOffset();
});

onMounted(() => {
  init();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  pauseAutoScroll();
  window.removeEventListener('resize', handleResize);
});
</script>









<style scoped>
.actualite {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(246, 248, 247, 1);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%23DCA510'/%3E%3Cstop offset='1' stop-color='%23324C9C'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23324C9C'/%3E%3Cstop offset='1' stop-color='%23DCA510'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  flex-wrap: wrap;
  padding: 2rem 0;
  width: 100%;
}
.actualite {
  @apply py-16 bg-gray-50;
}

/* Animation pour le hover des cartes */
.hover\:shadow-lg {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.hover\:shadow-lg:hover {
  transform: translateY(-2px);
}

/* Optimisation des performances d'animation */
.transition-transform {
  will-change: transform;
}
</style>