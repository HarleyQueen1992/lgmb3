<template>
  <div class="home">
    <h1 class="title">0</h1>
    <input class="input" type="text" />
    <a href="./../documents/licenses/test.pdf">Logo</a>
  </div>
</template>
<script setup>
const { $anime } = useNuxtApp();
let isVisible = false;
const handleScroll = () => {
  // Your scroll handling here
  let el = document.getElementsByClassName('title')[0];
  console.log(window.scrollY);
  if (window.scrollY > el.offsetTop - window.innerHeight && !isVisible) {
    $anime({
      targets: '.title',
      innerHTML: [0, 1000],
      easing: 'linear',
      round: 1, // Will round the animated value to 1 decimal
    });
    isVisible = true;
  }
  if (
    window.scrollY > el.offsetTop + window.innerHeight ||
    window.scrollY < el.offsetTop - window.innerHeight
  ) {
    isVisible = false;
  }
};
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>
<style lang="scss">
.title {
  margin-top: 1800px;
}
</style>
