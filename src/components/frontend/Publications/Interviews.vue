<template>
  <div
    class="relative min-h-screen p-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 md:p-8"
  >
    <!-- Background bubbles with improved animation -->
    <div
      v-for="n in 15"
      :key="n"
      class="bubble"
      :style="getBubbleStyle(n)"
    ></div>

    <!-- Enhanced header with animation -->
    <header class="relative z-10 mb-12 text-center animate-fade-in">
      <h1 class="mb-4 text-4xl font-black md:text-5xl">
        <span
          class="text-transparent bg-clip-text"
          style="background-color: #324c9c; -webkit-background-clip: text; color: transparent;"
        >
          {{ $t('cdec_interviews') }}
        </span>
      </h1>
      <p
        class="mt-4 text-lg text-gray-600 animate-fade-in-delayed"
      >
        {{ $t('discover_our_latest_interviews') }}
      </p>
    </header>

    <!-- Improved search bar -->
    <div class="relative z-10 max-w-xl mx-auto mb-12">
      <div class="relative group">
        <input
          type="text"
          v-model="searchQuery"
          :placeholder="$t('search_interview')"
          class="w-full px-6 py-4 text-lg text-gray-700 placeholder-gray-400 transition-all duration-300 bg-white border-2 shadow-sm rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
        <button
          v-if="searchQuery"
          @click="clearSearch"
          class="absolute text-gray-400 transition-colors duration-200 right-14 top-4 hover:text-gray-600"
          aria-label="Clear search"
        >
          <XIcon class="w-6 h-6" />
        </button>
        <SearchIcon
          class="absolute w-6 h-6 text-gray-400 transition-colors duration-200 right-4 top-4 group-hover:text-indigo-500"
          aria-label="Search"
        />
      </div>
    </div>

    <!-- Enhanced interview cards grid -->
    <TransitionGroup
      name="interview-list"
      tag="div"
      class="grid gap-8 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl"
    >
      <div
        v-for="interview in filteredInterviews"
        :key="interview.id"
        class="relative overflow-hidden transition-all duration-500 transform bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
      >
        <!-- Image container with overlay -->
        <div class="relative overflow-hidden aspect-w-16 aspect-h-9">
          <img
            :src="getAssetUrl(interview.imagePrincipaleUrl)"
            :alt="interview.titre"
            class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100"
          ></div>
        </div>

        <!-- Content with improved typography and spacing -->
        <div class="p-8">
          <div class="flex items-center justify-between mb-4">
            <div
              class="flex items-center space-x-4 text-sm text-gray-500"
            >
              <div class="flex items-center">
                <CalendarIcon class="w-4 h-4 mr-2" />
                <span>{{ interview.date }}</span>
              </div>
              <div class="flex items-center">
                <span class="font-semibold">{{ interview.source }}</span>
              </div>
            </div>
          </div>

          <h3
            class="mb-4 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-indigo-600 line-clamp-2"
          >
            {{ interview.titre }}
          </h3>

          <p
            class="mb-6 text-base text-gray-600 line-clamp-2"
            v-html="interview.description"
          ></p>

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

.interview-list-enter-active,
.interview-list-leave-active {
  transition: all 0.5s ease;
}

.interview-list-enter-from,
.interview-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>