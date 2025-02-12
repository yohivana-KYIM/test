<template>
  <div class="relative flex items-center justify-center min-h-screen p-4 bg-white">
    <div class="max-w-md w-full bg-white rounded-xl p-8 shadow-lg relative z-20 border border-[#2955A9]/20">
      <div class="mb-8 text-center">
        <h2 class="mb-2 text-3xl font-bold text-[#2955A9]">
          Caisse des Dépôts
        </h2>
        <p class="text-[#2955A9]/90">Et Consignations</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div class="space-y-2">
          <label class="text-sm font-medium text-[#2955A9]">Email</label>
          <div class="relative">
            <input
              v-model="email"
              type="email"
              required
              class="w-full px-4 py-3 border border-[#2955A9]/20 rounded-lg focus:ring-2 focus:ring-[#2955A9] focus:border-transparent transition-all text-[#2955A9] placeholder-[#2955A9]/50"
              placeholder="user@cdec.com"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2955A9]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-[#2955A9]">Mot de passe</label>
            <a href="#" class="text-sm text-[#2955A9] hover:opacity-80 transition-colors">
              Mot de passe oublié ?
            </a>
          </div>
          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full px-4 py-3 border border-[#2955A9]/20 rounded-lg focus:ring-2 focus:ring-[#2955A9] focus:border-transparent transition-all text-[#2955A9] placeholder-[#2955A9]/50"
              placeholder="••••••••"
            />
            <button
              @click.prevent="showPassword = !showPassword"
              type="button"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2955A9] hover:opacity-80 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  v-if="!showPassword"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                />
                <path
                  v-if="!showPassword"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
                <path
                  v-if="showPassword"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 12C18.268 7.943 14.478 5 10 5a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div v-if="error" class="text-sm text-red-500">
          {{ error }}
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-[#2955A9] hover:bg-[#2955A9]/90 text-white font-medium py-3 px-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="!loading">Se connecter</span>
          <span v-else class="flex items-center justify-center">
            <svg class="w-5 h-5 mr-3 animate-spin" viewBox="0 0 24 24">
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
                fill="none"
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Connexion en cours...
          </span>
        </button>

        <div class="mt-6 text-center">
          <p class="text-sm text-[#2955A9]/70">
            Un problème de connexion ?
            <a href="#" class="text-[#2955A9] hover:opacity-80 font-medium">
              Contactez le support
            </a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import { useToast } from "vue-toastification";

const toast = useToast();
const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);
const showPassword = ref(false);
const authStore = useAuthStore();

const handleLogin = async () => {
  try {
    loading.value = true;
    error.value = "";

    await authStore.login({ email: email.value, password: password.value });
    toast.success("Connexion réussie !");
    router.push("/Admin/dashboard");
  } catch (e) {
    error.value = e.message || "Identifiants incorrects";
  } finally {
    loading.value = false;
  }
};
</script>