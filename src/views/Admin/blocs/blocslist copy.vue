<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-50"
  >
    <div class="w-full max-w-5xl px-4 py-6 mx-auto">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold text-gray-800">Gestion des contenus</h1>
        <button
          @click="openModal('create')"
          class="flex items-center px-4 py-2 text-white transition duration-200 rounded-lg shadow-md bg-emerald-600 hover:bg-emerald-700"
        >
          <PlusCircleIcon class="w-5 h-5 mr-2" />
          Nouveau contenu
        </button>
      </div>
      <!-- Zone de recherche et filtres -->
      <div class="p-6 mb-6 bg-white rounded-lg shadow-sm">
        <div class="flex flex-col gap-4 md:flex-row">
          <div class="flex-1">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Rechercher un ..."
                class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                @input="handleSearch"
              />
              <MagnifyingGlassIcon
                class="absolute w-5 h-5 text-gray-400 left-3 top-3"
              />
            </div>
          </div>
          <div>
            <select
              v-model="selectedType"
              @change="handleTypeFilter"
              class="px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="">Tous les types</option>
              <option value="actualite">Actualité</option>
              <option value="publication">Publication</option>
              <option value="communique">Communiqué</option>
              <option value="interview">Interview</option>
              <option value="mediatheque">Médiathèque</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Data Table -->
      <div
        class="overflow-hidden bg-white border border-gray-200 shadow-md rounded-2xl"
      >
        <EasyDataTable
          :headers="headers"
          :items="filteredContents"
          :loading="loading"
          :pagination="{ enabled: true, itemsPerPage: 10 }"
          class="customize-table"
        >
          <!-- Type Column Template -->
          <template #item-type="{ type }">
            <span
              class="px-2 py-1 text-xs font-medium rounded-full"
              :class="{
                'bg-emerald-100 text-emerald-700': type === 'actualite',
                'bg-purple-100 text-purple-700': type === 'publication',
                'bg-amber-100 text-amber-700': type === 'communique',
                'bg-sky-100 text-sky-700': type === 'interview',
                'bg-rose-100 text-rose-700': type === 'mediatheque',
              }"
            >
              {{ type.charAt(0).toUpperCase() + type.slice(1) }}
            </span>
          </template>

          <!-- Description Column Template -->
          <template #item-description="{ Description }">
            <div
              class="max-w-xs truncate description-tooltip"
              :title="Description"
            >
              {{ Description }}
            </div>
          </template>

          <!-- Image Column Template -->
          <template #item-image="{ item }">
            <div v-if="item" class="w-12 h-12 overflow-hidden rounded-full">
              <img
                v-if="item.image"
                :src="item.image"
                alt="Image"
                class="object-cover w-full h-full"
              />
              <div
                v-else
                class="flex items-center justify-center w-full h-full bg-gray-200"
              >
                <span class="text-gray-500">image</span>
              </div>
            </div>
            <div
              v-else
              class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full"
            >
              <span class="text-gray-500">image</span>
            </div>
          </template>

          <!-- Video Column Template -->
          <template #item-video="{ video }">
            <a
              v-if="video"
              :href="video"
              target="_blank"
              class="text-blue-500 underline"
            >
              Voir la vidéo
            </a>
          </template>

          <!-- Actions Column Template -->
          <template #item-actions="{ item }">
            <div class="flex justify-center space-x-2">
              <button
                @click="openModal('edit', item)"
                class="p-1 text-gray-600 transition-colors hover:text-emerald-600"
                title="Modifier"
              >
                <PencilSquareIcon class="w-5 h-5" />
              </button>
              <button
                @click="confirmDelete(item)"
                class="p-1 text-gray-600 transition-colors hover:text-red-600"
                title="Supprimer"
              >
                <TrashIcon class="w-5 h-5" />
              </button>
            </div>
          </template>
        </EasyDataTable>
      </div>
    </div>

    <!-- Create/Edit Modal -->
    <TransitionRoot appear :show="isModalOpen" as="template">
      <Dialog
        as="div"
        @close="closeModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      >
        <DialogPanel
          class="w-full max-w-lg p-6 transition-all transform bg-white shadow-lg rounded-2xl"
        >
          <DialogTitle class="text-lg font-semibold text-gray-900">
            {{
              modalMode === "create" ? "Nouveau contenu" : "Modifier le contenu"
            }}
          </DialogTitle>
          <form @submit.prevent="handleSubmit" class="mt-4 space-y-4">
            <!-- Title Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Titre
              </label>
              <input
                v-model.trim="formData.titre"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
              <p v-if="formErrors.titre" class="mt-1 text-sm text-red-600">
                {{ formErrors.titre }}
              </p>
            </div>

            <!-- Description Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                v-model.trim="formData.Description"
                rows="3"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              ></textarea>
              <p
                v-if="formErrors.Description"
                class="mt-1 text-sm text-red-600"
              >
                {{ formErrors.Description }}
              </p>
            </div>

            <!-- Image Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                @change="handleImageUpload"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
              <img
                v-if="imagePreview"
                :src="imagePreview"
                alt="Preview"
                class="h-20 mt-2 rounded-md"
              />
              <p v-if="formErrors.image" class="mt-1 text-sm text-red-600">
                {{ formErrors.image }}
              </p>
            </div>

            <!-- Video Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Vidéo
              </label>
              <input
                v-model.trim="formData.video"
                type="url"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <!-- Type Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Type de contenu
              </label>
              <select
                v-model="formData.type"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Sélectionnez un type</option>
                <option value="actualite">Actualité</option>
                <option value="publication">Publication</option>
                <option value="communique">Communiqué</option>
                <option value="interview">Interview</option>
                <option value="mediatheque">Médiathèque</option>
              </select>
              <p v-if="formErrors.type" class="mt-1 text-sm text-red-600">
                {{ formErrors.type }}
              </p>
            </div>

            <!-- Form Actions -->
            <div class="flex justify-end space-x-2">
              <button
                type="button"
                @click="closeModal"
                class="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Annuler
              </button>
              <button
                type="submit"
                class="px-4 py-2 text-white rounded-lg bg-emerald-600 hover:bg-emerald-700"
              >
                {{ modalMode === "create" ? "Créer" : "Modifier" }}
              </button>
            </div>
          </form>
        </DialogPanel>
      </Dialog>
    </TransitionRoot>

    <!-- Delete Confirmation Modal -->
    <TransitionRoot appear :show="isDeleteModalOpen" as="template">
      <Dialog
        as="div"
        @close="isDeleteModalOpen = false"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      >
        <DialogPanel class="w-full max-w-md p-6 bg-white rounded-2xl">
          <DialogTitle class="text-lg font-semibold text-gray-900">
            Confirmer la suppression
          </DialogTitle>
          <div class="mt-4">
            <p class="text-gray-600">
              Êtes-vous sûr de vouloir supprimer ce contenu ? Cette action est
              irréversible.
            </p>
          </div>
          <div class="flex justify-end mt-6 space-x-2">
            <button
              @click="isDeleteModalOpen = false"
              class="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Annuler
            </button>
            <button
              @click="handleDelete"
              class="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              Supprimer
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
import EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import { useToast } from "vue-toastification";
import ContentService from "../../../services/ContentService";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
} from "@headlessui/vue";
import {
  PlusCircleIcon,
  PencilSquareIcon,
  TrashIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";

// State
const contents = ref([]);
const loading = ref(false);
const isModalOpen = ref(false);
const isDeleteModalOpen = ref(false);
const modalMode = ref("create");
const selectedContent = ref(null);
const imagePreview = ref(null);
const toast = useToast();
const token = localStorage.getItem("token");

// Search and filter
const searchQuery = ref("");
const selectedType = ref("");

const headers = [
  { text: "Titre", value: "titre", sortable: true },
  { text: "Type", value: "type", sortable: true },
  { text: "Description", value: "Description", sortable: true },
  { text: "Image", value: "image" },
  { text: "Vidéo", value: "video" },
  { text: "Actions", value: "actions" },
];

const formData = reactive({
  titre: "",
  Description: "",
  type: "",
  video: "",
  image: null,
});

const formErrors = reactive({
  titre: "",
  Description: "",
  type: "",
  image: "",
});

// Methods
const fetchContents = async () => {
  try {
    loading.value = true;
    const response = await ContentService.getAllContents();
    if (response && response.data && Array.isArray(response.data)) {
      contents.value = [...response.data];
      console.log("Données chargées:", contents.value); // Log les données
    } else {
      console.error("La réponse de l'API n'est pas un tableau:", response);
      contents.value = []; // Initialisation sûre
    }
  } catch (error) {
    handleError(error, "Erreur lors du chargement des contenus");
  } finally {
    loading.value = false;
  }
};

const openModal = (mode, content = null) => {
  modalMode.value = mode;
  if (mode === "edit" && content) {
    selectedContent.value = content;
    // Clear the formErrors object
    Object.keys(formErrors).forEach((key) => (formErrors[key] = ""));
    Object.assign(formData, {
      titre: content.titre,
      Description: content.Description,
      type: content.type,
      video: content.video || "",
      image: null, // we set this to null because, it causes problem when updating
    });
    if (content.image) {
      imagePreview.value = content.image;
    }
  }
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  resetForm();
};

const resetForm = () => {
  Object.keys(formData).forEach((key) => {
    formData[key] = key === "image" ? null : "";
  });
  Object.keys(formErrors).forEach((key) => (formErrors[key] = ""));
  selectedContent.value = null;
  imagePreview.value = null;
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
    if (!validTypes.includes(file.type)) {
      formErrors.image = "Le fichier doit être une image (jpeg, png, jpg, gif)";
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);

    formData.image = file;
    formErrors.image = "";
  }
};

