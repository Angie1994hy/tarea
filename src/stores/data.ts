// stores/data.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import axiosRiksiri from "@/axios/axiosRiksiri";

export const useDataStore = defineStore("dataStore", () => {
  const items = ref<any[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchItems() {
    loading.value = true;
    error.value = null;

    try {
      const res = await axiosRiksiri.get("ruta/de/tu/api"); // cambia por tu endpoint
      items.value = res.data;
    } catch (err: any) {
      error.value = err.message || "Error al obtener datos";
    } finally {
      loading.value = false;
    }
  }

  return { items, loading, error, fetchItems };
});
