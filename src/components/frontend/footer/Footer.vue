<template>
  <section class="section_footer">
    <!-- Contenu du footer existant -->
    <div class="footer">
      <div class="contact_information">
        <img src="../../../assets/call.png" :alt="$t('phone_icon')" />
        <span>+237 2 22 23 61 03</span>
      </div>
      <div class="contact_information">
        <img src="../../../assets/mail.png" :alt="$t('email_icon')" />
        <span>info@cdec.cm</span>
      </div>
      <div class="contact_information">
        <img src="../../../assets/calendar.png" :alt="$t('calendar_icon')" />
        <span>{{ $t('work_schedule') }}</span>
      </div>
    </div>
    <div class="footer">
      <div class="footer_information">
        <div class="social_information">
          <img
            src="../../../assets/cdec.png"
            :alt="$t('cdec_logo')"
            class="logo_footer"
          />
          <h3>{{ $t('join_us') }}</h3>
          <div class="social_icon">
            <!-- Icône Facebook -->
            <a
              href="https://web.facebook.com/cdeccameroun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../../assets/facebook.png" :alt="$t('facebook')" />
            </a>

            <!-- Icône Twitter (X) -->
            <a
              href="https://x.com/cdeccameroun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../../assets/twitter.png" :alt="$t('twitter')" />
            </a>

            <!-- Icône LinkedIn -->
            <a
              href="https://www.linkedin.com/company/cdec-cameroun/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../../assets/linkedin.png" :alt="$t('linkedin')" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer_information">
        <div class="social_information">
          <h2>{{ $t('useful_links') }}</h2>
          <div class="lien_footer">
            <!-- Lien vers l'accueil -->
            <router-link to="/accueil">{{ $t('home') }}</router-link>

            <!-- Lien vers la présentation -->
            <router-link to="/lacdec">{{ $t('presentation') }}</router-link>

            <!-- Lien vers la page Contact-nous -->
            <!-- <router-link to="/contact_us">{{ $t('contact_us') }}</router-link> -->

            <!-- Lien vers la page Actualités -->
            <router-link to="/#actualites">{{ $t('news') }}</router-link>
          </div>
        </div>
      </div>
      <div class="footer_information">
        <div class="newsletter">
          <h2>{{ $t('newsletter') }}</h2>
          <form @submit.prevent="subscribeToNewsletter">
            <input v-model="email" :placeholder="$t('newsletter_placeholder')" type="email" />
            <button type="submit" class="form_button">{{ $t('subscribe') }}</button>
          </form>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span>{{ $t('copyright') }}</span>
      <span>{{ $t('powered_by') }}</span>
    </div>

    <!-- Icône chat flottante -->
    <!-- <div class="chat-icon-container" @click="openChatWidget" v-if="!isChatOpen">
      <div class="chat-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          />
        </svg>
      </div>
    </div> -->

    <!-- Widget de chat -->
    <div class="chat-widget" v-if="isChatOpen">
      <div class="chat-header">
        <div class="chat-header-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            />
          </svg>
          <h3>{{ $t('chat_online') }}</h3>
        </div>
        <button @click="closeChatWidget" class="close-button">×</button>
      </div>
      <div class="chat-messages" ref="chatMessages">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="['message', message.type]"
        >
          {{ message.text }}
        </div>
      </div>
      <div class="chat-input">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          :placeholder="$t('chat_placeholder')"
        />
        <button @click="sendMessage" class="send-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
    <div v-if="showToastMessage" class="toast">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        {{ $t('subscription_success') }}
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
import SubscriberService from '../../../services/SubscriberService';

const isChatOpen = ref(false);
const newMessage = ref("");
const messages = ref([
  { text: t('chat_greeting'), type: "received" },
]);
const chatMessages = ref(null);
const email = ref("");

const openChatWidget = () => {
  isChatOpen.value = true;
  setTimeout(() => {
    if (chatMessages.value) {
      chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
    }
  }, 100);
};

const closeChatWidget = () => {
  const widget = document.querySelector(".chat-widget");
  widget.style.animation = "slideOut 0.3s ease-out";

  setTimeout(() => {
    isChatOpen.value = false;
    // Réinitialiser l'animation pour la prochaine ouverture
    if (widget) {
      widget.style.animation = "";
    }
  }, 280);
};

