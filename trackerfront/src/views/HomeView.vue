<template>


 <div class="homeparent" style="">
    <div class='homegrid'>
        <div style="line-height: 0rem;">
           <div>
                <img src="../assets/images/homeimage.png" alt="" srcset="">
           </div>

        </div>



      <div class="homeBtn" style="line-height: rem; margin-top: -20%;"  >
        <button style="background-color: green;">
            <router-link class="linnks" to="/signup" >
                <h4>Register</h4>
            </router-link>
        </button>


        <button style="background-color: maroon;">
            <router-link class="linnks" to="/login" >
                <h4>Login</h4>
            </router-link>
        </button>

        <button style="background-color: orange;">
            <router-link class="linnks" to="/trackpackage" style="background-color: orange;">
                <h4>Package Info</h4>
            </router-link>
        </button>
      </div>


  </div>
 </div>

</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { RouterLink } from 'vue-router';
import store from '../store';

// const staff_id = store.state.user.data.staff_id

</script>

.<style scoped>
.linnks{
    text-decoration: none;
    color: white;
}
.homeBtn{
    margin: 0 auto;
    width: 70%;
    display: flex;
    justify-content: space-evenly;

}
.homeBtn button{
    width: 20%;
    padding: 0.5rem 0.5rem;
    /* background-color: white; */
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
    width: 80%;

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
    height: 12rem;
    width: 30rem;
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
    /* color: maroon; */
}
</style>
