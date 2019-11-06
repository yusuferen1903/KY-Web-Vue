<template>
  <div>
    <Header />
    <kofte1 />
    <Footer />
  </div>
</template>

<script>
import kofte1 from "./components/kofte1.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    kofte1,
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