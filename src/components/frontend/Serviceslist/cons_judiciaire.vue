<template>
  <br />
  <h1 class="mb-4 text-4xl font-black md:text-5xl text-center">
    <span
      class="text-transparent bg-clip-text"
      style="background-color: #324c9c; -webkit-background-clip: text; color: transparent;"
    >
      {{ $t('judicial_deposits') }}
    </span>
  </h1>
  <br />
  <h3 class="text-center text-xl font-semibold text-gray-700">
    {{ $t('judicial_deposits_tagline') }}
  </h3>
  <br />
  <section class="service_informations">
    <div class="section_service">
      <img
        src="/src/assets/renovation.png"
        alt="Illustration de la consignation judiciaire"
        class="service-image"
      />
      <div class="presentation_service">
        <div class="mb-8">
          <h3 class="text-2xl font-bold mb-4">{{ $t('what_is_it') }}?</h3>
          <p class="text-justify">
            <b>{{ $t('judicial_deposits_bold') }}</b>
            {{ $t('judicial_deposits_desc') }}
          </p>
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-4">{{ $t('what_are_the_advantages') }}?</h3>
          <ul class="space-y-4">
            <li class="text-justify">
              <b>{{ $t('protection_against_fraud') }}</b>
              {{ $t('protection_against_fraud_desc') }}
            </li>
            <li class="text-justify">
              <b>{{ $t('neutrality') }}</b>
              {{ $t('neutrality_desc') }}
            </li>
            <li class="text-justify">
              <b>{{ $t('incentive_amicable_settlement') }}</b>
              {{ $t('incentive_amicable_settlement_desc') }}
            </li>
            <li class="text-justify">
              <b>{{ $t('reduction_financial_risks') }}</b>
              {{ $t('reduction_financial_risks_desc') }}
            </li>
            <li class="text-justify">
              <b>{{ $t('clarity_transactions') }}</b>
              {{ $t('clarity_transactions_desc') }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="section_activite">
    <div class="div_activite">
      <div class="divider">{{ $t('our_different_activities') }}</div>
      <div class="activities-grid">
        <div class="activity-item">
          <span>{{ $t('deposits_following_enforceable_judgment') }}</span>
        </div>
        <div class="activity-item">
          <span>{{ $t('deposits_following_provisional_enforcement') }}</span>
        </div>
        <div class="activity-item">
          <span>{{ $t('guarantees_public_officials') }}</span>
        </div>
        <div class="activity-item">
          <span>{{ $t('repatriation_guarantees') }}</span>
        </div>
        <div class="activity-item">
          <span>{{ $t('guarantees_election_candidates') }}</span>
        </div>
        <div class="activity-item">
          <span>{{ $t('funds_placed_escrow') }}</span>
        </div>
        <div class="activity-item">
          <span>{{ $t('funds_from_seizure_sales') }}</span>
        </div>
        <div class="activity-item">
          <span>{{ $t('funds_registry') }}</span>
        </div>
        <div class="activity-item">
          <span>{{ $t('deposits_penal_labor') }}</span>
        </div>
        <div class="activity-item">
          <span>{{ $t('curatorship_funds') }}</span>
        </div>
        <div class="activity-item">
          <span>{{ $t('funds_unavailable_investigation') }}</span>
        </div>
        <div class="activity-item">
          <span>{{ $t('withholdings_following_seizures') }}</span>
        </div>
      </div>
    </div>
  </section>
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
  @apply bg-white shadow-md rounded-lg p-6 border-2 hover:bg-blue-100 
         transition-all duration-300 min-h-[120px] flex items-center justify-center text-center;
  border-color: #324c9c;
}

.activity-item:hover {
  background-color: #324c9c;
  color: white;
  transform: scale(1.05);
}

.activity-item span {
  @apply text-sm md:text-base;
}

.text-justify {
  text-align: justify;
  text-justify: inter-word;
}

.divider {
  @apply relative my-8 text-center text-xl font-bold;
  position: relative;
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
  
  .activity-item {
    min-height: 100px;
  }
}


</style>