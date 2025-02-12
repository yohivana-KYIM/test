<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm overflow-y-auto h-full w-full z-50">
        <div class="min-h-full py-8 px-4">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-7xl mx-auto">
                <div class="p-6">
                    <!-- Header -->
                    <div class="flex items-center justify-between mb-8">
                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                            Edit Mission
                        </h2>
                        <button
                            @click="$emit('close')"
                            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <!-- Form -->
                    <form @submit.prevent="updateMission" class="space-y-6">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <!-- First Column -->
                            <div class="space-y-6">
                                <!-- Name -->
                                <div class="space-y-2">
                                    <label for="titre" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                        Mission Name
                                    </label>
                                    <input
                                        type="text"
                                        id="titre"
                                        v-model="mission.titre"
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
                                Cancel
                            </button>
                            <button
                                type="submit"
                                class="px-6 py-2.5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                            >
                                Update Mission
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
import MissionService from '../../../services/missionService'
import Swal from 'sweetalert2'

const props = defineProps({
  mission: {
      type: Object,
      required: true
  }
})
const emit = defineEmits(['close', 'missionUpdated']);

const mission = ref({
    titre: ''
})

watch(() => props.mission, (newMission) => {
    if (newMission) {
        mission.value = { ...newMission };
    }
}, { immediate: true });


const updateMission = async () => {
    try {
         await MissionService.updateMission(props.mission.id, mission.value)
         Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Mission updated successfully',
            showConfirmButton: false,
            timer: 3000,
        })
         emit('missionUpdated');
         emit('close')
    } catch (error) {
          console.error('Error updating mission:', error);
        Swal.fire({
            title: "Error!",
            text: "Failed to update the mission, please try again.",
            icon: "error",
        });
    }
};
</script>