<template>
  <div class="contacts-page">
    <div class="contacts-page-container page container">
      <h1 class="contacts-page-container__title page-title">Контакты</h1>
      <div class="contacts-page-container-blocks">
        <div style="grid-area: a" class="contacts-page-container-blocks-info">
          <h2 class="contacts-page-container-blocks-info__title">
            ГУ "Луганская Городская Многопрофильная Больница № 3" ЛНР
          </h2>
          <div class="contacts-page-container-blocks-info-content">
            <div class="contacts-page-container-blocks-info-content-item">
              <Icon
                class="contacts-page-container-blocks-info-content-item__icon"
                name="material-symbols:call"
              />

              <a
                href="tel:79592614010"
                class="contacts-page-container-blocks-info-content-item__text"
              >
                +7 (959) 261-40-10
              </a>
            </div>
            <div class="contacts-page-container-blocks-info-content-item">
              <Icon
                class="contacts-page-container-blocks-info-content-item__icon"
                name="material-symbols:mail"
              />
              <a
                href="mailto:lgmb3@mail.ru"
                class="contacts-page-container-blocks-info-content-item__text email"
              >
                lgmb3@mail.ru
              </a>
            </div>
            <div class="contacts-page-container-blocks-info-content-item">
              <Icon
                class="contacts-page-container-blocks-info-content-item__icon"
                name="material-symbols:location-on"
              />
              <div
                class="contacts-page-container-blocks-info-content-item__text"
              >
                г. Луганск, квартал Щербакова, 1
              </div>
            </div>
          </div>
        </div>
        <div
          style="grid-area: b"
          class="contacts-page-container-blocks-info contacts-page-container-blocks-phones"
        >
          <h2 class="contacts-page-container-blocks-info__title">Телефоны</h2>
          <div class="contacts-page-container-blocks-phones-content">
            <p><b>Регистратура:</b> <span>(0642)-65-06-77</span></p>
            <p><b>Приемная главного врача:</b> <span>(0642)-65-06-72</span></p>
          </div>
        </div>
        <div style="grid-area: c" class="contacts-page-container-blocks-map">
          <h2 class="contacts-page-container-blocks-info__title">
            Где находимся
          </h2>
          <YandexMap :coordinates="coordinates" map-type="map" zoom="17" />
        </div>
        <div
          style="grid-area: d"
          class="contacts-page-container-blocks-location-help"
        >
          <h2 class="contacts-page-container-blocks-info__title">
            Как добраться
          </h2>
          <div class="contacts-page-container-blocks-location-help-content">
            <h3>Остановка Городская Больница №3</h3>
            <a
              target="_blank"
              href="https://wikiroutes.info/lugansk?routes=20469"
            >
              Маршрутка, 111б <br />
              направление → Железнодорожный вокзал
            </a>
            <a
              target="_blank"
              href="https://wikiroutes.info/lugansk?routes=20527"
            >
              Маршрутка, 124б <br />
              направление → квартал Мирный
            </a>
            <a
              target="_blank"
              href="https://wikiroutes.info/lugansk?routes=20541"
            >
              Маршрутка, 134 <br />
              направление → квартал Мирный
            </a>
            <a
              target="_blank"
              href="https://wikiroutes.info/lugansk?routes=20537"
            >
              Маршрутка, 137a <br />
              направление → квартал Мирный
            </a>
            <a
              target="_blank"
              href="https://wikiroutes.info/lugansk?routes=20546"
            >
              Маршрутка, 144 <br />
              направление → квартал Мирный
            </a>
            <a
              target="_blank"
              href="https://wikiroutes.info/lugansk?routes=20542"
            >
              Маршрутка, 147а <br />
              направление → квартал Мирный
            </a>
            <a
              target="_blank"
              href="https://wikiroutes.info/lugansk?routes=20549"
            >
              Маршрутка, 147б <br />
              направление → квартал Мирный
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { yandexMap } from 'vue-yandex-maps';
const coordinates = [48.54008, 39.282911];
</script>
<style lang="scss">
.contacts-page {
  &-container {
    &__title {
      margin-bottom: 50px;
    }
    &-blocks {
      display: grid;
      grid-template-areas:
        'a b'
        'c d';
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 50px;
      grid-column-gap: 50px;
      &-info {
        &__title {
          padding-bottom: 10px;
          font-weight: 400;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            height: 2px;
            width: 20%;
            bottom: 0;
            z-index: 10;
            background-color: $main-color-2;
          }
          &::after {
            content: '';
            position: absolute;
            height: 1px;
            width: 100%;
            bottom: 0;
            left: 0;
            z-index: 9;
            background-color: rgba(0, 0, 0, 0.2);
          }
        }
        &-content {
          display: grid;
          grid-template-rows: 1fr 1fr 1fr;
          grid-row-gap: 20px;
          margin: 30px 0;
          &-item {
            display: grid;
            grid-template-columns: 30px 1fr;
            grid-column-gap: 20px;
            &__text {
              align-self: center;
              justify-self: start;
            }
            &__icon {
              color: $title-color;
              align-self: center;
              justify-self: center;
              font-size: 20px;
            }
          }
        }
      }
      &-phones {
        &-content {
          margin: 30px 0;
          p {
            display: grid;
            grid-template-columns: auto 150px;
            margin-bottom: 10px;
            b {
              line-height: 25px;
              align-self: center;
              text-transform: uppercase;
            }
            span {
              justify-self: end;
              align-self: center;
            }
          }
        }
      }
      &-location-help {
        &-content {
          h3 {
            margin: 10px 0;
            color: $title-color;
            font-size: 22px;
            margin: 20px 0;
          }
          a {
            display: block;
            padding: 10px 20px;
            background-color: rgba(0, 0, 0, 0.05);
            border-radius: 5px;
            margin-bottom: 20px;
            line-height: 25px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .contacts-page {
    &-container {
      &__title {
        margin-bottom: 50px;
      }
      &-blocks {
        display: grid;
        grid-template-areas: 'a b' 'c c' 'd d ';
      }
    }
  }
}
@media screen and (max-width: 763px) {
  .contacts-page {
    &-container {
      &__title {
        margin-bottom: 50px;
      }
      &-blocks {
        display: grid;
        grid-template-areas: 'a' 'b' 'c' 'd';
        grid-template-columns: 1fr;
        grid-row-gap: 25px;
        &-info {
          &__title {
            font-size: 24px;
            line-height: 28px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .contacts-page {
    &-container {
      &__title {
        margin-bottom: 25px;
      }
    }
  }
}
.yandex-container {
  max-width: 100%;
  height: 400px;
  margin: 30px 0;
}
.ymaps-2-1-79-map {
  width: 100% !important;
}
</style>
