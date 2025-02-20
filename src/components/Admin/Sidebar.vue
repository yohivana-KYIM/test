<template>
  <div class="relative">
    <!-- Mobile Toggle Button -->
    <button
      @click="toggleSidebar"
      class="fixed z-50 p-3 text-white transition-all duration-300 bg-gray-800 rounded-full shadow-lg md:hidden top-4 left-4 hover:bg-gray-900 focus:outline-none"
      aria-label="Toggle Menu"
    >
      <i :class="['fas', isSidebarOpen ? 'fa-times' : 'fa-bars', 'text-lg']"></i>
    </button>

    <!-- Sidebar -->
    <aside
      class="fixed inset-y-0 left-0 z-40 flex flex-col h-full transition-transform duration-300 transform bg-white border-r shadow-lg md:translate-x-0"
      :class="[
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'w-64 xl:w-72',
      ]"
    >
      <!-- Logo Section -->
      <div class="p-6 space-y-4 bg-gray-50">
        <div class="flex items-center justify-center">
          <img
            src="/images/logo/cdec.png"
            alt="Logo CDE"
            class="w-24 h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div
          class="w-24 h-1 mx-auto rounded-full"
          style="background: linear-gradient(to right, #2955a9, #2955a9)"
        ></div>
      </div>

      <!-- Navigation -->
      <div class="flex-1 px-4 pb-6 mt-5 overflow-y-auto">
        <ul class="space-y-2">
          <li v-for="item in menuItems" :key="item.name">
            <template v-if="item.children">
              <button
                @click="toggleSubMenu(item)"
                class="flex items-center justify-between w-full px-4 py-3 space-x-3 transition-colors duration-200 rounded-lg group hover:bg-gray-50"
                :class="{
                  'bg-emerald-100 text-emerald-600': item.open,
                }"
              >
                <div class="flex items-center space-x-3">
                  <div
                    class="flex items-center justify-center w-10 h-10 transition-colors duration-200 rounded-lg"
                    :class="[
                      item.open
                        ? 'bg-emerald-200'
                        : 'bg-gray-100',
                    ]"
                  >
                    <i :class="[item.icon, 'text-lg']"></i>
                  </div>
                  <span class="font-medium">{{ item.name }}</span>
                </div>
                <i class="text-sm fas fa-chevron-down" :class="{ 'rotate-180': item.open }"></i>
              </button>
              <ul v-if="item.open" class="pl-6 mt-2 space-y-2">
                <li v-for="subItem in item.children" :key="subItem.path">
                  <router-link
                    :to="subItem.path"
                    class="flex items-center px-4 py-3 space-x-3 transition-colors duration-200 rounded-lg group hover:bg-gray-50"
                    :class="{
                      'bg-emerald-100 text-emerald-600': $route.path === subItem.path,
                    }"
                  >
                    <span class="font-medium">{{ subItem.name }}</span>
                  </router-link>
                </li>
              </ul>
            </template>
            <template v-else>
              <router-link
                :to="item.path"
                class="flex items-center px-4 py-3 space-x-3 transition-colors duration-200 rounded-lg group hover:bg-gray-50"
                :class="{
                  'bg-emerald-100 text-emerald-600': $route.path === item.path,
                }"
              >
                <div
                  class="flex items-center justify-center w-10 h-10 transition-colors duration-200 rounded-lg"
                  :class="[
                    $route.path === item.path
                      ? 'bg-emerald-200'
                      : 'bg-gray-100',
                  ]"
                >
                  <i :class="[item.icon, 'text-lg']"></i>
                </div>
                <span class="font-medium">{{ item.name }}</span>
              </router-link>
            </template>
          </li>
        </ul>
      </div>
    </aside>

    <!-- Overlay -->
    <div
      v-show="isSidebarOpen"
      class="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
      @click="toggleSidebar"
    ></div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isSidebarOpen = ref(false);

const menuItems = ref([
  {
    name: "Tableau de bord",
    path: "/Admin/dashboard",
    icon: "fas fa-chart-line",
  },
  {
    name: "Interviews",
    icon: "fas fa-microphone",
    open: false,
    children: [
      {
        name: "Interviews",
        path: "/Admin/interviews",
      },
   
    ],
  },
  {
    name: "Gestion de Contenu",
    icon: "fas fa-layer-group",
    open: false,
    children: [
      {
        name: "Missions",
        path: "/Admin/missions",
      },
      {
        name: "Communiqués",
        path: "/Admin/communiques",
      },
      {
        name: "Actualités",
        path: "/Admin/actualites",
      },
 {
        name: "Domaines",
        path: "/Admin/domaines",
      },
   
      {
        name: "Indicateurs",
        path: "/Admin/stats",
      },
      {
        name: "Presentation",
        path: "/Admin/presentation",
      },
      
       {
        name: "Subscriber",
        path: "/Admin/subscriber",
      },
      {
        name: "Publications",
        path: "/Admin/publications",
      },
       {
        name: "mediatheque",
        path: "/Admin/videos",
      },

      {
        name: "Reglementaires",
        path: "/Admin/reglementations",
      },
      {
        name: "HeroBanner",
        path: "/Admin/slides",
      },
    ],
  },
  {
    name: "Partenaires",
    path: "/Admin/sponsors",
    icon: "fas fa-handshake",
  },
]);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const toggleSubMenu = (item) => {
  item.open = !item.open;
};

watch(
  () => route.path,
  () => {
    isSidebarOpen.value = false;
  }
);
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>