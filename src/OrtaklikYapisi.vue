<template>
  <div>
    <Header />
    <ortaklik1 />
    <Footer />
  </div>
</template>

<script>
import ortaklik1 from "./components/ortaklik1.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    ortaklik1,
    Footer
  }
};
</script>

<style>
</style>
