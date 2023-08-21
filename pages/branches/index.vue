<template>
  <div class="branches-page page">
    <div class="branches-page-container container">
      <h1 class="branches-page-container__title page-title">Отделения</h1>
      <div class="branches-page-container-list">
        <div class="branches-page-container-list-item">
          <Icon
            class="branches-page-container-list-item__icon"
            name="healthicons:neurology-outline"
          />
          <span>Неврология</span>
        </div>
        <div class="branches-page-container-list-item">
          <Icon
            class="branches-page-container-list-item__icon"
            name="healthicons:stethoscope-outline"
          />
          <span>Терапия</span>
        </div>
        <div class="branches-page-container-list-item">
          <Icon
            class="branches-page-container-list-item__icon"
            name="healthicons:surgical-sterilization-outline"
          />
          <span>Хирургия</span>
        </div>
        <div class="branches-page-container-list-item">
          <Icon
            class="branches-page-container-list-item__icon"
            name="healthicons:ambulance-outline"
          />
          <span>Приемное</span>
        </div>
        <div class="branches-page-container-list-item">
          <Icon
            class="branches-page-container-list-item__icon"
            name="material-symbols:gynecology-outline"
          />
          <span>Гинекология</span>
        </div>
        <div class="branches-page-container-list-item">
          <Icon
            class="branches-page-container-list-item__icon"
            name="healthicons:hospital-outline"
          />
          <span>Поликлиника</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.branches-page {
  &-container {
    &-list {
      margin-top: 50px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-row-gap: 50px;
      grid-column-gap: 50px;
      &-item {
        display: grid;
        grid-template-columns: 30% 70%;
        cursor: pointer;
        background-color: #f7f7f7;
        transition: background-color 0.2s ease-in;
        border-radius: 10px;
        padding: 30px;
        &__icon {
          font-size: 50px;
          align-self: center;
          justify-self: center;
          color: $title-color;
        }
        span {
          align-self: center;
          justify-self: center;
          text-transform: uppercase;
        }
        &:hover {
          background-color: #e8e8e8;
        }
      }
    }
  }
}
</style>
