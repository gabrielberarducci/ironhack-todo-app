<template>
  <div class="home">
    <h1>Esto es el Home</h1>
    <Header />
    <NewTask @addTask="addTask"/>
    <ShowTask v-for="task in tasks" :key="task.id" :task="task"/>
  </div>
</template>

<script setup>
import Header  from "../components/Header.vue";
import { useUsersStore } from "../stores/users";
import { useTasksStore } from "../stores/tasks";
import NewTask from "../components/NewTask.vue";
import ShowTask from "../components/ShowTask.vue";
import { ref, reactive, computed, onMounted } from "vue";

const taskStore = useTasksStore();

const tasks = computed(() => (taskStore.taskArray));

onMounted( async () => {
  await taskStore.fetchTasks();
});


// Arrow function para crear tareas.
const addTask = (title, description) => {
  if(title.length === 0 || description.length === 0){
    // Primero comprobamos que ningún campo del input esté vacío y lanzamos el error con un timeout para informar al user.

    showErrorMessage.value = true;
    errorMessage.value = 'The task title or description is empty';
    setTimeout(() => {
    showErrorMessage.value = false;
    }, 5000);

} else {
    // Aquí mandamos los valores a la store para crear la nueva Task. Esta parte de la función tenéis que refactorizarla para que funcione con emit y el addTask del store se llame desde Home.vue.

    taskStore.addTask(title, description);
}
};



// const taskDelete = async (taskStore.taskArray[0].id) => {
//   await taskStore.deleteTask(id);
// }

</script>