<template>
  <div>
    <Header />
    <giris />
    <Footer />
  </div>
</template>

<script>
import giris from "./components/giris.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    giris,
    Footer
  }
};
</script>

<style>
</style>
