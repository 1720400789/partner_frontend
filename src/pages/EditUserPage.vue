<template>
  <van-form @submit="onSubmit">
    <van-field
        v-model="editUser.currentValue"
        :name="editUser.editKey"
        :label="editUser.editName"
        :placeholder="`请输入${editUser.editName}`"
    />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios";
import {showFailToast} from "vant";
import {getCurrentUser} from "../../apis/userAPI";

const router = useRouter();
const route = useRoute();
const editUser = ref({
  editKey: route.query.editKey,
  currentValue: route.query.currentValue,
  editName: route.query.editName,
})

console.log(editUser);


onMounted(() => {

})

const onSubmit = async (value) => {
  const currentUser = await getCurrentUser();
  if(!currentUser){
    showFailToast('用户未登录');
    return;
  }

  const res = await myAxios.post('/user/update', {
    'id': currentUser.id,
    [editUser.value.editKey as string]: editUser.value.currentValue,
  })
  if(res.code === 0 && res.data){
    router.back();
  }else{
    showFailToast("修改失败");
  }
  console.log(value);
}
</script>

<style scoped>

</style>