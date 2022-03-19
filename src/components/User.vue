<template>
  <div class="container">
    <div class="log_head">
      <div class="log_head-icon">
        <img src="./assets/UserCircle.svg" alt="user">
      </div>
      
      <div class="log_head-name">
          Логин
      </div>
    </div>

    <div class="log_info">
      <div class="log_info-title">
        Пройденые вами тесты:
      </div>

      <div class="log_info-content">
        <div class="log_item">
          <div class="log_item-theme">
            <span class="log_item-num">1</span>
            <span class="log_item-text">
              Тест: Тема 
            </span>
          </div>
          <div class="log_item-rez">Результат <span>100%</span></div>
          <div class="log_item-btn">
            <button>Пройти тест</button>
          </div>
        </div>

        <div class="log_item">
          <div class="log_item-theme">
            <span class="log_item-num">2</span>
            <span class="log_item-text">
              Тест: Тема 
            </span>
          </div>
          <div class="log_item-rez">Результат <span>10%</span></div>
          <div class="log_item-btn">
            <button>Пройти тест через 01:01:00</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">



  .log {
    &_head {
      display: flex;
      align-items: center;
      width: 300px;
      min-height: 100px;
      &-name {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        color: #FFFFFF;
        margin-left: 15px;
      }
    }

    &_info {
      &-title {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        margin-top: 50px;
        color: #A9A9A9;
      }
    }
    
    &_item {
      display: flex;
      align-items: center;
      margin-top: 45px;
      &-theme {
        border: 1.5px solid #A9A9A9;
        border-radius: 6px;
        width: 418px;
        height: 60px; 
        padding: 18px 12px;
      }
      &-num, &-text, &-rez {
        font-weight: 400;
        font-size: 18px;
        color: #A9A9A9;
      }
      &-num {
        margin-right: 30px;
      }
      &-rez {
        margin-left: 60px;
        width: 254px;
        height: 60px;   
        border: 1.5px solid #A9A9A9;
        border-radius: 6px;
        padding: 18px 30px;
        span {
          color: #FFED00;
          margin-left: 20px;
        }
      }

      &-btn {
        width: 319px;
        height: 60px;
        margin-left: 60px;
        button {
          width: 100%;
          height: 100%;
          cursor: pointer;
          border: none;
          background: #FFED00;
          border-radius: 6px;
          font-weight: 600;
          font-size: 18px;
          color: #000000;

        }
      }
    }
  }


</style>
