<template>
         <div>
                <div v-if="staff_id" class="nav">
                    <h4>welcome {{ staff_id }}</h4>
                    <h4>Sign out</h4>
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
            </div>
</template>

<script setup>
import store from '../store';
import { useRouter, RouterLink } from 'vue-router';

import { ref } from 'vue';

const staff_id = store.state.user.data.staffId

    function logout(){
        store.commit("logout");
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
}
</style>
