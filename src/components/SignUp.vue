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
                <p>Already have an account?</p>
                <a href="/auth/login">Login</a>
            </div>
        </form>
    </div>
    </template>
    
    
    <script setup>
    import { ref, reactive} from "vue"
    import { useUsersStore } from "../stores/users"
    import { useRouter } from "vue-router";
    
    // variables para conectarme al form (login)
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const redirect = useRouter();
    const store = useUsersStore();
    
    const signUp = async () => {
        if(password.value === confirmPassword.value)        
        try {
            await store.signUp(email, password);
            alert("Tus datos se guardaron correctamente. Por favor, chequea tu correo para continuar con el proceso de alta.");
            redirect.push({ path: "/auth/login" });
        }
        catch (error) {
            alert(error);
        }
        else
        alert("Las contraseñas no coinciden, por favor, corrige el error e intenta nuevamente.");
    };
    
    </script>
    
    
    <style>
    
    </style>