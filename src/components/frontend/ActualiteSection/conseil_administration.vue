<template>
  <div class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Title text -->
      <h2 class="text-gray-800 font-semibold uppercase text-2xl md:text-3xl leading-tight mb-4">
        Conseil d'administration
      </h2>

      <!-- Red line beneath title -->
      <div class="mb-8">
        <span class="block border-b-4 border-blue-500 w-20"></span>
      </div>

      <!-- Cover Image -->
      <div class="mb-8">
        <img
          src="/src/assets/actualite1.jpeg"
          alt="Image de couverture du conseil d'administration"
          class="w-full h-auto object-cover rounded-lg shadow-lg aspect-video"
        />
      </div>


      <h4 class="text-gray-800 font-semibold uppercase text-2xl md:text-3xl leading-tight mb-4">
       Conseil d'administration du 23 décembre 2024
      </h4>

      <!-- Image grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="image in images" :key="image.id" class="bg-white shadow-md rounded-lg overflow-hidden">
          <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-auto object-cover rounded-t-lg aspect-square"
          />
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftAlignedTextWithSpan",
  data() {
    return {
      images: [
        {
          id: 1,
          src: "/src/assets/actualite1.jpeg",
          alt: "Image 1",
        },
        {
          id: 2,
          src: "/src/assets/DSC_4118.JPG",
          alt: "Image 2",
        },
        {
          id: 3,
          src: "/src/assets/DSC_4105.JPG",
          alt: "Image 3",
        },
        {
          id: 4,
          src: "/src/assets/DSC_4129.JPG",
          alt: "Image 4",
        },
        {
          id: 5,
           src: "/src/assets/DSC_4134.JPG",
           alt: "Image 5",
         },
        {
          id: 6,
          src: "/src/assets/DSC_4130.JPG",
           alt: "Image 6",
        },
      ],
      shareMenuOpen: null,
    };
  },
  methods: {
    toggleShareMenu(imageId) {
        this.shareMenuOpen = this.shareMenuOpen === imageId ? null : imageId;
    },
    getCurrentUrl() {
      return window.location.href;
    }
  },
};
</script>

<style scoped>

</style>