<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="container">
        <h2>Bienvenido {{ usuario }}</h2>
        <ion-button expand="block" @click="cerrarSesion">Cerrar sesión</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useUserStore();
    const router = useRouter();

    if (!store.usuario) {
      router.push("/login");
    }

    const cerrarSesion = () => {
      store.logout();
      router.push("/closed");
    };

    return { usuario: store.usuario, cerrarSesion };
  }
});
</script>

<style scoped>
.container {
  margin-top: 50px;
  text-align: center;
  color: white;
}
ion-button {
  margin-top: 20px;
  --background: #800020;
}
</style>
