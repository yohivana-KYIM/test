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
              Modifier le Slide
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
          <form @submit.prevent="updateSlide" class="space-y-6">
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <!-- First Column -->
              <div class="space-y-6">
                <!-- Titre -->
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
                    v-model="slide.title"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                   <div v-if="errors && errors.title" class="text-sm text-red-500">
                      {{ errors.title[0] }}
                    </div>
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
                    v-model="slide.description"
                    rows="4"
                     class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  ></textarea>
                   <div v-if="errors && errors.description" class="text-sm text-red-500">
                       {{ errors.description[0] }}
                     </div>
                </div>
                 <!-- Order -->
                 <div class="space-y-2">
                  <label
                    for="order"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Order
                  </label>
                  <input
                    type="number"
                    id="order"
                    v-model="slide.order"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                 <div v-if="errors && errors.order" class="text-sm text-red-500">
                      {{ errors.order[0] }}
                    </div>
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
                  <div v-if="imagePreview || slide.image" class="mt-2">
                    <img
                         :src="imagePreview || getImageUrl(slide.image)"
                         alt="Image Preview"
                         class="max-w-xs rounded-lg"
                         @error="handleImageError"
                     />
                      <div v-if="errors && errors.image" class="text-sm text-red-500">
                        {{ errors.image[0] }}
                      </div>
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
                Modifier
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SlideService from '../../../services/SlideService'
import Swal from 'sweetalert2'

const props = defineProps({
  slideId: {
    type: Number,
    required: true,
  },
})

const slide = ref({
  title: '',
  description: '',
  image: null,
  order: 0,
})
const imagePreview = ref(null)
const errors = ref(null)

const emit = defineEmits(['close', 'slideUpdated'])

const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        slide.value.image = file
        imagePreview.value = URL.createObjectURL(file)
    } else {
         slide.value.image = null;
        imagePreview.value = null;
    }
}


const handleImageError = (event) => {
    event.target.src = '/placeholder-image.png';
}

const getImageUrl = (path) => {
     if (!path) {
        return '/placeholder-image.png';
    }

    const filename = path.split('/').pop();
    return `/api/images_slides/${filename}`;
}


onMounted(async () => {
  try {
    const data = await SlideService.getSlideById(props.slideId)
    slide.value = { ...data }
  } catch (error) {
     console.error('Error fetching slide data for edit:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
       text: 'Error fetching slide data for edit.',
     });
      emit('close');
  }
})

const updateSlide = async () => {
  try {
    const formData = new FormData()
    formData.append('title', slide.value.title)
    formData.append('description', slide.value.description)
     if (slide.value.order) {
       formData.append('order', slide.value.order);
     }
    if (slide.value.image instanceof File) {
      formData.append('image', slide.value.image)
    }

    await SlideService.updateSlide(props.slideId, formData)

    imagePreview.value = null;
      errors.value = null

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Slide modifié avec succès',
      showConfirmButton: false,
      timer: 3000,
    })
    emit('slideUpdated')
    emit('close')
  } catch (error) {
      console.error('Error updating slide:', error)
     if (error.response && error.response.data && error.response.data.errors) {
          errors.value = error.response.data.errors;
        } else {
             Swal.fire({
               icon: 'error',
                title: 'Oops...',
              text: "Échec de la modification du slide, veuillez réessayer.",
            });
      }
  }
}
</script>