<template>
<header>
    <nav>
        <img src="" alt="">
        <ul>
            <li>Profile</li>
            <li>
                <button type="button" @click="signOut">Logout</button>
            </li>
        </ul>
    </nav>
</header>
</template>


<script setup>
import { useUsersStore } from "../stores/users"
import { useRouter } from "vue-router"
const redirect = useRouter();
const store = useUsersStore();

const signOut = async () => {        
    try {
        await store.signOut();
        redirect.push({ path: "/auth/login" });
    }
    catch (error) {
        alert(error);
    }
};
</script>

<style>

</style>