<template>
    <h1>Add a new Task</h1>
    <div v-if="showErrorMessage">
        <p class="error-text">{{ errorMessage }}</p>
    </div>
    <div>
        <div class="input-field">
            <input type="text" placeholder="Add a Task Title" v-model="title">
        </div>
        <div class="input-field">
            <input type="text" placeholder="Add a Task Description" v-model="description">
        </div>
        <button @click="addTask" class="button">Add</button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useTasksStore } from "../stores/tasks"  

const taskStore = useTasksStore();

// variables para los valores de los inputs
  const title = ref('');
  const description = ref('');

// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const showErrorMessage = ref(false);

// const constant to save a variable that holds the value of the error message
const errorMessage = ref(null);

const emit = defineEmits(['addTask'])

const addTask = () => {
    emit('addTask', title.value, description.value );
}

</script>

<style></style>
  