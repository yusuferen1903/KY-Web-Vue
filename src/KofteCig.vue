<template>
  <div>
    <Header />
    <koftecig1 />
    <Footer />
  </div>
</template>

<script>
import koftecig1 from "./components/koftecig1.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    koftecig1,
    Footer
  }
};
</script>

<style>
.sabitle {
  background-color: #fa9628 !important;
  color: #fff !important;
}

.sol-kol-1 ul li a:hover {
  background-color: #fa9628 !important;
  color: #fff !important;
}
</style>