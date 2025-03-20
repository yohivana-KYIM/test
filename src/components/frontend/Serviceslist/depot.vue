import { useI18n } from 'vue-i18n';

<template>
  <div>
    <br />
    <h1 class="mb-4 text-4xl font-black md:text-5xl text-center">
      <span
        class="text-transparent bg-clip-text"
        style="background-color: #324c9c; -webkit-background-clip: text; color: transparent;"
      >
      {{ $t('title') }}
      </span>
    </h1>
    <br />
    <h3 class="text-center">
      {{ $t('depositDescription') }}
    </h3>
    <br />
    <section class="service_informations">
      <div class="section_service">
        <img src="/src/assets/depot.png" alt="" class="service-image" />
        <div class="presentation_service">
          <div class="mb-8">
            <h3 class="text-2xl font-bold mb-4">{{ $t('what_is_it') }}</h3>
            <p class="text-justify" v-html="$t('definitionText')"></p>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-4">{{ $t('advantages') }}</h3>
            <ul class="space-y-4">
              <li class="text-justify">{{ $t('economic_development') }}</li>
              <li class="text-justify">{{ $t('public_service') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
   
 <section class="section_activite">
    <div class="div_activite">
      <div class="divider text-center text-xl font-bold my-8">{{ $t('categories') }}</div>
      <div class="activities-grid">
        <div
          v-for="i in 8"
          :key="i"
          class="activity-item"
        >
          <span>{{ $t(`activit_${i}`) }}</span>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();


</script>

<style scoped>
@import "../../../css/cons_admin.css";

.activities-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4;
}

.activity-item {
  @apply bg-white shadow-md rounded-lg p-6 border-2 border-blue-500 hover:bg-blue-100 
         transition-all duration-300 min-h-[100px] flex items-center justify-center text-center;
  border-color: #324c9c;
}

.activity-item:hover {
  background-color: #324c9c;
  color: white;
  transform: scale(1.05);
}

.text-justify {
  text-align: justify;
  text-justify: inter-word;
}

.divider {
  position: relative;
  margin: 2rem 0;
  text-align: center;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

@media (max-width: 768px) {
  .divider::before,
  .divider::after {
    width: 15%;
  }
}
</style>
