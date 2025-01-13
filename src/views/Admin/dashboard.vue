<template>
  <main class="p-4 md:p-6">
    <div class="mx-auto max-w-7xl">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p class="mt-1 text-sm text-gray-500">
          Bienvenue sur votre espace d'administration
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="stat in stats"
          :key="stat.name"
          class="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md"
        >
          <div class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-600">
                  {{ stat.name }}
                </p>
                <p class="mt-2 text-3xl font-semibold text-gray-900">
                  {{ stat.value }}
                </p>
              </div>
              <div
                class="p-3 transition-colors duration-200 rounded-lg bg-emerald-50"
              >
                <i :class="[stat.icon, 'text-xl text-emerald-600']"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Users Table -->
      <div class="p-6 bg-white rounded-lg shadow-sm">
        <h2 class="mb-4 text-lg font-medium text-gray-900">
          Utilisateurs Récents
        </h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase"
                >
                  Nom
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase"
                >
                  Email
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase"
                >
                  Type
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr
                v-for="user in recentUsers"
                :key="user.id"
                class="hover:bg-gray-50"
              >
                <td class="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                  {{ user.name }}
                </td>
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {{ user.email }}
                </td>
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {{ user.type_user }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import UserService from "../../services/UserService";

const stats = ref([]);
const recentUsers = ref([]);

const initializeStats = () => {
  stats.value = [
    {
      name: "Total Utilisateurs",
      value: 0,
      icon: "fas fa-users",
    },
    {
      name: "Usagers",
      value: 0,
      icon: "fas fa-user",
    },
    {
      name: "Partenaires",
      value: 0,
      icon: "fas fa-handshake",
    },
    {
      name: "Administrateurs",
      value: 0,
      icon: "fas fa-user-shield",
    },
  ];
};

const fetchData = async () => {
  try {
    const [allUsers, usagers, partenaires, administrateurs] = await Promise.all(
      [
        UserService.getAllUsers(),
        UserService.countUsersByType("Usager"),
        UserService.countUsersByType("partenaire"),
        UserService.countUsersByType("administrateur"),
      ]
    );

    stats.value[0].value = allUsers.length;
    stats.value[1].value = usagers;
    stats.value[2].value = partenaires;
    stats.value[3].value = administrateurs;

    recentUsers.value = allUsers.slice(0, 5);
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }
};

onMounted(() => {
  initializeStats();
  fetchData();
});
</script>
