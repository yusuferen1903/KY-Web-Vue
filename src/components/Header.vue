<template>
  <div>
    <div class="vld-parent">
      <loading
        :active.sync="isLoading"
        :can-cancel="true"
        :on-cancel="onCancel"
        :is-full-page="fullPage"
      ></loading>
    </div>
    <div class="ust">
      <div class="ust2">
        <div class="ust3">
          <a href class="logo">
            <img src="https://kofteciyusuf.com/assets/dist/img/logo.png" alt class="img-fluid" />
          </a>
        </div>

        <div class="ustyazilar1">
          <ul class="ustyazilar" @click="doAjax">
            <li>
              <a href="#">
                <span>Ürünlerimiz</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Şubelerimiz</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Kurumsal</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="app5" class="arama">
          <div ref="myNav" class="overlay">
            <a class="closebtn" @click="closeNav()">&times;</a>
            <div class="overlay-content">
              <textarea
                name="directions"
                required
                placeholder="ARAMAK İSTEDİĞİNİZ ŞEYİ YAZINIZ..."
                rows="3"
                class="aramak"
              ></textarea>
            </div>
          </div>
          <svg width="25px" role="img" color="#fff" viewBox="0 0 512 512" @click="openNav()">
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            />
          </svg>
          <!-- <span @click="openNav()">open</span> -->
        </div>
        <div class="sagust">
          <div class="sagust2">
            <div>
              <a href="tel:4446162" class="turuncu" @click="doAjax">
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 480.56 480.56"
                  width="30px"
                  height="30px"
                  style="vertical-align: middle; fill:#fff"
                >
                  <g>
                    <path
                      d="M365.354,317.9c-15.7-15.5-35.3-15.5-50.9,0c-11.9,11.8-23.8,23.6-35.5,35.6c-3.2,3.3-5.9,4-9.8,1.8
										c-7.7-4.2-15.9-7.6-23.3-12.2c-34.5-21.7-63.4-49.6-89-81c-12.7-15.6-24-32.3-31.9-51.1c-1.6-3.8-1.3-6.3,1.8-9.4
										c11.9-11.5,23.5-23.3,35.2-35.1c16.3-16.4,16.3-35.6-0.1-52.1c-9.3-9.4-18.6-18.6-27.9-28c-9.6-9.6-19.1-19.3-28.8-28.8
										c-15.7-15.3-35.3-15.3-50.9,0.1c-12,11.8-23.5,23.9-35.7,35.5c-11.3,10.7-17,23.8-18.2,39.1c-1.9,24.9,4.2,48.4,12.8,71.3
										c17.6,47.4,44.4,89.5,76.9,128.1c43.9,52.2,96.3,93.5,157.6,123.3c27.6,13.4,56.2,23.7,87.3,25.4c21.4,1.2,40-4.2,54.9-20.9
										c10.2-11.4,21.7-21.8,32.5-32.7c16-16.2,16.1-35.8,0.2-51.8C403.554,355.9,384.454,336.9,365.354,317.9z"
                    />
                    <path
                      d="M346.254,238.2l36.9-6.3c-5.8-33.9-21.8-64.6-46.1-89c-25.7-25.7-58.2-41.9-94-46.9l-5.2,37.1
										c27.7,3.9,52.9,16.4,72.8,36.3C329.454,188.2,341.754,212,346.254,238.2z"
                    />
                    <path
                      d="M403.954,77.8c-42.6-42.6-96.5-69.5-156-77.8l-5.2,37.1c51.4,7.2,98,30.5,134.8,67.2c34.9,34.9,57.8,79,66.1,127.5
										l36.9-6.3C470.854,169.3,444.354,118.3,403.954,77.8z"
                    />
                  </g>
                </svg>

                <span class="turuncuspan">
                  <em class="siparishatti">Sipariş Hattı</em>
                  <em class="tel">444 61 62</em>
                </span>
              </a>
            </div>

            <div style="padding-left: 25px; padding-right: 25px;">
              <a href="/Favori-urunlerimiz" class="kirmizibuton" @click="doAjax">
                <svg width="40px" height="40px" style="vertical-align: middle;">
                  <image
                    x="0px"
                    y="0px"
                    width="40px"
                    height="40px"
                    xlink:href="data:img/png;base64,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"
                  />
                </svg>

                <span class="kirmizispan">
                  <em class="online">Online</em>
                  <em class="siparisver">Sipariş Ver</em>
                </span>
              </a>
            </div>

            <div class="sepet" @click="doAjax">
              <router-link to="/Sepetim">
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 511.999 511.999"
                  style="height: 40px; fill:#fff"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M214.685,402.828c-24.829,0-45.029,20.2-45.029,45.029c0,24.829,20.2,45.029,45.029,45.029s45.029-20.2,45.029-45.029
								C259.713,423.028,239.513,402.828,214.685,402.828z M214.685,467.742c-10.966,0-19.887-8.922-19.887-19.887
								c0-10.966,8.922-19.887,19.887-19.887s19.887,8.922,19.887,19.887C234.572,458.822,225.65,467.742,214.685,467.742z"
                    />
                  </g>
                  <g>
                    <path
                      d="M372.63,402.828c-24.829,0-45.029,20.2-45.029,45.029c0,24.829,20.2,45.029,45.029,45.029s45.029-20.2,45.029-45.029
								C417.658,423.028,397.458,402.828,372.63,402.828z M372.63,467.742c-10.966,0-19.887-8.922-19.887-19.887
								c0-10.966,8.922-19.887,19.887-19.887c10.966,0,19.887,8.922,19.887,19.887C392.517,458.822,383.595,467.742,372.63,467.742z"
                    />
                  </g>
                  <g>
                    <path
                      d="M383.716,165.755H203.567c-6.943,0-12.571,5.628-12.571,12.571c0,6.943,5.629,12.571,12.571,12.571h180.149
								c6.943,0,12.571-5.628,12.571-12.571C396.287,171.382,390.659,165.755,383.716,165.755z"
                    />
                  </g>
                  <g>
                    <path
                      d="M373.911,231.035H213.373c-6.943,0-12.571,5.628-12.571,12.571s5.628,12.571,12.571,12.571h160.537
								c6.943,0,12.571-5.628,12.571-12.571C386.481,236.664,380.853,231.035,373.911,231.035z"
                    />
                  </g>
                  <g>
                    <path
                      d="M506.341,109.744c-4.794-5.884-11.898-9.258-19.489-9.258H95.278L87.37,62.097c-1.651-8.008-7.113-14.732-14.614-17.989
								l-55.177-23.95c-6.37-2.767-13.773,0.156-16.536,6.524c-2.766,6.37,0.157,13.774,6.524,16.537L62.745,67.17l60.826,295.261
								c2.396,11.628,12.752,20.068,24.625,20.068h301.166c6.943,0,12.571-5.628,12.571-12.571c0-6.943-5.628-12.571-12.571-12.571
								H148.197l-7.399-35.916H451.69c11.872,0,22.229-8.44,24.624-20.068l35.163-170.675
								C513.008,123.266,511.136,115.627,506.341,109.744z M451.69,296.301H135.619l-35.161-170.674l386.393,0.001L451.69,296.301z"
                    />
                  </g>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
        <div class="girisbutonlar">
          <div class="giristurkir">
            <a href="/Giris" @click="doAjax">
              <button type="submit" class="giriskirmizi">Giriş Yap</button>
            </a>
          </div>
          <!-- UYE OL BUTONU BASINCA UYELİK SAYFASINA GİDİYOR -->
          <div class="giristurkir">
            <a href="/Uyelik" class="giristuruncu" @click="doAjax">Üye Ol</a>
          </div>
        </div>
      </div>
    </div>
    <!-- navigation bar eklendi -->
    <div class="navbar yazitipi">
      <ul @click="doAjax">
        <li class="dropdown" style="margin-left:28%">
          <a href="CigUrunler" class="dropbtn">Çiğ Ürünler</a>
          <div class="dropdown-content">
            <a href="/KofteCig">Köfte</a>
            <a href="#">Kasap Sucuk</a>
            <a href="#">Dana Kıyma</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="/izgaraetler" class="dropbtn">Izgara Etler</a>
          <div class="dropdown-content">
            <a href="/Kofte">Köfte</a>
            <a href="#">Sucuk</a>
            <a href="#">Piliç İncik</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="/KahvaltiveYan" class="dropbtn">Kahvaltı ve Yan Ürünler</a>
          <div class="dropdown-content">
            <a href="#">Kahvaltı Tabağı</a>
            <a href="#">Mercimek Çorbası</a>
            <a href="#">Patates Kızartması</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="/Doner" class="dropbtn">Döner</a>
          <div class="dropdown-content">
            <a href="#">Döner Dürüm</a>
            <a href="#">Mercimek Çorbası</a>
            <a href="#">Döner Ekmek Arası</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  data() {
    return {
      isLoading: false,
      fullPage: true
    };
  },

  components: {
    Loading
  },

  el: "#app5",
  methods: {
    closeNav() {
      this.$refs.myNav.style.width = "0%";
    },
    openNav() {
      this.$refs.myNav.style.width = "100%";
      this.$refs.myNav.style.height = "28.3%";
    },
    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    }
  }
};
</script>

