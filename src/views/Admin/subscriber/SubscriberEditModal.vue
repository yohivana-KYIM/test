<template>
  <div class="fixed inset-0 z-50 w-full h-full overflow-y-auto bg-black/50 backdrop-blur-sm">
    <div class="min-h-full px-4 py-8">
      <div class="mx-auto bg-white shadow-2xl dark:bg-gray-800 rounded-xl max-w-7xl">
        <div class="p-6">
          <!-- Header -->
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              Modifier l'Abonné
            </h2>
            <button
              @click="$emit('close')"
              class="p-2 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Form -->
          <form @submit.prevent="updateSubscriber" class="space-y-6">
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <!-- First Column -->
              <div class="space-y-6">
                <!-- Email -->
                <div class="space-y-2">
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    v-model="subscriber.email"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    required
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
                Mettre à jour l'Abonné
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
import SubscriberService from '../../../services/SubscriberService'; // Ajustez le chemin
import Swal from 'sweetalert2'

const subscriber = ref({
  id: null,
  email: '',
})

const emit = defineEmits(['close', 'subscriberUpdated'])
const props = defineProps({
  subscriber: {
    type: Object,
    required: true,
  }
})

onMounted(() => {
  if (props.subscriber) {
    subscriber.value = { ...props.subscriber }
  }
})

const updateSubscriber = async () => {
  try {
    await SubscriberService.updateSubscriber(subscriber.value.id, subscriber.value)
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Abonné mis à jour avec succès',
      showConfirmButton: false,
      timer: 3000,
    })
    emit('subscriberUpdated')
    emit('close')
  } catch (error) {
    console.error('Error updating subscriber:', error)
    Swal.fire({
      title: "Erreur!",
      text: error.response?.data?.errors?.email?.[0] || "Impossible de mettre à jour l'abonné, veuillez réessayer.",
      icon: "error",
    })
  }
}
</script>