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
          <img
            class="header-row-2-container-logo_big"
            src="/assets/images/LogoBig.svg"
            alt="logo"
          />
          <img
            class="header-row-2-container-logo_small"
            src="/assets/images/Logo.svg"
            alt="logo"
          />
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
        <div class="header-row-2-container-burger-menu" @click="menu = true">
          <span></span>
        </div>
      </div>
    </div>
    <el-drawer v-model="menu" title="Меню" :direction="direction" size="90%">
      <div class="header-menu">
        <ul class="header-menu-list">
          <li class="header-menu-list__item" @click="menu = false">
            <nuxt-link to="/">Главная</nuxt-link>
          </li>
          <li class="header-menu-list__item" @click="menu = false">
            <nuxt-link to="/about">О больнице</nuxt-link>
          </li>
          <li class="header-menu-list__item" @click="menu = false">
            <nuxt-link to="/branches">Отделения</nuxt-link>
          </li>
          <li class="header-menu-list__item" @click="menu = false">
            <nuxt-link to="/about/history">Историческая спарвка</nuxt-link>
          </li>
          <li class="header-menu-list__item" @click="menu = false">
            <nuxt-link to="/about/management">Руководство</nuxt-link>
          </li>
          <li class="header-menu-list__item" @click="menu = false">
            <nuxt-link to="/about/licenses">Лицензии</nuxt-link>
          </li>
          <li class="header-menu-list__item" @click="menu = false">
            <nuxt-link to="/about/constituent-documents"
              >Учредительные документы</nuxt-link
            >
          </li>
          <li class="header-menu-list__item" @click="menu = false">
            <nuxt-link to="/branches">Отделения</nuxt-link>
          </li>
          <li class="header-menu-list__item" @click="menu = false">
            <nuxt-link to="/contacts">Контакты</nuxt-link>
          </li>
        </ul>
      </div>
    </el-drawer>
  </header>
</template>
<script setup>
import { ref } from 'vue';
// import { useRoute } from 'vue-router';

const menu = ref(false);
const direction = ref('ltr');
const route = useRoute();
watch(menu, (newMenu) => {
  if (newMenu) {
    document.body.style.position = 'fixed';
  } else {
    document.body.style.position = 'initial';
  }
  // Do something with the updated value.
});
</script>

<style lang="scss">
.header {
  width: 100%;
  &-menu {
    &-list {
      &__item {
        font-size: 18px;
        cursor: pointer;
        margin-bottom: 10px;
        transition: background 0.3s ease-in;
        border-radius: 5px;
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
        a {
          padding: 10px;
          display: block;
          color: black;
          transition: color 0.2s;
          &:hover {
            color: $primary;
          }
        }
      }
    }
  }
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
        &-burger-menu {
          display: none;
          position: relative;
          align-self: center;
          z-index: 3;
          cursor: pointer;
          transition: all 0.4s;
          justify-self: end;
          height: 30px;
          width: 40px;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 4px;
            width: 100%;
            background-color: $main-color-2;
          }
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            width: 100%;
            background-color: $main-color-2;
          }
          span {
            height: 4px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            background-color: $main-color-2;
          }
        }
        &-logo {
          align-self: center;
          &_small {
            display: none;
          }
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
.el-drawer {
  overflow-y: scroll;
}
.el-drawer__title {
  font-size: 25px;
  text-align: center;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1000px) {
  .header {
    &-row {
      &-2 {
        &-container {
          &-logo {
            &_big {
              height: 50px !important;
              display: none;
            }
            &_small {
              display: block;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 763px) {
  .header {
    &-row {
      &-2 {
        &-container {
          &-burger-menu {
            display: block;
          }
          &-logo {
            justify-self: end;
            &_small {
              display: none;
            }
            &_big {
              display: block;
            }
          }
          &-menu {
            display: none;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .header {
    &-row {
      &-2 {
        &-container {
          &-logo {
            img {
              height: 40px !important;
            }
          }
          &-burger-menu {
            height: 25px;
            width: 35px;
            &::before {
              height: 3px;
            }
            &::after {
              height: 3px;
            }
            span {
              height: 3px;
            }
          }
        }
      }
    }
  }
}
</style>