const sendMessage = () => {
  if (newMessage.value.trim()) {
    messages.value.push({
      text: newMessage.value,
      type: "sent",
    });

    setTimeout(() => {
      messages.value.push({
        text: t('chat_response'),
        type: "received",
      });
    }, 1000);

    newMessage.value = "";
  }
};

watch(messages, () => {
  setTimeout(() => {
    if (chatMessages.value) {
      chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
    }
  }, 100);
});

// Gérer la fermeture du chat avec la touche Escape
onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isChatOpen.value) {
      closeChatWidget();
    }
  });
});

const showToastMessage = ref(false);

const subscribeToNewsletter = async () => {
    try {
        await SubscriberService.createSubscriber({ email: email.value });
        showToastMessage.value = true;
        setTimeout(() => {
            showToastMessage.value = false;
            email.value = "";
        }, 3000);
    } catch (error) {
        console.error("Error subscribing to newsletter:", error);
        // Afficher une alerte ou un message d'erreur plus visible
        alert(t('subscription_error')); // Assurez-vous d'avoir une traduction pour subscription_error
    }
};
</script>

<style scoped>
@import "../../../css/accueil.css";
/* Styles du toast */
.toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4CAF50; /* Couleur verte pour le succès */
  color: white;
  padding: 15px 20px;
  border-radius: 5px;
  z-index: 1001;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeInOut 3s ease-in-out forwards;
    display: flex;
    align-items: center;
  gap: 10px;
}
.toast svg {
    width: 20px;
    height: 20px;
}
@keyframes fadeInOut {
    0% {opacity: 0;}
    10% {opacity: 1;}
    90% {opacity: 1;}
    100% {opacity: 0;}
}
/* Styles de l'icône chat flottante */
.chat-icon-container {
  position: fixed;
  bottom: 120px;
  right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  z-index: 1000;
  animation: bounce 2s infinite;
}

.chat-icon {
  background: #324c9c;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(50, 76, 156, 0.3);
  transition: transform 0.3s ease;
}

.chat-icon:hover {
  transform: scale(1.1);
}

.chat-label {
  background: #324c9c;
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(50, 76, 156, 0.2);
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

/* Styles du widget de chat */
.chat-widget {
  position: fixed;
  bottom: 190px;
  right: 30px;
  width: 320px;
  height: 450px;
  max-height: calc(100vh - 250px);
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  animation: slideIn 0.3s ease-out;
  overflow: hidden;
}

.chat-header {
  padding: 15px;
  background: #324c9c;
  color: white;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-header-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.chat-header h3 {
  margin: 0;
  font-size: 16px;
}

.close-button {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: transform 0.2s ease;
}

.close-button:hover {
  transform: scale(1.1);
}

.chat-messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  background: #f8f9fa;
}

.message {
  margin: 8px 0;
  padding: 10px 15px;
  border-radius: 18px;
  max-width: 85%;
  font-size: 14px;
  line-height: 1.4;
}

.sent {
  background: #324c9c;
  color: white;
  margin-left: auto;
  border-bottom-right-radius: 5px;
}

.received {
  background: white;
  color: #324c9c;
  border: 1px solid #e1e4eb;
  border-bottom-left-radius: 5px;
}

.chat-input {
  padding: 15px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 10px;
  background: white;
  border-radius: 0 0 20px 20px;
}

.chat-input input {
  flex: 1;
  padding: 12px;
  border: 1px solid #e1e4eb;
  border-radius: 25px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.chat-input input:focus {
  outline: none;
  border-color: #324c9c;
}

.send-button {
  width: 42px;
  height: 42px;
  padding: 0;
  background: #324c9c;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.send-button:hover {
  transform: scale(1.05);
}

@keyframes slideIn {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100px);
    opacity: 0;
  }
}

/* Media queries pour la réactivité */
@media screen and (max-width: 768px) {
  .chat-widget {
    width: 90%;
    right: 5%;
    left: 5%;
    bottom: 150px;
    height: 400px;
  }

  .chat-icon-container {
    bottom: 90px;
    right: 20px;
  }
}

@media screen and (max-height: 600px) {
  .chat-widget {
    height: 300px;
    bottom: 140px;
  }

  .chat-icon-container {
    bottom: 80px;
  }
}

/* Scrollbar personnalisée */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: #324c9c;
  border-radius: 3px;
}
</style>