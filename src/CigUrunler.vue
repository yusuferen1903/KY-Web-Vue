<template>
  <div>
    <Header2 />
    <cigurunler1 />
    <Footer />
  </div>
</template>

<script>
import cigurunler1 from "./components/cigurunler1.vue";
import Header2 from "./components/Header2.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header2,
    cigurunler1,
    Footer
  }
};
</script>

<style>
.sabitle2 {
  background-color: #e30613 !important;
  color: #fff !important;
}
</style>