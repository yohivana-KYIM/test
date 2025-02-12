<template>
 <div class="min-h-screen bg-gray-50">
    <br/>
    <h1 class="mb-4 text-4xl font-black md:text-5xl" style="text-align: center;">
      <span
        class="text-transparent bg-clip-text"
        style="background-color: #324c9c; -webkit-background-clip: text; color: transparent;"
      >
        {{ $t('our_missions') }}
      </span>
    </h1>
    <br/>
    
    <!-- Container principal avec animation -->
    <div
      class="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300"
    >
      <!-- Section des missions -->
      <div class="p-8 md:p-12">
        <ul class="space-y-6">
          <li
            v-for="(mission, index) in missions"
            :key="mission.id"
            class="transform -translate-x-4 opacity-0"
            :style="{
              animation: `slideIn 0.5s ease-out ${index * 0.1 + 0.3}s forwards`
            }"
          >
            <div class="flex items-start group">
              <!-- Icône point -->
              <div class="flex-shrink-0 w-3 h-3 mt-2 transition-colors duration-300 bg-blue-600 rounded-full group-hover:bg-blue-700"></div>
              
              <!-- Texte de la mission -->
              <p class="ml-6 text-lg text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                {{ mission.titre }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MissionService from '../../../services/missionService';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const missions = ref([]);

const fetchMissions = async () => {
  try {
    missions.value = await MissionService.getAllMissions();
  } catch (error) {
    console.error('Error fetching missions:', error);
  }
};

onMounted(() => {
  fetchMissions();
});
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-1rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>