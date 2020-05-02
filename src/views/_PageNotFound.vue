<template>
  <div class="container">
    <ErrorView
      :title="'Page does not exist'"
      :status="'404'"
      :navigateToPage="'/'"
      :navigateToText="'Navigate back home'"
    />
  </div>
</template>

<script>
import ErrorView from "@/components/ErrorView";
export default {
  name: "PageNotFound",
  components: {
    ErrorView
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 40px;
}
.subtitle {
  font-size: 140px;
  text-align: center;
}
.notFoundContainer {
  margin-top: 80px;
}
</style>