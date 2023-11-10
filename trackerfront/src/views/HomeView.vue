<template>
    <div v-if="staff_id" class="nav">
        <h4>welcome {{ staff_id }}</h4>
        <h4>Sign out</h4>
    </div>
    <div v-else class="nav">


            <button>
                <router-link class="linnks" to="/adminview">
                    <h4>Login</h4>
                </router-link>
            </button>


            <button>
                <router-link class="linnks" to="/adminview">
                    <h4>Register</h4>
                </router-link>
            </button>
   </div>

 <div class="homeparent" style="">
    <div class='homegrid'>
        <div style="line-height: 0rem;">
           <div>
                <img src="../assets/images/uniuyologo.png" alt="" srcset="">
           </div>

            <div style="padding:2rem;">
                Mail Tracking
            </div>
        </div>



      <div style="line-height: 2rem;">
        <form action="">
            <input type="search" name="" id="">
            <button>Search</button>
        </form>

        <div>Track Item</div>
      </div>


        <div>Powered by Uniuyo</div>

  </div>
 </div>

</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { RouterLink } from 'vue-router';
import store from '../store';

const staff_id = store.state.user.data.staff_id

</script>

<style scoped>
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

.homegrid form input{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    height: 2rem;
    border: 2px solid black;
}
.homegrid form button{
    height: 2rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: green;
    color: white;
    border: 2px solid green;
}

.homegrid img{
    height: 6rem;
    width: 8rem;
}

@media (max-width: 700px) {
    .homegrid{
        width: 85%;
    }
}


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
