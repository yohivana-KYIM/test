<template>
  <header class="bg-[#324C9C] border-b border-gray-100 shadow-subtle">
    <!-- Titre -->
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Title Section -->
        <div class="flex items-center">
          <h1 class="text-lg font-bold tracking-tight text-white">
            {{ $t('welcome') }}
          </h1>
        </div>

        <!-- Right Side Actions -->
        <div class="flex items-center space-x-4">
          <!-- Language Dropdown -->
          <div class="relative">
            <button
              @click="toggleLanguageDropdown"
              aria-haspopup="true"
              aria-expanded="isLanguageDropdownOpen"
              class="flex items-center px-3 py-2 space-x-2 text-black transition-colors duration-200 bg-white border border-gray-300 rounded-md hover:bg-gray-200"
            >
              <span class="text-xl">{{ currentLanguage.icon }}</span>
              <span class="hidden text-sm md:inline">{{
                currentLanguage.name
              }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-gray-500"
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
            </button>

            <!-- Dropdown Menu -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="scale-95 opacity-0"
              enter-to-class="scale-100 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="scale-100 opacity-100"
              leave-to-class="scale-95 opacity-0"
            >
              <div
                v-if="isLanguageDropdownOpen"
                class="absolute right-0 z-50 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg"
              >
                <ul class="py-1">
                  <li
                    v-for="lang in languages"
                    :key="lang.code"
                    @click="changeLanguage(lang.code)"
                    class="px-4 py-2 text-sm text-black transition-colors cursor-pointer hover:bg-gray-200"
                  >
                    <span class="mr-2 text-xl">{{ lang.icon }}</span>
                    {{ lang.name }}
                  </li>
                </ul>
              </div>
            </transition>
          </div>

          <!-- Search Bar -->
          <div class="relative flex-grow max-w-md">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                :placeholder="$t('search')"
                class="w-full py-2 pl-4 pr-10 text-sm text-gray-700 transition-all duration-200 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <!-- Search Icons -->
              <div
                class="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2"
              >
                <button
                  v-if="searchQuery"
                  @click="clearSearch"
                  class="text-gray-400 transition-colors hover:text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
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

                <button
                  @click="performSearch"
                  class="text-gray-600 transition-colors hover:text-blue-600"
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// Language Management
const isLanguageDropdownOpen = ref(false);
const languages = [
  { code: 'fr', name: 'Français', icon: '🇫🇷' },
  { code: 'en', name: 'English', icon: '🇬🇧' },
];

const currentLanguage = computed(() => {
  return languages.find((lang) => lang.code === locale.value);
});

const toggleLanguageDropdown = () => {
  isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value;
};

const changeLanguage = (code) => {
  locale.value = code;
  isLanguageDropdownOpen.value = false;
};

// Search Management
const searchQuery = ref('');

const performSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('Recherche effectuée :', searchQuery.value);
  }
};

const clearSearch = () => {
  searchQuery.value = '';
};
</script>

<style scoped>
/* Transition plus fluide */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
}
</style>
