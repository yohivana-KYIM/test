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
              Créer une Interview
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
          <form @submit.prevent="createInterview" class="space-y-6">
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <!-- Première Colonne -->
              <div class="space-y-6">
                <!-- Titre -->
                <div class="space-y-2">
                  <label
                    for="titre"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Titre
                  </label>
                  <input
                    type="text"
                    id="titre"
                    v-model="form.titre"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-colors"
                    required
                  />
                </div>

                <!-- Description -->
                <div class="space-y-2">
                  <label
                    for="description"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    v-model="form.description"
                    rows="3"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-colors"
                    required
                  ></textarea>
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
                    v-model="form.date"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-colors"
                    required
                  />
                </div>

                <!-- Source -->
                <div class="space-y-2">
                  <label
                    for="source"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Source
                  </label>
                  <input
                    type="text"
                    id="source"
                    v-model="form.source"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <!-- Deuxième Colonne -->
              <div class="space-y-6">
                <!-- Image Principale -->
                <div class="space-y-2">
                  <label
                    for="imagePrincipale"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Image Principale
                  </label>
                  <input
                    type="file"
                    id="imagePrincipale"
                    @change="handleImageUpload"
                    accept="image/*"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-colors"
                  />
                  <div v-if="imagePreview" class="mt-2">
                    <img
                      :src="imagePreview"
                      alt="Aperçu de l'image"
                      class="max-w-xs rounded-lg"
                    />
                  </div>
                </div>

                <!-- Introduction -->
                <div class="space-y-2">
                  <label
                    for="introduction"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Introduction
                  </label>
                  <textarea
                    id="introduction"
                    v-model="form.introduction"
                    rows="3"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-colors"
                    required
                  ></textarea>
                </div>

                <!-- Contenu -->
                <div class="space-y-2">
                  <label
                    for="contenu"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Contenu
                  </label>
                  <textarea
                    id="contenu"
                    v-model="form.contenu"
                    rows="6"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-colors"
                    required
                  ></textarea>
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
                class="px-6 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-colors"
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
import InterviewService from '../../../services/InterviewService';
import Swal from 'sweetalert2';

const form = ref({
  titre: '',
  description: '',
  date: '',
  source: '',
  imagePrincipale: null,
  introduction: '',
  contenu: '',
});

const imagePreview = ref(null);
const emit = defineEmits(['close', 'interviewCreated']);

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.imagePrincipale = file;
    imagePreview.value = URL.createObjectURL(file);
  } else {
    form.value.imagePrincipale = null;
    imagePreview.value = null;
  }
};

const createInterview = async () => {
  try {
    const formData = new FormData();
    formData.append('titre', form.value.titre);
    formData.append('description', form.value.description);
    formData.append('date', form.value.date);
    formData.append('source', form.value.source);
    formData.append('introduction', form.value.introduction);
    formData.append('contenu', form.value.contenu);

    if (form.value.imagePrincipale) {
      formData.append('imagePrincipale', form.value.imagePrincipale);
    }

    await InterviewService.createInterview(formData);

    // Réinitialiser le formulaire après la création réussie
    form.value = {
      titre: '',
      description: '',
      date: '',
      source: '',
      imagePrincipale: null,
      introduction: '',
      contenu: '',
    };
    imagePreview.value = null;

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Interview créée avec succès',
      showConfirmButton: false,
      timer: 3000,
    });

    emit('interviewCreated'); // Notifie le composant parent que l'interview a été créée
    emit('close'); // Ferme le modal
  } catch (error) {
    console.error('Error creating interview:', error);
    let message = "Échec de la création de l'interview, veuillez réessayer.";
    if (error.response && error.response.data && error.response.data.errors) {
      message = Object.values(error.response.data.errors).join("<br>");
    } else if (error.message) {
      message = error.message;
    }

    Swal.fire({
      title: 'Error!',
      html: message,
      icon: 'error',
    });
  }
};
</script>