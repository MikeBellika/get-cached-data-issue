<template>
  <div>
    <NuxtLink to="/users">Go to /users</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { NuxtApp, UseFetchOptions } from "nuxt/app";
function getCachedData(key: string, nuxtApp: NuxtApp) {
  const data = nuxtApp.payload.data[key] ?? nuxtApp.static.data[key];
  return data;
}

const page = ref(1);
const { data, refresh } = await useFetch("/api/users", {
  query: { page },
  key: `users-${page}`,
  getCachedData,
  watch: [page],
});

const handlePageChange = (newPage: number) => {
  page.value = newPage;
};
</script>
