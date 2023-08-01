<template>
  <footer class="footer">
    <div class="footer-container container">
      <div class="footer-container-col-1 footer-container-col">
        <div class="footer-container-col-1-row-1">
          <img src="./../assets/images/LogoBigWhite.svg" alt="logoBig" />
        </div>
        <div class="footer-container-col-1-row-2">
          <ul class="footer-container-col-1-row-2-menu-list">
            <li class="footer-container-col-1-row-2-menu-list__item">
              <nuxt-link to="/">Главная</nuxt-link>
            </li>
            <li class="footer-container-col-1-row-2-menu-list__item">
              <nuxt-link to="/about">О больнице</nuxt-link>
            </li>
            <li class="footer-container-col-1-row-2-menu-list__item">
              <nuxt-link to="/history">История</nuxt-link>
            </li>
            <li class="footer-container-col-1-row-2-menu-list__item">
              <nuxt-link to="/license">Лизензия</nuxt-link>
            </li>
            <li class="footer-container-col-1-row-2-menu-list__item">
              <nuxt-link to="/contacts">Контакты</nuxt-link>
            </li>
          </ul>
        </div>
        <!-- <div class="footer-container-col-1-row-3">
          Луганская Государственная Многопрофильная Больница №3 © 2023. All
          Right Reserved
        </div> -->
      </div>
      <div class="footer-container-col-2 footer-container-col">
        <div class="footer-container-col-2-row-1 footer-container-col-2-row">
          <div
            class="footer-container-col-2-row-1-icon-block footer-container-col-2-row-icon-block"
          >
            <Icon
              class="footer-container-col-2-row-1-icon-block__icon footer-container-col-2-row-icon-block__icon"
              name="material-symbols:location-on"
            />
          </div>
          <div
            class="footer-container-col-2-row-1-text footer-container-col-2-row-text"
          >
            г. Луганск, квартал Щербакова, 1
          </div>
        </div>
        <div class="footer-container-col-2-row-2 footer-container-col-2-row">
          <div
            class="footer-container-col-2-row-2-icon-block footer-container-col-2-row-icon-block"
          >
            <Icon
              class="footer-container-col-2-row-2-icon-block__icon footer-container-col-2-row-icon-block__icon"
              name="material-symbols:call"
            />
          </div>
          <a
            href="tel:79592614010"
            class="footer-container-col-2-row-2-text footer-container-col-2-row-text"
          >
            +7 (959) 261-40-10
          </a>
        </div>
        <div class="footer-container-col-2-row-3 footer-container-col-2-row">
          <div
            class="footer-container-col-2-row-3-icon-block footer-container-col-2-row-icon-block"
          >
            <Icon
              class="footer-container-col-2-row-3-icon-block__icon footer-container-col-2-row-icon-block__icon"
              name="material-symbols:mail"
            />
          </div>
          <a
            href="mailto:lgmb3@mail.ru"
            class="footer-container-col-2-row-3-text footer-container-col-2-row-text email"
          >
            lgmb3@mail.ru
          </a>
        </div>
      </div>
      <div class="footer-container-col-3 footer-container-col">
        <div class="footer-container-col-3-row-1">
          <h3 class="footer-container-col-3-row-1__title">
            Информация об организации
          </h3>
          <p class="footer-container-col-3-row-1__description">
            Луганская Государственная Многопрофильная Больница №3 (ЛГМБ №3)
            является одним из ведущих медицинских учреждений в Луганске. Она
            была основана в 1958 году и на протяжении долгих лет оказывает
            квалифицированную медицинскую помощь жителям и гостям города.
          </p>
        </div>
        <div class="footer-container-col-3-row-2">
          <div class="footer-container-col-3-row-2-social-networks">
            <a
              href="https://t.me/lgmb3_lnr"
              class="footer-container-col-3-row-2-social-networks-item"
            >
              <Icon
                class="footer-container-col-3-row-2-social-networks-item__icon"
                name="mdi:telegram"
              />
            </a>
            <a
              href="https://vk.com/lgmb3_lnr"
              class="footer-container-col-3-row-2-social-networks-item"
            >
              <Icon
                class="footer-container-col-3-row-2-social-networks-item__icon"
                name="mdi:vk"
              />
            </a>
            <a
              href="https://ok.ru/group/70000002531560"
              class="footer-container-col-3-row-2-social-networks-item"
            >
              <Icon
                class="footer-container-col-3-row-2-social-networks-item__icon"
                name="mdi:odnoklassniki"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      Луганская Государственная Многопрофильная Больница №3 © 2023. All Right
      Reserved
    </div>
  </footer>
</template>
<script setup></script>
<style lang="scss">
.footer {
  height: auto;
  width: 100%;
  background-color: #506171;
  &-container {
    padding: 50px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 50px;
    &-col {
      &-1 {
        display: grid;
        grid-template-rows: 1fr 1fr;
        &-row {
          &-1 {
            align-self: center;
            height: 80px;
            img {
              height: inherit;
            }
          }
          &-2 {
            align-self: center;
            text-align: center;
            &-menu-list {
              &__item {
                display: inline-block;
                padding-right: 20px;
                margin-bottom: 5px;
                line-height: 25px;
                position: relative;

                a {
                  color: white;
                  transition: color 0.2s;
                  &:hover {
                    color: $primary;
                  }
                }

                &::after {
                  content: '';
                  position: absolute;
                  height: 100%;
                  width: 1px;
                  background-color: $main-color-1;
                  top: 0;
                  right: 10px;
                }
                &:last-child::after {
                  content: '';
                  width: 0;
                }
              }
            }
          }
        }
      }
      &-2 {
        align-self: center;
        justify-self: center;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-row-gap: 20px;
        &-row {
          display: grid;
          grid-template-columns: 50px 1fr;
          grid-column-gap: 20px;
          &-icon-block {
            align-self: center;
            justify-self: center;
            &__icon {
              color: white;
              font-size: 25px;
            }
          }
          &-text {
            color: white;
            align-self: center;
            justify-self: start;
            font-size: 14px;
          }

          &-1 {
          }
        }
      }
      &-3 {
        display: grid;
        grid-template-rows: 1fr auto;
        grid-row-gap: 40px;
        &-row {
          &-1 {
            &__title {
              color: white;
              font-size: 22px;
              font-weight: 400;
              margin-bottom: 30px;
            }
            &__description {
              color: rgba(255, 255, 255, 0.8);
              font-size: 14px;
              font-weight: 300;
            }
          }
          &-2 {
            align-self: center;
            justify-self: center;
            &-social-networks {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-column-gap: 30px;
              &-item {
                background-color: rgba(0, 0, 0, 0.5);
                border-radius: 5px;
                padding: 5px;
                &__icon {
                  color: white;
                  font-size: 25px;
                }
              }
            }
          }
        }
      }
    }
  }
  &-bottom {
    color: white;
    text-align: center;
    line-height: 25px;
    font-size: 15px;
    padding: 15px 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
@media screen and (max-width: 1024px) {
  .footer {
    &-container {
      padding: 50px 0;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-column-gap: 0;
      &-col {
        justify-self: center;
        text-align: center;
        &-1 {
          grid-template-rows: auto auto;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .footer {
    &-container {
      grid-template-rows: auto auto 1fr;
      grid-row-gap: 20px;
      &-col {
        &-1 {
          grid-template-rows: 80px 60px;
          grid-row-gap: 20px;
          &-row {
            &-1 {
              height: 60px;
            }
          }
        }
      }
    }
  }
}
</style>
