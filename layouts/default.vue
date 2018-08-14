<template>
  <div>
    <TheNavBar/>
    <div class="container">
      <nuxt/>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
  import TheNavBar from "../components/TheNavBar";
  import TheFooter from "../components/TheFooter";

  export default {
    components: {
      TheFooter,
      TheNavBar
    }
  }
</script>

<style scoped>

</style>
