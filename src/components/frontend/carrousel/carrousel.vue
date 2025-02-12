<template>
  <div
    class="relative w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[450px] overflow-hidden"
  >
    <!-- Transition de groupe pour les images -->
    <transition-group
      name="fade"
      tag="div"
      class="absolute inset-0 w-full h-full"
    >
      <img
        v-for="(slide, index) in slides"
        :key="slide.id"
        :src="slide.image"
        :class="[
          'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
          {
            'opacity-100': index === current_index,
            'opacity-0': index !== current_index,
          },
        ]"
        :alt="`Slide ${index + 1}`"
      />
    </transition-group>

    <!-- Texte associé à chaque image -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50 sm:p-8"
    >
      <!-- Titre avec animation -->
      <h1
        v-text="slides[current_index]?.title"
        class="flex items-center justify-center mb-2 text-2xl font-bold text-center sm:mb-4 sm:text-4xl md:text-5xl text-outline"
      ></h1>

      <!-- Description avec animation d'écriture -->
      <p
        class="mb-4 text-sm text-center sm:mb-8 sm:text-xl md:text-2xl text-contour"
      >
        <span>{{ displayedDescription }}</span>
        <span class="animate-blink">|</span>
      </p>
    </div>

    <!-- Boutons de navigation -->
    <button
      @click="prevSlide"
      class="absolute p-1 transition-all transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full left-2 sm:left-4 top-1/2 sm:p-2 hover:bg-opacity-75"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-4 h-4 sm:w-6 sm:h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <button
      @click="nextSlide"
      class="absolute p-1 transition-all transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full right-2 sm:right-4 top-1/2 sm:p-2 hover:bg-opacity-75"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-4 h-4 sm:w-6 sm:h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import slideService from "../../../services/slideService";

const slides = ref([]);
const current_index = ref(0);
const displayedDescription = ref("");
let sliderTimer = null;
let typingTimer = null;

const startSlider = () => {
  sliderTimer = setInterval(() => {
    nextSlide();
  }, 10000);
};

const resetTimer = () => {
  clearInterval(sliderTimer);
  startSlider();
};

const prevSlide = () => {
  current_index.value =
    (current_index.value - 1 + slides.value.length) % slides.value.length;
  resetTimer();
  startTypingEffect();
};

const nextSlide = () => {
  current_index.value = (current_index.value + 1) % slides.value.length;
  resetTimer();
  startTypingEffect();
};

const startTypingEffect = () => {
  clearTimeout(typingTimer);
  displayedDescription.value = "";
  if (slides.value.length > 0) {
      if(slides.value[current_index.value] && slides.value[current_index.value].description) {
          const description = slides.value[current_index.value].description;
          let index = 0;

          const type = () => {
              if (index < description.length) {
                  displayedDescription.value += description[index];
                  index++;
                  typingTimer = setTimeout(type, 50); // Vitesse de frappe
              }
          };
          type();
      }

  }
};

const fetchSlides = async () => {
    try {
        slides.value = await slideService.getAllSlides();
        if (slides.value.length > 0) {
           startTypingEffect();
             startSlider();
        }

    } catch (error) {
        console.error("Error fetching slides:", error)
    }
};

watch(current_index, () => {
  startTypingEffect();
  });


onMounted(async () => {
  await fetchSlides();
});

onBeforeUnmount(() => {
    clearInterval(sliderTimer);
    clearTimeout(typingTimer);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.text-contour {
  text-shadow: 2px 2px 0 #0d1c02, -1px -1px 0 #0d1c02, 1px -1px 0 #0d1c02,
    -1px 1px 0 #0d1c02, 1px 1px 0 #0d1c02;
}

.text-outline {
  text-shadow: 2px 2px 0 #0d1c02, -1px -1px 0 #0d1c02, 1px -1px 0 #0d1c02,
    -1px 1px 0 #0d1c02, 1px 1px 0 #0d1c02;
}

.animate-blink {
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>