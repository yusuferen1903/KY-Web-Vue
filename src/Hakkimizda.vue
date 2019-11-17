<template>
  <div>
    <Header />
    <hakkimizda1 />
    <Footer />
  </div>
</template>

<script>
import hakkimizda1 from "./components/hakkimizda1.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    hakkimizda1,
    Footer
  }
};
</script>

<style>
</style>
