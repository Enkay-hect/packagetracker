<template>
    <!-- <loggedInNav /> -->

    <div  class="nav">
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



   <div class="homeparent" style="">
        <div class='homegrid'>


            <div style=";">
                <div>
                        <img src="../assets/images/uniuyologo.png" alt="" srcset="">
                </div>

                <h4>University of Uyo <br>Tracking sytem</h4>

                <div style="margin-top: 7%; margin-bottom: 2rem; color:maroon">Login</div>
                <form @submit="login" style="grid; grid-template-columns: 1fr 1fr;  column-gap: 50px;     margin-bottom: 2rem;
">
                    <input v-model="user.staffId" type="text" name="" id="staffid" placeholder="staff id" required>
                    <input v-model="user.password" type="password" name="" id="pass" placeholder="password" required>
                    <br>
                    <button style="margin-top: 2rem;" class="btnsubmit">Submit</button>
                </form>

                <div style="line-height: 0rem;">



                </div>

                <div style="min-height: 20vh;"></div>

        </div>





    </div>
 </div>
</template>

<script setup>
import loggedInNav from '../components/loggedInNav.vue';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import store from '../store';
import AuthServices from '../apiServices/authServices';

const router = useRouter()

const user ={
    staffId: '',
    password: ''
}

const errorMessage = ref('');


async function login(ev){
    try {
        ev.preventDefault();
        await AuthServices.login(user, (response)=>{
            store
            .dispatch('login', response)
            .then((response)=>{
                router.push({
                    name: 'trackpackage'
                })
            })
        })

    } catch (error) {
        // errorMessage.value = error.response.data.message
        alert('invalid credentials')

    }
}

</script>

<style scoped>
.btnsubmit{
    padding: 0.5rem 1rem;
    border: none;
    background-color: green;
    color: white;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.btnsubmit:hover{
    background-color: rgb(40, 119, 40);
}

.homeparent{
    min-height: 100vh;
    min-width: 100vw;
    /* width: 100%; */
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: fixed;
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
