<template>
  <div
    class="fixed inset-0 z-50 w-full h-full overflow-y-auto bg-black/50 backdrop-blur-sm"
  >
    <div class="min-h-full px-4 py-8">
      <div
        class="mx-auto bg-white shadow-2xl dark:bg-gray-800 rounded-xl max-w-7xl"
      >
        <div class="p-6">
          <!-- Header -->
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              Ajouter une Vidéo
            </h2>
            <button
              @click="$emit('close')"
              class="p-2 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Form -->
          <form @submit.prevent="createVideo" class="space-y-6">
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <!-- First Column -->
              <div class="space-y-6">
                <!-- Title -->
                <div class="space-y-2">
                  <label
                    for="title"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Titre
                  </label>
                  <input
                    type="text"
                    id="title"
                    v-model="video.title"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    required
                  />
                </div>
                <!-- Youtube ID -->
                <div class="space-y-2">
                  <label
                    for="youtube_id"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Youtube ID
                  </label>
                  <input
                    type="text"
                    id="youtube_id"
                    v-model="video.youtube_id"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    required
                  />
                </div>

                <!-- Date -->
                <div class="space-y-2">
                  <label
                    for="date"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    v-model="video.date"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
              </div>
            </div>
            <!-- Action Buttons -->
            <div class="flex justify-end gap-4 mt-8">
              <button
                type="button"
                @click="$emit('close')"
                class="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                class="px-6 py-2.5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              >
                Créer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VideoService from '../../../services/VideoService';
import Swal from 'sweetalert2';

const video = ref({
  title: '',
  youtube_id: '',
  date: null,
});

const emit = defineEmits(['close', 'videoCreated']);

const createVideo = async () => {
  try {
    await VideoService.createVideo(video.value);

    video.value = {
      title: '',
      youtube_id: '',
      date: null,
    };

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Vidéo ajoutée avec succès',
      showConfirmButton: false,
      timer: 3000,
    });

    emit('videoCreated');
    emit('close');
  } catch (error) {
    console.error('Error creating video:', error);
     let message = "Échec de l'ajout de la vidéo, veuillez réessayer."
        if(error.errors) {
            message = error.message;
        }
        Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
    })
  }
};
</script>