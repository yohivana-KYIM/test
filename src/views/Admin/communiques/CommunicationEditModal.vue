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
                           Modifier une communication
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
                    <form @submit.prevent="updateCommunication" class="space-y-6">
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
                                        v-model="communication.title"
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
                                        v-model="communication.description"
                                        rows="4"
                                        class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                    ></textarea>
                                </div>
                                <!-- Communication Date -->
                                <div class="space-y-2">
                                    <label
                                        for="communication_date"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >
                                        Date de communication
                                    </label>
                                    <input
                                        type="date"
                                        id="communication_date"
                                        v-model="communication.communication_date"
                                         class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>
                            <!-- Second Column -->
                             <div class="space-y-6">
                                <!-- Photo Upload -->
                                <div class="space-y-2">
                                    <label
                                        for="photo"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >
                                        Photo
                                    </label>
                                    <input
                                        type="file"
                                        id="photo"
                                        @change="handlePhotoUpload"
                                        accept="image/*"
                                        class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                    />
                                     <div v-if="photoPreview" class="mt-2">
                                        <img
                                            :src="photoPreview"
                                            alt="Photo Preview"
                                            class="max-w-xs rounded-lg"
                                        />
                                    </div>
                                </div>
                                 <!-- Document Upload -->
                                <div class="space-y-2">
                                    <label
                                        for="document"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >
                                        Document
                                    </label>
                                    <input
                                        type="file"
                                        id="document"
                                        @change="handleDocumentUpload"
                                        accept=".pdf, .doc, .docx"
                                         class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                    />
                                    <span v-if="documentName" class="block mt-2 text-sm text-gray-500">{{ documentName }}</span>
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
import { ref, onMounted, watch } from 'vue'
import CommunicationService from '../../../services/CommunicationService'
import Swal from 'sweetalert2'

const props = defineProps({
    communicationId: {
        type: Number,
        required: true
    }
})

const communication = ref({
  title: '',
  description: '',
  photo: null,
  document: null,
  communication_date: null,
})

const photoPreview = ref(null)
const documentName = ref(null)
const emit = defineEmits(['close', 'communicationUpdated'])



const handlePhotoUpload = (event) => {
  const file = event.target.files[0]
    if (file) {
      communication.value.photo = file
      photoPreview.value = URL.createObjectURL(file)
  } else {
      communication.value.photo = null
      photoPreview.value = null
    }
}

const handleDocumentUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        communication.value.document = file;
       documentName.value = file.name;
    } else {
       communication.value.document = null;
       documentName.value = null;
    }
};


watch(() => props.communicationId, async (newId) => {
    if(newId) {
         try {
            const fetchedCommunication = await CommunicationService.getCommunicationById(newId);
             communication.value = {
                title: fetchedCommunication.title,
                description: fetchedCommunication.description,
                communication_date: fetchedCommunication.communication_date,
                photo: null,
                document :null,
             }
             photoPreview.value = fetchedCommunication.photo;
             if(fetchedCommunication.document) {
                documentName.value = fetchedCommunication.document.split('/').pop()
             }

         } catch (error) {
          console.error('Error fetching communication for edit:', error);
           Swal.fire({
                title: 'Error!',
                text:  'Échec du chargement de la communication pour modification.',
                icon: 'error',
              })
        }
    }
}, {immediate: true});


const updateCommunication = async () => {
    try {
           const formData = new FormData()
            formData.append('title', communication.value.title)
            formData.append('description', communication.value.description)
            if (communication.value.photo) {
                formData.append('photo', communication.value.photo)
            }
            if (communication.value.document) {
                formData.append('document', communication.value.document)
            }

            if (communication.value.communication_date) {
              formData.append('communication_date', communication.value.communication_date)
            }


      await CommunicationService.updateCommunication(props.communicationId, formData);


        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Communication mise à jour avec succès',
            showConfirmButton: false,
            timer: 3000,
        })
        emit('communicationUpdated')
        emit('close')
    } catch (error) {
        console.error('Error updating communication:', error);
          let message = "Échec de la mise à jour de la communication, veuillez réessayer."
            if(error.errors) {
            message = error.message;
        }
       Swal.fire({
                title: 'Error!',
                text:  message,
                icon: 'error',
              })
    }
}

</script>