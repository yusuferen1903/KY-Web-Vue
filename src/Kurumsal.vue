<template>
  <div>
    <Header />
    <kurumsal1 />
    <Footer />
  </div>
</template>

<script>
import kurumsal1 from "./components/kurumsal1.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    kurumsal1,
    Footer
  }
};
</script>

<style>
</style>
