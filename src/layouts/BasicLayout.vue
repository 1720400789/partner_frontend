<template>
  <van-nav-bar
      title="标题"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>

  <div id="content">
    <router-view />
  </div>
  <van-tabbar active-color="#78C1F3" @change="onchange" route>
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="friends-o" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="setting-o" name="user">个人</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
// import {showToast} from "vant";
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const onClickLeft = () => history.back();
const onClickRight = () => {
  router.push('/search');
}
// const active = ref('index');
// const onChange = (index) => showToast(`标签 ${index}`);

</script>

<style scoped>

</style>