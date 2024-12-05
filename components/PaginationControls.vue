<template>
  <div class="flex items-center justify-center gap-2 mt-4">
    <button
      @click="$emit('page-change', currentPage - 1)"
      :disabled="currentPage <= 1"
      class="px-4 py-2 border rounded disabled:opacity-50"
    >
      Previous
    </button>
    <span class="px-4 py-2">
      Page {{ currentPage }} of {{ totalPages }}
    </span>
    <button
      @click="$emit('page-change', currentPage + 1)"
      :disabled="currentPage >= totalPages"
      class="px-4 py-2 border rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentPage: number;
  totalPages: number;
}>();

defineEmits<{
  'page-change': [page: number];
}>();
</script>