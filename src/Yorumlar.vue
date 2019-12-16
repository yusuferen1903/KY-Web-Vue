<template>
  <div>
    <Header />
    <yorumlar />
    <Footer />
  </div>
</template>

<script>
import yorumlar from "./components/yorumlar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app5",
  components: {
    Header,
    yorumlar,
    Footer
  }
};
</script>


