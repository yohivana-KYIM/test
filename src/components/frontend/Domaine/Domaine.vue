<template>
  <section class="section_domaine">
    <div class="divider"> {{ $t('activity_domains') }}</div>
    <div class="domaine_information">
      <div class="cdec_section">
        <div class="cdec_description">
          <h2>{{ $t('cdec') }}</h2>
          <p>
            {{ $t('cdec_description') }}
          </p>
        </div>
      </div>
      <div class="domaine_section">
        <div class="list_domaine">
          <div v-for="domaine in domaines" :key="domaine.id" class="domaine_item">
            {{ $t(domaine.nom) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DomaineService from "../../../services/DomaineService";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const domaines = ref([]);

const fetchDomaines = async () => {
  try {
    const response = await DomaineService.getAllDomaines();
    domaines.value = response.data; // Assurez-vous que response.data contient bien un tableau
  } catch (error) {
    console.error("Erreur lors de la récupération des domaines :", error);
  }
};

onMounted(fetchDomaines);
</script>

<style scoped>
.section_domaine {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.domaine_information {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  flex-direction: column; /* Ajout pour responsivité */
}

.cdec_section {
  width: 100%; /* Ajout pour responsivité */
  padding: 1em;   /* Ajout pour responsivité */
  box-sizing: border-box; /* Ajout pour responsivité */
}

.cdec_description {
  /* Ajoutez des styles ici si vous en avez besoin */
}

.domaine_section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; /* Modification pour responsivité */
  padding: 2em;
  box-sizing: border-box; /* Ajout pour responsivité */
}

.list_domaine {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centrer les éléments */
}

.domaine_item {
  width: 200px;
  padding: 1em;
  margin: 10px;
  font-size: 1.1em;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  background-color: transparent;
  border: 2px solid rgba(220, 165, 16, 1);
  transition: 0.3s all;
}

.domaine_item:hover {
  background-color: #fff;
  color: rgba(50, 76, 156, 1);
  border: 2px solid rgba(50, 76, 156, 1);
}

/* Media query pour les écrans plus larges */
@media (min-width: 768px) {
  .domaine_information {
    flex-direction: row;
  }

  .cdec_section {
    width: 50%;
  }

  .domaine_section {
    width: 50%;
  }
}
</style>