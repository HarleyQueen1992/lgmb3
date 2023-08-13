<template>
  <div class="main-page">
    <div class="main">
      <div class="main-banner">
        <div class="main-banner-descript">
          <h1 class="main-banner-descript__title">
            Луганская Государственная Многопрофильная Больница №3
          </h1>
          <span class="main-banner-descript__quote">
            — "Ваше здоровье — наша ответственность." —</span
          >
        </div>
        <img src="./../assets/images/main/MainBanner.svg" alt="banner" />
      </div>
      <div class="main-section-2">
        <div class="main-section-2-holder">
          <h2 class="main-section-2-holder__title">Наши отделения</h2>
          <div class="main-section-2-holder-branches">
            <nuxt-link
              to="/branches/therapy"
              class="main-section-2-holder-branches-item"
              style="grid-area: a"
            >
              <Icon
                class="main-section-2-holder-branches-item__icon"
                name="healthicons:stethoscope-outline"
              />
              <span class="main-section-2-holder-branches-item__text"
                >Терапия</span
              >
            </nuxt-link>
            <nuxt-link
              to="/bracnhes/polyclinic"
              class="main-section-2-holder-branches-item"
              style="grid-area: b"
            >
              <Icon
                class="main-section-2-holder-branches-item__icon"
                name="healthicons:hospital-outline"
              />
              <span class="main-section-2-holder-branches-item__text"
                >Поликлиника</span
              >
            </nuxt-link>
            <nuxt-link
              to="/branches/surgery"
              class="main-section-2-holder-branches-item"
              style="grid-area: c"
            >
              <Icon
                class="main-section-2-holder-branches-item__icon"
                name="healthicons:surgical-sterilization-outline"
              />
              <span class="main-section-2-holder-branches-item__text"
                >Хирургия</span
              >
            </nuxt-link>
            <nuxt-link
              to="/branches/neurology"
              class="main-section-2-holder-branches-item"
              style="grid-area: d"
            >
              <Icon
                class="main-section-2-holder-branches-item__icon"
                name="healthicons:neurology-outline"
              />
              <span class="main-section-2-holder-branches-item__text"
                >Неврология</span
              >
            </nuxt-link>
            <nuxt-link
              to="/brancehs/reception"
              class="main-section-2-holder-branches-item"
              style="grid-area: e"
            >
              <Icon
                class="main-section-2-holder-branches-item__icon"
                name="healthicons:ambulance-outline"
              />
              <span class="main-section-2-holder-branches-item__text"
                >Приемное</span
              >
            </nuxt-link>
          </div>
          <nuxt-link to="/branches" class="main-section-2-holder-more">
            <Icon
              class="main-section-2-holder-more__icon"
              name="solar:double-alt-arrow-down-outline"
            />
          </nuxt-link>
        </div>
        <div class="main-section-2-container container">
          <div class="main-section-2-container-image">
            <img
              src="./../assets/images/main/section-2/main-entrance.jpg"
              alt="main-entrance"
            />
          </div>
          <div class="main-section-2-container-description">
            <h3>Уважаемые посетители и пациенты!</h3>
            <p>
              Рады приветствовать Вас на официальном сайте Луганской
              Государственной Многопрофильной Больницы №3 (ЛГМБ №3). Мы призваны
              заботиться о вашем здоровье и обеспечивать высококачественную
              медицинскую помощь, которая важна для нас всех.
            </p>
            <br />
            <p>
              С момента своего основания наша больница стремится предоставлять
              передовые медицинские услуги в широком спектре направлений. Наша
              команда опытных специалистов работает с энтузиазмом и
              преданностью, чтобы обеспечить вас заботой, вниманием и
              профессионализмом.
            </p>
            <br />
            <p>
              Большое спасибо за то, что выбрали ЛГМБ №3 для ваших медицинских
              потребностей. Мы гордимся возможностью служить вам и работать над
              тем, чтобы каждый ваш шаг был на пути к здоровью и благополучию.
            </p>
            <p>
              С наилучшими пожеланиями, Администрация Луганской Государственной
              Многопрофильной Больницы №3
            </p>
          </div>
        </div>
      </div>
      <div class="main-section-3">
        <div class="main-section-3-container container">
          <h2 class="main-section-3-container__title">
            Приоритетные направления
          </h2>
          <div class="main-section-3-container-directions">
            <div class="main-section-3-container-directions-item">
              <img
                class="main-section-3-container-directions-item__icon"
                src="./../assets/images/main/section-3/insult.svg"
                alt="insult"
              />
              <div class="main-section-3-container-directions-item__descript">
                <h4>Инсульт</h4>
                <span
                  >Инсульт — заболевание, которое является результатом
                  внезапного нарушения мозгового кровоснабжения.</span
                >
              </div>
            </div>
            <div class="main-section-3-container-directions-item">
              <img
                class="main-section-3-container-directions-item__icon"
                src="./../assets/images/main/section-3/kardio.svg"
                alt="insult"
              />
              <div class="main-section-3-container-directions-item__descript">
                <h4>ИНФАРКТ МИОКАРДА</h4>
                <span
                  >Инфаркт миокарда — одно из самых распространенных заболеваний
                  в кардиологии.</span
                >
              </div>
            </div>
            <div class="main-section-3-container-directions-item">
              <img
                class="main-section-3-container-directions-item__icon"
                src="./../assets/images/main/section-3/protez.svg"
                alt="protez"
              />
              <div class="main-section-3-container-directions-item__descript">
                <h4>ЭНДОПРОТЕЗИРОВАНИЕ СУСТАВОВ</h4>
                <span
                  >Эндопротезирование тазобедренного или коленного сустава часто
                  является единственным способом восстановления утраченной
                  функции.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-section-4">
        <div class="main-section-4-description">
          <h1 class="main-section-4-description__title">
            “Медицина поистине есть самое благородное из всех искусств.”
          </h1>
          <h4 class="main-section-4-description__quote">— Гиппократ</h4>
        </div>
      </div>
      <div class="main-section-5">
        <div class="main-section-5-container container">
          <h1 class="main-section-5-container__title">Почему нам доверяют</h1>
          <div class="main-section-5-container-advantage">
            <div class="main-section-5-container-advantage-item">
              <div class="main-section-5-container-advantage-item__image">
                <img
                  src="./../assets/images/main/section-5/about-us.png"
                  alt="about-us"
                />
              </div>
              <div class="main-section-5-container-advantage-item-descript">
                <h4>ЭКСПЕРТЫ</h4>
                <p>Нам более 70 лет</p>
              </div>
            </div>
            <div class="main-section-5-container-advantage-item">
              <div class="main-section-5-container-advantage-item__image">
                <img
                  src="./../assets/images/main/section-5/dostupnost.jpg"
                  alt="ostupnost"
                />
              </div>
              <div class="main-section-5-container-advantage-item-descript">
                <h4>ДОСТУПНОСТЬ</h4>
                <p>Мы не коммерческая организация</p>
              </div>
            </div>
            <div class="main-section-5-container-advantage-item">
              <div
                class="main-section-5-container-advantage-item__image main-section-5-container-advantage-item__image-big"
              >
                <img
                  src="./../assets/images/main/section-5/mproff.jpg"
                  alt="mproff"
                />
              </div>
              <div class="main-section-5-container-advantage-item-descript">
                <h4>МНОГОПРОФИЛЬНОСТЬ</h4>
                <p>Более 30 специальностей</p>
              </div>
            </div>
            <div class="main-section-5-container-advantage-item">
              <div class="main-section-5-container-advantage-item__image">
                <img
                  src="./../assets/images/main/section-5/expertnost.jpg"
                  alt="expertnost"
                />
              </div>
              <div class="main-section-5-container-advantage-item-descript">
                <h4>АВТОРИТЕТНОСТЬ</h4>
                <p>
                  83 врача высшей категории, 28 КМН, 4 профессора, 7 докторов
                  наук, 7 кафедр.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { $anime } = useNuxtApp();
