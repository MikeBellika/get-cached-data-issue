`<template>
  <div>
    <nav class="bg-gray-800 text-white p-4 mb-4">
      <div class="container mx-auto flex gap-4">
        <NuxtLink to="/users" class="hover:text-gray-300">Users</NuxtLink>
        <NuxtLink to="/news" class="hover:text-gray-300">News</NuxtLink>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>`