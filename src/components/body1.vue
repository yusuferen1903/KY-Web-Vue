<template>
  <div>
    <section class="orta-urunler">
      <div class="kolonlar">
        <div class="col-12">
          <h3 class="tablo1" style>FAVORİ LEZZETLER</h3>
        </div>
        <div class="kol-6 kol-sm-3" style="padding-left:135px">
          <form class="urun-liste-malz mt-30">
            <a href="/deneme" class="u-block">
              <img
                src="https://kofteciyusuf.com/uploads/pictures/thumb_kofte_26.09.2019_01_30_09.jpg"
              />
            </a>
            <div class="detaylar">
              <h3 class="kalin">Köfte</h3>
              <span class="u-block">200 GR KÖFTE</span>
              <em class="u-block">16.00 TL</em>
            </div>
          </form>
        </div>
        <div class="kol-6 kol-sm-3">
          <form class="urun-liste-malz mt-30">
            <a href="./" class="u-block">
              <img
                src="https://kofteciyusuf.com/uploads/pictures/thumb_icli-kofte_26.09.2019_06_19_28.jpg"
              />
            </a>
            <div class="detaylar">
              <h3 class="kalin">İçli Köfte</h3>
              <span class="u-block">İçli Köfte</span>
              <em class="u-block">2.00 TL</em>
            </div>
          </form>
        </div>
        <div class="kol-6 kol-sm-3">
          <form class="urun-liste-malz mt-30">
            <a href="./" class="u-block">
              <img
                src="https://kofteciyusuf.com/uploads/pictures/thumb_ekmek-kadayifi_26.09.2019_06_20_29.jpg"
              />
            </a>
            <div class="detaylar">
              <h3 class="kalin">Ekmek Kadayıfı</h3>
              <span class="u-block">Kaymaklı Ekmek Kadayıfı</span>
              <em class="u-block">8.00 TL</em>
            </div>
          </form>
        </div>
        <div class="kol-6 kol-sm-3">
          <form class="urun-liste-malz mt-30">
            <a href="./" class="u-block">
              <img
                src="https://kofteciyusuf.com/uploads/pictures/thumb_salata_26.09.2019_06_41_21.jpg"
              />
            </a>
            <div class="detaylar">
              <h3 class="kalin">Salata</h3>
              <span class="u-block">Salata</span>
              <em class="u-block">5.00 TL</em>
            </div>
          </form>
        </div>
        <div class="kol-6 kol-sm-3" style="padding-left:135px">
          <form class="urun-liste-malz mt-30">
            <a href="./" class="u-block">
              <img
                src="https://kofteciyusuf.com/uploads/pictures/thumb_sucuk_26.09.2019_04_11_19.jpg"
              />
            </a>
            <div class="detaylar">
              <h3 class="kalin">Sucuk</h3>
              <span class="u-block">200 GR SUCUK</span>
              <em class="u-block">16.00 TL</em>
            </div>
          </form>
        </div>
        <div class="kol-6 kol-sm-3">
          <form class="urun-liste-malz mt-30">
            <a href="./" class="u-block">
              <img
                src="https://kofteciyusuf.com/uploads/pictures/thumb_kahvalti_26.09.2019_05_44_31.jpg"
              />
            </a>
            <div class="detaylar">
              <h3 class="kalin">Kahvaltı Tabağı</h3>
              <span class="u-block">KAHVALTI</span>
              <em class="u-block">16.00 TL</em>
            </div>
          </form>
        </div>
        <div class="kol-6 kol-sm-3">
          <form class="urun-liste-malz mt-30">
            <a href="./" class="u-block">
              <img
                src="https://kofteciyusuf.com/uploads/pictures/thumb_baharatli-patates_26.09.2019_05_59_39.jpg"
              />
            </a>
            <div class="detaylar">
              <h3 class="kalin">Patates Kızartması</h3>
              <span class="u-block">Patates</span>
              <em class="u-block">5.00 TL</em>
            </div>
          </form>
        </div>
        <div class="kol-6 kol-sm-3">
          <form class="urun-liste-malz mt-30">
            <a href="./" class="u-block">
              <img
                src="https://kofteciyusuf.com/uploads/pictures/thumb_baharatli-patates_26.09.2019_05_59_39.jpg"
              />
            </a>
            <div class="detaylar">
              <h3 class="kalin">Ekmek Arası</h3>
              <span class="u-block">200 GR KÖFTE EKMEK ARASI</span>
              <em class="u-block">15.00 TL</em>
            </div>
          </form>
        </div>
        <div class="col-12 text-center mt-30 mb-60">
          <a href="./" class="kucuk-tablo gri mb-0" style="border-color: #e7e7e7">TÜM ÜRÜNLER</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  text-align: center;
}

.kucuk-tablo:hover {
  background-color: #fa9628;
  color: #ffff;
}
.tablo1 {
  text-align: center;
  font-size: 1.75rem;
  margin-top: 0;
  margin-bottom: 10px;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;
  color: #444;
  padding-bottom: 22px;
  position: relative;
}
.tablo1:after {
  content: "";
  display: block;
  width: 87px;
  height: 2px;
  background-color: #fa9628;
  position: absolute;
  left: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.kol-6 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.kol-sm-3 {
  flex: 0 0 25%;
  max-width: 18%;
}
.urun-liste-malz {
  border-radius: 20px;
  text-align: center;
}

.urun-liste-malz:hover {
  box-shadow: 0 0 0 0.2px rgba(0, 0, 0, 0.3);
  transition: all ease-in-out 0.1s;
}
.mt-30 {
  margin-top: 30px;
}
.u-block {
  display: block !important;
}
.urun-liste-malz img {
  width: 100%;
  border-radius: 20px 20px 0 0;
  text-align: center;
}
a {
  color: #fa9628;
  text-decoration: none;
  background-color: transparent;
}
img {
  vertical-align: middle;
  border-style: none;
}
.urun-liste-malz .detaylar {
  padding-top: 25px;
  border-radius: 0 0 20px 20px;
  border: 2px solid #f2f2f2;
  border-top: none;
  transition: all ease-in-out 0.1s;
}
.urun-liste-malz h3 {
  font-size: 16px;
  margin: 0;
}
h3 {
  font-size: 1.75rem;
  margin-top: 0;
  margin-bottom: 10px;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
  color: #444;
}
.urun-liste-malz span.u-block {
  font-size: 14px;
  color: #9e9d9c;
}
.u-block {
  display: block !important;
}
.urun-liste-malz em {
  font-style: normal;
  margin: 25px 0;
  font-weight: 500;
  font-size: 18px;
}
.orta-urunler {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.kolonlar {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.kucuk-tablo {
  border: 2px solid #fa9628;
  border-radius: 15px;
  font-size: 14px;
  color: #818181;
  font-weight: 500;
  padding: 4px 19px;
  margin-bottom: 25px;
  display: inline-block;
  transition: all ease-in-out 0.1s;
  text-align: center;
  font-family: sans-serif;
}
.mb-60 {
  margin-bottom: 60px;
}
.mt-30 {
  margin-top: 30px;
}
.tex-center {
  text-align: center;
}

.mb-0 {
  margin-bottom: 0 !important;
}
</style>