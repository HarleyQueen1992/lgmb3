<template>
  <div class="home"><h1 class="title">Nuxt Anime</h1></div>
</template>
<script setup>
const { $anime } = useNuxtApp();

onMounted(() => {
  $anime({ targets: '.title', translateX: 650, duration: 1800 });
});
</script>
