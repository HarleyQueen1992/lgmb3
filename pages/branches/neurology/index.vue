<template>
  <div class="neurology-page branch-page page">
    <div class="neurology-page-banner branch-page-banner">
      <img
        src="./../../../assets/images/branches/neurology/nevrolog.jpeg"
        alt="banner"
      />
      <h1>Неврологическое отделение</h1>
    </div>
    <div class="neurology-page-container branch-page-container container">
      <div class="branch-page-container-info">
        <div
          style="grid-area: a"
          class="branch-page-container-info-head-of-department"
        >
          <img
            src="./../../../assets//images/about/management/person-man.png"
            alt="head-of-department"
          />
          <h2>Неврологий Евгений Парфенонович</h2>
          <h3>Заведующий отделением</h3>
          <h3>Врач невролог</h3>
        </div>
        <div style="grid-area: b" class="branch-page-container-info-descript">
          <h2 class="branch-page-container__title">О нашем отделении</h2>
          <p class="branch-page-container__text">
            Неврологическое отделение Луганской государственной многопрофильной
            больницы №3 - это специализированное медицинское подразделение,
            предоставляющее высококачественную диагностику, лечение и
            реабилитацию пациентам с неврологическими заболеваниями. Наша
            команда специалистов обладает обширным опытом в области неврологии и
            стремится обеспечить наилучшую медицинскую помощь каждому пациенту.
          </p>
          <br />
          <p class="branch-page-container__text">
            Отделение работает с 1990г. Рассчитано на 40 коек. Расположено на
            2-ом этаже, приспособленного под стационар здания.
          </p>
        </div>
      </div>
      <h2
        class="branch-page-container__title branch-page-container__title_center"
      >
        Наши Специализации
      </h2>
      <div class="neurology-page-container-specializations">
        <div class="neurology-page-container-specializations-item">
          <h3>Неврологические Заболевания Центральной Нервной Системы</h3>
          <p>
            Диагностика и лечение заболеваний головного мозга и спинного мозга,
            включая инсульты, мигрени, эпилепсию и другие.
          </p>
        </div>
        <div class="neurology-page-container-specializations-item">
          <h3>Периферические Неврологические Заболевания</h3>
          <p>
            Диагностика и лечение заболеваний периферических нервов, включая
            различные невропатии и нейротравмы.
          </p>
        </div>
        <div class="neurology-page-container-specializations-item">
          <h3>Движительные Расстройства</h3>
          <p>
            Оценка и лечение расстройств движения, таких как болезнь Паркинсона,
            болезнь Ганта и другие.
          </p>
        </div>
        <div class="neurology-page-container-specializations-item">
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
.neurology-page {
  &-container {
    &-specializations {
      display: grid;
      grid-template-areas: 'a b c' 'd d d';
      grid-column-gap: 50px;
      grid-row-gap: 50px;
      &-item {
        padding: 30px;
        border-radius: 10px;
        background-color: $block-background;
        h3 {
          margin-bottom: 20px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.9);
          text-align: center;
        }
        p {
          line-height: 22px;
        }
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .neurology-page {
    &-container {
      &-specializations {
        grid-template-areas: 'a b' 'c d';
        grid-row-gap: 25px;
        grid-column-gap: 25px;
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .neurology-page {
    &-container {
      &-specializations {
        grid-template-areas: 'a' 'b' 'c' 'd';
      }
    }
  }
}
</style>
