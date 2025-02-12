<template>
  <div class="publications-container">
    <br />
    <h1 class="mb-4 text-4xl font-black text-center md:text-5xl">
      <span
        class="text-transparent bg-clip-text"
        style="background-color: #324C9C; -webkit-background-clip: text; color: transparent;"
      >
        {{ $t('cdec_publications') }}
      </span>
    </h1>
    <br />
    <section class="actualite">
      <div v-if="loading" class="flex items-center justify-center h-64">
        <div class="w-12 h-12 border-b-4 border-blue-800 rounded-full animate-spin"></div>
      </div>
      <div v-else-if="publications.length === 0" class="py-10 text-center text-gray-500">
        <i class="mb-4 text-6xl text-gray-400 fas fa-folder-open"></i>
        <p>{{ $t('no_publications_available') }}</p>
      </div>
      <div v-else class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="publication in publications"
          :key="publication.id"
          class="item_actualite group"
        >
          <div v-if="publication.photo" class="image-container">
            <img :src="publication.photo" :alt="publication.title" />
          </div>
          <div class="content">
            <h4 class="truncate group-hover:text-blue-800" :title="publication.title">
              {{ publication.title }}
            </h4>
            <span v-if="publication.publication_date">
              <i class="mr-2 text-gray-400 fas fa-calendar-alt"></i>
              {{ $t('published_on') }}: {{ new Date(publication.publication_date).toLocaleDateString() }}
            </span>
            <p v-if="publication.description" class="line-clamp-3">
              {{ publication.description }}
            </p>
            <a
              v-if="publication.document"
              :href="publication.document"
              class="btn-en-savoir-plus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="mr-2 fas fa-external-link-alt"></i> {{ $t('open_document') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PublicationService from "../../../services/PublicationService";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const publications = ref([]);
const loading = ref(true);

const fetchPublications = async () => {
  try {
    loading.value = true;
    publications.value = await PublicationService.getAllPublications();
  } catch (error) {
    console.error("Error fetching publications:", error);
    publications.value = [];
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPublications();
});
</script>

<style scoped>
@import "../../../css/presentation_actualite.css";

.publications-container {
  padding: 1.5rem;
  background-color: #f4f6f8;
}

.actualite {
  max-width: 1200px;
  margin: 0 auto;
}

.item_actualite {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
}

.item_actualite:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

.item_actualite::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: #324C9C;
  transition: opacity 0.3s ease;
  opacity: 0;
}

.item_actualite:hover::before {
  opacity: 1;
}

.image-container {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 1rem;
  transform-origin: center;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.item_actualite:hover .image-container img {
  transform: scale(1.05);
  filter: brightness(0.85);
}

.content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.item_actualite h4 {
  font-weight: 700;
  font-size: 1.3rem;
  color: #324C9C;
  margin-bottom: 0.5rem;
  text-align: left;
  transition: color 0.3s ease;
}

.item_actualite span {
  color: #6b7280;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.item_actualite p {
  color: #374151;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: left;
}

.btn-en-savoir-plus {
  align-self: flex-start;
  padding: 0.6rem 1.2rem;
  background-color: #324C9C;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-en-savoir-plus:hover {
  background-color: #27387f;
  transform: scale(1.05);
}

@media (min-width: 768px) {
  .item_actualite h4 {
    font-size: 1.4rem;
  }

  .btn-en-savoir-plus {
    padding: 0.8rem 1.5rem;
  }
}
</style>