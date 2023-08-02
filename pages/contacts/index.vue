<template>
  <div class="contacts" @click="click">Contacts</div>
</template>
<script>
export default {
  methods: {
    click() {
      console.log(this.$route);
    },
  },
};
</script>
