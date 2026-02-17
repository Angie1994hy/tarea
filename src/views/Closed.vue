<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="container fade-in">
        <h2>Sesión Cerrada</h2>
        <p>¡Hasta pronto! 👋</p>
        <ion-button expand="block" @click="irLogin">Volver al Login</ion-button>
      </div>
      <!-- Confeti -->
      <div class="confetti-container">
        <div v-for="n in 30" :key="n" class="confetti"></div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const irLogin = () => {
      router.push("/login");
    };

    // Animación confeti
    onMounted(() => {
      const confettis = document.querySelectorAll(".confetti");
      confettis.forEach((el: any) => {
        const randomX = Math.floor(Math.random() * window.innerWidth);
        el.style.left = randomX + "px";
      });
    });

    return { irLogin };
  }
});
</script>

<style scoped>
/* Contenedor borgoña centrado */
.container {
  margin-top: 50px;
  text-align: center;
  color: white;
}

/* Fade-in animado */
.fade-in {
  animation: fadeIn 1.2s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Botón borgoña */
ion-button {
  margin-top: 20px;
  --background: #800020; 
  transition: transform 0.2s;
}
ion-button:hover {
  transform: scale(1.05);
}

/* Contenedor de confeti */
.confetti-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

/* Confeti individual */
.confetti {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #fce700; /* amarillo brillante */
  opacity: 0.8;
  top: -10px;
  animation: fall 3s linear infinite;
  border-radius: 2px;
}

@keyframes fall {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(110vh) rotate(360deg); }
}
</style>
