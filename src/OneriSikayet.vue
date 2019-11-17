<template>
  <div>
    <Header />
    <onerisikayet />
    <Footer />
  </div>
</template>

<script>
import onerisikayet from "./components/onerisikayet.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    onerisikayet,
    Footer
  }
};
</script>

<style>
</style>
