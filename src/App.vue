<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

onMounted( () => {
  router.push({ path: "/auth/signup" });
});
</script>


<style>

</style>
