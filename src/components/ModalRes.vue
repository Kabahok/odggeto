<template>
<div class="container">
  <header class="header">
    <div class="header_logo">
      <img src="../assets/logo.svg" alt="logo">
    </div>
    <div class="header_link">
        <div class="header_icon">
            <img src="../assets/user_mini.svg" alt="">
        </div>
        <div class="header_txt">Профиль</div>
    </div>
  </header>

    <div class="modal_wrapper">
        <div class="modal_item">
            <div class="modal_title">Вы прошли тест “BACKEND” на </div>
            <div class="modal_percent">70%</div>
            <div class="modal_descr">У вас спорное количество баллов. 
            Наши модераторы уже проверяют ваш тест и вы получите ответ в течении 3-х дней</div>
            <div class="modal_link">Вы можете <a href="#">перепройти тест</a> через 02:00:00</div>
        </div>

        <div class="modal_item border-red">
            <div class="modal_title">Вы прошли тест “тестировщик” на  </div>
            <div class="modal_percent percent-red">40%</div>
            <div class="modal_descr">К сожалению вы не набрали нужное колличество правильных ответов. Для того чтобы попасть на собеседование наберите 80%.</div>
            <div class="modal_link">Вы можете <a href="#">перепройти тест</a> через 02:00:00</div>
        </div>

        <div class="modal_item border-green">
            <div class="modal_title">Вы прошли тест “BACKEND” на </div>
            <div class="modal_percent percent-green">95%</div>
            <div class="modal_descr">Вы набрали нужное количество баллов для приглашения на собеседование Оно придет вам на почту в течении 3-х рабочих дней!</div>
            <div class="modal_link">Вы можете <a href="#">перепройти тест</a> через 02:00:00</div>
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
  


  body {
    background: #000;
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
        font-weight: 600;
        font-size: 18px;
        color: #F6F6F6;
    }
  }

  .modal {
      &_item {
      padding: 90px 135px;
      width: 1320px;
      min-height: 650px;
      margin-top: 50px;
      border: 2px solid #FFED00;
      border-radius: 6px;
      }
      &_title {
        font-weight: 400;
        font-size: 36px;
        text-transform: uppercase;
        text-align: center;
        color: #FFFFFF;
      }

      &_percent {
        font-weight: 400;
        font-size: 144px;
        text-align: center;
        margin-top: 54px;
        text-transform: uppercase;
        color: #FFED00;
      }
      &_descr {
        font-weight: 400;
        font-size: 24px;
        margin-top: 54px;
        text-align: center;
        color: #FFFFFF;
      }
      &_link {
        font-weight: 400;
        font-size: 24px;
        text-align: center;
        color: #FFED00;
        margin-top: 54px;
        a {
            
            color: #FFED00;
            font-size: 24px;

        }
      }
  }

.percent-red {
    color: #FF0000;
}

.border-red {
    border-color: #FF0000;
}

.percent-green {
    color: #61FF00;

}

.border-green {
    border-color: #61FF00;

}

</style>
