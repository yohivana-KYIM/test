<template>
  <nav>
    <div class="logo">
      <router-link to="/"><img src="../../../assets/cdec.png" alt="" /></router-link>
    </div>
    <div class="toggle">
      <a href="#"><ion-icon name="menu-outline"></ion-icon></a>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/" class="lien">{{ $t('home') }}</router-link>
      </li>
      <li>
        <a href="#" class="lien">{{ $t('cdec') }}</a>
        <ul class="dropdown">
          <li>
            <router-link to="/lacdec" class="lien">{{ $t('presentation') }}</router-link>
          </li>
          <li>
            <router-link to="/missions" class="lien">{{ $t('Missions') }}</router-link>
          </li>
          <li>
            <router-link to="/Gouvernance" class="lien">{{ $t('governance') }}</router-link>
          </li>
          <li>
            <router-link to="/Organigramme" class="lien">{{ $t('organizational_chart') }}</router-link>
          </li>
          <li>
            <router-link to="/textes_reglementaires" class="lien">{{ $t('regulatory_texts') }}</router-link>
          </li>
          <li>
            <router-link to="/partenaires" class="lien">{{ $t('cooperation_partnerships') }}</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a href="#" class="lien">{{ $t('services') }}</a>
        <ul class="dropdown">
          <li>
            <router-link to="/cons_admin" class="lien">{{ $t('admin_deposits') }}</router-link>
          </li>
          <li>
            <router-link to="/cons_judiciaire" class="lien">{{ $t('judicial_deposits') }}</router-link>
          </li>
          <li>
            <router-link to="/cons_convention" class="lien">{{ $t('conventional_deposits') }}</router-link>
          </li>
          <li>
            <router-link to="/depot" class="lien">{{ $t('deposits') }}</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a href="#" class="lien">{{ $t('news') }}</a>
        <ul class="dropdown">
          <li>
            <router-link to="/communique" class="lien">{{ $t('press_releases') }}</router-link>
          </li>
          <li>
            <router-link to="/publications" class="lien">{{ $t('publications') }}</router-link>
          </li>
          <li>
            <router-link to="/Interviews" class="lien">{{ $t('interviews') }}</router-link>
          </li>
          <li>
            <router-link to="/mediatheque" class="lien">{{ $t('media_library') }}</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a class="lien">{{ $t('projects_programs') }}</a>
      </li>
    </ul>
  </nav>
  <section class="flag_cameroun">
    <div></div>
    <div><img class="star" src="../../../assets/star.png" alt="" /></div>
    <div></div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

onMounted(() => {
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");

  toggle?.addEventListener("click", (e) => {
    e.preventDefault();
    menu?.classList.toggle("active");
  });
});
</script>

<style scoped>
@import "../../../css/accueil.css";
</style>
