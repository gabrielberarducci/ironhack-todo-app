<template>
<h1>Esta es la ventana de Login</h1>
<div>
    <form @submit.prevent="signIn">
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
            <div>
            </div>
                <label for="password">Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="**********"
                    id="password"
                    v-model="password"
                    required
                />
            </div>
            <button type="submit">Sign In</button>
        </div>
    </form>
</div>

</template>


<script setup>
    import { ref, reactive} from "vue";
    import { store } from "../stores/users";
    import { useRouter } from "vue-router";
    
    // variables para conectarme al form (login)
    const email = ref("");
    const password = ref("");
    const redirect = useRouter();

    const signIn = async () => {        
        try {
            await store.signIn(email, password);
            redirect.push({ path: "/" });
        }
        catch (error) {
            redirect.push({ path: "/auth/signup" });
        }

    };
</script>


<style>

</style>