<template>

  <div class="communications-container bg-gradient-to-br from-blue-50 to-white">
    <h1 class="max-w-4xl mx-auto mb-8 text-4xl font-black text-center md:text-5xl">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
        {{ $t('press_releases_cdec') }}
      </span>
    </h1>

    <section class="max-w-6xl px-4 mx-auto actualite">
      <div v-if="loading" class="flex items-center justify-center h-64">
        <div class="w-16 h-16 border-4 rounded-full border-t-blue-800 border-r-blue-800 animate-spin"></div>
      </div>

      <div v-else-if="communications.length === 0" class="py-10 space-y-4 text-center text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 005.656 0M9 12a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2v4a2 2 0 01-2 2m-6 0a2 2 0 002 2h6a2 2 0 002-2m-6 0V8a2 2 0 012-2h6a2 2 0 012 2v4a2 2 0 01-2 2" />
        </svg>
        <p>{{ $t('no_press_releases_available') }}</p>
      </div>

      <div v-else class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="communication in communications"
          :key="communication.id"
          class="transition-all duration-300 transform item_actualite group hover:-translate-y-2 hover:shadow-xl"
        >
          <div v-if="communication.photo" class="relative overflow-hidden image-container">
            <img
              :src="communication.photo"
              :alt="communication.title"
              @error="handleImageError"
              loading="lazy"
              class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute inset-0 transition-opacity duration-300 bg-blue-900 opacity-0 group-hover:opacity-20"></div>
          </div>
          <div class="p-5 space-y-3 content">
            <p
              class="text-xl font-bold text-blue-900 transition-colors duration-300 group-hover:text-blue-700"
              :title="communication.title"
            >
              {{ communication.title }}
            </p>
            <div class="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h1z" clip-rule="evenodd" />
              </svg>
              {{ $t('published_on') }}: {{ new Date(communication.communication_date).toLocaleDateString() }}
            </div>
            <p v-if="communication.description" class="text-gray-700 line-clamp-3">
              {{ communication.description }}
            </p>
            <a
              v-if="communication.document"
              :href="communication.document"
              class="inline-block px-4 py-2 mt-2 text-white transition-colors duration-300 transform bg-blue-900 rounded-lg hover:bg-blue-800 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-5 h-5 mr-2 -mt-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              {{ $t('open_document') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CommunicationService from '../../../services/CommunicationService';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const communications = ref([]);
const loading = ref(true);

const handleImageError = (event) => {
  event.target.src = '/placeholder-image.png';
};

const fetchCommunications = async () => {
  try {
    loading.value = true;
    communications.value = await CommunicationService.getAllCommunications();
  } catch (error) {
    console.error("Error fetching communications:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchCommunications();
});
</script>