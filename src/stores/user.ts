import { defineStore } from "pinia";

interface UserState {
  usuario: string | null;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    usuario: localStorage.getItem("usuarioActual") || null
  }),
  actions: {
    login(usuario: string) {
      this.usuario = usuario;
      localStorage.setItem("usuarioActual", usuario);
    },
    logout() {
      this.usuario = null;
      localStorage.removeItem("usuarioActual");
    }
  }
});
