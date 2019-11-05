<template>
  <div>
    <Header />
    <uyelik />
    <Footer />
  </div>
</template>

<script>
import uyelik from "./components/uyelik.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    uyelik,
    Footer
  }
};
</script>

<style>
</style>
