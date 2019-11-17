<template>
  <div>
    <Header />
    <insankaynaklari />
    <Footer />
  </div>
</template>

<script>
import insankaynaklari from "./components/insankaynaklari.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    insankaynaklari,
    Footer
  }
};
</script>

<style>
</style>
