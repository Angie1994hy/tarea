<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="container">
        <h2>Iniciar Sesión</h2>
        <ion-input v-model="usuario" placeholder="Usuario"></ion-input>
        <ion-input v-model="contrasena" placeholder="Contraseña" type="password"></ion-input>
        <ion-button expand="block" @click="loginUser">Entrar</ion-button>
        <p>¿No tienes cuenta? <router-link to="/registro">Regístrate</router-link></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

export default defineComponent({
  setup() {
    const usuario = ref("");
    const contrasena = ref("");
    const router = useRouter();
    const store = useUserStore();

    const loginUser = () => {
      const usuarios = JSON.parse(localStorage.getItem("usuarios") || "{}");
      const hash = btoa(contrasena.value);

      if (usuarios[usuario.value] && usuarios[usuario.value] === hash) {
        store.login(usuario.value);
        router.push("/home");
      } else {
        alert("Usuario o contraseña incorrecta");
      }
    };

    return { usuario, contrasena, loginUser };
  }
});
</script>

<style scoped>
.container {
  margin-top: 50px;
  text-align: center;
  color: white;
}
ion-input {
  margin: 10px 0;
  --background: #a00030;
  --color: white;
  border-radius: 10px;
  padding-left: 10px;
}
ion-button {
  margin-top: 20px;
  --background: #800020;
}
</style>
