<template>
  <div>
    <Header />
    <slide />
    <butonlar />
    <body1 />
    <body2 />
    <body3 />
    <Footer />
  </div>
</template>

<script>
import slide from "./components/slide.vue";
import butonlar from "./components/butonlar.vue";
import body1 from "./components/body1.vue";
import body2 from "./components/bondy2.vue";
import body3 from "./components/body3.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    slide,
    butonlar,
    body1,
    body2,
    body3,
    Footer
  }
};
</script>

<style>
</style>
