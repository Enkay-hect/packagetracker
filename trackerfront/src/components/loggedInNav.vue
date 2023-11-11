<template>
       <div v-if="staff_id!=null" class="nav">
            <h4>welcome <br> {{ staff_id }}</h4>

            <a @click="logout()" :style="{cursor: 'pointer'}">Sign out</a >
        </div>

    <div v-else class="nav">
        <button>
            <router-link class="linnks" to="/login">
                <h4>Login</h4>
            </router-link>
        </button>


        <button>
            <router-link class="linnks" to="/signup">
                <h4>Register</h4>
            </router-link>
        </button>
   </div>
</template>



<script setup>
import store from '../store/index.js';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';


const router = useRouter();

const staff_id = store.state.user.data.staffId

    function logout(){
        store.commit("logout");
        store.commit("clearpackagedata");

        router.push({
            name: 'login',
        });
    }


</script>

<style scoped>
.nav{
    width: 100%;
    height: 5rem;
    position: sticky;
    display: flex;
    justify-content: center;
}

.nav button{
    background-color: transparent;
    border: none;
    text-decoration: none;
}

.linnks{
    text-decoration: none;
    color: maroon;
}
</style>
