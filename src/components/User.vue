<template>
  <div class="container">
    <div class="log_head">
      <div class="log_head-icon">
        <img src="../assets/UserCircle.svg" alt="user">
      </div>
      
      <div class="log_head-name">
          Имя Фамилия Отчество
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
              Тестировщик
            </span>
          </div>
          <div class="log_item-rez">Результат <span class="green">100%</span></div>
          <div class="log_item-btn">
            <button class="btn">Пройти тест</button>
          </div>
        </div>

        <div class="log_item">
          <div class="log_item-theme">
            <span class="log_item-num">2</span>
            <span class="log_item-text">
              Веб-разработчик 

            </span>
          </div>
          <div class="log_item-rez">Результат <span class="orange">65%</span></div>
          <div class="log_item-btn">
            <button class="btn btn-disabled">Пройти тест через 01:01:00</button>
          </div>
        </div>

        <div class="log_item">
          <div class="log_item-theme">
            <span class="log_item-num">2</span>
            <span class="log_item-text">
              Веб-разработчик 

            </span>
          </div>
          <div class="log_item-rez">Результат <span class="red">10%</span></div>
          <div class="log_item-btn">
            <button class="btn btn-disabled">Пройти тест через 01:01:00</button>
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
      min-width: 300px;
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
        padding: 18px 24px;
        
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
          margin-left: 20px;
        }
      }

      &-btn {
        width: 319px;
        height: 60px;
        margin-left: 60px;
      }
    }
  }

.btn {
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

.red {
  color: #FA9494;
}

.green {
  color: #61FF00;
}

.orange {
  color: #FFED00;
}

.btn-disabled {
  background: none;
  color: #F6F6F6;
  border: 1px solid #FFED00;
  border-radius: 6px;
}

</style>
