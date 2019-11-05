<template>
  <div>
    <Header />
    <favoribody1 />
    <Footer />
  </div>
</template>

<script>
import favoribody1 from "./components/favoribody1.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    favoribody1,
    Footer
  }
};
</script>

<style>
</style>
