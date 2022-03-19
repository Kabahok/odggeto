<template>
<div class="container">
  <header class="header">
    <div class="header_logo">
      <img src="../assets/logo.svg" alt="logo">
    </div>
    <div class="header_link">
        <div class="header_txt">Выйти
            <div class="line">
                <img src="../assets/line.svg" alt="">
            </div>
        </div>
    </div>
  </header>

  <div class="check_title">
      Пройденные тесты пользователями:
  </div>

  <div class="categ">
      <button class="categ_btn back">Backend-разработчик</button>
      <button class="categ_btn test">Тестировщики</button>
  </div>

  <div class="check_wrapper">
      <div class="check_item">
          <div class="check_item-head">
              <div class="check_item-title">Пользователь: Иванов Иван Иванович </div>
              <div class="check_item-text">Тестовая часть: 80%</div>
          </div>

          <hr>
          <div class="check_item-foot">
              <div class="check_item-status status-green">Проходит</div>
          </div>
      </div>

      <div class="check_item">
          <div class="check_item-head">
              <div class="check_item-title">Пользователь: Издюк Сергей Петрович</div>
              <div class="check_item-text">Тестовая часть: 65%</div>
          </div>

          <hr>
          <div class="check_item-foot">
              <div class="check_item-status status-orange">Требуется проверка письменного задания</div>
          </div>
      </div>

      <div class="check_item">
          <div class="check_item-head">
              <div class="check_item-title">Пользователь: Килов Аван Владимирович</div>
              <div class="check_item-text">Тестовая часть: 20%</div>
          </div>

          <hr>
          <div class="check_item-foot">
              <div class="check_item-status status-red">Не прошел</div>
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
  
  hr {
     position: absolute;
     bottom: 35%;
     left: 0;
     width: 100%;
     background: #A9A9A9;
  }


  body {
    background: #000;
  }

.categ {
    margin-top: 30px;
}

.back {
    width: 277px;
    height: 54px;
    background: #FFED00;
    border-radius: 6px;
    padding: 16px 32px;
    outline: none;
    border: none;
    font-weight: 600;
    font-size: 18px;
    color: #000000;
    margin-right: 60px;
}

.test {
    border: 1.5px solid #FFED00;
    box-sizing: border-box;
    border-radius: 6px;
    background: none;
    outline:none;
    padding: 16px 32px;
    font-weight: 600;
    font-size: 18px;
    color: #FFED00;

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
    &_link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 128px;
        cursor: pointer;
    }
    &_txt {
        position: relative;
        font-weight: 600;
        font-size: 18px;
        color: #F6F6F6;

    }
  }

  .line {
    position: absolute;
    top: 44%;
    left: -37%;
  }

.check {
    &_title {
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        margin-top: 70px;
        color: #FFFFFF;
    }
    &_item {
        position: relative;
        border: 1.5px solid #A9A9A9;
        box-sizing: border-box;
        border-radius: 6px;
        width: 629px;
        min-height: 186px;
        padding: 24px 32px;
        margin-top: 60px;
        &-title, &-text, &-status {
            font-weight: 400;
            font-size: 18px;
            color: #FFFFFF;
        }
        &-text {
            margin-left: 24px;
            margin-top: 24px;
        }
        &-status {
            margin-top: 48px;
        }
    }
}

.status-red {
    color: #FF0000;
}

.status-green {
    color: #61FF00;
}

.status-orange {
    color: #FFED00;
}


</style>
