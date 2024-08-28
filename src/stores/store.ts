import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useRowsStore = defineStore("rows", () => {
  const rows = ref([]);

  const fetchRows = async () => {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      rows.value = response.data.results;
      console.log(rows.value);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  return { rows, fetchRows };
});
