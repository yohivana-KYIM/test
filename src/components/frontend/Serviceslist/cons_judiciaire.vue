<template>
 
 
  <br/>
  <h1 class="mb-4 text-4xl font-black md:text-5xl" style="text-align: center;">
    <span
      class="text-transparent bg-clip-text"
      style="background-color: #324c9c; -webkit-background-clip: text; color: transparent;"
    >
      {{ $t('judicial_deposits') }}
   </span>
  </h1>
  <br/>
  <h3  style="text-align: center;">
 
    {{ $t('judicial_deposits_tagline') }}
  </h3>
  <br/>
  <section class="service_informations">
    <div class="section_service">
      <img
        src="/src/assets/renovation.png"
        alt="Illustration de la consignation judiciaire"
      />
      <div class="presentation_service">
        <div>
          <h3>{{ $t('what_is_it') }}?</h3>
          <p>
            <b>{{ $t('judicial_deposits_bold') }}</b>
            {{ $t('judicial_deposits_desc') }}
          </p>
        </div>
        <div>
          <h3>{{ $t('what_are_the_advantages') }}?</h3>
          <ul>
            <li>
              <b>{{ $t('protection_against_fraud') }}</b>
              {{ $t('protection_against_fraud_desc') }}
            </li>
            <li>
              <b>{{ $t('neutrality') }}</b>
              {{ $t('neutrality_desc') }}
            </li>
            <li>
              <b>{{ $t('incentive_amicable_settlement') }}</b>
              {{ $t('incentive_amicable_settlement_desc') }}
            </li>
            <li>
              <b>{{ $t('reduction_financial_risks') }}</b>
              {{ $t('reduction_financial_risks_desc') }}
            </li>
            <li>
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
      <div class="list_activite">
        <div>
          <span>{{ $t('deposits_following_enforceable_judgment') }}</span>
        </div>
        <div>
          <span>{{ $t('deposits_following_provisional_enforcement') }}</span>
        </div>
        <div>
          <span>{{ $t('guarantees_public_officials') }}</span>
        </div>
        <div><span>{{ $t('repatriation_guarantees') }}</span></div>
      </div>
      <div class="list_activite">
        <div><span>{{ $t('guarantees_election_candidates') }}</span></div>
        <div><span>{{ $t('funds_placed_escrow') }}</span></div>
        <div>
          <span>{{ $t('funds_from_seizure_sales') }}</span>
        </div>
        <div><span>{{ $t('funds_registry') }}</span></div>
      </div>
      <div class="list_activite">
        <div><span>{{ $t('deposits_penal_labor') }}</span></div>
        <div><span>{{ $t('curatorship_funds') }}</span></div>
        <div>
          <span>{{ $t('funds_unavailable_investigation') }}</span>
        </div>
        <div>
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

/* Ajoutez ici vos styles spécifiques si nécessaires */
</style>