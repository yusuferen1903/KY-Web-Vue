<template>
  <div>
    <deneme1 />
  </div>
</template>

<script>
import deneme1 from "./components/deneme1.vue";
import Vue from "vue";

export default {
  name: "app5",
  components: {
    deneme1
  }
};

new Vue({
  el: "#app5",
  methods: {
    closeNav() {
      this.$refs.myNav.style.width = "0%";
    },
    openNav() {
      this.$refs.myNav.style.width = "100%";
    }
  }
});
</script>


