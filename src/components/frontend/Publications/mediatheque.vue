<template>
  <div
    class="relative min-h-screen p-4 overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-100 md:p-8"
  >
    <!-- Bulles en arrière-plan -->
    <div
      v-for="n in 15"
      :key="n"
      class="bubble"
      :style="getBubbleStyle(n)"
    ></div>

    <!-- En-tête -->
    <div class="relative z-10 mb-12 text-center">
      <h1 class="mb-4 text-4xl font-black md:text-5xl">
        <span
          class="text-transparent bg-clip-text"
          style="background-color: #324c9c; -webkit-background-clip: text; color: transparent;"
        >
          {{ $t('cdec_media_library') }}
        </span>
      </h1>
      <p class="text-lg text-gray-600">{{ $t('discover_our_latest_videos') }}</p>
    </div>

    <!-- Barre de recherche -->
    <div class="relative z-10 max-w-xl mx-auto mb-8">
      <div class="relative">
        <input
          type="text"
          v-model="searchQuery"
          :placeholder="$t('search_video')"
          class="w-full px-4 py-3 text-gray-700 bg-white border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
        <button
          v-if="searchQuery"
          @click="clearSearch"
          class="absolute right-10 top-3.5 cursor-pointer text-gray-500 hover:text-gray-700"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <svg
          class="absolute w-5 h-5 text-gray-400 right-3 top-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>

    <!-- Grille de vidéos -->
    <div class="relative z-10 px-4 mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(video, index) in filteredVideos"
          :key="video.id"
          class="relative overflow-hidden bg-white shadow-lg rounded-xl group"
        >
          <!-- Conteneur vidéo -->
          <div
            class="relative w-full group-hover:shadow-xl"
            :style="{ paddingTop: '56.25%' }"
          >
            <div
              v-if="selectedVideoIndex !== index"
              class="absolute inset-0 transition-shadow duration-300 group-hover:shadow-xl"
            >
              <img
                :src="`https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`"
                :alt="video.title"
                class="object-cover w-full h-full transition-transform duration-300 cursor-pointer group-hover:scale-105"
                loading="lazy"
                @click="playVideo(index)"
              />
            </div>

            <div v-else class="absolute inset-0">
              <iframe
                :src="`https://www.youtube.com/embed/${video.youtube_id}?autoplay=1&rel=0&showinfo=0`"
                frameborder="0"
                allowfullscreen
                class="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>

          <!-- Infos vidéo -->
          <div class="p-4">
            <h3 class="mb-2 text-lg font-semibold text-gray-800">
              {{ video.title }}
            </h3>
            <p class="mb-2 text-sm text-gray-500">
              {{ video.date || $t('cdec_cameroun') }}
            </p>
            <div class="flex items-center justify-between">
              <!-- Bouton Regarder -->
              <button
                class="flex items-center px-4 py-2 text-sm text-white transition-colors duration-200 bg-red-600 rounded-lg hover:bg-red-700"
                @click="playVideo(index)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 mr-1 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 22v-20l18 10-18 10z" />
                </svg>
                {{ $t('watch') }}
              </button>

              <!-- Bouton Ouvrir avec YouTube -->
              <a
                :href="`https://www.youtube.com/watch?v=${video.youtube_id}`"
                target="_blank"
                class="flex items-center px-3 py-2 text-sm text-gray-600 transition-colors duration-200 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 mr-1 fill-red-600"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.615 2.997c-2.024-.539-10.295-.564-12.326 0-2.024.539-2.024 3.858 0 4.398 2.024.539 10.295.564 12.326 0 2.024-.539 2.024-3.858 0-4.398zM5.13 7.451c-.514.137-.794.751-.59 1.208l4.656 10.982c.094.222.282.343.491.343.213 0 .402-.121.496-.343l4.672-10.982c.203-.457-.078-1.071-.59-1.208-1.472-.393-3.491-.457-4.93-.457-1.439 0-3.458.064-4.93.457z"
                  ></path>
                </svg>
                {{ $t('open') }}
              </a>
            </div>
          </div>
        </div>
      </div>
       <div v-if="!loading && videos.length === 0" class="mx-auto text-center text-gray-500">
            {{ $t('no_videos_available') }}
      </div>
    </div>
  
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import VideoService from '../../../services/VideoService';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const videos = ref([]);
const searchQuery = ref("");
const selectedVideoIndex = ref(null);
const loading = ref(true);


onMounted(async () => {
   loading.value = true;
  try {
    const response = await VideoService.getAllVideos();
    videos.value = response.data;
  } catch (error) {
    console.error("Error fetching videos:", error);
  } finally {
     loading.value = false;
  }
});

const filteredVideos = computed(() => {
  if (!searchQuery.value) {
    return videos.value;
  }
  const query = searchQuery.value.toLowerCase();
  return videos.value.filter((video) =>
    video.title.toLowerCase().includes(query)
  );
});

const clearSearch = () => {
  searchQuery.value = "";
};

const playVideo = (index) => {
  if (selectedVideoIndex.value === index) {
    selectedVideoIndex.value = null;
  } else {
    selectedVideoIndex.value = index;
  }
};

const getBubbleStyle = (index) => {
  const size = Math.sin(index) * 4 + 8;
  const x = (index * 17) % 100;
  const y = (index * 23) % 100;
  const animationDuration = Math.cos(index) * 2 + 5;
  const delay = index * 0.2;
  const opacity = (Math.sin(index) * 0.2 + 0.4).toFixed(2);
  return {
    width: `${size}rem`,
    height: `${size}rem`,
    left: `${x}%`,
    top: `${y}%`,
    animationDuration: `${animationDuration}s`,
    animationDelay: `-${delay}s`,
    opacity,
    background:
      "linear-gradient(to right, rgba(135, 206, 235, 0.4), rgba(135, 206, 250, 0.2))",
  };
};
</script>

<style scoped>
.bubble {
  position: absolute;
  border-radius: 50%;
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>