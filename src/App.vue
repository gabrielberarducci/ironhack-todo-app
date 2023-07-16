<template>
  <RouterView />
</template>

<script setup>
import { useRouter, RouterView } from 'vue-router'
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useUsersStore } from './stores/users';

const router = useRouter();
const userStore = useUsersStore();
const { user } = storeToRefs(userStore);

onMounted(async () => {
  try {
    await userStore.fetchUser(); // here we call fetch user
    if (!userStore.currentUser.value) {
      // redirect them to logout if the user is not there
      router.push({ path: "/auth/login" });
    } else {
      // continue to dashboard
      
      console.log(user.value);
      router.push({ path: "/" });
    }
  } catch (e) {
    console.log(e);
  }
});
</script>


<style>

</style>
