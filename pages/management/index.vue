<template>
  <div class="management-page page">
    <div class="management-page-container container">
      <h1 class="management-page-container__title page-title">
        Руководство Луганской Государственной Многопрофильной Больницы №3
      </h1>
      <h2 class="management-page-container-head-doctor__title">Главный врач</h2>
      <div class="management-page-container-head-doctor">
        <div class="management-page-container-head-doctor__image">
          <img
            src="./../../../assets/images/about/management/person-man.png"
            alt="person-man"
          />
        </div>
        <div class="management-page-container-head-doctor-descript">
          <h2 class="management-page-container-head-doctor-descript__title">
            Пилавов Александр Монолисович
          </h2>
          <br />
          <p class="f-weight-300">Кандидат медицинских наук.</p>
          <p class="f-weight-300">
            Ассистент кафедры терапевтической и хирургической стоматологии ГУ
            «Луганский государственный медицинский университет имени Святителя
            Луки».
          </p>
          <br />
          <p><b>График работы:</b> c 8:00 до 17:00</p>
          <p><b>Телефон приемной:</b> 102 - 637</p>
        </div>
      </div>
      <div class="management-page-container-deputies">
        <div class="management-page-container-deputies-item">
          <div class="management-page-container-deputies-item__image">
            <img
              src="./../../../assets/images/about/management/person-man.png"
              alt="deputies-image"
            />
          </div>
          <div class="management-page-container-deputies-item-descript">
            <h2 class="management-page-container-deputies-item-descript__title">
              Данаев Андрей Валерьевич
            </h2>
            <h3 class="management-page-container-deputies-item-descript">
              Заместитель главного врача по техническим вопросам
            </h3>
            <p><b>График работы:</b> c 8:00 до 16:00</p>
            <p><b>Телефон:</b> 123-312</p>
          </div>
        </div>
        <div class="management-page-container-deputies-item">
          <div class="management-page-container-deputies-item__image">
            <img
              src="./../../../assets/images/about/management/person-man.png"
              alt="deputies-image"
            />
          </div>
          <div class="management-page-container-deputies-item-descript">
            <h2 class="management-page-container-deputies-item-descript__title">
              Данаев Андрей Валерьевич
            </h2>
            <h3 class="management-page-container-deputies-item-descript">
              Заместитель главного врача по техническим вопросам
            </h3>
            <p><b>График работы:</b> c 8:00 до 16:00</p>
            <p><b>Телефон:</b> 123-312</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.management-page {
  &-container {
    &__title {
      width: 70%;
      margin-bottom: 50px;
    }
    &-head-doctor {
      margin: 50px 0;
      display: grid;
      grid-template-columns: 40% 60%;
      &__title {
        font-size: 30px;
        color: $title-color;
        width: 70%;
        padding-bottom: 15px;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          height: 3px;
          width: 30%;
          bottom: 0;
          z-index: 10;
          background-color: $main-color-2;
        }
        // &::after {
        //   content: '';
        //   position: absolute;
        //   height: 1px;
        //   width: 100%;
        //   bottom: 0;
        //   left: 0;
        //   z-index: 9;
        //   background-color: rgba(0, 0, 0, 0.2);
        // }
      }

      &__image {
        align-self: center;
        img {
          width: 100%;
        }
        width: 80%;
      }

      &-descript {
        align-self: center;
        &__title {
          font-size: 25px;
          color: $text-color;
        }
        p {
          font-size: 20px;
          color: $text-color;
          margin-bottom: 10px;
        }
      }
    }
    &-deputies {
      display: grid;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 50px;
      padding: 50px 0;
      &-item {
        display: grid;
        grid-template-columns: 30% 70%;
        grid-column-gap: 20px;
        &__image {
          align-self: center;
          width: 100%;
          img {
            width: 100%;
          }
        }
        &-descript {
          align-self: center;
          &__title {
            font-weight: 500;
            font-size: 23px;
            color: $text-color;
            margin-bottom: 10px;
          }
          h3 {
            width: 90%;
            font-weight: 400;
            font-size: 18px;
            margin-bottom: 10px;
          }
          p {
            font-size: 16px;
            color: $text-color;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .management-page {
    &-container {
      &__title {
        width: 100%;
      }
      &-deputies {
        grid-template-columns: 1fr;
        grid-row-gap: 50px;
      }
    }
  }
}

@media screen and (max-width: 763px) {
  .management-page {
    &-container {
      &-head-doctor {
        grid-template-columns: 1fr;
        grid-row-gap: 20px;
        grid-template-rows: auto 1fr;
        &__image {
          justify-self: center;
        }
        &-descript {
          justify-self: center;
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .management-page {
    &-container {
      &-head-doctor {
        grid-template-columns: 1fr;
        grid-row-gap: 20px;
        grid-template-rows: auto 1fr;
        &__title {
          font-size: 20px;
        }
        &__image {
          justify-self: center;
        }
        &-descript {
          justify-self: center;
          &__title {
            text-align: center;
          }
          p {
            text-align: center;
          }
        }
      }
      &-deputies {
        &-item {
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr;
          grid-row-gap: 20px;
          &__image {
            justify-self: center;
          }
          &-descript {
            &__title {
              text-align: center;
            }
            p {
              text-align: center;
            }
            h3 {
              text-align: center;
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
