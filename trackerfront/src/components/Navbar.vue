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
</template>

<script setup>
// import AdminLogin from '../components/AdminLogin.vue';
// import AdminSignup from '../components/AdminSignup.vue';

// import { shallowRef, ref } from 'vue';

// const activeLink = shallowRef(AdminLogin);

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
}
</style>
