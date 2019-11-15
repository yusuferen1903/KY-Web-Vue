<template>
  <div id="app5" style="background-color:#101010">
    <div ref="myNav" class="overlay">
      <button class="closebtn footerkapat" @click="closeNav()">FOOTER KAPAT</button>

      <div class="footer">
        <div class="alt">
          <div class="alt2">
            <div class="solalt">
              <a href="./">
                <img
                  src="https://kofteciyusuf.com/assets/dist/img/footer-logo.png"
                  alt
                  class="footer-logo"
                />
              </a>

              <hr class="cizgi" />

              <a href="tel:4446162" class="solalt2">
                <img src="https://kofteciyusuf.com/assets/dist/img/phone.png" alt class="img-fluid" />
              </a>
            </div>
            <div class="ortakisim">
              <div class="ortakisim2">
                <div class="kurumsal">
                  <h5 class="footer-title">KURUMSAL</h5>

                  <ul>
                    <li>
                      <a href="hakkimizda.html">Şirket Profili</a>
                    </li>
                    <li>
                      <a href="belgelerimiz.html">Belgelerimiz</a>
                    </li>
                    <li>
                      <a href="iletisim.html">İletişim Bilgileri</a>
                    </li>
                    <li>
                      <a href="insan-kaynaklari.html">İnsan Kaynakları</a>
                    </li>
                    <li>
                      <a href="kiralik-isyeri-onerisi.html">Kiralık Yer Önerisi</a>
                    </li>
                  </ul>
                </div>
                <div class="onemli">
                  <h5 class="footer-title">ÖNEMLİ</h5>

                  <ul>
                    <li>
                      <a href="subelerimiz.html">Şubelerimiz</a>
                    </li>
                    <li>
                      <a href="videogaleri.html">Video Galeri</a>
                    </li>
                    <li>
                      <a href="fotogaleri.html">Foto Galeri</a>
                    </li>
                    <li>
                      <a href="haberler.html">Bizden Haberler</a>
                    </li>
                    <li>
                      <a href="blog.html">Köfteci Yusuf Blog</a>
                    </li>
                  </ul>
                </div>
                <div class="destek">
                  <h5 class="footer-title">DESTEK</h5>

                  <ul>
                    <li>
                      <a href="kvk-kanunu.html">KVK Kanunu</a>
                    </li>
                    <li>
                      <a href="iletisim.html">Öneri ve Şikayet</a>
                    </li>
                    <li>
                      <a href="kullanim-kosullari.html">Kullanım Koşulları</a>
                    </li>
                    <li>
                      <a href="/SSS">Sıkça Sorulan Sorular</a>
                    </li>
                    <li>
                      <a href="bilgi-toplumu-hizmeti.html">Bilgi Toplum Hizmetleri</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="sagalt">
              <div class="sagaltust">
                <a href="#" data-target=".tab-0">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    class="svg-inline--fa fa-facebook-f fa-w-10"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>
                </a>

                <a href="#" data-target=".tab-1">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    class="svg-inline--fa fa-twitter fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                </a>
              </div>

              <div class="tab tab-0">
                <div class="block-content" style="height: 270px">
                  <div
                    class="fb-like-box fb_iframe_widget"
                    data-href="https://www.facebook.com/kofteciyusuftr/"
                    data-height="204"
                    data-width="350"
                    data-show-faces="false"
                    data-stream="true"
                    data-show-border="false"
                    data-header="false"
                    fb-xfbml-state="rendered"
                    fb-iframe-plugin-query="app_id=&amp;container_width=290&amp;header=false&amp;height=204&amp;href=https%3A%2F%2Fwww.facebook.com%2Fkofteciyusuftr%2F&amp;locale=en_US&amp;sdk=joey&amp;show_border=false&amp;show_faces=false&amp;stream=true&amp;width=350"
                  >
                    <span style="vertical-align: bottom; width: 350px; height: 204px;">
                      <iframe
                        name="f12aeb80d29167c"
                        width="350px"
                        height="204px"
                        title="fb:like_box Facebook Social Plugin"
                        frameborder="0"
                        allowtransparency="true"
                        allowfullscreen="true"
                        scrolling="no"
                        allow="encrypted-media"
                        src="https://www.facebook.com/plugins/like_box.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D44%23cb%3Df37826bc224967c%26domain%3Dkofteciyusuf.com%26origin%3Dhttps%253A%252F%252Fkofteciyusuf.com%252Ff269853a37c17f4%26relation%3Dparent.parent&amp;container_width=290&amp;header=false&amp;height=204&amp;href=https%3A%2F%2Fwww.facebook.com%2Fkofteciyusuftr%2F&amp;locale=en_US&amp;sdk=joey&amp;show_border=false&amp;show_faces=false&amp;stream=true&amp;width=350"
                        style="border: none; visibility: visible; width: 350px; height: 204px;"
                        class
                      ></iframe>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="enaltkisim">
          <div class="altyazi">
            <a href="site-haritasi.html">Site Haritası</a>
          </div>

          <div class="altyazi">
            <a href="./">
              <span class="beyaz">Copyright ©</span> kofteciyusuf.com
            </a>
          </div>

          <div class="altyazi">
            <a href="https://ctrlf5.com.tr">
              <img src="http://kofteciyusuf.com/assets/dist/img/ctrlf5.png" alt class="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <button class="footerac" @click="openNav()">FOOTER AÇ</button>
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
.footerac {
  background-color: #fa9628;
  color: white;
  outline: 0;
  border: 0;
  height: 50px;
  width: 100px;
  font-weight: bold;
  cursor: pointer;
}