const validateForm = () => {
  let isValid = true;
  Object.keys(formErrors).forEach((key) => (formErrors[key] = ""));

  if (!formData.titre.trim()) {
    formErrors.titre = "Le titre est requis";
    isValid = false;
  }

  if (!formData.Description.trim()) {
    formErrors.Description = "La Description est requise";
    isValid = false;
  }

  if (!formData.type) {
    formErrors.type = "Le type est requis";
    isValid = false;
  }

  if (modalMode.value === "create" && !formData.image) {
    formErrors.image = "L'image est requise";
    isValid = false;
  }
  return isValid;
};

const handleError = (error, defaultMessage) => {
  if (error.response?.data?.errors) {
    const backendErrors = error.response.data.errors;
    Object.keys(backendErrors).forEach((key) => {
      const formKey = key.toLowerCase();
      if (formErrors.hasOwnProperty(formKey)) {
        formErrors[formKey] = backendErrors[key][0];
      }
    });
    toast.error("Veuillez corriger les erreurs dans le formulaire");
  } else if (error.response?.data?.message) {
    toast.error(error.response.data.message);
  } else {
    toast.error(defaultMessage);
  }
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  try {
    loading.value = true;
    const formDataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== "") {
        formDataToSend.append(key, formData[key]);
      }
    });

    if (modalMode.value === "create") {
      await ContentService.createContent(formDataToSend);
      toast.success("Contenu créé avec succès");
    } else {
      await ContentService.updateContent(
        selectedContent.value.id,
        formDataToSend
      );
      toast.success("Contenu mis à jour avec succès");
    }
    closeModal();
    await fetchContents();
  } catch (error) {
    handleError(error, "Une erreur est survenue lors de l'enregistrement");
  } finally {
    loading.value = false;
  }
};

