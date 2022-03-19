<template>
  <div>
    <div class="content" v-if="show">
      <div class="reg_content">
        <h1 class="reg_title">Регистрация начинается отсюда</h1>
        <div class="reg_des">Пожалуйста указывайте свои настоящие данные, они будут использоваться в дальнейшем на собеседовании.</div>
        <div class="reg">
          <div class="reg_form">
            <form @submit.prevent="register" class="reg_form-content">
              <label class="reg_label" for="name">Ваше ФИО</label>
              <input v-model="name"  class="reg_input" placeholder="Name" name="name" type="text">

              <label class="reg_label" for="email">Электронная почта</label>
              <input v-model="email" class="reg_input" placeholder="email@gmail.com" name="email" type="email">

              <label class="reg_label" for="phone">Ваш номер телефона</label>
              <input v-model="phone" class="reg_input" placeholder="88005555555" name="phone" type="number">              
              
              <label class="reg_label" for="pass">Пароль</label>
              <input v-model="password" class="reg_input" placeholder="password" name="pass" type="password">

              <div class="reg_conf">
                <input class="reg_check" type="checkbox">
                <span class="reg_conf-des">Я согласен с <a href="#">политикой конфиденциальности</a></span>
              </div>

              <button type="submit" class="reg_btn" @click="register">Создать аккаунт</button>
            </form>

            <div class="reg_log">Уже есть аккаунт? <button class="reg_log-btn" @click="openIn" >Войдите</button> в него.</div>
          </div>
        </div>
      </div>

      <div class="info"></div>
    </div>

    <div class="content" v-else >
      <div class="reg_content">
        <h1 class="reg_title">Авторизация</h1>
        <div class="reg">
          <div class="reg_form">
            <form @submit.prevent class="reg_form-content">


              <label class="reg_label" for="email">Введите вашу почту или телефон</label>
              <input v-model="email" class="reg_input" placeholder="email@gmail.com" name="email" type="email">             
              
              <label class="reg_label" for="pass">Пароль</label>
              <input v-model="password" class="reg_input" placeholder="password" name="pass" type="password">

              <button type="submit" class="reg_btn" @click="log">Войти</button>
            </form>

            <div class="reg_log">Еще нет аккаунта? <button class="reg_log-btn" @click="openReg">Зарегестрируйтесь.</button></div>
          </div>
        </div>
      </div>

      <div class="info"></div>
    </div>
  </div>
</template> 


<script>
export default {
  data() {
    return {
      show: true,
      name:'',
      phone: '',
      email: '',
      password: '',

    }
  },

  methods: {

    openIn() {
      this.show = false;
    },

    openReg() {
      this.show = true;
    },

    async register(url) {
      const postData = {
        name: this.name,
        phone: this.number,
        email: this.email,
        password: this.password
      };
    
      const rec = {
        method: "POST",
        body: JSON.stringify(postData)
      };


      await fetch(url, rec);

      console.log(postData);
    },

    async log(url) {
      const postData = {
        email: this.email,
        password: this.password
      };

      await fetch(url, {
        method: "POST",
        body: JSON.stringify(postData),
      });

      console.log(postData);
    }
  }
}
</script>



// ----------------------------
<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif; 
  }

  body {
    background: #000;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .reg {
    &_content {
      padding: 100px 0;
      max-width: 576px;
    }
    &_form {
      margin-top: 50px;
      &-content {
        display: flex;
        flex-direction: column;
      }
    }
    &_title {
      font-weight: 600;
      font-size: 32px;
      color: white;
      text-align: center;
      margin: 0 auto;
    }
    &_des {
      font-weight: 400;
      font-size: 18px;
      text-align: center;
      color: #F6F6F6;
      margin: 0 auto;
      margin-top: 15px;
    }
    &_input {
      position: relative;
      border: 1.5px solid #F6F6F6;
      border-radius: 6px;
      padding: 12px 8px 12px 24px;
      background: none;
      width: 575px;
      height: 51px;
      margin-top: 10px;
      margin-bottom: 25px;
      font-weight: 400;
      font-size: 18px;
      outline: none;
      color: #F6F6F6;
    }
    &_label {
      font-weight: 500;
      font-size: 18px;
      color: #F6F6F6;
    }

    &_conf {
      &-des {
        margin-left: 10px;
        font-weight: 400;
        font-size: 16px;
        color: #F4F4F4;
        a {
          font-weight: 400;
          font-size: 16px;
          color: #F4F4F4;
        }
      }
    }

    &_btn {
      background: #FFED00;
      border: 1.5px solid #FFED00;
      border-radius: 12px;
      height: 50px;
      font-weight: 600;
      font-size: 18px;
      text-align: center;
      color: #000000;
      margin-top: 48px;
      cursor: pointer;
    }
    &_log {
      font-weight: 400;
      font-size: 16px;
      color: #F6F6F6;
      text-align: center;
      margin-top: 10px;
      &-btn {
        font-weight: 400;
        font-size: 16px;
        color: #FFED00;
        background: none;
        border: none;
        cursor: pointer;
      }
    }
  }

</style>
