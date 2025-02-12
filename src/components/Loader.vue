<template>

      <!-- Loader component for displaying loading state -->
 
  <div v-if="isLoading" class="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 backdrop-blur-sm">
    <div class="text-center">
      <div class="relative w-20 h-20 mx-auto mb-4">
        <!-- Cercle externe animé -->
        <div class="absolute inset-0 animate-spin">
          <div class="w-full h-full border-4 border-transparent rounded-full border-t-[#324C9C] border-r-[#324C9C]"></div>
        </div>
        <!-- Cercle interne animé (sens inverse) -->
        <div class="absolute inset-0 animate-spin-reverse">
          <div class="w-full h-full border-4 border-transparent rounded-full border-l-[#324C9C]/50 border-b-[#324C9C]/50"></div>
        </div>
        <!-- Point central animé -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-3 h-3 bg-[#324C9C] rounded-full animate-ping"></div>
        </div>
      </div>
      <!-- Texte animé -->
      <p class="text-lg font-medium text-[#324C9C] animate-pulse">
        Chargement en cours...
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

@keyframes ping {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.animate-spin {
  animation: spin 1.5s linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse 1.8s linear infinite;
}

.animate-ping {
  animation: ping 1.5s ease-in-out infinite;
}
</style>