<template>
  <div class="reception-page branch-page page">
    <div class="reception-page-banner branch-page-banner">
      <img
        src="./../../../assets/images/branches/reception/reception.jpeg"
        alt="banner"
      />
      <h1>Приемное отделение</h1>
    </div>
    <div class="branch-page-container container">
      <div class="branch-page-container-info">
        <div
          style="grid-area: a"
          class="branch-page-container-info-head-of-department"
        >
          <img
            src="./../../../assets//images/about/management/person-man.png"
            alt="head-of-department"
          />
          <h2>Приемная Марина Анатольевна</h2>
          <h3>Заведующий отделением</h3>
          <h3>Врач терапевт</h3>
        </div>
        <div style="grid-area: b" class="branch-page-container-info-descript">
          <h2 class="branch-page-container__title">О нашем отделении</h2>
          <p class="branch-page-container__text">
            Приемное отделение больницы - место, где начинается забота о
            здоровье. Здесь каждый пациент встречается с внимательным и
            доброжелательным персоналом, готовым оказать необходимую помощь в
            самый трудный момент. Приемное отделение - это главная точка
            контакта между пациентом и медициной, где специалисты проводят
            осмотр, назначают обследования и определяют план лечения. Здесь
            создана комфортная и безопасная атмосфера, что позволяет пациентам
            чувствовать себя уверенно и защищено. Наше приемное отделение
            воплощает идею качественного и доступного здравоохранения для всех,
            где каждому пациенту уделяется индивидуальное внимание, помогая им
            пройти через трудности и достичь полного выздоровления.
          </p>
          <br />
          <p class="branch-page-container__text">
            Приемное отделение расположено на первом этаже центрального корпуса
            больницы.
          </p>
          <br />
          <p class="branch-page-container__text">График работы: КРУГОСУТОЧНО</p>
          <br />
          <p class="branch-page-container__text">
            Телефон приемного отделения: (0642)659746
          </p>
        </div>
      </div>
      <div class="reception-page-container-section-2">
        <h2
          class="branch-page-container__title branch-page-container__title_center"
        >
          Основные задачи приемного отделения
        </h2>
        <div class="reception-page-container-section-2-specializations">
          <div class="reception-page-container-section-2-specializations-item">
            <span
              >Прием и регистрацию пациентов, госпитализируемых в стационарные
              отделения больницы</span
            >
          </div>
          <div class="reception-page-container-section-2-specializations-item">
            <span>Оформление медицинской документации</span>
          </div>
          <div class="reception-page-container-section-2-specializations-item">
            <span>Врачебный осмотр</span>
          </div>
          <div class="reception-page-container-section-2-specializations-item">
            <span>
              Оказание экстренной и неотложной высококвалифицированной
              медицинской помощи на догоспитальном этапе</span
            >
          </div>
          <div class="reception-page-container-section-2-specializations-item">
            <span
              >Определение профиля отделения стационара для госпитализации
              пациентов</span
            >
          </div>
          <div class="reception-page-container-section-2-specializations-item">
            <span>Проведение санитарно-гигиенической обработки пациентов</span>
          </div>
          <div class="reception-page-container-section-2-specializations-item">
            <span>
              Транспортировка пациентов в профильные структурные
              подразделения</span
            >
          </div>
        </div>
      </div>
      <div class="reception-page-container-section-3">
        <h2 class="branch-page-container__title">
          ВОЗМОЖНОСТИ ПРИЕМНОГО ОТДЕЛЕНИЯ
        </h2>
        <p class="branch-page-container__text">
          В отделении работают высококвалифицированные врачи, умеющие работать в
          экстремальных условиях, справляться с экстренными ситуациями и
          помогать пациентам, находящимся в тяжелом состоянии.
        </p>
        <br />
        <p class="branch-page-container__text">
          При необходимости на консультацию приглашаются врачи-хирурги, а также
          неврологи, гинекологи, реаниматологи.
        </p>
        <br />
        <p class="branch-page-container__text">
          Оснащение приемного отделения позволяет выполнить все необходимые
          этапы диагностического процесса: лабораторные анализы (клинический
          анализ крови, кровь на сахар, общий анализ мочи и др.),
          электрокардиографию (ЭКГ) в условиях приемного отделения,
          ультразвуковые исследования внутренних органов и тканей (УЗИ),
          флюорографические и рентгенологические исследования. Все необходимые
          исследования пациентам проводятся в максимально короткие сроки.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.reception-page {
  &-container {
    &-section {
      &-2 {
        padding-top: 25px;
        padding-bottom: 50px;
        &-specializations {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-column-gap: 50px;
          grid-row-gap: 50px;

          &-item {
            background-color: $block-background;
            padding: 25px;
            display: grid;
            border-radius: 10px;
            span {
              align-self: center;
              text-align: center;
              line-height: 28px;
            }
          }
        }
      }
      &-3 {
        &-list {
          margin-left: 50px;
          li {
            list-style-type: circle;
            padding-left: 20px;
            font-size: 22px;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .reception-page {
    &-container {
      &-section {
        &-2 {
          &-specializations {
            grid-template-columns: 1fr 1fr;
            &-item {
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 763px) {
  .reception-page {
    &-container {
      &-section {
        &-2 {
          &-specializations {
            grid-template-columns: 1fr;
            grid-row-gap: 25px;
            &-item {
            }
          }
        }
      }
    }
  }
}
</style>
