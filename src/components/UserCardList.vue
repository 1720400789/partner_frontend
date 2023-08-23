<template>
  <van-card
      v-for="user in userList"
      :tag="user.gender === 0 ? '男' : '女'"
      :desc="user.profile"
      :title="`${user.username}（${user.planetCode}）`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="primary" v-for="tag in user.tags" style="margin-right: 8px; margin-top: 8px">
        {{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import {defineProps, withDefaults} from "vue";
import {UserType} from "@/models/user";

interface UserCardListProps {
  userList: UserType[];
}

//@ts-ignore
const props = withDefaults(defineProps<UserCardListProps>(), {
  //@ts-ignore
  userList: [],
});

</script>

<style scoped>

</style>