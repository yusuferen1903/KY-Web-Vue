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
              <a href="/Hakkimizda">Hakkımızda</a>
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
              <a href="./">
                Vizyonumuz & Misyonumuz &
                <br />Değerlerimiz
              </a>
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
              <a href="/OrtaklikYapisi">Ortaklık Yapısı</a>
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
              <a href="./">Üretim Tesisimiz</a>
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
              <a href="/Kalite">Kalite</a>
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
              <a href="./">Belgelerimiz</a>
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
              <a href="/İnsanKaynaklari" class="sabitle">İnsan Kaynakları</a>
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
              <a href="./" class="sssbosluk">Köfteci Yusuf'ta Kariyer</a>
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
              <a href="./" class="sssbosluk">İnsan Kaynakları Yaklaşımımız</a>
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
              <a href="./" class="sssbosluk">Değerlendirme ve İşe Alım</a>
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
              <a href="./" class="sssbosluk">Gelişim İmkanları</a>
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
              <a href="./" class="sssbosluk">Kariyer Fırsatları</a>
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
              <a href="./">Bilgi Toplumu Hizmeti</a>
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
              <a href="./">Kullanım Koşulları</a>
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
              <a href="./">KVK Kanunu</a>
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
              <a href="./">Kiralık Yer Önerisi</a>
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
            <li>
              <a href="./">Sıkça Sorulan Sorular</a>
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
              <a href="./">Öneri ve Şikayet</a>
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

            <li>
              <div class="kolon1">
                <a
                  href="kofteci-yusuf-tesislerinde-uretilen-urunlerimiz.html"
                  class="bizdenhaberler"
                >BİZDEN HABERLER</a>
                <a href="blog.html" class="d-block">
                  <img
                    src="https://kofteciyusuf.com/uploads/pictures/saglikliet_19.09.2018_05_47_05.jpeg"
                    class="sagresim"
                  />
                </a>
              </div>
            </li>

            <li>
              <div class="kolon1">
                <a href="kalite.html" class="gidaguvenligi">GIDA GÜVENLİĞİ</a>
              </div>
            </li>

            <li>
              <div class="kolon1">
                <a href="blog.html" class="lezzetpis">LEZZET VE PİŞİRME ÖNERİLERİ</a>
              </div>
            </li>
          </ul>
        </div>
        <!-- orta kısım burada oluşturulmaya başlanıyor-->
        <div class="orta-kol-1">
          <h3 class="tablo-cizgi baslik-boyut orta-ayar orta-boy">İnsan Kaynakları</h3>
          <div class="yazitipi" lightbox="content-image">
            <a
              href="uploads/pictures/human_ailemize-katilmak-ister-misiniz_09.09.2019_03_59_36.jpg"
              lightbox-item="content-image"
              style="float: left;"
            >
              <img
                src="https://kofteciyusuf.com/uploads/pictures/thumb_human_ailemize-katilmak-ister-misiniz_09.09.2019_03_59_36.jpg"
                alt
                class="w-100"
              />
            </a>

            <p>
              <strong>
                <em>Türkiye’nin en büyük köfte zincirinin büyüme yolculuğunda yer almak isteyen, güler yüzlü ve çalışkan ekip arkadaşları arıyoruz.</em>
              </strong>
            </p>

            <p>Müşteri memnuniyetine gönülden inanarak çalışan bir ekibin üyesi olmak üzere; tam zamanlı ya da yarı zamanlı çalışmak ve kariyer basamaklarını hızla tırmanmak için bize ulaşabilirsiniz. İşimizi bir dünya markası yaparken, siz değerli ekip arkadaşlarına ihtiyacımız var. Sizinle çalışmak isteriz.</p>
            <hr />
            <p>
              Siz de ailemize katılmak ve kariyer yapmak istiyorsanız, aşağıda yeralan
              <strong>Başvuru Formunu doldurunuz.</strong>
            </p>

            <p style="margin-top: 30px;">
              <a href="insan-kaynaklari-basvuru.html" class="basvuruformu">Başvuru Formu</a>

              <a
                target="_blank"
                href="http://www.kariyer.net/kofteci-yusuf-a-s-is-ilanlari-c92509-p43769/?sonincelenen=1420044&amp;tmpsno=1&amp;isaratipi=2"
                class="acikpozisyonlar"
                style="background-color: #02cc24"
              >Açık Pozisyonlar</a>
            </p>
          </div>
        </div>
      </div>
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
  font-weight: 600;
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
  font-size: 20px;
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

.sss {
  padding-bottom: 30px;
}

.sssyazi {
  color: #444444;
  padding-bottom: 30px;
}
.sssbosluk {
  padding-left: 2em !important;
  font-weight: 400 !important;
}
.sssyazi a:hover {
  color: #fba241;
}

.hakkimizdaresim {
  margin-top: 30px;
  height: 486px;
  width: 825px;
  margin-bottom: 20px;
}
.hakkimizdayazi {
  width: 826px;
  color: rgb(68, 68, 68);
  font-family: sans-serif;
}

.altcizgi {
  margin-bottom: 3rem !important;
  margin-top: 3rem !important;
  width: 826px;
  height: 1px;
  color: #fa9628;
  opacity: 0.54;
  border: 0;
  background-color: currentColor;
}

.margin30 {
  margin-top: 30px;
}

.kurumsalaltresim {
  float: left;
  margin: auto;
  display: flex;
}

.mt-3 {
  color: rgb(68, 68, 68);
  font-family: sans-serif;
  padding-top: 20px;
  padding-bottom: 30px;
}

.bizdenhaberler {
  background-color: #fa9628 !important;

  color: white !important;

  line-height: 1 !important;
  padding: 12px !important;
  font-weight: 500 !important;
  text-align: center !important;
  display: block !important;
  text-decoration: none !important;
  font-family: sans-serif !important;
  margin-top: 30px !important;
}

.bizdenhaberler:hover {
  text-decoration: underline !important;
  background-color: #fa9628 !important;
}

.gidaguvenligi {
  color: white !important;

  line-height: 1 !important;
  padding: 12px !important;
  font-weight: 500 !important;
  background-color: #cc021b !important;
  text-align: center !important;
  display: block !important;
  text-decoration: none !important;
  font-family: sans-serif !important;
}

.gidaguvenligi:hover {
  text-decoration: underline !important;
  background-color: #cc021b !important;
}

.lezzetpis {
  background-color: #585858 !important;

  color: white !important;

  line-height: 1 !important;
  padding: 12px !important;
  font-weight: 500 !important;
  text-align: center !important;
  display: block !important;
  text-decoration: none !important;
  font-family: sans-serif !important;
}

.lezzetpis:hover {
  text-decoration: underline !important;
  background-color: #585858 !important;
}

.sagresim {
  max-width: 100% !important;
  height: auto !important;
  vertical-align: middle !important;
  border-style: none !important;
}

.sagresim:hover {
  background-color: #ffffff !important;
}

.basvuruformu {
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
  font-family: sans-serif;
}
.basvuruformu:hover {
  background-color: #fba241;
}

.acikpozisyonlar {
  background-color: #02cc24;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 500;
  padding: 14px 20px;
  min-width: 150px;
  max-width: 100%;
  text-align: center;
  border-radius: 10px;
  font-family: sans-serif;
  margin-left: 5px;
}

.yazitipi {
  color: rgb(68, 68, 68);
  font-family: sans-serif;
  width: 826px;
}
</style>


  

