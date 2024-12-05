<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">News Articles</h1>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border">
        <thead>
          <tr>
            <th class="px-6 py-3 border-b">ID</th>
            <th class="px-6 py-3 border-b">Title</th>
            <th class="px-6 py-3 border-b">Summary</th>
            <th class="px-6 py-3 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in data?.articles" :key="article.id">
            <td class="px-6 py-4 border-b">{{ article.id }}</td>
            <td class="px-6 py-4 border-b">{{ article.title }}</td>
            <td class="px-6 py-4 border-b">{{ article.summary }}</td>
            <td class="px-6 py-4 border-b">{{ article.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <PaginationControls
      :current-page="page"
      :total-pages="data?.totalPages || 1"
      @page-change="handlePageChange"
    />
  </div>
</template>

<script setup lang="ts">
import type { NuxtApp, UseFetchOptions } from "nuxt/app";
function getCachedData(key: string, nuxtApp: NuxtApp) {
  const data = nuxtApp.payload.data[key] ?? nuxtApp.static.data[key];
  return data;
}
const page = ref(1);
const { data, refresh } = await useFetch("/api/news", {
  query: { page },
  key: `news-${page}`,
  getCachedData,
});

const handlePageChange = (newPage: number) => {
  page.value = newPage;
  refresh();
};
</script>