const confirmDelete = (content) => {
  selectedContent.value = content;
  isDeleteModalOpen.value = true;
};

const handleDelete = async () => {
  if (!selectedContent.value) return;

  try {
    loading.value = true;
    await ContentService.deleteContent(selectedContent.value.id);

    if (Array.isArray(contents.value)) {
      contents.value = contents.value.filter(
        (item) => item.id !== selectedContent.value.id
      );
    } else {
      console.error(
        "contents.value n'est pas un tableau après suppression:",
        contents.value
      );
      contents.value = []; // Réinitialisation si ce n'est pas un tableau
    }

    toast.success("Contenu supprimé avec succès");
    isDeleteModalOpen.value = false;
    selectedContent.value = null; // Reset selectedContent after deleting
  } catch (error) {
    handleError(error, "Erreur lors de la suppression");
  } finally {
    loading.value = false;
  }
};

// Computed property for filtered content
const filteredContents = computed(() => {
  let filtered = [...contents.value];

  // Filter by search query
  if (searchQuery.value) {
    const lowerCaseQuery = searchQuery.value.toLowerCase();
    filtered = filtered.filter((item) => {
      return (
        item.titre.toLowerCase().includes(lowerCaseQuery) ||
        item.Description.toLowerCase().includes(lowerCaseQuery)
      );
    });
  }

  // Filter by selected type
  if (selectedType.value) {
    filtered = filtered.filter((item) => item.type === selectedType.value);
  }

  return filtered;
});
const handleSearch = () => {};
const handleTypeFilter = async () => {};

// Lifecycle
onMounted(() => {
  fetchContents();
});
</script>

<style>
.customize-table {
  --easy-table-border: 1px solid #e5e7eb;
  --easy-table-row-border: 1px solid #e5e7eb;
  --easy-table-header-background-color: #f9fafb;
  --easy-table-header-font-size: 0.875rem;
  --easy-table-header-height: 48px;
  --easy-table-body-row-height: 48px;
  --easy-table-body-row-font-size: 0.875rem;
  --easy-table-body-row-hover-background-color: #f3f4f6;
}

.customize-table th {
  font-weight: 600;
  color: #374151;
}

.customize-table td {
  padding: 0.75rem 1rem;
}

/* Style pour la Description tronquée */
.description-cell {
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Style pour le hover tooltip de la description */
.description-tooltip {
  position: relative;
  display: inline-block;
}

.description-tooltip:hover::after {
  content: attr(title);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem;
  background-color: #374151;
  color: white;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  white-space: normal;
  max-width: 300px;
  z-index: 50;
}
</style>
