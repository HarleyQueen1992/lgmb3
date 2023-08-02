<template>
  <div class="breadcrumb" v-if="$route.fullPath !== '/'">
    <div class="container">
      <el-breadcrumb :separator-icon="ElIconArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">Главная</el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{ path: el }"
          v-for="el in $route.fullPath.split('/').slice(1)"
          >{{ breadcrumb[el] }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
  </div>
</template>
<style lang="scss">
.breadcrumb {
  background-color: rgb(80 97 113 / 10%);
}
.el-breadcrumb {
  font-size: 16px;
  padding: 20px 10px;
}
.el-breadcrumb__separator {
  margin: 0 10px !important;
}
.el-breadcrumb__inner {
  cursor: pointer !important;
  &:hover {
    color: $primary !important;
  }
}
</style>
