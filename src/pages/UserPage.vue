<template>
  <template v-if="user">
    <van-cell title="用户名" :value="user.username" @click="toEdit('username', '用户名', user.username)"/>
    <van-cell title="账号" :value="user.userAccount"/>
    <van-cell title="头像">
      <img style="height: 48px" :src="user.avatarUrl">
    </van-cell>
    <van-cell title="性别" :value="user.gender" @click="toEdit('gender', '性别', user.gender)"/>
    <van-cell title="电话" :value="user.phone"/>
    <van-cell title="邮箱" :value="user.email"/>
    <van-cell title="星球编号" :value="user.planetCode"/>
    <van-cell title="注册时间" :value="user.createTime"/>
  </template>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios";
import {showFailToast, showSuccessToast} from "vant";
import {getCurrentUser} from "../../apis/userAPI";

// const user = {
//   id: 1,
//   username: 'zj',
//   userAccount: 'zj',
//   avatarUrl: 'https://tvax1.sinaimg.cn/crop.0.0.664.664.180/008lF2Naly8gsq6wa54jnj30ig0igdge.jpg?KID=imgbed,tva&Expires=1689315902&ssig=aAqj6JIIIu',
//   gender: '男',
//   phone: '12121',
//   email: '1720400789@qq.com',
//   planetCode: '1231',
//   createTime: new Date(),
// }

const user = ref();
onMounted(async () => {
  const res = await getCurrentUser();
  console.log(res);
  if(res){
    user.value = res;
    showSuccessToast('获取用户信息成功');
  }else{
    showFailToast('获取用户信息失败');
  }
})

const router = useRouter();
const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}


</script>

<style scoped>

</style>