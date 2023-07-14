import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { ref, reactive } from 'vue';
import { useUsersStore } from "../stores/users";



export const useTasksStore = defineStore('tasks', () => {
    const taskArray = ref([]);
    const addTask = async (title, description) => {
        const { data, error } = await supabase
        .from('tasks')
        .insert([
        { 
            title: title, 
            description: description, 
            user_id: useUsersStore().currentUser.id,
            is_complete: false
        },
        ])
    };

    return { addTask, taskArray};



    // const updateTask = async (id, title, description) => {
    //     const { data, error } = await supabase
    //     .from('tasks')
    //     .update({ other_column: 'otherValue' })
    //     .eq('id', id)
    //     .select()
    // }

    // const deleteTask = async (title, description) => {
    //     const { data, error } = await supabase
    //     .from('tasks')
    //     .insert([
    //     { title: title, description: description },
    //     ])
    // }
});