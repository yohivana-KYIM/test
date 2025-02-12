<template>
  <Section class="service">
    <div class="divider">{{ t('services') }}</div>
    <div class="service_group">
      <div class="service_information">
        <img class="star" src="../../../assets/consignation.png" alt="" />
        <hr />
        <span>{{ t('admin_deposits') }}</span>
        <p>
          {{ t('admin_deposits_desc') }}
        </p>
        <button>
          <a>
            <router-link to="/cons_admin" class="li">{{ t('learn_more_cdec') }}..</router-link>
          </a>
        </button>
      </div>
      <div class="service_information">
        <img class="star" src="../../../assets/renovation.png" alt="" />
        <hr />
        <span>{{ t('judicial_deposits') }}</span>
        <p>
          {{ t('judicial_deposits_desc') }}
        </p>
        <button>
          <a>
            <router-link to="/cons_judiciaire" class="li">{{ t('learn_more_cdec') }}..</router-link>
          </a>
        </button>
      </div>
      <div class="service_information">
        <img class="star" src="../../../assets/consultation.png" alt="" />
        <hr />
        <span>{{ t('conventional_deposits') }}</span>
        <p>
          {{ t('conventional_deposits_desc') }}
        </p>
        <button>
          <a>
            <router-link to="/cons_convention" class="li">{{ t('learn_more_cdec') }}..</router-link>
          </a>
        </button>
      </div>
    </div>
  </Section>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>

<style scoped>
@import "../../../css/accueil.css";

.service_information {
  background: rgba(255, 255, 255, 1);
}
</style>
