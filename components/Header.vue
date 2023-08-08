<template>
  <header class="header">
    <div class="header-row-1">
      <div class="header-row-1-container container">
        <a href="tel:79592614010" class="header-row-1-container-block">
          <el-icon>
            <ElIconPhone />
          </el-icon>
          <span>+7 (959) 261-40-10</span>
        </a>
        <a href="mailto:lgmb3@mail.ru" class="header-row-1-container-block">
          <el-icon>
            <ElIconMessage />
          </el-icon>
          <span>lgmb3@mail.ru</span>
        </a>
      </div>
    </div>
    <div class="header-row-2">
      <div class="header-row-2-container container">
        <nuxt-link to="/" class="header-row-2-container-logo">
          <img src="/assets/images/LogoBig.svg" alt="logo" />
        </nuxt-link>
        <div class="header-row-2-container-menu">
          <ul class="header-row-2-container-menu-list">
            <li class="header-row-2-container-menu-list__item">
              <nuxt-link to="/">Главная</nuxt-link>
            </li>
            <el-dropdown class="header-row-2-container-menu-list__item">
              <span class="el-dropdown-link" @click="$router.push('/about')">
                О больнице
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="$router.push('/about/history')"
                    >Историческая спарвка</el-dropdown-item
                  >
                  <el-dropdown-item @click="$router.push('/about/management')">
                    Руководство</el-dropdown-item
                  >
                  <el-dropdown-item @click="$router.push('/about/licenses')"
                    >Лицензии</el-dropdown-item
                  >
                  <el-dropdown-item
                    @click="$router.push('/about/constituent-documents')"
                    >Учредительные документы</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <li class="header-row-2-container-menu-list__item">
              <nuxt-link to="/branches">Отделения</nuxt-link>
            </li>
            <li class="header-row-2-container-menu-list__item">
              <nuxt-link to="/contacts">Контакты</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss">
.header {
  width: 100%;
  &-row {
    &-1 {
      height: 36px;
      background-color: #526371;
      &-container {
        display: grid;
        height: 100%;
        grid-template-columns: auto 1fr;
        grid-column-gap: 25px;
        &-block {
          align-self: center;
          justify-self: start;
          display: grid;
          grid-template-columns: auto 1fr;
          grid-column-gap: 10px;
          color: white;
          text-decoration: none;
          span {
            color: #9ac8e6;
            font-weight: 600;
            font-size: 12px;
            align-self: center;
          }
        }
      }
    }
    &-2 {
      height: 80px;
      &-container {
        height: 100%;
        display: grid;
        grid-template-columns: auto 1fr;
        &-logo {
          align-self: center;
          img {
            user-select: none;
            height: 60px;
          }
        }
        &-menu {
          align-self: center;
          justify-self: end;
          &-list {
            display: grid;
            grid-template-columns: repeat(4, auto);
            grid-column-gap: 50px;
            &__item {
              font-size: 18px;
              cursor: pointer;
              a {
                color: black;
                transition: color 0.2s;
                &:hover {
                  color: $primary;
                }
              }
            }
          }
        }
      }
    }
  }
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1000px) {
  .header {
    display: none;
  }
}
</style>
