import { defineStore } from "pinia";
import api from "./services/api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as any,
    token: localStorage.getItem("token") || null,
    registro: {
      usuario: '',
      email: '',
      password: ''
    },
    // AÑADIMOS ESTO PARA EL LOGIN
    login: {
      email: '',
      password: ''
    }
  }),

  actions: {
    async fetchUsers() {
      const response = await api.get("/users");
      console.log(response.data);
    },

    async registroUser() {
      try {
        const response = await api.post("/register", this.registro);
        if (response.data.token) {
          this.token = response.data.token;
          localStorage.setItem("token", response.data.token);
        }
        return response.data;
      } catch (error) {
        console.error("Error en el store:", error);
        throw error;
      }
    },

    // AÑADIMOS ESTA ACCIÓN PARA EL LOGIN
    async loginUser() {
      try {
        const response = await api.post("/login", this.login);
        if (response.data.token) {
          this.token = response.data.token;
          this.user = response.data.user; // Guardamos los datos del usuario
          localStorage.setItem("token", response.data.token);
        }
        return response.data;
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        throw error;
      }
    }
  }
});