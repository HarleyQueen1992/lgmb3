<template>
  <div class="neurological-department-page page">
    <div class="neurological-department-page-banner">
      <img
        src="https://greenw.net/wp-content/uploads/2020/12/nevrolog.jpg"
        alt="banner"
      />
      <h1>Неврологическое отделение</h1>
    </div>
    <div class="neurological-department-page-container container">
      <div class="neurological-department-page-container-info">
        <div
          style="grid-area: a"
          class="neurological-department-page-container-info-head-of-department"
        >
          <img
            src="./../../../assets//images/about/management/person-man.png"
            alt="head-of-department"
          />
          <h3>Заведующий отделением</h3>
          <h2>Неврологий Евгений Парфенонович</h2>
        </div>
        <div
          style="grid-area: b"
          class="neurological-department-page-container-info-descript"
        >
          <h2 class="neurological-department-page-container__title">
            О нашем отделении
          </h2>
          <p class="neurological-department-page-container__text">
            Неврологическое отделение Луганской государственной многопрофильной
            больницы №3 - это специализированное медицинское подразделение,
            предоставляющее высококачественную диагностику, лечение и
            реабилитацию пациентам с неврологическими заболеваниями. Наша
            команда специалистов обладает обширным опытом в области неврологии и
            стремится обеспечить наилучшую медицинскую помощь каждому пациенту.
          </p>
          <br />
          <p class="neurological-department-page-container__text">
            Отделение работает с 1990г. Рассчитано на 40 коек. Расположено на
            2-ом этаже, приспособленного под стационар здания.
          </p>
        </div>
      </div>
      <h2
        class="neurological-department-page-container__title neurological-department-page-container__title_center"
      >
        Наши Специализации
      </h2>
      <div class="neurological-department-page-container-specializations">
        <div
          class="neurological-department-page-container-specializations-item"
        >
          <h3>Неврологические Заболевания Центральной Нервной Системы</h3>
          <p>
            Диагностика и лечение заболеваний головного мозга и спинного мозга,
            включая инсульты, мигрени, эпилепсию и другие.
          </p>
        </div>
        <div
          class="neurological-department-page-container-specializations-item"
        >
          <h3>Периферические Неврологические Заболевания</h3>
          <p>
            Диагностика и лечение заболеваний периферических нервов, включая
            различные невропатии и нейротравмы.
          </p>
        </div>
        <div
          class="neurological-department-page-container-specializations-item"
        >
          <h3>Движительные Расстройства</h3>
          <p>
            Оценка и лечение расстройств движения, таких как болезнь Паркинсона,
            болезнь Ганта и другие.
          </p>
        </div>
        <div
          class="neurological-department-page-container-specializations-item"
        >
          <h3>Диагностика и Лечение Боли</h3>
          <p>
            Оценка и управление хронической болевой симптоматикой, включая
            нейропатическую боль.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.neurological-department-page {
  padding-top: 0px !important;
  width: 100%;
  &-banner {
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 30vw;
      object-fit: cover;
    }
    h1 {
      position: absolute;
      bottom: 20%;
      left: 50%;
      text-align: center;
      text-transform: uppercase;
      z-index: 3;
      padding-bottom: 20px;
      color: rgba(255, 255, 255, 0.9);
      transform: translateX(-50%);

      &::before {
        content: '';
        position: absolute;
        height: 3px;
        width: 50%;
        background-color: rgb(255, 255, 255);
        z-index: 3;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      z-index: 2;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.672));
    }
  }
  &-container {
    padding: 40px 0;
    &-info {
      display: grid;
      grid-template-areas: 'a b b';
      grid-column-gap: 25px;
      &-head-of-department {
        align-self: center;
        justify-self: center;
        width: 100%;
        display: grid;
        grid-template-rows: auto 50px auto;
        img {
          width: 100%;
        }
        h3 {
          font-weight: 400;
          color: rgba(0, 0, 0, 0.7);
          justify-self: center;
          align-self: center;
        }
        h2 {
          text-align: center;
          color: $title-color;
        }
      }
      &-descript {
        align-self: center;
      }
    }
    &__title {
      font-size: 30px;
      color: $title-color;
      font-weight: 500;
      margin-bottom: 40px;
      &_center {
        text-transform: uppercase;
        margin-top: 40px;
        text-align: center;
        position: relative;
        width: 100%;
        padding: 20px;

        &::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: 3px;
          width: 100px;
          background-color: $main-color-2;
          bottom: 0;
        }
      }
    }
    &-specializations {
      display: grid;
      grid-template-areas: 'a b c' 'd d d';
      grid-column-gap: 50px;
      grid-row-gap: 50px;
      &-item {
        padding: 30px;
        border-radius: 10px;
        background-color: rgb(237, 236, 236);
        h3 {
          margin-bottom: 20px;
          text-align: center;
        }
        p {
          line-height: 22px;
        }
      }
    }
    &__text {
      font-size: 20px;
      text-align: justify;
      line-height: 28px;
    }
  }
}

@media screen and (max-width: 1000px) {
  .neurological-department-page {
    &-container {
      &-info {
        &-head-of-department {
          img {
            height: 300px;
            max-width: 100%;
            object-fit: cover;
          }
        }
      }
      &-specializations {
        grid-template-areas: 'a b' 'c d';
        grid-column-gap: 25px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .neurological-department-page {
    &-banner {
      img {
        height: 50vw;
      }
      h1 {
        font-size: 22px;
      }
    }
    &-container {
      &-info {
        grid-template-columns: 1fr;
        grid-template-areas: 'b' 'a';
        &-head-of-department {
          img {
            justify-self: center;
            height: 400px;
            width: auto;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .neurological-department-page {
    &-container {
      &-specializations {
        grid-template-areas: 'a' 'b' 'c' 'd';
      }
    }
  }
}
</style>
