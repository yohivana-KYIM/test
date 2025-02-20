<template>
  <br />
  <h1 class="mb-4 text-4xl font-black md:text-5xl text-center">
    <span
      class="text-transparent bg-clip-text"
      style="background-color: #324c9c; -webkit-background-clip: text; color: transparent;"
    >
      {{ $t('conventional_deposits') }}
    </span>
  </h1>
  <br />
  <h3 class="text-center">
    {{ $t('conventional_deposits_tagline') }}
  </h3>
  <br />
  <section class="service_informations">
    <div class="section_service">
      <img src="/src/assets/consultation.png" alt="" class="service-image" />
      <div class="presentation_service">
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-3">{{ $t('what_is_it') }}?</h3>
          <p class="text-justify">
            <b>{{ $t('conventional_deposits_bold') }}</b>
            {{ $t('conventional_deposits_desc') }}
          </p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-3">{{ $t('what_are_the_advantages') }}?</h3>
          <ul class="advantages-list">
            <li class="text-justify">
              <b>{{ $t('mutual_agreement') }}</b>
              {{ $t('mutual_agreement_desc') }}
            </li>
            <li class="text-justify">
              <b>{{ $t('risk_prevention') }}</b>
              {{ $t('risk_prevention_desc') }}
            </li>
            <li class="text-justify">
              <b>{{ $t('trusted_third_party') }}</b>
              {{ $t('trusted_third_party_desc') }}
            </li>
            <li class="text-justify">
              <b>{{ $t('simplified_process') }}</b>
              {{ $t('simplified_process_desc') }}
            </li>
            <li class="text-justify">
              <b>{{ $t('time_saving') }}</b>
              {{ $t('time_saving_desc') }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="section_activite">
    <div class="div_activite">
      <div class="divider">{{ $t('our_different_activities') }}</div>
      <div class="list-activites grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
        <div
          v-for="(activity, index) in activities"
          :key="index"
          class="activity-item"
        >
          <span class="activity-text">{{ $t(activity) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
const { t } = useI18n();
const activities = ref([
  'guarantees_water_electricity_companies',
]);
</script>

<style scoped>
@import "../../../css/cons_admin.css";


.advantages-list {
  @apply space-y-4;
}

.advantages-list li {
  @apply mb-6;
}

.list-activites {
  @apply flex flex-wrap justify-center items-stretch;
}

.activity-item {
  @apply bg-white shadow-md rounded-lg p-4 border-2 flex items-center justify-center text-center transition-all duration-300;
  border-color: #324c9c;
  min-height: 120px;
  height: auto;
  width: 100%;
}

.activity-text {
  @apply text-gray-700 text-sm sm:text-base px-2;
  display: block;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  line-height: 1.5;
}

.activity-item:hover {
  @apply transform scale-105;
  background-color: #324c9c;
}

.activity-item:hover .activity-text {
  @apply text-white;
}

.text-justify {
  text-align: justify;
  text-justify: inter-word;
  hyphens: auto;
}

.divider {
  @apply relative my-8 text-center text-xl font-bold;
}


.divider::before {
  @apply left-0;
}

.divider::after {
  @apply right-0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .activity-item {
    padding: 1rem;
    min-height: 100px;
  }
  
  .divider::before,
  .divider::after {
    width: 15%;
  }

  .activity-text {
    font-size: 0.9rem;
    line-height: 1.4;
  }
}

@media (max-width: 640px) {
  .section_service {
    @apply flex-col;
  }
  
  .service-image {
    @apply w-full;
    max-height: 300px;
  }

  .presentation_service {
    @apply text-sm;
  }

  .advantages-list li {
    @apply mb-4;
  }
}

/* Pour garantir la visibilité du texte sur les très petits écrans */
@media (max-width: 480px) {
  .activity-item {
    min-height: 80px;
    padding: 0.75rem;
  }

  .activity-text {
    font-size: 0.85rem;
    line-height: 1.3;
  }
}
</style>