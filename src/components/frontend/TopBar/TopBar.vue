<template>
  <header class="bg-[#324C9C] shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Left side - Title -->
        <div class="flex-1 flex items-center">
          <h1 class="text-xl font-semibold text-white">
            {{ $t('welcome') }}
          </h1>
        </div>

        <!-- Right side - Language Selector -->
        <div class="relative">
          <button
            @click="toggleLanguage"
            class="flex items-center space-x-2 bg-white/10 hover:bg-white/20 
                   text-white rounded-lg px-4 py-2 transition-all duration-200"
          >
            <span class="text-xl">{{ currentLanguage.icon }}</span>
            <span class="hidden md:inline">{{ currentLanguage.name }}</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
  { code: 'fr', name: 'Français', icon: '🇫🇷' },
  { code: 'en', name: 'English', icon: '🇬🇧' }
]

const currentLanguage = computed(() => 
  languages.find(lang => lang.code === locale.value)
)

const toggleLanguage = () => {
  // Change à l'autre langue
  const newLang = locale.value === 'fr' ? 'en' : 'fr'
  locale.value = newLang
  localStorage.setItem('locale', newLang)
  window.location.reload()
}
</script>