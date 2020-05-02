<template>
  <div class="notFoundContainer">
    <div class="m-b-xxl">
      <h1 class="title">{{title}}</h1>
      <router-link :to="navigateToPage" class="button is-primary">{{navigateToText}}</router-link>
    </div>
    <h2 class="subtitle">{{status}}</h2>
  </div>
</template>

<script>
export default {
  name: "ErrorView",
  props: {
    title: {
      required: true,
      type: String
    },
    status: {
      required: true,
      type: String
    },
    navigateToPage: {
      required: true,
      type: String
    },
    navigateToText: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
</style>