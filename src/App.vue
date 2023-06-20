<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee; background-color: rgb(255, 255, 224)">

<!--      header-->
      <el-header style="text-align: center; font-size: 12px">
        <div><h2>二手房交易信息</h2></div>
      </el-header>

<!--      body-->
      <el-container style="background-color: lightyellow">

<!--        left aside-->
        <el-aside width="200px" style="background-color: #eeeeee;">
          <el-menu>
            <el-menu-item index="1-1"><router-link to="/focusNum">关注度</router-link></el-menu-item>
            <el-menu-item index="1-1"><router-link to="/hasHousesRegion">城区房源数量</router-link></el-menu-item>
            <el-menu-item index="1-1"><router-link to="/numOfCommunity">社区房源数量</router-link></el-menu-item>
            <el-menu-item index="1-1"><router-link to="/numOfCommunityMore200">社区房源数量(含条件)</router-link></el-menu-item>
            <el-menu-item index="1-1"><router-link to="/soldNumByYear">售出情况</router-link></el-menu-item>
            <el-menu-item index="1-1"><router-link to="/soldNumCommunity">售出情况(按小区)</router-link></el-menu-item>
            <el-menu-item index="1-1"><router-link to="/hasHouses">在售房源小区</router-link></el-menu-item>
          </el-menu>
        </el-aside>

<!--        right content-->
        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>

    </el-container>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>

html {
  font-family: '微软雅黑';
  font-size: 16px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.el-header {

  background-color: #eeeeee;

  line-height: 60px;
  color: gray;
}

.el-aside {

  margin-left: 1%;
  margin-top: 1%;
}


.el-aside .el-menu-item {

  background-color: #eeeeee;

  text-align: center;
  font-family: 微软雅黑;
  font-size: 16px;
  font-weight: 700;
}

.el-aside .el-menu-item a {
  color: grey;
}

#app {
  color: #2c3e50;
}

a {
  text-decoration: none;
}

</style>
