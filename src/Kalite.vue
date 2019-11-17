<template>
  <div>
    <Header />
    <kalite />
    <Footer />
  </div>
</template>

<script>
import kalite from "./components/kalite.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    kalite,
    Footer
  }
};
</script>

<style>
</style>
