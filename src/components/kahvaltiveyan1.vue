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
    <div class="genel-box">
      <div class="satir">
        <div class="sol-kol-1">
          <!-- SOL TARAFTAKİ MENÜ BURDA EKLENMEYE BAŞLANDI-->
          <h3 class="tablo-cizgi baslik tablo-boyut tablo-genel">ÜRÜN KATEGORİLERİ</h3>
          <ul class="kategori-list duzen gorunus" @click="doAjax">
            <li class>
              <a href="/CigUrunler">Çiğ Ürünler</a>
              <i>
                <svg viewBox="0 0 320 512">
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                  />
                </svg>
              </i>
            </li>
            <li class>
              <a href="/izgara-etler">Izgara Etler</a>
              <i>
                <svg viewBox="0 0 320 512">
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                  />
                </svg>
              </i>
            </li>
            <li class>
              <a class="sabitle" href="/KahvaltiveYan">Kahvaltı ve Yan Ürünler</a>
              <i>
                <svg viewBox="0 0 320 512">
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                  />
                </svg>
              </i>
            </li>
            <li class>
              <a href="/Doner">Döner</a>
              <i>
                <svg viewBox="0 0 320 512">
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                  />
                </svg>
              </i>
            </li>
            <li class>
              <a href="salata-cesitleri.html">Salata Çeşitleri</a>
              <i>
                <svg viewBox="0 0 320 512">
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                  />
                </svg>
              </i>
            </li>
            <li class>
              <a href="tatli-cesitleri.html">Tatlı Çeşitleri</a>
              <i>
                <svg viewBox="0 0 320 512">
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                  />
                </svg>
              </i>
            </li>
            <li class>
              <a href="sarkuteri-urunleri.html">Şarküteri Ürünleri</a>
              <i>
                <svg viewBox="0 0 320 512">
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                  />
                </svg>
              </i>
            </li>
            <li class>
              <a href="icecekler.html">İçecekler</a>
              <i>
                <svg viewBox="0 0 320 512">
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                  />
                </svg>
              </i>
            </li>
          </ul>
        </div>
        <div class="orta-kol-1">
          <h1 class="tablo-cizgi baslik-boyut orta-ayar orta-boy">Kahvaltı ve Yan Ürünler</h1>
          <div class="uyariyazi">
            <h1 class="uyariyazi2">Online sipariş sadece Bursa, Eskişehir ve Yalova için geçerlidir.</h1>
          </div>

          <!-- RESİMLİ OLAN FAVORİ ÜRÜNLER İSE BURDA EKLENMEYE BAŞLANDI -->
          <div class="satir tablo-boyut">
            <div class="kolonlar2 kolon-boyut">
              <form class="urun-list resim-boyut">
                <a href="./" class="d-block">
                  <img
                    src="https://kofteciyusuf.com/uploads/pictures/thumb_kahvalti_26.09.2019_05_44_31.jpg"
                    alt
                    class="img-fluid"
                  />
                </a>
                <div
                  class="detaylar2"
                  style="border: 2px solid #f2f2f2; border-radius: 0 0 20px 20px;"
                >
                  <h3 class="h3yazilar" v-for="todo of KahvaltiTabagi" :key="todo.id">{{todo.urunismi}}</h3>
                  <span class="d-block">KAHVALTI</span>
                  <em class="d-block" v-for="todo of KahvaltiTabagi" :key="todo.id">{{todo.Fiyat}}</em>
                  <button type="button" class="kucuk-buton">SATIN AL</button>
                </div>
              </form>
            </div>
            <div class="kolonlar2 kolon-boyut">
              <form class="urun-list kolon-boyut" style="margin-top: 30px;">
                <a href="./" class="d-block">
                  <img
                    src="https://kofteciyusuf.com/uploads/pictures/thumb_corba_26.09.2019_05_46_32.jpg"
                    alt
                    class="img-fluid"
                  />
                </a>
                <div
                  class="detaylar2"
                  style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;"
                >
                  <h3 class="h3yazilar" v-for="todo of MercimekCorbasi2" :key="todo.id">{{todo.urunismi}}</h3>
                  <span class="d-block">Çorba</span>
                  <em class="d-block" v-for="todo of MercimekCorbasi2" :key="todo.id">{{todo.Fiyat}}</em>
                  <button type="button" class="kucuk-buton">SATIN AL</button>
                </div>
              </form>
            </div>
            <div class="kolonlar2 kolon-boyut">
              <form class="urun-list kolon-boyut" style="margin-top: 30px;">
                <a href="./" class="d-block">
                  <img
                    src="https://kofteciyusuf.com/uploads/pictures/thumb_baharatli-patates_26.09.2019_05_59_39.jpg"
                    alt
                    class="img-fluid"
                  />
                </a>
                <div
                  class="detaylar2"
                  style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;"
                >
                  <h3 class="h3yazilar" v-for="todo of PatatesKizartmasi" :key="todo.id">{{todo.urunismi}}</h3>
                  <span class="d-block">Patates</span>
                  <em class="d-block" v-for="todo of PatatesKizartmasi" :key="todo.id">{{todo.Fiyat}}</em>
                  <button type="button" class="kucuk-buton">SATIN AL</button>
                </div>
              </form>
            </div>
            <div class="kolonlar2 kolon-boyut" style="margin-top: 475px; margin-left: -960px;">
              <form class="urun-list kolon-boyut">
                <a href="./" class="d-block">
                  <img
                    src="https://kofteciyusuf.com/uploads/pictures/thumb_yogurt_26.09.2019_06_48_28.jpg"
                    alt
                    class="img-fluid"
                  />
                </a>
                <div
                  class="detaylar2"
                  style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;"
                >
                  <h3 class="h3yazilar" v-for="todo of Yogurt" :key="todo.id">{{todo.urunismi}}</h3>
                  <span class="d-block">Yoğurt</span>
                  <em class="d-block" v-for="todo of Yogurt" :key="todo.id">{{todo.Fiyat}}</em>
                  <button type="button" class="kucuk-buton">SATIN AL</button>
                </div>
              </form>
            </div>
            <div class="kolonlar2 kolon-boyut" style="margin-top:475px;">
              <form class="urun-list kolon-boyut">
                <a href="./" class="d-block">
                  <img
                    src="https://kofteciyusuf.com/uploads/pictures/thumb_icli-kofte_26.09.2019_06_19_28.jpg"
                    alt
                    class="img-fluid"
                  />
                </a>
                <div
                  class="detaylar2"
                  style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;"
                >
                  <h3 class="h3yazilar" v-for="todo of IcliKofte" :key="todo.id">{{todo.urunismi}}</h3>
                  <span class="d-block">İçli Köfte</span>
                  <em class="d-block" v-for="todo of IcliKofte" :key="todo.id">{{todo.Fiyat}}</em>
                  <button type="button" class="kucuk-buton">SATIN AL</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      KahvaltiTabagi: [],
      MercimekCorbasi2: [],
      PatatesKizartmasi: [],
      Yogurt: [],
      IcliKofte: [],
    };
  },

  components: {
    Loading
  },
   async created() {
    try {
      const res = await axios.get("http://localhost:3000/KahvaltiTabagi");

      this.KahvaltiTabagi = res.data;
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
    try {
      const res = await axios.get("http://localhost:3000/MercimekCorbasi2");

      this.MercimekCorbasi2 = res.data;
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
    try {
      const res = await axios.get("http://localhost:3000/PatatesKizartmasi");

      this.PatatesKizartmasi = res.data;
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
    try {
      const res = await axios.get("http://localhost:3000/Yogurt");

      this.Yogurt = res.data;
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/IcliKofte");

      this.IcliKofte = res.data;
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
  },
  methods: {
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
.genel-box {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 720px;
}
.satir {
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
}
.sol-kol-1 {
  flex: 0 0 35%;
  max-width: 35%;
  margin-left: -215px;
}
.tablo-cizgi {
  padding-bottom: 22px;
  position: relative;
}
.tablo-cizgi.baslik {
  padding-bottom: 10px;
}
.baslik {
  font-size: 18px;
}
.tablo-boyut {
  margin-bottom: 30px;
}
.tablo-genel {
  margin-top: 44px;
}
.tablo-cizgi::after {
  content: "";
  display: block;
  width: 87px;
  height: 2px;
  background-color: #fa9628;
  position: absolute;
  left: 0;
  bottom: 0;
}
.kategori-list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.duzen {
  margin-bottom: 1.5rem !important;
}
.gorunus {
  display: block !important;
}
.d-none {
  display: none !important;
}
.kategori-list li {
  position: relative;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.kategori-list li a {
  position: relative;
  font-size: 13px;
  font-weight: 400;
  color: #333;
  background-color: #f8f8f8;
  display: block;
  padding: 8px 12px;
  border-radius: 5px;
  margin-bottom: 10px;
  transition: all 0.2s;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.kategori-list li i {
  display: block;
  position: absolute;
  right: 14px;
  top: 50%;
  width: 6px;
  height: 25px;
  transform: translateY(-50%);
  color: #6a6a6a;
  z-index: 2;
  transition: all 0.2s;
}
svg {
  overflow: hidden;
  vertical-align: middle;
}

.sol-kol-1 ul li a:hover {
  background-color: #fa9628;
  color: #fff;
}
.orta-kol-1 {
  flex: 0 0 71%;
  max-width: 75%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.tablo-cizgi.baslik-boyut {
  padding-bottom: 9px;
}
.baslik-boyut {
  font-size: 24px;
}
.orta-boy {
  margin-top: 35px;
}
.orta-ayar {
  margin-bottom: 0 !important;
}
.kolonlar2 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.urun-list:hover {
  box-shadow: 0 0 0 0.2px rgba(0, 0, 0, 0.3);
  transition: all ease-in-out 0.1s;
}
.kolon-boyut {
  flex: 0 0 49.333333%;
}
.urun-list {
  border-radius: 20px;
  text-align: center;
}
.resim-boyut {
  margin-top: 30px;
}

a {
  color: #fa9628;
  text-decoration: none;
  background-color: transparent;
}
.urun-list img {
  width: 100%;
  border-radius: 20px 20px 0 0;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
img {
  vertical-align: middle;
  border-style: none;
}
.urun-list.detaylar2 {
  padding-top: 25px;
  border-radius: 0 0 20px 20px;
  border: 2px solid #f2f2f2;
  border-top: none;
  transition: all ease-in-out 0.1s;
}

.h3yazilar {
  padding-top: 25px;
  font-family: sans-serif;
}
.urun-list h3 {
  font-size: 16px;
  margin: 0;
}
.urun-list span.d-block {
  font-size: 14px;
  color: #9e9d9c;
}
.d-block {
  display: block !important;
}
.urun-list em {
  font-style: normal;
  margin: 25px 0;
  font-weight: 500;
  font-size: 18px;
}
.button.kucuk-buton {
  background-color: transparent;
}
.kucuk-buton {
  border: 2px solid #fa9628;
  border-radius: 15px;
  font-size: 14px;
  color: #818181;
  font-weight: 500;
  padding: 4px 19px;
  margin-bottom: 25px;
  display: inline-block;
  transition: all ease-in-out 0.1s;
  background-color: transparent;
}
.kucuk-buton:hover {
  background-color: #fa9628;
  color: #fff;
}

.uyariyazi {
  background-color: #fa9628;
  border-radius: 20px;
  height: 40px;
  width: 560px;
}

.uyariyazi2 {
  font-size: 124%;
  text-align: center;
  padding-top: 8px;
  color: rgb(68, 68, 68);
}
</style>

