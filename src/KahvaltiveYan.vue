<template>
  <div>
    <Header />
    <kahvaltiveyan1 />
    <Footer />
  </div>
</template>

<script>
import kahvaltiveyan1 from "./components/kahvaltiveyan1.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    kahvaltiveyan1,
    Footer
  }
};
</script>

<style>
.sabitle {
  background-color: #fa9628 !important;
  color: #fff !important;
}
</style>