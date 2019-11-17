<template>
  <div>
    <Header />
    <sss />
    <Footer />
  </div>
</template>

<script>
import sss from "./components/sss.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    sss,
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
