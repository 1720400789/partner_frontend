<template>
  <UserCardList :user-list="userList"/>

  <div>
    <van-empty v-if="!userList || userList.length < 1" description="没有合适的数据哦"/>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios";
import {showFailToast, showSuccessToast} from "vant";
import qs from 'qs';
import UserCardList from "../components/UserCardList.vue"

const route = useRoute();

const { tags } = route.query;


const userList = ref([]);

onMounted(async () => {
  console.log(tags);
  const userListData = await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer: params => {//将请求携带的参数由数组改写为一个一个的参数
      return qs.stringify(params, { indices: false })
    }
  }).then(function (response){
    console.log('/user/search/tags success', response);
    showSuccessToast('请求成功');
    return response?.data;
  }).catch(function (error){
    console.log('/user/search/tags error', error);
    showFailToast('请求失败');
  })
  if(userListData) {
    userListData.forEach(user => {
      if(user.tags){
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
})

// const mockUser = {
//   id: 12345,
//   username: '鱼皮',
//   userAccount: '12314',
//   profile: '一名精神小伙，目前还有头发，谢谢大家，阿爸爸阿爸爸阿巴阿巴阿巴',
//   avatarUrl: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png',
//   gender: 0,
//   phone: '13113113111',
//   email: '592342843721987@xzcxzczxcz.com',
//   userRole: 0,
//   planetCode: '1234',
//   tags: ['java', 'emo', '打工中', 'emo', '打工中'],
//   createTime: new Date(),
// }

</script>

<style scoped>

</style>