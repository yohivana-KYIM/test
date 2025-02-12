<template>
  
  
  <br/>
  <h1 class="mb-4 text-4xl font-black md:text-5xl" style="text-align: center;">
    <span
      class="text-transparent bg-clip-text"
      style="background-color: #324c9c; -webkit-background-clip: text; color: transparent;"
    >
      {{ $t('administrative_deposits') }}
    </span>
  </h1>
  <br/>
  <h3  style="text-align: center;">
    {{ $t('admin_deposits_tagline') }}
  </h3> <br/>
  <section class="service_informations">
    <div class="section_service">
      <img src="/src/assets/consignation.png" alt="" />
      <div class="presentation_service">
        <div>
          <h3>{{ $t('what_is_it') }}?</h3>
          <p>
            <b>{{ $t('administrative_deposits') }}</b> {{ $t('admin_deposits_desc') }}
          </p>
        </div>
        <div>
          <h3>{{ $t('what_are_the_advantages') }}?</h3>
          <ul>
            <li>
              <b>{{ $t('securing_funds_assets') }}</b> {{ $t('securing_funds_assets_desc') }}
            </li>
            <li>
              <b>{{ $t('guarantee_execution') }}</b> {{ $t('guarantee_execution_desc') }}
            </li>
            <li>
              <b>{{ $t('reducing_fraud_risks') }}</b> {{ $t('reducing_fraud_risks_desc') }}
            </li>
            <!-- <li>
              <b>{{ $t('encouraging_quick_dispute_resolution') }}</b> {{ $t('encouraging_quick_dispute_resolution_desc') }}
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section_activite">
    <div class="div_activite">
      <div class="divider">{{ $t('our_different_activities') }}</div>
      <div class="list_activite">
        <div><span>{{ $t('guarantees_public_accountants') }}</span></div>
        <div><span>{{ $t('guarantees_public_markets') }}</span></div>
        <div>
          <span
            >{{ $t('guarantees_occupation_admin_housing') }}</span
          >
        </div>
        <div>
          <span>{{ $t('guarantees_public_officials') }}</span>
        </div>
      </div>
      <div class="list_activite">
        <div><span>{{ $t('repatriation_guarantees') }}</span></div>
        <div><span>{{ $t('guarantees_election_candidates') }}</span></div>
        <div>
          <span
            >{{ $t('deposits_personal_contribution') }}</span
          >
        </div>
        <div><span>{{ $t('deposits_timber_harvesting') }}</span></div>
      </div>
      <div class="list_activite">
        <div>
          <span>{{ $t('guarantees_public_officials') }}</span>
        </div>
        <div>
          <span
            >{{ $t('deposits_share_emoluments') }}</span
          >
        </div>
        <div><span>{{ $t('deposits_penal_labor') }}</span></div>
        <div><span>{{ $t('curatorship_funds') }}</span></div>
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
</style>