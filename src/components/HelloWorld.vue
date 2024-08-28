<template>
  <h1 class="text-blue-900"></h1>
  <div class="container-cards">
    <div v-for="row in rows" :key="row.id" class="card">
      <h2>{{ row.name }}12</h2>
      <img src="" alt="" />
      <div class="info">
        <h3 class="fullname"></h3>
        <p class="status"></p>
        <button class="info"></button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRowsStore } from "@/stores/store.ts";
import { onMounted } from "vue";

export default {
  name: "HelloWorld",
  setup() {
    const store = useRowsStore();
    onMounted(() => {
      store.fetchRows();
      console.log(store.rows);
      return {
        rows: store.rows,
      };
    });
  },
};
</script>

<style scoped></style>
