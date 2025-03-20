<template>
 <nav>
    <div class="logo">
      <router-link to="/"><img src="../../../assets/cdec.png" alt="" /></router-link>
    </div>
      
      <!-- Hamburger toggle for mobile -->
      <div class="toggle md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <!-- Menu -->
      <ul :class="['menu', { 'active': isMenuOpen }]" class="hidden md:flex md:items-center md:space-x-4">
        <!-- Home link -->
        <li class="relative group">
          <router-link to="/" class="lien py-2 px-3 block hover:bg-gray-100 rounded-md transition-colors">
            {{ $t('home') }}
          </router-link>
        </li>
        
        <!-- CDEC dropdown -->
        <li class="relative group">
          <button @click="toggleDropdown('cdec')" class="lien py-2 px-3 flex items-center hover:bg-gray-100 rounded-md transition-colors">
            {{ $t('cdec') }}
            <svg :class="['ml-1 w-4 h-4 transition-transform', { 'rotate-180': openDropdown === 'cdec' }]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <ul v-if="openDropdown === 'cdec'" class="dropdown absolute left-0 mt-1 w-56 bg-white shadow-lg rounded-md py-1 z-10">
            <li v-for="(item, index) in cdecLinks" :key="index">
              <router-link :to="item.path" @click="closeDropdowns" class="lien block px-4 py-2 hover:bg-gray-100">
                {{ $t(item.text) }}
              </router-link>
            </li>
          </ul>
        </li>
        
        <!-- Services dropdown -->
        <li class="relative group">
          <button @click="toggleDropdown('services')" class="lien py-2 px-3 flex items-center hover:bg-gray-100 rounded-md transition-colors">
            {{ $t('services') }}
            <svg :class="['ml-1 w-4 h-4 transition-transform', { 'rotate-180': openDropdown === 'services' }]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <ul v-if="openDropdown === 'services'" class="dropdown absolute left-0 mt-1 w-56 bg-white shadow-lg rounded-md py-1 z-10">
            <li v-for="(item, index) in servicesLinks" :key="index">
              <router-link :to="item.path" @click="closeDropdowns" class="lien block px-4 py-2 hover:bg-gray-100">
                {{ $t(item.text) }}
              </router-link>
            </li>
          </ul>
        </li>
        
        <!-- News dropdown -->
        <li class="relative group">
          <button @click="toggleDropdown('news')" class="lien py-2 px-3 flex items-center hover:bg-gray-100 rounded-md transition-colors">
            {{ $t('news') }}
            <svg :class="['ml-1 w-4 h-4 transition-transform', { 'rotate-180': openDropdown === 'news' }]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <ul v-if="openDropdown === 'news'" class="dropdown absolute left-0 mt-1 w-56 bg-white shadow-lg rounded-md py-1 z-10">
            <li v-for="(item, index) in newsLinks" :key="index">
              <router-link :to="item.path" @click="closeDropdowns" class="lien block px-4 py-2 hover:bg-gray-100">
                {{ $t(item.text) }}
              </router-link>
            </li>
          </ul>
        </li>
        
        <!-- Projects & Programs link (no dropdown) -->
        <li class="relative group">
          <router-link to="/projects" class="lien py-2 px-3 block hover:bg-gray-100 rounded-md transition-colors">
            {{ $t('projects_programs') }}
          </router-link>
        </li>
      </ul>

  </nav>
  
  <section class="flag_cameroun flex">
    <div class="w-1/3 bg-green-600 h-2"></div>
    <div class="w-1/3 flex justify-center bg-red-600 h-2">
      <img class="star h-4 -mt-1" src="../../../assets/star.png" alt="Star" />
    </div>
    <div class="w-1/3 bg-yellow-500 h-2"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const isMenuOpen = ref(false);
const openDropdown = ref(null);

// Links for each dropdown menu
const cdecLinks = [
  { path: '/lacdec', text: 'presentation' },
  { path: '/missions', text: 'Missions' },
  { path: '/Gouvernance', text: 'governance' },
  { path: '/Organigramme', text: 'organizational_chart' },
  { path: '/textes_reglementaires', text: 'regulatory_texts' },
  { path: '/partenaires', text: 'cooperation_partnerships' }
];

const servicesLinks = [
  { path: '/cons_admin', text: 'admin_deposits' },
  { path: '/cons_judiciaire', text: 'judicial_deposits' },
  { path: '/cons_convention', text: 'conventional_deposits' },
  { path: '/depot', text: 'deposits' }
];

const newsLinks = [
  { path: '/communique', text: 'press_releases' },
  { path: '/publications', text: 'publications' },
  {path:'/infocdec', text:'info_cdec'},
  { path: '/Interviews', text: 'interviews' },
  { path: '/mediatheque', text: 'media_library' }
];

// Toggle mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Toggle dropdown menus
const toggleDropdown = (dropdown) => {
  if (openDropdown.value === dropdown) {
    openDropdown.value = null;
  } else {
    openDropdown.value = dropdown;
  }
};

// Close all dropdowns
const closeDropdowns = () => {
  openDropdown.value = null;
  isMenuOpen.value = false;
};

// Close dropdowns when clicking outside
const handleClickOutside = (event) => {
  const navElement = document.querySelector('nav');
  if (navElement && !navElement.contains(event.target)) {
    closeDropdowns();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
@import "../../../css/accueil.css";

/* Make all menu and submenu text bold */
.lien {
  font-weight: bold;
}

/* Mobile menu */
@media (max-width: 768px) {
  .menu {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 20;
    padding: 1rem 0;
  }
  
  .menu.active {
    display: flex;
  }
  
  .menu li {
    width: 100%;
  }
  
  .dropdown {
    position: static !important;
    width: 100% !important;
    box-shadow: none !important;
    padding-left: 2rem;
  }
}
</style>
