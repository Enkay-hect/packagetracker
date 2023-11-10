<template>
   <div class="homeparent" style="">
        <div class='homegrid'>

            <div>
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
            </div>

            <!-- <div style="display: flex; justify-content: center; ">
                <h4 style="margin:0.5rem 1rem; cursor:pointer">Login</h4>
                <h4 style="margin:0.5rem 1rem; cursor:pointer">Signup</h4>
            </div> -->

            <div style=";">
                <div>
                        <img src="../assets/images/uniuyologo.png" alt="" srcset="">
                </div>

                <h4>University of Uyo <br>Tracking sytem</h4>

                <div style="margin-top: 7%; margin-bottom: 2rem; color:maroon">Login</div>
                <form @submit="login" style="grid; grid-template-columns: 1fr 1fr;  column-gap: 50px;     margin-bottom: 2rem;
">
                    <input v-model="user.staff_id" type="text" name="" id="staffid" placeholder="staff id">
                    <input v-model="user.password" type="password" name="" id="pass" placeholder="password">
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
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import store from '../store';
import AuthServices from '../apiServices/authServices';

const router = useRouter()

const user ={
    staff_id: '',
    password: ''
}

async function login(ev){
    try {
        ev.preventDefault();
        await AuthServices.login(user, (response)=>{
            store
            .dispatch('login', response)
            .then((response)=>{
                router.push({
                    name: 'home'
                })
            })
        })

    } catch (error) {

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

</style>
