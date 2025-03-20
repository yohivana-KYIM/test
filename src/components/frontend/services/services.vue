<script>
import { useI18n } from 'vue-i18n';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

// Import des images
import consignationImage from '../../../assets/consignation.png';
import renovationImage from '../../../assets/renovation.png';
import consultationImage from '../../../assets/consultation.png';
import depotImage from '../../../assets/depot.png';

export default {
  setup() {
    const { t } = useI18n();
    const slides = ref([
      {
        id: 1,
        imageType: 'png',
        image: consignationImage,
        title: 'admin_deposits',
        description: 'admin_deposits_desc',
        link: '/cons_admin'
      },
      {
        id: 2,
        imageType: 'png',
        image: renovationImage,
        title: 'judicial_deposits',
        description: 'judicial_deposits_desc',
        link: '/cons_judiciaire'
      },
      {
        id: 3,
        imageType: 'png',
        image: consultationImage,
        title: 'conventional_deposits',
        description: 'conventional_deposits_desc',
        link: '/cons_convention'
      },
      {
        id: 4,
        imageType: 'png', 
        image: depotImage, 
        title: 'deposit',
        description: 'deposit_descr',
        link: '/depot'
      }
    ]);

    const currentSlideIndex = ref(0);
    const slidesToShow = ref(window.innerWidth >= 768 ? 3 : 1);
    const carousel = ref(null);
    let autoplayInterval = null;
    const isTransitioning = ref(false);

    const visibleSlides = computed(() => {
      const visibleCount = slidesToShow.value;
      let result = [];
      
      for (let i = 0; i < visibleCount; i++) {
        const index = (currentSlideIndex.value + i) % slides.value.length;
        result.push(slides.value[index]);
      }
      
      return result;
    });

    const activeSlideIndex = ref(0);

    const goToSlide = (index) => {
      if (isTransitioning.value || currentSlideIndex.value === index) return;
      
      isTransitioning.value = true;
      currentSlideIndex.value = index;
      
      setTimeout(() => {
        isTransitioning.value = false;
      }, 400);
      
      resetAutoplay();
    };

    const startAutoplay = () => {
      autoplayInterval = setInterval(() => {
        currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length;
      }, 5000);
    };

    const resetAutoplay = () => {
      clearInterval(autoplayInterval);
      startAutoplay();
    };

    const handleResize = () => {
      slidesToShow.value = window.innerWidth >= 768 ? 3 : 1;
    };

    onMounted(() => {
      handleResize();
      window.addEventListener('resize', handleResize);
      startAutoplay();
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
      clearInterval(autoplayInterval);
    });

    return {
      t,
      slides,
      visibleSlides,
      currentSlideIndex,
      activeSlideIndex,
      carousel,
      goToSlide
    };
  }
};
</script>

<template>
  <Section class="service">
    <div class="divider">{{ t('services') }}</div>
    
    <div class="carousel-container">
      <div class="service_group" ref="carousel">
        <transition-group name="carousel-slide">
          <div v-for="(slide, index) in visibleSlides" :key="slide.id" class="service_information" :class="{ 'active': index === activeSlideIndex }">
            <img v-if="slide.imageType === 'png'" class="star" :src="slide.image" :alt="slide.title" />
            <svg v-else class="star" width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="8" width="18" height="12" rx="2" fill="black" stroke="black" stroke-width="1.5"/>
              <path d="M2 8L12 2L22 8" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="14" r="2" fill="white" stroke="black" stroke-width="1.5"/>
            </svg>
            <hr />
            <span>{{ t(slide.title) }}</span>
            <p>{{ t(slide.description) }}</p>
            <button>
              <router-link :to="slide.link" class="li">{{ t('learn_more_cdec') }}..</router-link>
            </button>
          </div>
        </transition-group>
      </div>
    </div>
    
    <div class="carousel-indicators">
      <button 
        v-for="(slide, index) in slides" 
        :key="slide.id" 
        class="indicator" 
        :class="{ 'active': currentSlideIndex === index }"
        @click="goToSlide(index)"
        :aria-label="`Slide ${index + 1}`">
      </button>
    </div>
  </Section>
</template>

<style scoped>
@import "../../../css/accueil.css";

.service_information {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  margin: 0 12px;
  flex: 0 0 calc(33.333% - 24px);
  transition: all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
  overflow: hidden;
  transform-origin: center center;
  padding: 1.5rem;
}

.service_information:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.service_information.active {
  transform: scale(1.03);
}

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  margin: 2.5rem 0;
}

.service_group {
  display: flex;
  overflow: hidden;
  width: 100%;
  padding: 1.5rem 0;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 12px;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #dddddd;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.indicator:hover {
  background: #bbbbbb;
}

.indicator.active {
  background: #333;
  transform: scale(1.2);
}

.carousel-slide-enter-active,
.carousel-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.carousel-slide-enter-from {
  opacity: 0;
  transform: translateX(80px);
}

.carousel-slide-leave-to {
  opacity: 0;
  transform: translateX(-80px);
  position: absolute;
}

.carousel-slide-move {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.service_information button {
  transition: all 0.3s ease-out;
  position: relative;
  overflow: hidden;
}

.service_information button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.service_information button::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service_information button:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

@media (max-width: 768px) {
  .service_information {
    flex: 0 0 calc(100% - 24px);
  }
  
  .carousel-slide-enter-from {
    transform: translateX(40px);
  }
  
  .carousel-slide-leave-to {
    transform: translateX(-40px);
  }
}
</style>
