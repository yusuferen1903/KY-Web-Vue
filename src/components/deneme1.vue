<template>
  <div id="app5">
    <div ref="myNav" class="overlay">
      <a class="closebtn" @click="closeNav()">&times;</a>
      <div class="overlay-content">
        <a href="#">ABOUT</a>
        <a href="#">SERVİCES</a>
        <a href="#">CLİENT</a>
        <a href="#">CONTACT</a>
      </div>
    </div>
    <span @click="openNav()">open</span>
  </div>
</template>
 
<script>
export default {
  el: "#app5",
  methods: {
    closeNav() {
      this.$refs.myNav.style.width = "0%";
    },
    openNav() {
      this.$refs.myNav.style.width = "100%";
    }
  }
};
</script>

<style scoped>
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgb(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>





