<template>
  <div>
    <slide />
    <butonlar />
    <body1 />
    <body2 />
    <body3 />
  </div>
</template>

<script>
import slide from "./components/slide.vue";
import butonlar from "./components/butonlar.vue";
import body1 from "./components/body1.vue";
import body2 from "./components/body2.vue";
import body3 from "./components/body3.vue";
export default {
  name: "app",
  components: {
    slide,
    butonlar,
    body1,
    body2,
    body3
  }
};
</script>

<style>
</style>
