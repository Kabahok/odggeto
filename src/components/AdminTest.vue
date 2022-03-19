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

  <div class="test" >
    <h1 class="test_title">Оставляю место под очень крутую мотивационную фразу!</h1>
    <div class="test_content">
      <div class="test_item">
        <div class="test_item-title">Тип теста</div>
        <div class="test_item-des">Назовите тему так, чтобы она отражал главный смысл содержания.Для красоты добавлю вторую строчку</div>
        <input type="text" placeholder="Название темы теста" class="test_item-input">
        <div>
          <button class="test_item-btn">Продолжить</button>
        </div>
      </div>

      <div class="test_item">
        <div class="test_item-title">Выберите тип вопроса:</div>
        <div class="test_item-des">Выберите один ответ для продолжения</div>
        
        <div class="test_content-check">
          <div class="test_content-column">
            <div class="test_content-item">
              <input type="checkbox">
              <span class="test_content-info">Обычный тест</span>
            </div>
            <div class="test_content-item">
              <input type="checkbox">
              <span class="test_content-info">Расшириный вопрос</span>
            </div>
          </div>
          <div class="test_content-column">
            <div class="test_content-item">
              <input type="checkbox">
              <span class="test_content-info">Вопрос с изображением</span>
            </div>
            <div class="test_content-item">
              <input type="checkbox">
              <span class="test_content-info" >Вопрос на соответствие</span>
            </div>
          </div>
        </div>

        <div>
          <button class="test_item-btn">Продолжить</button>
        </div>
      </div>

      <div class="test_item">
        <div class="test_item-title title">Вопрос №1. <span>#обычный тест</span> </div>
        <div class="test_item-des des">Выберите один ответ для продолжения .</div>
        <input type="text" placeholder="Текст внутри теста" class="test_item-input">

        <div class="test_check">
          <div class="test_check-item">
            <div>
                <input type="checkbox" class="test_check-box">
                <span class="answ">Да</span>
            </div>

             <div class="test_check-icon">
               <img src="./assets/pencil.svg" alt="icon">
             </div>
          </div>

          <div class="test_check-item">
             <div>
                <input type="checkbox" class="test_check-box">
                <span class="answ">Нет</span>
             </div>

             <div class="test_check-icon">
               <img src="./assets/pencil.svg" alt="icon">
             </div>
          </div>

          <div class="test_add">
            <div class="test_add-icon">
              <img src="./assets/add.svg" alt="add">
            </div>
            <div class="test_add-text">Добавить вариант</div>
          </div>
        </div>
        <div>
          <button class="test_item-btn">Продолжить</button>
        </div>
      </div>

      <div class="test_item">
        <div class="test_item-title title">Вопрос №2. <span>#расширенный вопрос</span></div>
        <div class="test_item-des des ">Выберите один ответ для продолжения.</div>
        <div class="test_div">
          <input type="text" placeholder="Название темы теста" class="test_item-input input">
          <div class="test_icon"><img src="./assets/del.svg" alt="delete"></div>
        </div>
        <div class="test_div">
          <input type="text" placeholder="Название темы теста" class="test_item-input input">
          <div class="test_icon"><img src="./assets/del.svg" alt="delete"></div>
        </div>
        <div>
          <button class="test_item-btn">Продолжить</button>
        </div>
      </div>

      <div class="test_item">
        <div class="test_item-title title">Вопрос №2. <span>#расширенный вопрос</span></div>
        <div class="test_item-des des ">Выберите один ответ для продолжения.</div>

        <div class="test_load">
          <div class="test_load-icon">
            <img src="./assets/load.svg" alt="icon">
          </div>

          <div class="test_load-click">Загрузить изображение</div>
        </div>
        <div class="test_div">
          <input type="text" placeholder="Название темы теста" class="test_item-input input">
          <div class="test_icon"><img src="./assets/del.svg" alt="delete"></div>
        </div>

        <div class="inf">Тип ответа:</div>

        <div class="test_content-check">
          <div class="test_content-column">
            <div class="test_content-item">
              <input type="checkbox">
              <span class="test_content-info">Расшириный вопрос</span>
            </div>
          </div>
          <div class="test_content-column">
            <div class="test_content-item">
              <input type="checkbox">
              <span class="test_content-info" >Вопрос на соответствие</span>
            </div>
          </div>
        </div>
        <div>
          <button class="test_item-btn">Продолжить</button>
        </div>
      </div>

      <div class="test_item">
        <div class="test_item-title title">Вопрос №4. <span>#вопрос на соответствие</span></div>
        <div class="test_item-des des ">Выберите один ответ для продолжения.</div>
        <div class="test_div">
          <input type="text" placeholder="Название темы теста" class="test_item-input input">
          <div class="test_icon"><img src="./assets/del.svg" alt="delete"></div>
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
        <div>
          <button class="test_item-btn">Завершить</button>
        </div>
      </div>
    </div>
  </div>

  <div class="add_test">
    <button>Добавить вопрос</button>
  </div>

  <div class="link">
    <div class="link_title">
        Ссылка для прохождения теста
    </div>
    <div class="link_item">
      <div class="link_icon">
        <img src="./assets/link.svg" alt="">
      </div>
      <div class="link_text"><a href="#">https://vk.com/im?peers=172401009_c239_1950725...</a></div>
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

  .inf {
    font-weight: 600;
    font-size: 18px;
    color: #FFFFFF;
    margin-top: 30px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .answ {
    font-weight: 400;
    font-size: 18px;
    margin-left: 10px;
    color: #F6F6F6;
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
    &_title {
      font-weight: 700;
      font-size: 48px;
      text-align: center;
      text-transform: uppercase;
      color: #FFFFFF;
      max-width: 1000px;
      margin: 0 auto;
      margin-top: 90px;
      margin-bottom: 90px;
    }
    &_item {
      width: 1000px;
      min-height: 350px;
      border: 1px solid #A9A9A9;
      border-radius: 6px;
      padding: 32px 223px;
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
    &_add {
      display: flex;
      align-items: center;
      &-icon {
        padding-top: 4px;
      }
      &-text {
        font-weight: 400;
        font-size: 18px;
        margin-left: 10px;
        color: #A9A9A9;
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

    &_load {
      margin-top: 40px;
      display: flex;
      align-items: center;
      &-click {
      font-weight: 400;
      font-size: 18px;
      text-decoration-line: underline;
      color: #F6F6F6;
      margin-left: 15px;
      }
    }
  }

  .des {
    text-align: left;
  }

  .input {
    text-align: left;
  }

  .add {
    &_test {
      button {
        width: 287px;
        height: 54px;
        border: 1px solid #FFED00;
        border-radius: 6px;
        background: none;
        display: block;
        margin: 0 auto;
        font-weight: 600;
        font-size: 18px;
        color: #FFED00;
      }
    }
  }

  .link {
    margin: 90px 0;
    &_title {
      font-weight: 400;
      font-size: 16px;
      text-align: center;
      color: #FFFFFF;
      margin-bottom: 15px;
    }
    &_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 510px;
      min-height: 30px;
      margin: 0 auto;
    }
    &_text {
      a {
        font-weight: 600;
        font-size: 18px;
        text-decoration: none;
        color: #F6F6F6;
      }
    }
  }


</style>