<style scoped>
.yazitipi {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  color: #444444;
  text-align: left;
  background-color: #ffffff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: black;
}

.navbar ul li {
  float: left;
}

.navbar ul li a,
.dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar ul li a:hover,
.dropdown:hover .dropbtn {
  color: #fba241;
  background-color: black;
}

.navbar ul li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.ust {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: black;
}

.ust2 {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  padding-left: 25px;
}

.logo {
  display: block;
  margin: 24px 0;
  width: 236px;
  text-align: center;
  position: relative;
  transition: all 0.2s;
}

.ust3 {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.ustyazilar1 {
  margin-left: -35px;
}

.urunler {
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px;
  height: 100%;
}

.ustyazilar {
  list-style: none;
  height: 100%;
}

.ustyazilar li {
  height: 100%;
  float: left;
  display: block;
}

.ustyazilar li a {
  padding: 25px 8px;
  display: flex;
  text-decoration: none;
  font-size: larger;

  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: #fff;
}

.ustyazilar li:hover > a {
  color: #fa9628;
}

.arama {
  display: flex;
  padding-left: 25px;
  cursor: pointer;
}

.overlayarama {
  background-color: black;
  border: 0;
  cursor: pointer;
}

.sagust {
  align-self: center !important;
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
  padding-left: 40px;
}

.sagust2 {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}

.turuncu {
  border-radius: 10px;
  background-color: #fa9628;
  text-decoration: none;
  display: inline-block;
  padding: 10px;
}

.turuncu:hover {
  background-color: #fba241;
}

.turuncuspan {
  display: inline-block;
  vertical-align: middle;
  padding-left: 10px;
}

.siparishatti {
  color: #9a560a;
  font-size: 17px;
  font-weight: 500;
}

.tel {
  color: #fff;
  font-style: normal;
  display: block;
  line-height: 1.2;
  font-size: 23px;
  font-weight: 900;
}

.kirmizibuton {
  border-radius: 10px;
  background-color: #cc021b;
  text-decoration: none;
  display: inline-block;
  padding: 10px;
}

.kirmizibuton:hover {
  background-color: #e5021e;
}

.kirmizispan {
  display: inline-block;
  vertical-align: middle;
  padding-left: 10px;
}

.online {
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  font-style: normal;
}

.siparisver {
  color: #fff;
  font-style: normal;
  display: block;
  line-height: 1.2;
  font-size: 23px;
  font-weight: 900;
  font-style: normal;
}

.sepet {
  width: 60px;
  text-align: center;
  background-color: #585858;
  padding-top: 12px;
  border-radius: 10px;
}
.sepet:hover {
  background-color: #3f3f3f;
}

.giriskirmizi {
  background-color: #cc021b;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 500;
  padding: 14px 20px;
  min-width: 150px;
  max-width: 100%;
  text-align: center;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 7px;
}

.giriskirmizi:hover {
  background-color: #e5021e;
}

.giristuruncu {
  background-color: #fa9628;
  color: #000;
  border: none;
  font-size: 16px;
  font-weight: 500;
  padding: 14px 20px;
  min-width: 150px;
  max-width: 100%;
  text-align: center;
  border-radius: 10px;
  box-sizing: border-box;
  display: block !important;
  text-decoration: none;
  margin-top: 7px;
}
.girisbutonlar {
  margin-left: 30px;
}
.giristuruncu:hover {
  background-color: #fba241;
}
.aramak {
  width: 100%;
  height: 182px;
}
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: white;

  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  /* position: relative;
  top: 25%; */
  width: 100%;
  /* text-align: center;
  margin-top: 30px; */
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











