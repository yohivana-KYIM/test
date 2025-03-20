<template>
  <div
    class="fixed inset-0 bg-black/50 backdrop-blur-sm overflow-y-auto h-full w-full z-50"
  >
    <div class="min-h-full py-8 px-4">
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-7xl mx-auto"
      >
        <div class="p-6">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              Modifier Actualité
            </h2>
            <button
              @click="$emit('close')"
              class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form @submit.prevent="updateActualiteForm" class="space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="space-y-6">
                <div class="space-y-2">
                  <label
                    for="titre"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >Titre</label
                  >
                  <input
                    type="text"
                    id="titre"
                    v-model="actualite.titre"
                    class="w-full px-4 py-2.5 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div class="space-y-2">
                  <label
                    for="description"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >Description</label
                  >
                  <textarea
                    id="description"
                    v-model="actualite.description"
                    rows="4"
                    class="w-full px-4 py-2.5 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    required
                  ></textarea>
                </div>
                <div class="space-y-2">
                  <label
                    for="datePublication"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >Date de publication</label
                  >
                  <input
                    type="date"
                    id="datePublication"
                    v-model="actualite.datePublication"
                    class="w-full px-4 py-2.5 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div class="space-y-2">
                  <label
                    for="image"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >Image Principale de l'Actualité</label
                  >
                  <input
                    type="file"
                    id="image"
                    @change="handleImageUpload"
                    accept="image/*"
                    class="w-full px-4 py-2.5 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                  <div v-if="imagePreview" class="mt-2">
                    <img
                      :src="imagePreview"
                      alt="Image Preview"
                      class="max-w-xs rounded-lg"
                    />
                  </div>
                  <div v-else-if="actualite.image" class="mt-2">
                    <img
                      :src="getImageUrl(actualite.image)"
                      alt="Existing Image"
                      class="max-w-xs rounded-lg"
                    />
                  </div>
                </div>
                <div class="space-y-2">
                  <label
                    for="imagePrincipaleDetail"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >Image Principale du Détail</label
                  >
                  <input
                    type="file"
                    id="imagePrincipaleDetail"
                    @change="handleImagePrincipaleDetailUpload"
                    accept="image/*"
                    class="w-full px-4 py-2.5 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                  <div v-if="imagePrincipaleDetailPreview" class="mt-2">
                    <img
                      :src="imagePrincipaleDetailPreview"
                      alt="Image Preview"
                      class="max-w-xs rounded-lg"
                    />
                  </div>
                  <div
                    v-else-if="actualite.details && actualite.details.imagePrincipale"
                    class="mt-2"
                  >
                    <img
                      :src="getImageUrl(actualite.details.imagePrincipale)"
                      alt="Existing Image"
                      class="max-w-xs rounded-lg"
                    />
                  </div>
                </div>
                <div class="space-y-2">
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >Galerie Photos</label
                  >
                  <input
                    type="file"
                    multiple
                    @change="handleGalleryUpload"
                    accept="image/*"
                    class="w-full px-4 py-2.5 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                  <div class="grid grid-cols-3 gap-2 mt-2">
                    <div
                      v-for="(photo, index) in galleryPreviews"
                      :key="index"
                      class="relative"
                    >
                      <img :src="photo" class="w-full h-24 object-cover rounded-lg" />
                      <button
                        @click="removeGalleryPhoto(index)"
                        type="button"
                        class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                      >
                        ×
                      </button>
                    </div>
                    <div
                      v-for="(photo, index) in existingGalleryPhotos"
                      :key="'existing-' + index"
                      class="relative"
                    >
                      <img
                        :src="getImageUrl(photo)"
                        class="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        @click="removeExistingGalleryPhoto(index)"
                        type="button"
                        class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-end gap-4 mt-8">
              <button
                type="button"
                @click="$emit('close')"
                class="px-6 py-2.5 text-sm font-medium border rounded-lg dark:text-white dark:border-gray-600"
              >
                Annuler
              </button>
              <button
                type="submit"
                class="px-6 py-2.5 text-sm font-medium text-white bg-primary rounded-lg"
              >
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ActualiteService from "../../../services/ActualiteService";
import Swal from "sweetalert2";

const props = defineProps({
 actualiteId: {
    type: String,
    required: true,
  },
});

const actualite = ref({
  titre: "",
  description: "",
  image: null,
  datePublication: null,
  details: {
    imagePrincipale: null,
    galleryPhotos: [],
  },
  slug: null,
});

const imagePreview = ref(null);
const imagePrincipaleDetailPreview = ref(null);
const galleryPreviews = ref([]);
const existingGalleryPhotos = ref([]);
const removedGalleryPhotos = ref([]);

const emit = defineEmits(["close", "actualiteUpdated"]);

onMounted(async () => {
  await fetchActualite();
});

