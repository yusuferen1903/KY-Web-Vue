<template>
  <div>
    <div class="slide">
      <a href="./">
        <img
          class="Slide"
          src="https://kofteciyusuf.com/uploads/pictures/avatars_slide-home_22.08.2019_01_25_32.jpg"
          style="width:100%"
        />
      </a>
      <a href="./">
        <img
          class="Slide"
          src="https://kofteciyusuf.com/uploads/pictures/avatars_sitebanner_04.10.2019_06_47_03.jpg"
          style="width:100%"
        />
      </a>
      <a href="./">
        <img
          class="Slide"
          src="https://kofteciyusuf.com/uploads/pictures/avatars_ezme-sos_23.10.2019_11_58_26.jpg"
          style="width:100%"
        />
      </a>
      <a href="./">
        <img
          class="Slide"
          src="https://kofteciyusuf.com/uploads/pictures/avatars_icli-kofte2_21.10.2019_09_22_26.jpg"
          style="width:100%"
        />
      </a>

      <button class="left-button" onclick="plusDivs(-1)">
        <img class="ok" src="https://kofteciyusuf.com/assets/dist/img/slide-prev.png" />
      </button>
      <button class="right-button" onclick="plusDivs(1)">
        <img class="ok" src="https://kofteciyusuf.com/assets/dist/img/slide-next.png" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.Slide {
  width: 100%;
  display: block;
}
.right-button {
  color: #fff !important;
  background-color: #000 !important;
  position: absolute;
  top: 35%;
  left: 95%;
  transform: translate(0%, -50%);
  border: none;
  display: inline-block;
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  opacity: 0.5;
}
.left-button {
  color: #fff !important;
  background-color: #000 !important;
  position: absolute;
  top: 35%;
  right: 95%;
  transform: translate(0%, -50%);
  border: none;
  display: inline-block;
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  opacity: 0.5;
}
</style>