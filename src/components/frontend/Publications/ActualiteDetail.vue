<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-12">
        <!-- Header Section -->
        <div class="space-y-4">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            {{ actualite?.titre }}
          </h1>
          <div class="flex items-center space-x-4">
            <div class="h-1 w-24 bg-blue-600 rounded-full"></div>
            <span class="text-gray-600">
              {{ actualite?.datePublication }}
            </span>
          </div>
        </div>

        <!-- Main Image Section -->
        <div class="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            v-if="actualite?.details?.imagePrincipale"
            :src="actualite.details.imagePrincipale"
            :alt="actualite.titre"
            class="w-full h-auto object-cover rounded-t-lg aspect-square"
            @error="handleImageError"
          />
          <div 
            v-else 
            class="w-full h-[60vh] bg-gray-200 flex items-center justify-center"
          >
            <span class="text-gray-400 text-lg">Aucune image disponible</span>
          </div>
        </div>

        <!-- Gallery Section -->
        <div v-if="actualite?.details?.galleryPhotos?.length" class="space-y-6">
          <h2 class="text-2xl font-semibold text-gray-800">Galerie photos</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(photo, index) in actualite.details.galleryPhotos"
              :key="index"
              class="group relative rounded-xl overflow-hidden shadow-lg"
            >
              <img
                :src="photo"
                :alt="`Photo ${index + 1}`"
                class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                @error="handleImageError"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ActualiteService from "../../../services/ActualiteService";

const route = useRoute();
const actualite = ref(null);
const loading = ref(true);
const imageError = ref(false);

const fetchActualite = async () => {
  try {
    const slug = route.params.slug;
    const response = await ActualiteService.getActualiteBySlug(slug);
    actualite.value = response;
  } catch (error) {
    console.error("Erreur lors du chargement de l'actualité :", error);
  } finally {
    loading.value = false;
  }
};

const handleImageError = (event) => {
  event.target.src = "/default-placeholder.jpg";
};

onMounted(fetchActualite);
</script>