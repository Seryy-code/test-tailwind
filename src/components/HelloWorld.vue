<template>
  <h1 class="text-blue-900"></h1>
  <div
    class="container-cards w-full px-[50px] flex justify-between wrap text-base sm:text-lg md:text-xl lg:text-2xl flex-wrap"
  >
    <div
      v-for="row in store.rows"
      :key="row.id"
      class="card w-[23%] m-[1%] border border-black rounded-[5px] shadow-[5px_5px_1px_black] transform transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_1px_black] cursor-pointer"
    >
      <h2>{{ row.name }}</h2>
      <img class="mx-auto" :src="row.image" alt="" />
      <div class="info">
        <p class="species">species - {{ row.species }}</p>
        <p class="status">status - {{ row.status }}</p>
        <button class="info"></button>
      </div>
    </div>
  </div>
</template>

<style>
img {
}
</style>

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
    });
    return {
      store,
    };
  },
};
</script>

<style scoped></style>
