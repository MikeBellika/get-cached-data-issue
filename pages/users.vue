<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Users</h1>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border">
        <thead>
          <tr>
            <th class="px-6 py-3 border-b">ID</th>
            <th class="px-6 py-3 border-b">Name</th>
            <th class="px-6 py-3 border-b">Email</th>
            <th class="px-6 py-3 border-b">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in data?.users" :key="user.id">
            <td class="px-6 py-4 border-b">{{ user.id }}</td>
            <td class="px-6 py-4 border-b">{{ user.name }}</td>
            <td class="px-6 py-4 border-b">{{ user.email }}</td>
            <td class="px-6 py-4 border-b">{{ user.role }}</td>
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

