import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { ref, reactive } from 'vue';

export const useTasksStore = defineStore('tasks', () => {
    const taskArray = ref([]);

    const createTask = async (title, description) => {
        const { data, error } = await supabase
        .from('tasks')
        .insert([
        { title: title, description: description },
        ])
    }



});