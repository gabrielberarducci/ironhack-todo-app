<template>
    <h1>Esta es la ventana de SignUp</h1>
    <div>
        <form @submit.prevent="signUp">
            <div>
                <div>
                    <label for="username">Username: </label>
                    <input 
                        name="username"
                        type="email"
                        placeholder="example@mail.com"
                        id="email"
                        v-model="email"
                        required
                    />
                </div>
                <div>
                    <label for="password">Password: </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="**********"
                        id="password"
                        v-model="password"
                        required
                    />
                </div>
                <div>
                    <label for="confirmpassword">Confirm your Password: </label>
                    <input
                        name="confirmpassword"
                        type="password"
                        placeholder="**********"
                        id="confirmpassword"
                        v-model="confirmPassword"
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    </div>
    </template>
    
    
    <script setup>
    import { ref, reactive} from "vue"
    import { store } from "../stores/users"
    
    // variables para conectarme al form (login)
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    
    const signUp = async () => {
        if(password.value === confirmPassword.value)        
        store.signUp(email, password);
        else
        alert("boludooooo");
    };
    
    </script>
    
    
    <style>
    
    </style>