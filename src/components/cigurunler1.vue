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
            <h3 class="tablo-cizgi baslik tablo-boyut tablo-genel">
                ÜRÜN KATEGORİLERİ
            </h3>
            <ul class="kategori-list duzen gorunus" @click="doAjax">
                <li class>
                    <a class="sabitle2" href="/CigUrunler">
                        Çiğ Ürünler
                    </a>
                    <i>
                        <svg viewBox="0 0 320 512">
                            <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                        </svg>
                    </i>
                </li>
                <li class>
                    <a  href="/izgara-etler">
                        Izgara Etler
                    </a>
                    <i>
                        <svg  viewBox="0 0 320 512">
                            <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                        </svg>
                    </i>
                </li>
                <li class>
                    <a href="/KahvaltiveYan">
                        Kahvaltı ve Yan Ürünler
                    </a>
                    <i>
                        <svg viewBox="0 0 320 512">
                            <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                        </svg>
                    </i>
                </li>
                <li class>
                    <a href="/Doner">
                        Döner
                    </a>
                    <i>
                        <svg  viewBox="0 0 320 512">
                            <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                        </svg>
                    </i>
                </li>
                <li class>
                    <a href="salata-cesitleri.html">
                        Salata Çeşitleri
                    </a>
                    <i>
                        <svg  viewBox="0 0 320 512">
                            <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                        </svg>
                    </i>
                </li>
                <li class>
                    <a href="tatli-cesitleri.html">
                        Tatlı Çeşitleri
                    </a>
                    <i>
                        <svg viewBox="0 0 320 512">
                            <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                        </svg>
                    </i>
                </li>
                <li class>
                    <a href="sarkuteri-urunleri.html">
                        Şarküteri Ürünleri
                    </a>
                    <i>
                        <svg  viewBox="0 0 320 512">
                            <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                        </svg>
                    </i>
                </li>
                <li class>
                    <a href="icecekler.html">
                        İçecekler
                    </a>
                    <i>
                        <svg  viewBox="0 0 320 512">
                            <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
                            34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                        </svg>
                    </i>
                </li>
            </ul>
       
       
       
        </div>
        <div class="orta-kol-1">
            <h1 class="tablo-cizgi baslik-boyut orta-ayar orta-boy">
                Çiğ Ürünler
            </h1>
            <div class="uyariyazi">
                <h1 class="uyariyazi2"> 
                Online sipariş sadece Bursa, Eskişehir ve Yalova için geçerlidir.
                </h1>
            </div>
            
            <!-- RESİMLİ OLAN FAVORİ ÜRÜNLER İSE BURDA EKLENMEYE BAŞLANDI -->
            <div class=" satir tablo-boyut">
                <div class="kolonlar2 kolon-boyut">
                    <form class="urun-list resim-boyut">
                        <a href="/KofteCig" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_yusuf-kofte_27.07.2019_08_16_05.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius: 0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of Kofte" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of Kofte" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>
                <div class="kolonlar2 kolon-boyut">
                    <form class="urun-list kolon-boyut" style="margin-top: 30px;">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_kasap-sucuk_23.09.2019_07_09_27.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KasapSucuk" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KasapSucuk" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>
                <div class="kolonlar2 kolon-boyut">
                    <form class="urun-list kolon-boyut" style="margin-top: 30px;">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_baton-sucuk_27.09.2019_11_41_50.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of BatonSucuk" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of BatonSucuk" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>
                <div class="kolonlar2 kolon-boyut" style="margin-top: 475px; margin-left: -960px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_dana-kiyma_27.07.2019_11_48_45.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of DanaKiyma" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of DanaKiyma" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>
                <div class="kolonlar2 kolon-boyut" style="margin-top:475px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_dana-kusbasi_27.07.2019_12_31_07.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of DanaKusbasi" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of DanaKusbasi" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>
                <div class="kolonlar2 kolon-boyut" style="margin-top:475px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_dana-bonfile_26.09.2019_04_45_56.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of DanaBonfile" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of DanaBonfile" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>
                <div class="kolonlar2 kolon-boyut" style="margin-top:915px; margin-left:-960px">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/new_pictures/screen-shot-2015-05-18-at-175641_18_thumb.jpg" alt class="img-fluid">						
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of DanaBiftek" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of DanaBiftek" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>
                <div class="kolonlar2 kolon-boyut" style="margin-top:915px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_tavuk-kanat-soslu_23.09.2019_06_00_03.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar"  v-for="todo of PilicKanatSoslu" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of PilicKanatSoslu" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>
                <div class="kolonlar2 kolon-boyut" style="margin-top:915px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/new_pictures/pirzola_21_thumb.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KuzuPirzola" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuzuPirzola" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>
                <div class="kolonlar2 kolon-boyut" style="margin-top:1360px; margin-left:-960px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/new_pictures/kuzusis_21_thumb.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KuzuSis" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuzuSis" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                <div class="kolonlar2 kolon-boyut" style="margin-top:1360px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/new_pictures/beyti_21_thumb.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KuzuBeyti" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuzuBeyti" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                <div class="kolonlar2 kolon-boyut" style="margin-top:1360px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_dana-antrikot_27.07.2019_12_51_33.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of DanaAntrikot" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of DanaAntrikot" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                <div class="kolonlar2 kolon-boyut" style="margin-top:1805px; margin-left:-960px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_dana-nuar_03.10.2019_04_36_26.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of DanaNuar" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of DanaNuar" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                  <div class="kolonlar2 kolon-boyut" style="margin-top:1805px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_dana-kavurma_27.07.2019_01_29_58.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of DanaKavurma" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of DanaKavurma" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                  <div class="kolonlar2 kolon-boyut" style="margin-top:1805px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_dana-tranc_23.09.2019_06_59_49.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of DanaTranc" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of DanaTranc" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                   <div class="kolonlar2 kolon-boyut" style="margin-top:2250px; margin-left:-960px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_dana-kiyma_30.09.2019_08_12_10.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KiymaCigKoftelik" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KiymaCigKoftelik" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                   <div class="kolonlar2 kolon-boyut" style="margin-top:2250px; ">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/new_pictures/dana-kaburga_20_thumb.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of DanaKaburga" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of DanaKaburga" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                   <div class="kolonlar2 kolon-boyut" style="margin-top:2250px; ">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_kuzu-kul-basti_23.09.2019_06_37_10.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KuzuKulbasti" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuzuKulbasti" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                  <div class="kolonlar2 kolon-boyut" style="margin-top:2695px; margin-left:-960px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_kuzu-incik_23.09.2019_06_40_54.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KuzuIncik" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuzuIncik" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                  <div class="kolonlar2 kolon-boyut" style="margin-top:2695px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/new_pictures/screen-shot-2015-05-18-at-180241_18_thumb.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KuzuButKemikli" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuzuButKemikli" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                  <div class="kolonlar2 kolon-boyut" style="margin-top:2695px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_kuzu-but-kemiksiz_24.09.2019_01_56_48.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KuzuButKemiksiz" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuzuButKemiksiz" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                <div class="kolonlar2 kolon-boyut" style="margin-top:3145px; margin-left:-960px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_kuzu-but-kemiksiz_24.09.2019_01_56_48.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KuzuButKemiksiz" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuzuButKemiksiz" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                            
                        </div>  
                    </form>
                </div>

                <div class="kolonlar2 kolon-boyut" style="margin-top:3145px; ">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/new_pictures/screen-shot-2015-05-18-at-180342_18_thumb.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KuzuKolKemikli" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuzuKolKemikli" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                <div class="kolonlar2 kolon-boyut" style="margin-top:3145px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/new_pictures/kirmizi-et1_20_thumb.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KuzuDosKemiksiz" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuzuDosKemiksiz" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                <div class="kolonlar2 kolon-boyut" style="margin-top:3590px; margin-left:-960px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/new_pictures/kuzu-bobrek_21_thumb.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KuzuBobrek" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuzuBobrek" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                <div class="kolonlar2 kolon-boyut" style="margin-top:3590px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/new_pictures/kuzu-bobrek-yatagi-kemikli-_21_thumb.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of BobrekYatagiKemiksiz" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of BobrekYatagiKemiksiz" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                <div class="kolonlar2 kolon-boyut" style="margin-top:3590px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_dana-kiyma27072019114845_01.10.2019_05_57_39.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KuzuKiyma" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuzuKiyma" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                
                <div class="kolonlar2 kolon-boyut" style="margin-top:4035px; margin-left:-960px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_kuzu-butun_03.10.2019_04_34_30.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KuzuButun" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuzuButun" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                
                <div class="kolonlar2 kolon-boyut" style="margin-top:4035px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/new_pictures/screen-shot-2015-05-18-at-180106_18_thumb.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar"  v-for="todo of KuzuKusbasiKemiksiz" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuzuKusbasiKemiksiz" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                
                <div class="kolonlar2 kolon-boyut" style="margin-top:4035px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_kuzu-gerdan_23.09.2019_06_05_02.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KuzuGerdan" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuzuGerdan" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                <div class="kolonlar2 kolon-boyut" style="margin-top:4480px; margin-left:-960px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/new_pictures/tavuk-incik-soslu_23_thumb.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of PilicIncikSoslu" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of PilicIncikSoslu" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                <div class="kolonlar2 kolon-boyut" style="margin-top:4480px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/pictures/thumb_pastirma_23.09.2019_06_16_39.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of Pastirma" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of Pastirma" :key="todo.id">{{todo.Fiyat}}</em>
                            <button type="button" class="kucuk-buton">SATIN AL</button>
                        </div>
                    </form>
                </div>

                <div class="kolonlar2 kolon-boyut" style="margin-top:4480px;">
                    <form class="urun-list kolon-boyut">
                        <a href="./" class="d-block">
                            <img src="https://kofteciyusuf.com/uploads/new_pictures/kuyrukyagi_21_thumb.jpg" alt class="img-fluid">
                        </a>
                        <div class="detaylar2" style="border: 2px solid #f2f2f2; border-radius:0 0 20px 20px;">
                            <h3 class="h3yazilar" v-for="todo of KuyrukYagi" :key="todo.id">{{todo.urunismi}}</h3>
                            <span class="d-block">1 Kilogram</span>
                            <em class="d-block" v-for="todo of KuyrukYagi" :key="todo.id">{{todo.Fiyat}}</em>
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
      Kofte: [],
      KasapSucuk:[],
      BatonSucuk: [],
      DanaKiyma: [],
      DanaKusbasi: [],
      DanaBonfile: [],
      DanaBiftek: [],
      PilicKanatSoslu: [],
      KuzuPirzola: [],
      KuzuSis: [],
      KuzuBeyti: [],
      DanaAntrikot: [],
      DanaNuar: [],
      DanaKavurma: [],
      DanaTranc: [],
      KiymaCigKoftelik: [],
      DanaKaburga: [],
      KuzuKulbasti: [],
      KuzuIncik: [],
      KuzuButKemikli: [],
      KuzuButKemiksiz: [],
      KuzuKolKemikli: [],
      KuzuDosKemiksiz: [],
      KuzuBobrek: [],
      BobrekYatagiKemiksiz: [],
      KuzuKiyma: [],
      KuzuButun:[],
      KuzuKusbasiKemiksiz:[],
      KuzuGerdan: [],
      PilicIncikSoslu: [],
      Pastirma: [],
      KuyrukYagi: []
    };
  },
  
  components: {
    Loading
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3000/Kofte");

      this.Kofte = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
    try {
      const res = await axios.get("http://localhost:3000/KasapSucuk");

      this.KasapSucuk = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
    try {
      const res = await axios.get("http://localhost:3000/BatonSucuk");

      this.BatonSucuk = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
    try {
      const res = await axios.get("http://localhost:3000/DanaKiyma");

      this.DanaKiyma = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
    try {
      const res = await axios.get("http://localhost:3000/DanaKusbasi");

      this.DanaKusbasi = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
    try {
      const res = await axios.get("http://localhost:3000/DanaBonfile");

      this.DanaBonfile = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
    try {
      const res = await axios.get("http://localhost:3000/DanaBiftek");

      this.DanaBiftek = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
    try {
      const res = await axios.get("http://localhost:3000/PilicKanatSoslu");

      this.PilicKanatSoslu = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
    try {
      const res = await axios.get("http://localhost:3000/KuzuPirzola");

      this.KuzuPirzola = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
    try {
      const res = await axios.get("http://localhost:3000/KuzuSis");

      this.KuzuSis = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
    try {
      const res = await axios.get("http://localhost:3000/KuzuBeyti");

      this.KuzuBeyti = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
    try {
      const res = await axios.get("http://localhost:3000/DanaAntrikot");

      this.DanaAntrikot = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/DanaNuar");

      this.DanaNuar = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/DanaKavurma");

      this.DanaKavurma = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/DanaTranc");

      this.DanaTranc = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/KiymaCigKoftelik");

      this.KiymaCigKoftelik = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/DanaKaburga");

      this.DanaKaburga = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/KuzuKulbasti");

      this.KuzuKulbasti = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/KuzuIncik");

      this.KuzuIncik = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/KuzuButKemikli");

      this.KuzuButKemikli = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/KuzuButKemiksiz");

      this.KuzuButKemiksiz = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/KuzuKolKemikli");

      this.KuzuKolKemikli = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/KuzuDosKemiksiz");

      this.KuzuDosKemiksiz = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/KuzuBobrek");

      this.KuzuBobrek = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/BobrekYatagiKemiksiz");

      this.BobrekYatagiKemiksiz = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/KuzuKiyma");

      this.KuzuKiyma = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/KuzuButun");

      this.KuzuButun = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/KuzuKusbasiKemiksiz");

      this.KuzuKusbasiKemiksiz = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/KuzuGerdan");

      this.KuzuGerdan = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/PilicIncikSoslu");

      this.PilicIncikSoslu = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/Pastirma");

      this.Pastirma = res.data;
      
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
     try {
      const res = await axios.get("http://localhost:3000/KuyrukYagi");

      this.KuyrukYagi = res.data;
      
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
      }, 5000 );
    },
   
  }
};
</script>



<style scoped>
.genel-box {
    width: 100%;
    padding-right:15px;
    padding-left:15px;
    margin-right:auto;
    margin-left:auto;
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
.tablo-cizgi{
    padding-bottom: 22px;
    position: relative;
}
.tablo-cizgi.baslik {
    padding-bottom: 10px;
}
.baslik{
    font-size:18px;
}
.tablo-boyut{
    margin-bottom: 30px;
}
.tablo-genel{
    margin-top: 44px;
}
.tablo-cizgi::after{
    content: '';
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

.duzen{
    margin-bottom: 1.5rem !important;
}
.gorunus{
    display: block !important;
}
.d-none {
    display: none !important;
}
.kategori-list li {
    position: relative;
}
li{
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
    transition: all .2s;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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
    transition: all .2s;
}
svg {
    overflow: hidden;
    vertical-align: middle;
}

.sol-kol-1 ul li a:hover {
    background-color: #e30613 !important;
    color: #fff !important;
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
    transition: all ease-in-out .1s;
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

a{
    color: #fa9628;
    text-decoration: none;
    background-color: transparent;
}
.urun-list img{
    width: 100%;
    border-radius: 20px 20px 0 0;
}
.img-fluid{
    max-width:100%;
    height:auto;
}
img{
    vertical-align: middle;
    border-style: none;
}
.urun-list.detaylar2{
    padding-top: 25px;
    border-radius: 0 0 20px 20px;
    border: 2px solid #f2f2f2;
    border-top: none;
    transition: all ease-in-out .1s;
    
}

.h3yazilar{
    padding-top:25px;
    font-family: sans-serif;
}
.urun-list h3{
    font-size: 16px;
    margin: 0;
}
.urun-list span.d-block{
    font-size: 14px;
    color:#9e9d9c;
}
.d-block{
    display: block !important;
}
.urun-list em{
    font-style: normal;
    margin: 25px 0;
    font-weight: 500;
    font-size: 18px;
}
.button.kucuk-buton{
    background-color: transparent;
}
.kucuk-buton {
    border: 2px solid #e30613;
    border-radius: 15px;
    font-size: 14px;
    color: #818181;
    font-weight: 500;
    padding: 4px 19px;
    margin-bottom: 25px;
    display: inline-block;
    transition: all ease-in-out .1s;
    background-color: transparent;
    cursor: pointer;
}
.kucuk-buton:hover{
    background-color: #e30613;
    color: #fff;
}

.uyariyazi {
    background-color:#e30613;
    border-radius: 20px;
    height:40px ;
    width: 560px;
}

.uyariyazi2 {
    font-size: 124%;
    text-align: center;
    padding-top: 8px;
    color:#ffff;
    
   
}
</style>

