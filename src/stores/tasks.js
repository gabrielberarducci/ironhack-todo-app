import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { ref, reactive } from 'vue';
import { useUsersStore } from "../stores/users";


//Define pinia store and export it
export const useTasksStore = defineStore('tasks', () => {
    
    const taskArray = ref([]);
    
    const fetchTasks = async () => {
        const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .order('id', {ascending: false} )
        taskArray.value = tasks;
    }

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
        await fetchTasks();
    };
    const updateTask = async(id, title, description) => {
        const { data, error } = await supabase
        .from('tasks')
        .update({ title: title, description: description })
        .eq('id', id)
        await fetchTasks();
    };
    const completedTask = async(id, booleanValue) => {
        const { data, error } = await supabase
        .from('tasks')
        .update({ is_complete: booleanValue })
        .eq('id', id)
        await fetchTasks();
    };
    const deleteTask = async(id) => {
        const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', id)
        await fetchTasks();
    };
    
    return { fetchTasks, addTask, updateTask, completedTask, deleteTask, taskArray};

});


// import { defineStore } from "pinia";
// import { supabase } from "../supabase";
// import { ref, reactive } from 'vue';
// import { useUsersStore } from "../stores/users";

// export const useTasksStore = defineStore('tasks', () => {
//     const taskArray = ref([]);
//     const addTask = async (title, description) => {
//         const { data, error } = await supabase
//         .from('tasks')
//         .insert([
//         { 
//             title: title, 
//             description: description, 
//             user_id: useUsersStore().currentUser.id,
//             is_complete: false
//         },
//         ])
//     };



//     return { addTask, taskArray};
// });