<template>
  <div class="container">
  <header class="header">
    <div class="header_logo">
      <img src="./assets/logo.svg" alt="logo">
    </div>
    <button class="header_btn">
        Концепт
    </button>
  </header>

  <div class="start">
    <div class="start_title">
      Осталось времени на прохождение теста:
    </div>
    <div class="start_timer">01:00:00</div>
  </div>

  <div class="test">
    <div class="test_item">
      <div class="test_item-title title">Вопрос №1. <span>#обычный тест</span></div>
        <div class="test_item-des des ">Выберите один ответ для продолжения.</div>
        <div class="test_div">
          <input type="text" placeholder="Название темы теста" class="test_item-input input">
        </div>

        <div class="test_check">
          <div class="test_check-item">
            <div>
                <input type="checkbox" class="test_check-box">
                <span class="answ">Да</span>
            </div>
          </div>

          <div class="test_check-item">
             <div>
                <input type="checkbox" class="test_check-box">
                <span class="answ">Нет</span>
             </div>
          </div>
        </div>

        <div class="test_wrapper">
          <button class="test_btn red">Я не знаю как ответить</button>
          <button class="test_btn blue">Я не понял вопроса</button>
        </div>
    </div>

    <div class="test_item">
      <div class="test_item-title title">Вопрос №2. <span>#рассширенный вопрос</span></div>
        <div class="test_item-des des ">Выберите один ответ для продолжения.</div>
        <div class="test_div">
          <div class="test_item-input input">Вопрос пользователю</div>
        </div>

        <div class="test_div">
          <input type="text" placeholder="Название темы теста" class="test_item-input input">
          <div class="test_icon"><img src="./assets/del.svg" alt="delete"></div>
        </div>


        <div class="test_wrapper wrapper-mar">
          <button class="test_btn red">Я не знаю как ответить</button>
          <button class="test_btn blue">Я не понял вопроса</button>
        </div>
    </div>

    <div class="test_item">
      <div class="test_item-title title">Вопрос №3. <span>#вопрос c изображением</span></div>
        <div class="test_item-des des ">Выберите один ответ для продолжения.</div>

        <div class="test_img">
          <img src="./assets/p3.jpg" alt="photo">
        </div>

        <div class="test_div">
          <div class="test_item-input input">Вопрос пользователю</div>
        </div>

        <div class="test_div">
          <input type="text" placeholder="Название темы теста" class="test_item-input input">
          <div class="test_icon"><img src="./assets/del.svg" alt="delete"></div>
        </div>


        <div class="test_wrapper wrapper-mar">
          <button class="test_btn red">Я не знаю как ответить</button>
          <button class="test_btn blue">Я не понял вопроса</button>
        </div>
    </div>

    <div class="test_item">
        <div class="test_item-title title">Вопрос №4. <span>#вопрос на соответствие</span></div>
        <div class="test_item-des des ">Выберите один ответ для продолжения.</div>
        <div class="test_div">
          <div class="test_item-input input">Вопрос для пользователя</div>
        </div>

        <div class="inf">Тип ответа:</div>

        <div class="test_content-check">
          <div class="test_content-column">
            <div class="test_content-item">
              <input type="checkbox">
              <span class="test_content-info">Вариант 1</span>
            </div>
            <div class="test_content-item">
              <input type="checkbox">
              <span class="test_content-info">Вариант 2</span>
            </div>
            <div class="test_content-item">
              <input type="checkbox">
              <span class="test_content-info">Вариант 3</span>
            </div>
          </div>
          <div class="test_content-column">
            <div class="test_content-item">
              <input type="checkbox">
              <span class="test_content-info" >Вариант 4</span>
            </div>
            <div class="test_content-item">
              <input type="checkbox">
              <span class="test_content-info" >Вариант 5</span>
            </div>
            <div class="test_content-item">
              <input type="checkbox">
              <span class="test_content-info" >Вариант 6</span>
            </div>
          </div>
        </div>
        <div class="test_wrapper wrapper-mar">
          <button class="test_btn red">Я не знаю как ответить</button>
          <button class="test_btn blue">Я не понял вопроса</button>
        </div>
        <div>
          <button class="test_item-btn">Завершить</button>
        </div>
      </div>
  </div>
  </div>
</template>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif; 
  }
  
  .container {
    max-width: 1300px;
    margin: 0 auto;
  }

  body {
    background: #000;
  }

  .answ {
    font-weight: 400;
    font-size: 18px;
    margin-left: 10px;
    color: #F6F6F6;
  }

.wrapper-mar {
  margin-top: 48px;
}
.red {
  color: #FA9494;
}

.blue {
  color: #9ACAFA;
}
  .header {
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_btn {
      border: 1px solid #FFED00;
      background: none;
      padding: 12px 64px;
      font-weight: 600;
      font-size: 16px;
      border-radius: 6px;
      color: #F6F6F6;
    }
  }

  .start {
      max-width: 1000px;
      margin: 0 auto;
      margin-top: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &_title {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        color: #FFFFFF;
      }
      &_timer {
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        color: #FFFFFF;
      }
  }

  .test {
      &_content {
        &-check {
          min-height: 90px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 40px;
        }
        &-column {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 90px;
        }
        &-info {
          font-weight: 400;
          font-size: 18px;
          color: #F6F6F6;
          margin-left: 10px;
        }
      }
    &_img {
      width: 598px;
      height: 425px;
      margin: 48px 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &_wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &_btn {
      font-weight: 600;
      font-size: 18px;
      width: 280px;
      height: 55px;
      display: block;
      background: none;
      border: 1px solid;
    }
    &_check {
      margin-top: 30px;
      &-item {
        width: 100%;
        min-height: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 50px;
      }
    }
    &_item {
      width: 1000px;
      min-height: 350px;
      border: 1px solid #A9A9A9;
      border-radius: 6px;
      padding: 32px 200px;
      margin: 0 auto;
      margin-bottom: 40px;
      &-title {
        font-weight: 600;
        font-size: 20px;
        color: #FFFFFF;
        text-align: center;
        span {
          font-weight: 400;
          font-size: 16px;
          color: #A9A9A9;
        }
      }
      &-des {
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        color: #A9A9A9;
        margin-top: 15px;
      }
      &-input {
        margin-top: 50px;
        background: none;
        border: 1.5px solid #A9A9A9;
        border-radius: 8px;
        outline: none;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        width: 100%;
        padding: 16px 15px;
        color: #A9A9A9;
      }
      &-btn {
        display: block;
        cursor: pointer;
        background: #FFED00;
        border-radius: 6px;
        width: 467px;
        height: 54px;
        outline: none;
        border: none;
        margin: 0 auto;
        margin-top: 40px;
      }
    }

    &_div {
      position: relative;
    }
    &_icon {
      position: absolute;
      top: 66%;
      right: 3%;
    }
  }

      .des {
    text-align: left;
  }

  .input {
    text-align: left;
  }

    .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>
