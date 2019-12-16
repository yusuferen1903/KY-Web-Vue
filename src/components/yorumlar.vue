<template>
  <div>
    <div class="girisarkaplan">
      <section class="giristablo">
        <!-- REQUİRED SAYESİNDE BOŞ KALINCA UYARI GELİYOR -->
        <div id="app">
          <ul>
            <li v-for="todo of Yorumlar" :key="todo.id">{{todo.KullaniciYorumu}}</li>
          </ul>
        </div>
        <div id="app">
          <input
            type="text"
            name="comment"
            class="inputs"
            placeholder="Bir yorum yazın"
            v-model="todocomment"
          />
        </div>

        <!-- BUTON OLUŞTURMA -->
        <div class="girisbutonlar">
          <div class="giristurkir">
            <button type="submit" @click="addTodo" class="giriskirmizi">Yorum Yap</button>
          </div>
        </div>

        <div></div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const baseURL = "http://localhost:3000/Yorumlar";

export default {
  name: "app",
  data() {
    return {
      Yorumlar: [],
      todocomment: ""
    };
  },
  async created() {
    try {
      const res = await axios.get(baseURL);

      this.Yorumlar = res.data;
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }
  },
  methods: {
    async addTodo() {
      const res = await axios.post(baseURL, {
        KullaniciYorumu: this.todocomment
      });

      this.Yorumlar = [...this.Yorumlar, res.data];

      this.todocomment = "";
    }
  }
};
</script>

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
  margin-left: 100px;
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