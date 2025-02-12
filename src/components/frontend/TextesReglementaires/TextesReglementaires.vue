<template>
  <br /><br />
  <h1 class="mb-4 text-4xl font-black md:text-5xl" style="text-align: center;">
    <span
      class="text-transparent bg-clip-text"
      style="background-color: #324c9c; -webkit-background-clip: text; color: transparent;"
    >
      {{ $t('regulatory_texts') }}
    </span>
  </h1>
  <br />

  <section class="max-w-5xl mx-auto px-4 py-8">
    <div
      class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl"
    >
      <div
        @click="toggleSection"
        class="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 p-8 cursor-pointer hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-700 hover:to-blue-900 transition-all duration-300"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="p-2 bg-white/10 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
                />
              </svg>
            </div>
            <h2 class="text-2xl font-semibold text-white tracking-wide">
              {{ $t('decrees') }}
            </h2>
          </div>
          <div
            class="transform transition-transform duration-500 ease-in-out"
            :class="{ 'rotate-180': isOpen }"
          >
            <div
              class="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        v-show="isOpen"
        class="transform transition-all duration-500 ease-in-out"
        :class="{ 'opacity-100 translate-y-0': isOpen, 'opacity-0 -translate-y-4': !isOpen }"
      >
        <div class="p-8">
          <!-- Loading State -->
          <div v-if="loading" class="flex flex-col items-center justify-center h-40">
            <div
              class="w-12 h-12 border-t-4 border-b-4 border-blue-600 rounded-full animate-spin mb-4"
            ></div>
            <p class="text-gray-500 font-medium animate-pulse">{{ $t('loading_decrees') }}</p>
          </div>

          <!-- Empty State -->
          <div
            v-else-if="reglementations.length === 0"
            class="flex flex-col items-center justify-center py-12 text-gray-500"
          >
            <div class="p-6 bg-gray-50 rounded-full mb-6">
              <svg
                class="w-16 h-16 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p class="text-lg font-medium">{{ $t('no_regulations_available') }}</p>
            <p class="text-gray-400 mt-2">{{ $t('check_later') }}</p>
          </div>

          <!-- Reglementation List -->
          <div v-else class="grid gap-4">
            <div
              v-for="(reglementation, index) in reglementations"
              :key="reglementation.id"
              :class="`group animate-fadeIn`"
              :style="{ 'animation-delay': `${index * 100}ms` }"
            >
              <div
                class="flex items-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:scale-[1.01] group-hover:bg-gradient-to-r group-hover:from-gray-50 group-hover:to-white"
              >
                <div class="flex-shrink-0 mr-6">
                  <div
                    class="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300"
                  >
                    <img
                      src="/src/assets/hand.png"
                      alt="Icon"
                      class="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div class="flex-grow">
                  <a
                    v-if="reglementation.document"
                    :href="reglementation.document"
                    target="_blank"
                    class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 text-lg group-hover:translate-x-1 transform inline-block"
                  >
                    {{ reglementation.title }}
                  </a>
                  <span v-else class="text-gray-400 italic text-lg">{{ $t('document_unavailable') }}</span>
                </div>
                <div class="flex-shrink-0 ml-6">
                  <div class="p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ReglementationService from '../../../services/ReglementationService';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const reglementations = ref([]);
const loading = ref(true);
const isOpen = ref(true);

const toggleSection = () => {
  isOpen.value = !isOpen.value;
};

const fetchReglementations = async () => {
  try {
    loading.value = true;
    reglementations.value = await ReglementationService.getAllReglementations();
  } catch (error) {
    console.error('Error fetching reglementations:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchReglementations();
});
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>