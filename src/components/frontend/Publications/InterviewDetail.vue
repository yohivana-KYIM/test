<template>
  <div
    class="min-h-screen font-sans text-gray-900 bg-gray-100 opacity-0 animate-fade-in"
  >
    <!-- Hero Section -->
    <header class="relative py-12 bg-white border-b border-gray-200 lg:py-20">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid items-start gap-8 lg:grid-cols-2">
          <div class="space-y-6 lg:sticky lg:top-24">
            <h1
              class="text-3xl font-bold leading-tight tracking-tight text-gray-900 lg:text-4xl"
              style="font-family: 'Poppins', sans-serif"
            >
              {{ interview?.titre }}
            </h1>
            <router-link
              to="/interviews"
              class="inline-flex items-center gap-2 px-2 py-1 text-gray-600 transition-colors rounded-md hover:text-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              <ChevronLeft
                class="w-4 h-4 -translate-x-0.5 group-hover:-translate-x-1 transition-transform"
              />
              <span class="font-medium">Retour aux interviews</span>
            </router-link>
          </div>
          <div class="relative overflow-hidden shadow-lg rounded-xl">
            <div
              style="
                max-height: 550px;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <img
                v-if="interview?.imagePrincipaleUrl"
                :src="interview.imagePrincipaleUrl"
                :alt="interview.titre"
                class="object-cover max-w-full max-h-full"
                @error="setImageError(true)"
              />
            </div>

            <div
              v-if="imageError"
              class="absolute inset-0 flex items-center justify-center text-lg text-white bg-gray-700/90"
            >
              Image non disponible
            </div>
          </div>
        </div>
        <div class="flex flex-wrap gap-3 mt-6">
          <span
            class="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full ring-1 ring-blue-100"
          >
            {{ interview?.source }}
          </span>
          <span
            class="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full ring-1 ring-gray-200"
          >
            {{ interview?.date }}
          </span>
        </div>
      </div>
    </header>

    <!-- Content -->
    <main class="max-w-4xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
      <!-- Article Quote -->
      <div class="mb-16">
        <blockquote
          class="relative p-6 border-l-4 border-blue-400 bg-blue-50 rounded-xl"
        >
          <div
            class="absolute flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full -top-3 -left-3"
          >
            "
          </div>
          <p
            class="text-xl italic leading-relaxed text-gray-700"
            style="font-family: 'Merriweather', serif"
          >
            {{ interview?.description }}
          </p>
        </blockquote>
      </div>

      <!-- Article Content -->
      <div
        class="p-8 space-y-6 transition-shadow bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-lg"
      >
        <h2 class="mb-4 text-2xl font-semibold text-gray-900">
          {{ interview?.details?.introduction }}
        </h2>
        <p
          class="leading-relaxed text-gray-700"
          style="font-family: 'Open Sans', sans-serif; line-height: 1.7"
        >
          {{ interview?.details?.contenu }}
        </p>
      </div>

      <!-- Actions -->
    
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ChevronLeft } from "lucide-vue-next";
import InterviewService from "../../../services/InterviewService";
import { useRoute } from "vue-router";

const route = useRoute();
const interview = ref(null);
const imageError = ref(false);
const loading = ref(false);

onMounted(async () => {
  // Ajout d'une légère animation au chargement du composant.
  setTimeout(() => {
    const element = document.querySelector(".animate-fade-in");
    if (element) {
      element.style.opacity = 1;
    }
  }, 100);

  const slug = route.params.slug; // Récupération du slug de l'URL
  await fetchInterview(slug);
});

const fetchInterview = async (slug) => {
  loading.value = true;
  try {
    const data = await InterviewService.getInterviewBySlug(slug);
    interview.value = data;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'interview :", error);
  } finally {
    loading.value = false;
  }
};

const setImageError = (errorState) => {
  imageError.value = errorState;
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Open+Sans:wght@400;500;700&family=Poppins:wght@400;600&display=swap");

.animate-fade-in {
  transition: opacity 0.3s ease-in-out;
}
</style>
