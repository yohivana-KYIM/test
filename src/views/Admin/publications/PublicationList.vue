<template>
  <div class="min-h-screen py-8 bg-gray-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="p-6 mb-6 bg-white rounded-lg shadow-sm">
        <div
          class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
        >
          <div>
            <h2 class="text-3xl font-bold text-gray-900">Publications</h2>
            <p class="mt-1 text-sm text-gray-600">
              Gérez et suivez toutes vos publications en un seul endroit
            </p>
          </div>
          <div class="flex flex-col w-full gap-3 sm:flex-row sm:w-auto">
            <button
              @click="openCreateModal"
              class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-colors duration-200 border border-transparent rounded-lg shadow-sm bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Créer une publication
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center h-64">
        <div
          class="w-12 h-12 border-b-2 rounded-full animate-spin border-primary"
        ></div>
      </div>

      <!-- Empty State -->
      <div
        v-else-if="publications.length === 0"
        class="p-12 text-center bg-white rounded-lg shadow-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 mx-auto text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
        <h3 class="mt-4 text-lg font-medium text-gray-900">
          Aucune publication trouvée
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          Commencez par créer une nouvelle publication.
        </p>
        <button
          @click="openCreateModal"
          class="inline-flex items-center px-4 py-2 mt-6 text-sm font-medium text-white border border-transparent rounded-lg shadow-sm bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Créer une publication
        </button>
      </div>

      <!-- Publication Table -->
      <div v-else class="overflow-hidden bg-white rounded-lg shadow-sm">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Titre
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Description
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Photo
                </th>
                 <th
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Document
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Date de publication
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                v-for="publication in publications"
                :key="publication.id"
                class="hover:bg-gray-50"
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="font-medium text-gray-900">
                    {{ publication.title }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ publication.description }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <img
                    v-if="publication.photo"
                    :src="publication.photo"
                    :alt="publication.title"
                    class="w-16 h-16 object-cover rounded"
                     @error="handleImageError"
                      loading="lazy"
                    />
                     <span v-else class="text-gray-400">Pas de photo</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <a
                    v-if="publication.document"
                    :href="publication.document"
                    target="_blank"
                    class="text-primary hover:text-primary-dark"
                  >
                    Télécharger le document
                  </a>
                  <span v-else class="text-gray-400">Pas de document</span>
                </td>
                 <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ publication.publication_date }}
                  </div>
                </td>
                <td
                  class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                >
                  <div class="flex justify-end gap-2">
                    <button
                      @click="openEditModal(publication)"
                      class="transition-colors duration-200 text-primary hover:text-primary-dark"
                      title="Editer la publication"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button
                      @click="deletePublication(publication)"
                      class="text-red-600 transition-colors duration-200 hover:text-red-900"
                      title="Supprimer la publication"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <PublicationCreateModal
      v-if="isCreateModalOpen"
      @close="closeCreateModal"
      @publicationCreated="fetchPublications"
    />
    <PublicationEditModal
      v-if="isEditModalOpen"
      :publicationId="selectedPublication?.id"
      @close="closeEditModal"
      @publicationUpdated="fetchPublications"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PublicationService from '../../../services/PublicationService'
import Swal from 'sweetalert2'
import PublicationCreateModal from './PublicationCreateModal.vue'
import PublicationEditModal from './PublicationEditModal.vue'

const publications = ref([])
const loading = ref(true)
const isCreateModalOpen = ref(false)
const isEditModalOpen = ref(false)
const selectedPublication = ref(null)

const handleImageError = (event) => {
   event.target.src = '/placeholder-image.png'
}


const fetchPublications = async () => {
  try {
    loading.value = true
    publications.value = await PublicationService.getAllPublications()
  } catch (error) {
    console.error('Error fetching publications:', error)
    Swal.fire({
      title: 'Erreur!',
      text: 'Échec du chargement des publications. Veuillez réessayer.',
      icon: 'error',
    })
  } finally {
    loading.value = false
  }
}


const openCreateModal = () => {
  isCreateModalOpen.value = true
}

const closeCreateModal = () => {
  isCreateModalOpen.value = false
}

const openEditModal = (publication) => {
  selectedPublication.value = publication
  isEditModalOpen.value = true
}

const closeEditModal = () => {
  isEditModalOpen.value = false
  selectedPublication.value = null
}


const deletePublication = async (publication) => {
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Cette action est irréversible!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc2626',
    cancelButtonColor: '#6b7280',
    confirmButtonText: 'Oui, supprimer!',
    cancelButtonText: 'Annuler',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await PublicationService.deletePublication(publication.id)
        await fetchPublications()
        Swal.fire({
          title: 'Supprimé!',
          text: `La publication "${publication.title}" a été supprimée.`,
          icon: 'success',
        })
      } catch (error) {
        Swal.fire({
          title: 'Erreur!',
          text:
            error.message ||
            'Échec de la suppression de la publication. Veuillez réessayer.',
          icon: 'error',
        })
      }
    }
  })
}

onMounted(() => {
  fetchPublications()
})
</script>