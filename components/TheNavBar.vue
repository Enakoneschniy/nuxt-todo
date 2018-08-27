<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand" >ToDo</nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <DropDown/>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" v-model="query" type="search" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex';
  import DropDown from "./DropDown";
  export default {
    name: "TheNavBar",
    components: { DropDown },
    data() {
      return {
        query: ''
      }
    },
    watch: {
      query(value) {
        this.setQuery(value);
      }
    },
    methods: mapActions({
      setQuery: 'Search/setQuery'
    })
  }
</script>

<style scoped>
  .router-link-exact-active {
    color: #fff !important;
  }
  
</style>
