<template>
  <div>
    <div class="girisarkaplan">
      <section class="uyeliktablo">
        <div style="padding: 15px">
          <form class="uyeliktablo2">
            <div class="uyelikyazilar">
              <!-- DÜZ YAZI OLMASI GEREKEN ŞEYLER BURDA EKLENDİ-->
              <input type="text" required name="name" class="inputs" placeholder="Adınız *" />
            </div>
            <div class="uyelikyazilar">
              <input type="text" required name="surname" class="inputs" placeholder="Soyadınız *" />
            </div>
            <div class="uyelikyazilar">
              <input
                type="email"
                required
                name="email"
                class="inputs"
                placeholder="Email Adresiniz *"
              />
            </div>
            <div class="uyelikyazilar">
              <input
                type="text"
                required
                name="telephone"
                class="inputs"
                placeholder="Telefon Numarınız *"
              />
            </div>
            <div class="uyelikyazilar">
              <input
                type="password"
                required
                name="password"
                class="inputs"
                placeholder="Parolanız *"
              />
            </div>
            <div class="uyelikyazilar">
              <!-- DROPDOWNBOX YANİ SEÇMELİ ŞEYLER BURDA OPTİON KULLNAILARK EKLENDİ -->
              <select name="addres-type" required class="inputs">
                <option value>Adres Tipi *</option>
                <option value="1">Ev</option>
                <option value="2">İş</option>
                <option value="3">Diğer</option>
              </select>
            </div>

            <div class="uyelikyazilar">
              <select name="provinces" required class="inputs">
                <option value>-</option>
                <option value="1">Bursa</option>
                <option value="2">Eskişehir</option>
                <option value="3">Yalova</option>
              </select>
            </div>

            <div class="uyelikyazilar">
              <select name="cities" class="inputs">
                <option value>İlçe*</option>
              </select>
            </div>

            <div class="uyelikyazilar">
              <select name="mahalle" class="inputs">
                <option value>Mahalle*</option>
              </select>
            </div>

            <div class="uyelikyazilar">
              <select name="cadde" class="inputs">
                <option value>Cadde/Sokak*</option>
              </select>
            </div>

            <div class="uyelikyazilar">
              <input
                type="text"
                required
                name="apartman"
                class="inputs"
                placeholder="Apartman/Site"
              />
            </div>

            <div class="uyelikyazilar">
              <input type="text" required name="Kapı" class="inputs" placeholder="Kapı No" />
            </div>

            <div class="uyelikyazilar">
              <input type="text" required name="kat" class="inputs" placeholder="Kat" />
            </div>

            <div class="uyelikyazilar">
              <input type="text" required name="Daire" class="inputs" placeholder="Daire No" />
            </div>

            <div class="uyelikadres">
              <textarea
                name="directions"
                required
                placeholder="Adres Tarifi"
                rows="3"
                class="inputs adresalani"
              ></textarea>
            </div>

            <div class="uyeliktamamla">
              <button type="submit" class="uyeliktamamlabuton">Üyeliğimi Tamamla</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.uyeliktablo {
  width: 540px;
  max-width: 100%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 20px;
  border-radius: 10px;
}

.uyeliktablo2 {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.uyelikyazilar {
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
}

.uyelikadres {
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: inherit;
}

.adresalani {
  overflow: auto;
  resize: vertical;
}

.uyeliktamamla {
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: inherit;
}

.uyeliktamamlabuton {
  background-color: #cc021b;
  color: #fff;
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-weight: 500;
  padding: 14px 20px;
  min-width: 150px;
  max-width: 100%;
  text-align: center;
  border-radius: 10px;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin-bottom: 20px;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.uyeliktamamlabuton:hover {
  background-color: #e5021e;
}

.girisarkaplan {
  background-image: url(https://kofteciyusuf.com/assets/dist/img/login-bg.jpg);
  background-position: center center;
  background-size: cover;
  padding: 40px 0 171px;
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
</style>