const fetchActualite = async () => {
  try {
    const response = await ActualiteService.getActualiteBySlug(props.actualiteId);

    if (response) {
      actualite.value = {
        titre: response.titre || "",
        description: response.description || "",
        image: response.image || null,
        datePublication: response.datePublication || null,
        details: {
          imagePrincipale: response.details?.imagePrincipale || null,
          galleryPhotos: response.details?.galleryPhotos || [],
        },
        slug: response.slug || null,
      };

      if (response.details?.galleryPhotos) {
        existingGalleryPhotos.value = [...response.details.galleryPhotos];
      }

      if (response.image) {
        imagePreview.value = getImageUrl(response.image);
      }

      if (response.details?.imagePrincipale) {
        imagePrincipaleDetailPreview.value = getImageUrl(response.details.imagePrincipale);
      }
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de l'actualité :", error);
    Swal.fire({
      title: "Erreur!",
      text: "Impossible de récupérer les données de l'actualité",
      icon: "error",
    });
  }
};
  

// const fetchActualite = async () => {


//   try {
//     const response = await ActualiteService.getActualiteBySlug(props.actualiteId);

//     if (response) {
//         actualite.value = response;

//         // Ensure details object exists
//         if (!actualite.value.details) {
//             actualite.value.details = {
//                 imagePrincipale: null,
//                 galleryPhotos: [],
//             };
//         }

//         if (actualite.value.details && actualite.value.details.galleryPhotos) {
//             existingGalleryPhotos.value = [...actualite.value.details.galleryPhotos];
//         }

//         // Preview existing images
//         if (actualite.value.image) {
//             imagePreview.value = getImageUrl(actualite.value.image);
//         }

//         if (actualite.value.details.imagePrincipale) {
//             imagePrincipaleDetailPreview.value = getImageUrl(actualite.value.details.imagePrincipale);
//         }
//     } 
 

//   } catch (error) {
//     console.error(
//       "Erreur lors de la récupération de l'actualité :",
//       error
//     );

    
     
 
//   }
// };

const getImageUrl = (path) => {
  return path ? path : '/placeholder-image.png'
}


const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    actualite.value.image = file;
    imagePreview.value = URL.createObjectURL(file);
  } else {
    actualite.value.image = null;
    imagePreview.value = null;
    Swal.fire({
      title: "Erreur!",
      text: "Veuillez sélectionner une image valide",
      icon: "error",
    });
  }
};

const handleImagePrincipaleDetailUpload = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    actualite.value.details.imagePrincipale = file;
    imagePrincipaleDetailPreview.value = URL.createObjectURL(file);
  } else {
    actualite.value.details.imagePrincipale = null;
    imagePrincipaleDetailPreview.value = null;
    Swal.fire({
      title: "Erreur!",
      text: "Veuillez sélectionner une image valide pour l'image principale du détail",
      icon: "error",
    });
  }
};

const handleGalleryUpload = (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    if (files[i].type.startsWith("image/")) {
      galleryPreviews.value.push(URL.createObjectURL(files[i]));
      actualite.value.details.galleryPhotos.push(files[i]);
    } else {
      Swal.fire({
        title: "Erreur!",
        text: "Un des fichiers n'est pas une image valide",
        icon: "error",
      });
    }
  }
};

const removeExistingGalleryPhoto = (index) => {
  // Store the URL to remove from the database

  removedGalleryPhotos.value.push(existingGalleryPhotos.value[index]);
  existingGalleryPhotos.value.splice(index, 1);
};

const removeGalleryPhoto = (index) => {
  //  if is a new uploaded image remove from the previews and the data
  actualite.value.details.galleryPhotos.splice(index, 1);
  galleryPreviews.value.splice(index, 1);
};

// const updateActualiteForm = async () => {
//   try {
//     const formData = new FormData();
//     formData.append("titre", actualite.value.titre);
//     formData.append("description", actualite.value.description);

//     if (actualite.value.image) {
//       formData.append("image", actualite.value.image);
//     }
//     if (actualite.value.datePublication) {
//       formData.append("datePublication", actualite.value.datePublication);
//     }

//     if (actualite.value.details.imagePrincipale) {
//       formData.append("imagePrincipale", actualite.value.details.imagePrincipale);
//     }

//     // Append new gallery photos
//     actualite.value.details.galleryPhotos.forEach((photo) => {
//       if (typeof photo !== "string") {
//         formData.append("galleryPhotos[]", photo);
//       }
//     });

//     // Append existing images urls removed from the gallery
//     removedGalleryPhotos.value.forEach((photoUrl) => {
//       formData.append("removedGalleryPhotos[]", photoUrl);
//     });


//     await ActualiteService.updateActualite(props.actualiteId, formData);
//    emit('close');
//     Swal.fire({
//       toast: true,
//       position: "top-end",
//       icon: "success",
//       title: "Actualité mise à jour avec succès",
//       showConfirmButton: false,
//       timer: 3000,
//     });

  
//   } catch (error) {
//     console.error("Erreur lors de la mise à jour de l'actualité :", error);
    
//   }
// };

const updateActualiteForm = async () => {
  try {
    const formData = new FormData();
    formData.append("titre", actualite.value.titre);
    formData.append("description", actualite.value.description);

    if (actualite.value.image) {
      formData.append("image", actualite.value.image);
    }
    if (actualite.value.datePublication) {
      formData.append("datePublication", actualite.value.datePublication);
    }

    if (actualite.value.details.imagePrincipale) {
      formData.append("imagePrincipale", actualite.value.details.imagePrincipale);
    }

    // Append new gallery photos
    actualite.value.details.galleryPhotos.forEach((photo) => {
      if (typeof photo !== "string") {
        formData.append("galleryPhotos[]", photo);
      }
    });

    // Append existing images urls removed from the gallery
    removedGalleryPhotos.value.forEach((photoUrl) => {
      formData.append("removedGalleryPhotos[]", photoUrl);
    });

    await ActualiteService.updateActualite(props.actualiteId, formData);
    emit('close');
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Actualité mise à jour avec succès",
      showConfirmButton: false,
      timer: 3000,
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'actualité :", error);
    Swal.fire({
      title: "Erreur!",
      text: "Une erreur s'est produite lors de la mise à jour de l'actualité",
      icon: "error",
    });
  }
};
</script>
