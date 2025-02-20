<template>
  <div class="relative min-h-screen p-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 md:p-8">
    <!-- Background bubbles -->
    <div v-for="n in 15" :key="n" class="bubble" :style="getBubbleStyle(n)"></div>

    <!-- Header -->
    <header class="relative z-10 mb-12 text-center animate-fade-in">
      <h1 class="mb-4 text-4xl font-black md:text-5xl text-cdec-primary">
        {{ $t('cdec_interviews') }}
      </h1>
      <p class="mt-4 text-lg text-gray-600 animate-fade-in-delayed">
        {{ $t('discover_our_latest_interviews') }}
      </p>
    </header>

    <!-- Search Bar -->
    <div class="relative z-10 max-w-xl mx-auto mb-12">
      <div class="relative group">
        <input
          type="text"
          v-model="searchQuery"
          :placeholder="$t('search_interview')"
          class="w-full px-6 py-4 text-lg text-gray-700 placeholder-gray-400 transition-all duration-300 bg-white border-2 shadow-sm rounded-xl focus:border-cdec-primary focus:ring-2 focus:ring-cdec-primary-light hover:border-cdec-primary"
        />
        <button
          v-if="searchQuery"
          @click="clearSearch"
          class="absolute text-gray-400 transition-colors duration-200 right-14 top-4 hover:text-gray-600"
          aria-label="Clear search"
        >
          <XIcon class="w-6 h-6" />
        </button>
        <button
          @click="performSearch"
          class="absolute text-gray-400 transition-colors duration-200 right-4 top-4 hover:text-cdec-primary"
          aria-label="Search"
        >
          <SearchIcon class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Interview Cards Grid -->
    <TransitionGroup
      name="interview-list"
      tag="div"
      class="grid gap-8 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl"
    >
      <div
        v-for="interview in filteredInterviews"
        :key="interview.id"
        class="relative overflow-hidden transition-all duration-500 transform bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
      >
        <!-- Image Container -->
        <div class="relative overflow-hidden aspect-w-16 aspect-h-9">
          <img
            :src="getAssetUrl(interview.imagePrincipaleUrl)"
            :alt="interview.titre"
            class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div
            class="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100"
          ></div>
        </div>

        <!-- Content -->
        <div class="p-8">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-4 text-sm text-gray-500">
              <div class="flex items-center">
                <CalendarIcon class="w-4 h-4 mr-2" />
                <span>{{ interview.date }}</span>
              </div>
              <!-- Source as a clickable link -->
              <!-- <div class="flex items-center">
                  <a :href="interview.sourceUrl" target="_blank" rel="noopener noreferrer" class="text-cdec-primary hover:text-cdec-primary-dark font-semibold transition-colors duration-200">
                    {{ interview.source }}
                  </a>
              </div> -->
            </div>
          </div>

          <h3 class="mb-4 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-cdec-primary line-clamp-2">
            {{ interview.titre }}
          </h3>

          <p class="mb-6 text-base text-gray-600 line-clamp-2" v-html="interview.description"></p>

          <div class="flex justify-center mt-6">
            <router-link
              :to="{ name: 'InterviewDetail', params: { slug: interview.slug } }"
              class="flex items-center px-6 py-3 font-medium text-white transition-colors bg-green-500 hover:bg-green-600 rounded-xl focus:outline-none focus:ring focus:ring-green-200 focus:ring-offset-1"
            >
              {{ $t('read_interview') }}
              <ArrowRightIcon class="w-5 h-5 ml-2 animate-bounce-right" />
            </router-link>
          </div>
        </div>
      </div>
      <div v-if="filteredInterviews.length === 0" class="col-span-full text-center text-gray-500">
        {{ $t('no_results_found', { searchQuery: searchQuery }) }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import {
  X as XIcon,
  Search as SearchIcon,
  Calendar as CalendarIcon,
  ArrowRight as ArrowRightIcon,
} from "lucide-vue-next";
import InterviewService from '../../../services/InterviewService';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const searchQuery = ref("");
const interviews = ref([]);

const fetchInterviews = async () => {
  try {
    const data = await InterviewService.getAllInterviews();
    interviews.value = data;
  } catch (error) {
    console.error('Error fetching interviews:', error);
  }
};

onMounted(() => {
  fetchInterviews();
});

const filteredInterviews = computed(() => {
  if (!searchQuery.value) return interviews.value;
  const query = searchQuery.value.toLowerCase();
  return interviews.value.filter(
    (interview) =>
      interview.titre.toLowerCase().includes(query) // Search only by title
  );
});

const clearSearch = () => {
  searchQuery.value = "";
};

const performSearch = () => {
  // Implement search logic if needed
  console.log("Searching for:", searchQuery.value);
};

const getBubbleStyle = (index) => {
  const size = Math.random() * 6 + 3;
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const animationDelay = Math.random() * 3;
  const animationDuration = Math.random() * 6 + 6;

  return {
    width: `${size}rem`,
    height: `${size}rem`,
    top: `${top}%`,
    left: `${left}%`,
    animationDelay: `${animationDelay}s`,
    animationDuration: `${animationDuration}s`,
  };
};

const getAssetUrl = (path) => new URL(path, import.meta.url).href;
</script>

<style scoped>
/*  Colors  */
.text-cdec-primary {
  color: #324c9c;
}

.hover\:text-cdec-primary:hover {
  color: #324c9c;
}

.bg-cdec-primary {
  background-color: #324c9c;
}

.focus\:ring-cdec-primary:focus {
    box-shadow: 0 0 0 2px rgba(50, 76, 156, 0.2); /* Adjust the last value for the desired transparency */
}

.text-cdec-primary-dark {
  color: #233670;
}

.focus\:border-cdec-primary:focus {
  border-color: #324c9c;
}

.focus\:ring-cdec-primary-light:focus {
  box-shadow: 0 0 0 3px rgba(50, 76, 156, 0.15);
}

.hover\:border-cdec-primary:hover {
  border-color: #324c9c;
}

/* Bubbles */
.bubble {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    rgba(99, 102, 241, 0.1),
    rgba(59, 130, 246, 0.05)
  );
  animation: float infinite ease-in-out;
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.bubble:hover {
  transform: scale(1.2);
  opacity: 0.8;
}

@keyframes float {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(15px, -15px) rotate(5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

/* Animations */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-fade-in-delayed {
  animation: fadeIn 0.8s ease-out 0.2s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-bounce-right {
  animation: bounceRight 1s infinite;
}

@keyframes bounceRight {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(3px);
  }
}

/* Transition Group */
.interview-list-enter-active,
.interview-list-leave-active {
  transition: all 0.5s ease;
}

.interview-list-enter-from,
.interview-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.interview-list-move {
  transition: transform 0.5s ease;
}

/* Text Truncation */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Responsive */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .bubble {
    display: none;
  }

  header h1 {
    font-size: 2rem;
  }

  header p {
    font-size: 1rem;
  }
}

/* Button */
button:active {
  transform: scale(0.95);
}

button:hover {
  background-color: #4c51bf;
  color: white;
}
</style>