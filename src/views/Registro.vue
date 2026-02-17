<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="container">
        <h2>Registro</h2>
        <ion-input v-model="usuario" placeholder="Usuario"></ion-input>
        <ion-input v-model="contrasena" placeholder="Contraseña" type="password"></ion-input>
        <ion-button expand="block" @click="registrar">Registrarse</ion-button>
        <p>¿Ya tienes cuenta? <router-link to="/login">Iniciar sesión</router-link></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const usuario = ref("");
    const contrasena = ref("");
    const router = useRouter();

    const registrar = () => {
      if (!usuario.value || !contrasena.value) {
        alert("Completa todos los campos");
        return;
      }

      const usuarios = JSON.parse(localStorage.getItem("usuarios") || "{}");
      if (usuarios[usuario.value]) {
        alert("Usuario ya existe");
        return;
      }

      usuarios[usuario.value] = btoa(contrasena.value);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      alert("Registro exitoso");
      router.push("/login");
    };

    return { usuario, contrasena, registrar };
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
