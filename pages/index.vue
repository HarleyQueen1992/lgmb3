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
      </div>
      <div class="main-section-3">asdf</div>
    </div>

    <h1 class="title">0</h1>
    <input class="input" type="text" />
    <a href="./../documents/licenses/test.pdf">Logo</a>
  </div>
</template>
<script setup>
const { $anime } = useNuxtApp();
let isVisible = false;

const handleScroll = () => {
  // Your scroll handling here
  let el = document.getElementsByClassName('title')[0];
  console.log(window.scrollY);
  if (window.scrollY > el.offsetTop - window.innerHeight && !isVisible) {
    $anime({
      targets: '.title',
      innerHTML: [0, 1000],
      easing: 'linear',
      round: 1, // Will round the animated value to 1 decimal
    });
    isVisible = true;
  }
  if (
    window.scrollY > el.offsetTop + window.innerHeight ||
    window.scrollY < el.offsetTop - window.innerHeight
  ) {
    isVisible = false;
  }
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
      height: 1000px;
      background-color: wheat;
      &-holder {
        position: absolute;
        z-index: 10;
        width: 1000px;
        left: 50%;
        transform: translateX(-50%) translateY(-50px);
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
      }
    }
  }
}
.title {
  margin-top: 1800px;
}
</style>
