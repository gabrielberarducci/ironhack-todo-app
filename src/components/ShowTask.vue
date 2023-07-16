<template>
    <div class="show-tasks">
        <div class="card-task">
            <h2 class="task-title">{{ task.title }}</h2>
            <p class="task-description">{{ task.description }}</p>
            <button class="task-iscomplete">Task Done</button>
            <button class="task-edit">Edit</button>
            <button class="task-delete">Delete</button>
        </div>
    </div>
</template>

<script setup>
import { useTasksStore } from "../stores/tasks";
import { ref, reactive } from "vue";

const taskStore = useTasksStore();

// const emit = defineEmits(['taskDelete'])

// function taskDelete() {
//   emit('taskDelete')
// }

const props = defineProps({
  task: Object,
});

</script>


<style>

</style>