<template>
  <section class="section_dg">
    <div class="divider">{{ $t('ceo_message') }}</div>
    <div class="dg_information">
      <div class="dg_image">
        <img src="../../../assets/dg.png" alt="Directeur Général" />
        <div class="content_dg">
          <!-- <h1>Nom du Président</h1> -->
        </div>
      </div>
      <div class="discours_dg">
        <h2> {{ $t('learn_more_cdec') }}</h2>
        <span>"</span>
        <p>
        {{ $t('ceo_quote') }}
        </p>
        <span>"</span>
        <!-- <button>En savoir plus..</button> -->
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style>
@import "../../../css/accueil.css";


</style>
<script setup>
import { ref, onMounted } from 'vue';

import { useI18n } from 'vue-i18n';

const { t } = useI18n(); // Use 't' for translation function


</script>