const handleScroll = () => {
  // $anime({
  //   targets: '.main-section-5-container-advantage-item',
  //   translateY: 0,
  // });
};
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>
<style lang="scss">
.main {
  &-banner {
    position: relative;
    img {
      user-select: none;
    }
    &-descript {
      position: absolute;
      top: 40%;
      transform: translateY(-50%);
      width: 50%;
      left: 10%;
      z-index: 3;
      color: #526371;
      &__title {
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 80px;
      }
      &__quote {
        font-size: 30px;
        position: relative;
        font-size: 30px;
      }
    }
    &::before {
      content: '';
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.3),
        rgba(255, 255, 255, 0)
      );
      opacity: 1;
    }
    &::after {
      content: '';
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(270deg, rgba(255, 255, 255, 0), white);
      opacity: 1;
    }
  }
  &-section {
    &-2 {
      position: relative;

      background-color: #f7f7f7;
      &-holder {
        position: absolute;
        z-index: 10;
        width: 1000px;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background-color: rgb(255, 255, 255);
        &__title {
          color: black;
          position: relative;
          font-size: 26px;
          text-transform: uppercase;
          text-align: center;
          padding: 25px 0;
          &::before {
            content: '';
            position: absolute;
            background-color: $main-color-2;
            bottom: 0;
            width: 50px;
            height: 3px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        &-branches {
          margin-top: 30px;
          display: grid;
          grid-template: 'a b c d e';
          &-item {
            cursor: pointer;
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-row-gap: 10px;
            &:hover {
              background-color: rgba(255, 255, 255, 0.5);

              .main-section-2-holder-branches-item__text,
              .main-section-2-holder-branches-item__icon {
                color: black;
              }
            }

            &__icon {
              color: rgba(0, 0, 0, 0.5);
              font-size: 40px;
              justify-self: center;
              align-self: center;
              transition: color 0.2s ease-in;
            }
            &__text {
              color: rgba(0, 0, 0, 0.7);
              font-weight: 600;
              font-size: 15px;
              transition: color 0.2s ease-in;
              text-transform: uppercase;
              align-self: center;
              justify-self: center;
            }
          }
        }
        &-more {
          display: block;
          text-align: center;
          color: rgba(0, 0, 0, 0.7);
          padding: 10px 0;
          &__icon {
            cursor: pointer;
            font-size: 30px;
          }
        }
      }
      &-container {
        padding: 150px 0;
        display: grid;
        grid-template-columns: 30% 70%;
        &-image {
          img {
            width: 100%;
          }
        }
        &-description {
          align-self: center;
          margin-left: 100px;
          h3 {
            font-size: 30px;
            margin-bottom: 50px;
          }
          p {
            font-size: 18px;
            line-height: 25px;

            &:last-child {
              margin-top: 50px;
              font-style: italic;
              text-align: right;
              margin-left: 200px;
            }
          }
        }
      }
    }
    &-3 {
      &-container {
        padding: 100px 0;
        &__title {
          font-size: 30px;
          text-align: center;
          color: $text-color;
          text-transform: uppercase;
        }
        &-directions {
          margin-top: 50px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-column-gap: 5%;
          &-item {
            display: grid;
            grid-template-rows: 80px 1fr;
            grid-row-gap: 20px;
            &__icon {
              align-self: center;
              justify-self: center;
              color: #244346;
              font-size: 80px;
            }
            &__descript {
              h4 {
                font-size: 22px;
                font-weight: 500;
                text-transform: uppercase;
                margin-bottom: 10px;
              }
              span {
                line-height: 25px;
              }
            }
          }
        }
      }
    }
    &-4 {
      background: url(https://health-center.vamtam.com/wp-content/uploads/2014/01/bg_quote.jpg)
        no-repeat;
      background-size: cover;
      background-attachment: fixed;
      padding-top: 200px;
      padding-bottom: 170px;
      &-description {
        color: white;
        text-align: center;
        &__title {
          margin-bottom: 30px;
          font-size: 40px;
        }
        &__quote {
          font-size: 20px;
          font-weight: 400;
        }
      }
    }
    &-5 {
      padding: 100px 0;
      &-container {
        position: relative;
        &__title {
          text-align: center;
          font-size: 30px;
          font-family: 500;
          text-transform: uppercase;
          color: $text-color;
        }
        &-advantage {
          position: absolute;
          width: 100%;
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-column-gap: 70px;
          justify-items: center;
          background: url(../assets/images/main/section-5/process-bg.png)
            no-repeat 50% 0;
          &-item {
            display: inline-grid;
            grid-template-rows: auto 1fr;
            transform: translateY(100px);
            grid-row-gap: 20px;
            transition: transform 0.3s ease-in;
            transform: translateY(100px);
            // &-disable {

            // }
            &-active {
              transform: translateY(0);
            }
            h4 {
              text-align: center;
              color: $text-color;
              margin-bottom: 10px;
            }
            p {
              text-align: center;
              line-height: 25px;
            }
            &__image {
              z-index: 2;
              width: 220px;
              overflow: hidden;
              display: grid;
              height: 220px;
              border-radius: 50%;
              border: 10px solid rgb(238, 238, 238);
              &-big {
                width: 270px;
                height: 270px;
                margin-top: 40px;
              }
              img {
                align-self: center;
                justify-self: center;
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1500px) {
  .main {
    &-section {
      &-2 {
        &-container {
          &-image {
            align-self: center;
          }
          &-description {
            p {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .main {
    &-section {
      &-2 {
        &-holder {
          width: 100%;
          transform: translateX(-50%) translateY(0);
          &-branches {
            grid-template:
              'a a b b c c'
              'd d d e e e';
            grid-row-gap: 20px;
          }
        }
        &-container {
          padding-top: 400px;
          padding-bottom: 50px;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          &-image {
            display: none;
          }
          &-description {
            margin-left: 0;
            h3 {
              text-align: center;
            }
          }
        }
      }
      &-3 {
        &-container {
          &__title {
          }
          &-directions {
            grid-template-columns: 1fr;
            grid-row-gap: 25px;
            &-item {
              text-align: center;
            }
          }
        }
      }
    }
  }
}
.title {
  margin-top: 1800px;
}
</style>
