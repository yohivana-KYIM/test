<template>
  <div
    class="fixed inset-0 bg-black/50 backdrop-blur-sm overflow-y-auto h-full w-full z-50"
  >
    <div class="min-h-full py-8 px-4">
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-7xl mx-auto"
      >
        <div class="p-6">
          <!-- Header -->
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              Créer un Sponsor
            </h2>
            <button
              @click="$emit('close')"
              class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-500"
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
          <form @submit.prevent="createSponsor" class="space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- First Column -->
              <div class="space-y-6">
                <!-- Nom -->
                <div class="space-y-2">
                  <label
                    for="nom"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    v-model="sponsor.nom"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
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
                    v-model="sponsor.description"
                    rows="4"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  ></textarea>
                </div>
                 <!-- Image Upload -->
                <div class="space-y-2">
                    <label
                      for="image"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                        Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      @change="handleImageUpload"
                      accept="image/*"
                      class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                     <div v-if="imagePreview" class="mt-2">
                      <img
                        :src="imagePreview"
                        alt="Image Preview"
                        class="max-w-xs rounded-lg"
                      />
                    </div>
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
import { ref } from 'vue'
import SponsorService from '../../../services/SponsorService'
import Swal from 'sweetalert2'

const sponsor = ref({
  nom: '',
  description: '',
  image: null,
})
const imagePreview = ref(null)

const emit = defineEmits(['close', 'sponsorCreated'])

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    sponsor.value.image = file
    imagePreview.value = URL.createObjectURL(file)
  } else {
    sponsor.value.image = null
    imagePreview.value = null
  }
}

const createSponsor = async () => {
  try {
    const formData = new FormData()
    formData.append('nom', sponsor.value.nom)
    formData.append('description', sponsor.value.description)
     if (sponsor.value.image) {
        formData.append('image', sponsor.value.image);
    }


    await SponsorService.createSponsor(formData)

    sponsor.value = {
      nom: '',
      description: '',
      image: null,
    }
    imagePreview.value = null

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Sponsor créé avec succès',
      showConfirmButton: false,
      timer: 3000,
    })
    emit('sponsorCreated')
    emit('close')
  } catch (error) {
       console.error('Error creating sponsor:', error)
        let message = "Échec de la création du sponsor, veuillez réessayer."
        if(error.errors) {
            message = error.message;
        }
    Swal.fire({
      title: 'Error!',
      text: message,
      icon: 'error',
    })
  }
}
</script>