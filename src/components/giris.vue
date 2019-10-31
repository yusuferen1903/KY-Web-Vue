<template>
  <div>
    <div class="girisarkaplan">
      <section class="giristablo">
        <form>
          <!-- REQUİRED SAYESİNDE BOŞ KALINCA UYARI GELİYOR -->
          <input
            type="text"
            name="email"
            required
            autofocus="autofocus"
            class="inputs"
            placeholder="Eposta Adresiniz Yada Gsm No *"
          />
          <input type="password" name="password" required class="inputs" placeholder="Parolanız" />

          <!-- BUTON OLUŞTURMA -->
          <div class="girisbutonlar">
            <div class="giristurkir">
              <button type="submit" class="giriskirmizi">Giriş Yap</button>
            </div>
            <!-- UYE OL BUTONU BASINCA UYELİK SAYFASINA GİDİYOR -->
            <div class="giristurkir">
              <a href="/Uyelik" class="giristuruncu">Üye Ol</a>
            </div>
          </div>
        </form>

        <div>
          <!-- SİFREMİ UNUTTUM KISMI -->
          <div class="sifremiunuttum">
            <a href="sifremi-unuttum.html" class="sifremiunuttum2">
              <svg height="16px" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M256 504c136.967 0 248-111.033 248-248S392.967 8 256 8 8 119.033 8 256s111.033 248 248 248zm-103.398-76.72l53.411-53.411c31.806 13.506 68.128 13.522 99.974 0l53.411 53.411c-63.217 38.319-143.579 38.319-206.796 0zM336 256c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zm91.28 103.398l-53.411-53.411c13.505-31.806 13.522-68.128 0-99.974l53.411-53.411c38.319 63.217 38.319 143.579 0 206.796zM359.397 84.72l-53.411 53.411c-31.806-13.505-68.128-13.522-99.973 0L152.602 84.72c63.217-38.319 143.579-38.319 206.795 0zM84.72 152.602l53.411 53.411c-13.506 31.806-13.522 68.128 0 99.974L84.72 359.398c-38.319-63.217-38.319-143.579 0-206.796z"
                />
              </svg>
              <span>Şifremi Unuttum</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.girisarkaplan {
  background-image: url(https://kofteciyusuf.com/assets/dist/img/login-bg.jpg);
  background-position: center center;
  background-size: cover;
  padding: 40px 0 171px;
}

.giristablo {
  width: 370px;
  max-width: 100%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 20px;
  border-radius: 10px;
}

.inputs {
  display: block;
  width: 100%;
  border: 1px solid #e3e3e3;
  padding: 8px 10px;
  font-weight: 300;
  border-radius: 10px;
  margin-bottom: 15px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  box-sizing: border-box;
}

.girisbutonlar {
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  flex: 0 0 50%;
  max-width: 92%;
}

.giristurkir {
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 15px;
  padding-left: 15px;
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
}

.giristuruncu:hover {
  background-color: #fba241;
}

.sifremiunuttum {
  margin-top: 20px;
  text-align: center;
}

.sifremiunuttum2 {
  color: #000;
  font-weight: 500;
  font-family: sans-serif;
  text-decoration: none;
}

.sifremiunuttum :hover {
  text-decoration: underline;
  color: #3f3f3f;
  text-decoration: all;
}
</style>