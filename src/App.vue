<template>
  <RouterView />
</template>

<script setup>
import { useRouter, RouterView } from 'vue-router'
import { ref, onMounted } from "vue";

const router = useRouter();

onMounted( () => {
  router.push({ path: "/auth/login" });
});
</script>


<style>

</style>
