<template>
  <div class="publications-container">
    <br />
    <h1 class="mb-4 text-4xl font-black text-center md:text-5xl">
      <span
        class="text-transparent bg-clip-text"
        style="background-color: #324C9C; -webkit-background-clip: text; color: transparent;"
      >
        {{ $t('info_cdec') }}
      </span>
    </h1>
    <br />

    <div class="relative w-full px-4 mx-auto max-w-7xl">
      <!-- Navigation Arrows -->
      <button 
        @click="prevSlide" 
        class="absolute left-0 z-10 flex items-center justify-center w-10 h-10 bg-white bg-opacity-50 rounded-full shadow-lg top-1/2 -translate-y-1/2 -left-2 hover:bg-opacity-70 transition-all duration-300"
        aria-label="Précédent"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div class="overflow-hidden">
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
            class="flex-shrink-0 px-3"
            :class="isMobile ? 'w-full' : isTablet ? 'w-1/2' : 'w-1/3'"
          >
            <div class="h-full bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg group">
              <div class="relative aspect-video overflow-hidden rounded-t-xl">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <img
                  :src="getImageUrl(actualite.image)"
                  :alt="actualite.titre"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  @error="handleImageError"
                />
                <div class="absolute bottom-0 left-0 bg-blue-900 text-white text-xs px-3 py-1 m-2 rounded-full">
                  {{ formatDate(actualite.datePublication) }}
                </div>
              </div>

              <div class="p-5">
                <h3 class="text-lg font-semibold text-blue-900 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
                  {{ actualite.titre }}
                </h3>
                <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                  {{ actualite.description }}
                </p>

                <div class="flex items-center justify-end pt-3 border-t border-gray-100">
                  <router-link
                    :to="{ name: 'ActualiteDetail', params: { slug: actualite.slug } }"
                    class="group inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-lg transition-all duration-300 hover:bg-blue-800 hover:shadow-md"
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

      <button 
        @click="nextSlide" 
        class="absolute right-0 z-10 flex items-center justify-center w-10 h-10 bg-white bg-opacity-50 rounded-full shadow-lg top-1/2 -translate-y-1/2 -right-2 hover:bg-opacity-70 transition-all duration-300"
        aria-label="Suivant"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Navigation Dots -->
      <div class="flex justify-center mt-8 space-x-2">
        <button
          v-for="index in Math.ceil(actualites.length / itemsPerPage)"
          :key="index"
          @click="goToPage(index - 1)"
          class="w-2 h-2 rounded-full transition-all duration-300 focus:outline-none"
          :class="currentPage === index - 1 ? 'w-8 bg-blue-900' : 'bg-blue-200 hover:bg-blue-300'"
          aria-label="Aller à la page"
        />
      </div>
    </div>
  </div>
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
const isTablet = ref(false);

const itemsPerPage = computed(() => {
  if (isMobile.value) return 1;
  if (isTablet.value) return 2;
  return 3;
});

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
  const containerWidth = carouselRef.value.parentElement.offsetWidth;
  currentOffset.value = currentPage.value * containerWidth;
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

const prevSlide = () => {
  const maxPage = Math.ceil(actualites.value.length / itemsPerPage.value) - 1;
  currentPage.value = currentPage.value <= 0 ? maxPage : currentPage.value - 1;
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
  isMobile.value = window.innerWidth < 640;
  isTablet.value = window.innerWidth >= 640 && window.innerWidth < 1024;
  updateOffset();
};

const init = async () => {
  try {
    actualites.value = await ActualiteService.getAllActualites();
    handleResize();
    startAutoScroll();
  } catch (error) {
    console.error('Erreur lors du chargement des actualités:', error);
  }
};

watch([isMobile, isTablet], () => {
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
.publications-container {
  padding: 2rem;
  background-color: #f4f6f8;
  border-radius: 1rem;
  margin: 1rem 0;
}

/* Animation pour le hover des cartes */
.hover\:shadow-lg {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.hover\:shadow-lg:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Optimisation des performances d'animation */
.transition-transform {
  will-change: transform;
}

/* Amélioration de l'effet de survol */
.group:hover .line-clamp-2 {
  color: #1e3a8a;
}

/* Animation des boutons de navigation */
.navigation-button {
  opacity: 0.7;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.navigation-button:hover {
  opacity: 1;
  transform: scale(1.1);
}

/* Animation des points de navigation */
.navigation-dot {
  transition: width 0.3s ease, background-color 0.3s ease;
}
</style>
