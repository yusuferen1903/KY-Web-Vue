<template>
  <div>
    <Header />
    <doner1 />
    <Footer />
  </div>
</template>

<script>
import doner1 from "./components/doner1.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    doner1,
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