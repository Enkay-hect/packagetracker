<template>
   <div class="nav">
            <button
                @click="activeLink = AdminLogin"
                style="margin:0.5rem 1rem; cursor:pointer; width: 8rem"
                :style="{
                    color:activeLink==AdminLogin ? 'green':'black'
                }">
                    <h4>Login</h4>
            </button>


            <button
                @click="activeLink = AdminSignup"
                style="margin:0.5rem 1rem; cursor:pointer; width: 8rem"
                :style="{
                    color:activeLink==AdminSignup ? 'green':'black'
                }"
               >
                    <h4>Register</h4>
            </button>
   </div>

    <keep-alive>
        <component :is="activeLink">
        </component>
    </keep-alive>


</template>

<script setup>
import AdminLogin from '../components/AdminLogin.vue';
import AdminSignup from '../components/AdminSignup.vue'

import { shallowRef, ref } from 'vue';

const activeLink = shallowRef(AdminLogin);

const myStyle = ref('green')

</script>

<style scoped>

.nav{
    width: 100%;
    height: 5rem;
    position: fixed;
    display: flex;
    justify-content: center;
}

.nav button{
    background-color: transparent;
    border: none;
}
.homeparent{
    min-height: 100vh;
    min-width: 100vw;
    /* width: 100%; */
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
}

.homegrid{
    margin: 0 auto;
    width: 50%;
    min-height: 100vh;
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    align-items: center;
    text-align: center;
}

.homegrid img{
    height: 6rem;
    width: 8rem;
}

.homegrid form input{
    border-radius: 5px;
    min-height: 5vh;
    margin: 0.5rem 1rem;
    width: 40%;
    padding: 0rem 1rem;
}

@media (max-width: 800px) {
    .homegrid form input{
        width: 80%;
    }

    .homegrid{
        width: 90%;
    }
}

</style>
