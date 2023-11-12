<template>


        <div v-if="store.state.user.token != null||undefined||''" class="nav">
            <!-- <div style="color:maroon">welcome  {{ staff_id }}</div> -->
            <div style="margin 0 2rem">
                <router-link class="sendn" to="/trackpackage">Home</router-link>
            </div>
            <div style="margin 0 2rem">
                <router-link class="sendn" to="/packageinfo">Send new mail</router-link>
            </div>
            <a @click="logout()" :style="{cursor: 'pointer', color:'maroon'}">Sign out</a >
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

// const staff_id = store.state.user.data.staffId

    function logout(){
        store.commit("logout");
        store.commit("clearpackagedata");

        router.push({
            name: 'login',
        });
    }


</script>

<style scoped>
.sendn{
    text-decoration: none;
    color: maroon;
}
.infocontainer{
    position: fixed;
    width: 100%;
    min-height:100vh
}
.nav{
    margin: 0 auto ;
    width: 80%;
    height: 5rem;
    position: sticky;
    display: flex;
    justify-content: space-evenly;
    padding: 0.5rem 1rem;
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

.navheader{
     position: fixed;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    margin: 0;
    /* background-color: gray; */
}
</style>
