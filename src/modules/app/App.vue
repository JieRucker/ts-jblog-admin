<template>
  <div id="main" class="app-main">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  /*import Vue from "vue";
  import Component from "vue-class-component";

  @Component
  export default class App extends Vue {
  }*/

  /*export default {
    data() {
      return {
        theme: this.$store.state.app.themeColor
      };
    }
  };*/
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Mutation, State } from 'vuex-class';
  // import Header from './components/Header.vue';
  // import Footer from './components/Footer.vue';
  @Component({
    components: {
      // Header,
      // Footer,
    },
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  html, body {
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
  }

  .app-main {
    width: 100%;
    height: 100%;
  }
</style>
