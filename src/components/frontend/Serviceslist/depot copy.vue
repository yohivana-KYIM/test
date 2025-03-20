<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900 overflow-x-hidden">
    <div class="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <!-- Header Section -->
      <header class="text-center space-y-8">
        <div class="relative inline-block mx-auto">
          <h1 class="text-5xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 relative z-10">
            {{ $t('title') }}
          </h1>
        </div>
        <p class="max-w-2xl mx-auto text-xl text-gray-600 font-medium animate-fade-in-up">
          {{ $t('depositDescription') }}
        </p>
      </header>

      <!-- Definition Section -->
      <section class="animate-slide-in-up">
        <div class="divider text-center text-xl font-bold my-8">{{ $t('definitionTitle') }}</div>
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 transform transition-all hover:scale-[1.01] group">
            <div class="flex items-center space-x-6">
              <div className="bg-indigo-100 p-4 rounded-full shadow-md animate-bounce-slow group-hover:rotate-6 transition-transform">
                <DocumentIcon class="w-10 h-10 text-indigo-600" />
              </div>
              <p class="text-lg text-gray-800 italic leading-relaxed flex-1">
                {{ $t('definitionText') }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Deposit Types Section -->
      <section class="animate-slide-in-up">
        <div class="divider text-center text-xl font-bold my-8">{{ $t('depositTypesTitle') }}</div>
        <div class="max-w-5xl mx-auto">
          <div class="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 transform transition-all hover:scale-[1.01]">
            <div class="grid md:grid-cols-3 gap-6">
              <div
                v-for="(type, key) in depositTypes"
                :key="key"
                class="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl hover:bg-indigo-50 transition-all group"
              >
                <div class="bg-indigo-100 p-3 rounded-full">
                  <FolderIcon class="w-6 h-6 text-indigo-600 group-hover:rotate-12 transition-transform" />
                </div>
                <span class="text-gray-800 font-semibold group-hover:text-indigo-700 transition-colors">
                  {{ $t('depositTypes.' + key) }}
                </span>
              </div>
            </div>
            <div class="mt-8 text-center">
              <p class="text-gray-500 italic max-w-2xl mx-auto">
                {{ $t('depositTypesDescription') }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Advantages Section -->
      <section class="animate-slide-in-up">
        <div class="divider text-center text-xl font-bold my-8">{{ $t('advantagesTitle') }}</div>
        <div class="max-w-6xl mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-8">
            <div
              v-for="(advantage, index) in advantages"
              :key="index"
              class="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl group relative overflow-hidden"
            >
              <div class="absolute inset-0 opacity-10 bg-gradient-to-br from-transparent to-indigo-100 group-hover:opacity-20 transition-opacity"></div>

              <div class="relative z-10">
                <div class="flex items-center mb-6">
                  <div
                    :class="[
                      advantage.iconBgClass,
                      'p-5 rounded-2xl mr-6 transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-md'
                    ]"
                  >
                    <component
                      :is="advantage.icon"
                      class="w-10 h-10 text-white"
                    />
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {{ $t('advantagesList.' + advantage.titleKey + 'Title') }}
                  </h3>
                </div>

                <p class="text-gray-700 text-lg leading-relaxed mb-6">
                  {{ $t('advantagesList.' + advantage.titleKey + 'Description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n';

// Custom SVG Icons
const SparklesIcon = defineComponent({
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  `
})

const DocumentIcon = defineComponent({
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  `
})

const FolderIcon = defineComponent({
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  `
})

const GrowthIcon = defineComponent({
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l2-2m-4 5l-2 2m6-4l2-2" />
    </svg>
  `
})

const ShieldIcon = defineComponent({
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  `
})

export default defineComponent({
  name: 'CdecDepositsPage',
  components: {
    SparklesIcon,
    DocumentIcon,
    FolderIcon,
    GrowthIcon,
    ShieldIcon
  },
  setup() {
    const { t } = useI18n(); // Use i18n inside setup
    return { t }; // Return the translation function
  },
  data() {
    return {
       depositTypes: {
        auxiliairesJustice: 'Fonds des auxiliaires de justice',
        notariaux: 'Dépôts notariaux',
        comptesInactifs: 'Comptes bancaires inactifs',
        contrepartie: 'Fonds de contrepartie',
        expropriation: 'Indemnisations d\'expropriation',
        liquidationEntreprises: 'Liquidation d\'entreprises',
        fondsJudiciaires: 'Fonds judiciaires'
      },
      advantages: [
        {
          titleKey: 'economique',
          icon: GrowthIcon,
          iconBgClass: 'bg-blue-500'
        },
        {
          titleKey: 'public',
          icon: ShieldIcon,
          iconBgClass: 'bg-green-500'
        }
      ]
    }
  }
})
</script>

<style scoped>
/* Custom Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceSlowKeyframe {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes pulseSlow {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Animation Classes */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-slide-in-up {
  animation: slideInUp 0.8s ease-out;
}

.animate-bounce-slow {
  animation: bounceSlowKeyframe 3s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulseSlow 2s ease-in-out infinite;
}

/* Responsive Typography */
@media (max-width: 640px) {
  .text-5xl {
    font-size: 2.5rem;
  }
}
</style>