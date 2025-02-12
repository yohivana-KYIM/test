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
              Modifier une Interview
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
          <form @submit.prevent="updateInterview" class="space-y-6">
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div class="space-y-6">
                <div class="space-y-2">
                  <label for="titre" class="block text-sm font-medium">Titre</label>
                  <input type="text" id="titre" v-model="form.titre" class="input" required />
                </div>

                <div class="space-y-2">
                  <label for="description" class="block text-sm font-medium">Description</label>
                  <textarea id="description" v-model="form.description" rows="3" class="input" required></textarea>
                </div>

                <div class="space-y-2">
                  <label for="date" class="block text-sm font-medium">Date</label>
                  <input type="date" id="date" v-model="form.date" class="input" required />
                </div>

                <div class="space-y-2">
                  <label for="source" class="block text-sm font-medium">Source</label>
                  <input type="text" id="source" v-model="form.source" class="input" required />
                </div>
              </div>

              <div class="space-y-6">
                <div class="space-y-2">
                  <label for="imagePrincipale" class="block text-sm font-medium">Image Principale</label>
                  <input type="file" id="imagePrincipale" @change="handleImageUpload" accept="image/*" class="input" />
                  <div v-if="imagePreview" class="mt-2">
                    <img :src="imagePreview" alt="Aperçu de l'image" class="max-w-xs rounded-lg" />
                  </div>
                </div>

                <div class="space-y-2">
                  <label for="introduction" class="block text-sm font-medium">Introduction</label>
                  <textarea id="introduction" v-model="form.introduction" rows="3" class="input" required></textarea>
                </div>

                <div class="space-y-2">
                  <label for="contenu" class="block text-sm font-medium">Contenu</label>
                  <textarea id="contenu" v-model="form.contenu" rows="6" class="input" required></textarea>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-end gap-4 mt-8">
              <button type="button" @click="$emit('close')" class="btn-cancel">Annuler</button>
              <button type="submit" class="btn-submit">Modifier</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import InterviewService from '../../../services/InterviewService';
import Swal from 'sweetalert2';

const props = defineProps({ interviewId: Number });
const emit = defineEmits(['close', 'interviewUpdated']);

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

onMounted(async () => {
  try {
    const data = await InterviewService.getInterviewBySlug(props.interviewId);
    if (data) {
      form.value = {
        titre: data.titre || '',
        description: data.description || '',
        date: data.date || '',
        source: data.source || '',
        imagePrincipale: null,
        introduction: data.introduction || '',
        contenu: data.contenu || '',
      };
      imagePreview.value = data.imagePrincipale;
    }
  } catch (error) {
    console.error('Error fetching interview:', error);
  }
});

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.imagePrincipale = file;
    imagePreview.value = URL.createObjectURL(file);
  }
};

const updateInterview = async () => {
  try {
    const formData = new FormData();
    Object.keys(form.value).forEach((key) => {
      if (form.value[key] !== null && form.value[key] !== '') {
        formData.append(key, form.value[key]);
      }
    });

    await InterviewService.updateInterview(props.interviewId, formData);

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Interview modifiée avec succès',
      showConfirmButton: false,
      timer: 3000,
    });

    emit('interviewUpdated');
    emit('close');
  } catch (error) {
    console.error('Error updating interview:', error);
    Swal.fire({ title: 'Erreur!', text: "Échec de la modification de l'interview.", icon: 'error' });
  }
};
</script>

<style scoped>
.input {
  @apply w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-colors;
}
.btn-cancel {
  @apply px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors;
}
.btn-submit {
  @apply px-6 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-colors;
}
</style>
