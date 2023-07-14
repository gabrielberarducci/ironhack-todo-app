<template>
  <div class="home">
    <h1>Esto es el Home</h1>
    <Header />
    <NewTask />
  </div>
</template>

<script setup>
import Header  from "../components/Header.vue";
import { useUsersStore } from "../stores/users";
import NewTask from "../components/NewTask.vue";
console.log(useUsersStore().currentUser.id);
</script>