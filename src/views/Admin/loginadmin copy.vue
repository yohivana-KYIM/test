<template>
  <div class="min-h-screen bg-[#2955A9] relative overflow-hidden flex items-center justify-center p-4">
    <canvas ref="canvas" class="absolute inset-0 w-full h-full backdrop-blur-sm"></canvas>

    <div class="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-[1.01] transition-all relative z-20 border-2 border-[#F5ED8B]/20">
      <div class="mb-8 text-center animate-fade-in">
        <div class="relative w-32 h-32 mx-auto mb-6">
          <div class="absolute inset-0 bg-[#2955A9] rounded-full animate-pulse opacity-20"></div>
          <div class="absolute bg-white rounded-full shadow-inner inset-2"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <svg class="w-16 h-16 text-[#2955A9]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>
        <h2 class="text-3xl font-bold text-[#2955A9] mb-2">Caisse des Dépôts</h2>
        <p class="text-[#2955A9]/70">Et Consignations</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div class="space-y-2 group">
          <label class="text-[#2955A9] text-sm font-medium">Email</label>
          <div class="relative">
            <input
              v-model="email"
              type="email"
              required
              class="w-full px-4 py-3 bg-white border-2 border-[#2955A9]/20 rounded-xl focus:ring-2 focus:ring-[#F5ED8B] focus:border-transparent transition-all text-[#2955A9] placeholder-gray-400 group-hover:border-[#F5ED8B]"
              placeholder="admin@cdc.com"
            />
            <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2955A9]/50">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </span>
          </div>
        </div>

        <div class="space-y-2 group">
          <label class="text-[#2955A9] text-sm font-medium">Mot de passe</label>
          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full px-4 py-3 bg-white border-2 border-[#2955A9]/20 rounded-xl focus:ring-2 focus:ring-[#F5ED8B] focus:border-transparent transition-all text-[#2955A9] placeholder-gray-400 group-hover:border-[#F5ED8B]"
              placeholder="••••••••"
            />
            <button
              @click.prevent="showPassword = !showPassword"
              type="button"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2955A9]/50 hover:text-[#2955A9] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path v-if="!showPassword" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path v-if="!showPassword" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                <path v-if="showPassword" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 12C18.268 7.943 14.478 5 10 5a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" />
              </svg>
            </button>
          </div>
        </div>

        <div v-if="error" class="text-sm text-red-500 animate-shake">{{ error }}</div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-[#2955A9] hover:bg-[#2955A9]/90 text-white font-medium py-3 px-4 rounded-xl transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#F5ED8B] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          <span class="relative z-10 flex items-center justify-center">
            <span v-if="!loading">Se connecter</span>
            <span v-else class="flex items-center justify-center">
              <svg class="w-5 h-5 mr-3 animate-spin" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Connexion en cours...
            </span>
          </span>
          <div class="absolute inset-0 transition-transform duration-300 transform -translate-x-full bg-[#F5ED8B]/20 group-hover:translate-x-0"></div>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import { useToast } from "vue-toastification";

const toast = useToast();
const router = useRouter();
const canvas = ref(null);
let animationFrame = null;

const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);
const showPassword = ref(false);
const authStore = useAuthStore();

const initCanvas = () => {
  const ctx = canvas.value.getContext("2d");
  let particles = [];

  const resize = () => {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
  };

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.value.width;
      this.y = Math.random() * canvas.value.height;
      this.vx = Math.random() * 1.5 - 0.75;
      this.vy = Math.random() * 1.5 - 0.75;
      this.radius = Math.random() * 2 + 1;
      this.color = "#F5ED8B";
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.value.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.value.height) this.vy = -this.vy;
    }
  }

  const createParticles = () => {
    for (let i = 0; i < 70; i++) {
      particles.push(new Particle());
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach((p2) => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(245, 237, 139, ${0.8 - distance / 120})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    });

    animationFrame = requestAnimationFrame(animate);
  };

  resize();
  createParticles();
  animate();

  window.addEventListener("resize", resize);
};

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

onMounted(() => {
  initCanvas();
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});
</script>

<style scoped>
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-shake {
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
</style>