.footerac:hover {
  background-color: #fba241;
}

.footerkapat {
  background-color: #fa9628;
  color: white;
  outline: 0;
  border: 0;
  height: 50px;
  width: 100px;
  font-weight: bold;
}

.footerkapat:hover {
  background-color: #fba241;
}

.overlay {
  width: 0;
  position: absolute;
  z-index: 1;
  left: 0;
  background-color: #101010;
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

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  cursor: pointer;
}

/* @media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  } 
  .overlay .closebtn {
    top: 15px;
    right: 35px;
  }
}*/
.solalt {
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.footer-logo {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
}
.footer {
  margin-top: 70px;
  background-color: #101010;
  display: block;
}

.alt {
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: block;
}

.alt2 {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  padding-left: 50px;
}

.solalt {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 25%;
  max-width: 20%;
}

.cizgi {
  margin-top: 15px;
  margin-bottom: 15px;
  height: 1px;
  background-color: #fff;
  display: block !important;
  margin: 10px 0;
  opacity: 0.54;
  border: 0;
}

.solalt2 {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
}

.ortakisim {
  display: block !important;
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
  position: relative;
  width: 100%;

  padding-left: 15px;
}

.ortakisim2 {
  margin-right: 0;
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
}

.kurumsal {
  padding-right: 0;
  padding-left: 0;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 30%;
  position: relative;
  width: 100%;
}

.footer-title {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 12px;
  margin-bottom: 15px;
  position: relative;
  font-family: sans-serif;
}

footer h5:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  width: 19px;
  background-color: #fa9628;
}

.footer ul {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  color: white;
  font-family: sans-serif;
}

.footer ul li {
  margin-bottom: 18px;
}

.footer :hover > a {
  color: #fa9628;
}
.footer ul a {
  color: #fff;
  font-weight: 300;
  text-decoration: none;
  background-color: transparent;
}

.onemli {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 30%;
  padding-right: 0;
  padding-left: 0;
  position: relative;
  width: 100%;
}

.destek {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 30%;
  padding-right: 0;
  padding-left: 0;
  position: relative;
  width: 100%;
}

.sagalt {
  display: block !important;
}

.sagaltust a {
  float: left;
  display: block;
  padding: 6px 30px;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.12);
}

.sagaltust a svg {
  height: 20px;
}

.enaltkisim {
  margin-top: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.17);
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.altkolon {
  width: auto;
  flex: 0 0 auto;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 80px;
}

.sosyalmedya {
  margin-right: 40px;
  display: inline-block;
  color: #ffffff;
  height: 20px;
  transition: all 0.1s;
}

.footer .sosyalmedya svg {
  height: 100%;
  overflow: hidden;
  vertical-align: middle;
}

.altyazi {
  text-align: center;
  display: block !important;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  font-family: sans-serif;
}

.altyazi a {
  color: #fa9628;
  text-decoration: none;
  background-color: transparent;
}

.beyaz {
  color: white;
}
</style>





