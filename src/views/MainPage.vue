<template>
  <div class="registro-container">
    <h1>Registro</h1>

    <input v-model="registro.username" placeholder="Usuario" />
    <input v-model="registro.email" placeholder="Email" type="email" />
    <input v-model="registro.password" placeholder="Contraseña" type="password" />

    <button @click="handleRegistro">Registrarse</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const userStore = useUserStore();
const registro = userStore.registro;

function handleRegistro() {
  userStore.$registro()
    .then(() => {
      alert("¡Registro exitoso!");
      router.push("/seccion/tab1");
    })
    .catch(err => {
      console.error(err);
      alert("Error al registrarse: " + err.message);
    });
}
</script>

<style scoped>
.registro-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 15px;
  background-color: #fffdfd;
  padding: 20px;
  border-radius: 10px;
}

input {
  padding: 10px;
  width: 280px;
  font-size: 16px;
  border: 1px solid #e26363;
  border-radius: 6px;
}

input:focus {
  outline: none;
  border-color: #ddd1d1;
  box-shadow: 0 0 5px rgba(255, 250, 250, 0.5);
}

button {
  padding: 10px 25px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #d03030;
  color: white;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #eaedf4;
}
</style>
