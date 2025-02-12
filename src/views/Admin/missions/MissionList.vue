<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 class="text-3xl font-bold text-gray-900">Missions</h2>
            <p class="mt-1 text-sm text-gray-600">Manage and monitor all your missions in one place</p>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              @click="openCreateModal"
              class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create Mission
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>

      <!-- Empty State -->
      <div v-else-if="missions.length === 0" class="bg-white rounded-lg shadow-sm p-12 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
        <h3 class="mt-4 text-lg font-medium text-gray-900">No missions found</h3>
        <p class="mt-1 text-sm text-gray-500">Get started by creating a new mission.</p>
        <button
          @click="openCreateModal"
          class="mt-6 inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Create Mission
        </button>
      </div>

      <!-- Mission Table -->
      <div v-else class="bg-white rounded-lg shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
           <tbody class="bg-white divide-y divide-gray-200">
  <tr v-for="mission in missions" :key="mission.id" class="hover:bg-gray-50">
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="font-medium text-gray-900">{{ mission.titre }}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <div class="flex justify-end gap-2">
        <button
          @click="openEditModal(mission)"
          class="text-primary hover:text-primary-dark transition-colors duration-200"
          title="Edit Mission"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
        <button
          @click="deleteMission(mission)"
          class="text-red-600 hover:text-red-900 transition-colors duration-200"
          title="Delete Mission"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
    <MissionCreateModal
      v-if="isCreateModalOpen"
      @close="closeCreateModal"
      @missionCreated="fetchMissions"
    />
    <MissionEditModal
      v-if="isEditModalOpen"
      :mission="selectedMission"
      @close="closeEditModal"
      @missionUpdated="fetchMissions"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MissionService from '../../../services/missionService'
import MissionCreateModal from './MissionCreateModal.vue'
import MissionEditModal from './MissionEditModal.vue'
import Swal from 'sweetalert2'

const missions = ref([])
const loading = ref(true)
const isCreateModalOpen = ref(false)
const isEditModalOpen = ref(false)
const selectedMission = ref(null)

const fetchMissions = async () => {
  try {
    loading.value = true
    missions.value = await MissionService.getAllMissions()
  } catch (error) {
    console.error('Error fetching missions:', error)
        Swal.fire({
      title: 'Error!',
      text: 'Failed to fetch missions. Please try again.',
      icon: 'error'
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

const openEditModal = (mission) => {
  selectedMission.value = mission
  isEditModalOpen.value = true
}

const closeEditModal = () => {
  isEditModalOpen.value = false
  selectedMission.value = null
}

const deleteMission = async (mission) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "This action cannot be undone!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc2626',
    cancelButtonColor: '#6b7280',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel'
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await MissionService.deleteMission(mission.id)
        await fetchMissions()
         Swal.fire({
          title: 'Deleted!',
          text: `Mission "${mission.titre}" has been deleted.`,
          icon: 'success'
        })
      } catch (error) {
            Swal.fire({
          title: 'Error!',
          text: error.message || 'Failed to delete the mission. Please try again.',
          icon: 'error'
        })
      }
    }
  })
}


onMounted(() => {
  fetchMissions()
})
</script>