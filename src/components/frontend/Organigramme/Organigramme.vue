<template>
  <br />
  <h1 class="mb-4 text-4xl font-black md:text-5xl" style="text-align: center;">
    <span
      class="text-transparent bg-clip-text"
      style="background-color: #324c9c; -webkit-background-clip: text; color: transparent;"
    >
      {{ $t('organizational_chart_title') }}
    </span>
  </h1>
  <br />
  <div>
    <img src="../../../assets/organigramme_cdec.png" alt="organigramme_cdec" />
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { useMeta } from 'vue-meta'; // Import vue-meta

export default {
  setup() {
    const { t } = useI18n(); // Correct usage inside setup

    // Set up SEO metadata with vue-meta
    useMeta({
      title: t('organizational_chart_title'), // Dynamic title based on translation
      meta: [
        {
          name: 'description',
          content: t('organizational_chart_description') // Dynamic description
        },
        {
          property: 'og:title',
          content: t('organizational_chart_title')
        },
        {
          property: 'og:description',
          content: t('organizational_chart_description')
        },
        {
          property: 'og:image',
          content: '/assets/organigramme_cdec.png' // Set the image path for social media sharing
        }
      ]
    });

    return { t };
  }
};
</script>

<style>
@import "../../../css/lacdec.css";
</style>
