<template>
    <loggedInNav />

   <div class="homeparent" style="">
        <div class='homegrid'>



            <div style=";">
                <div>
                        <img src="../assets/images/uniuyologo.png" alt="" srcset="">
                </div>

                <h4>University of Uyo <br>Tracking sytem</h4>

                <div style="margin-top: 7%; color:maroon"> Register</div>

                    <form @submit="signup" style="grid; grid-template-columns: 1fr 1fr;  column-gap: 50px;">
                        <input v-model="user.name" type="text" name="" id="name" placeholder="name" required>
                        <input v-model="user.email" type="text" name="" id="email" placeholder="Email" required>
                        <input v-model="user.staffId" type="text" name="" id="staffId" placeholder="Staff id" required >
                        <input v-model="user.phone_number" type="number" name="" id="phonenumber" placeholder="Phone Number" maxlength="15" required>
                        <input v-model="user.password" type="password" name="" id="password" placeholder="Password" required>
                        <input v-model="user.password_confirmation" type="password" name="" id="lastname" placeholder="confirm_password" required>

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
import store from '../store';
import AuthServices from '../apiServices/authServices'
import {useRouter} from 'vue-router'
import {ref} from 'vue'

const router = useRouter();


const user = {
    name: '',
    email: '',
    staffId: '',
    phone_number: '',
    password: '',
    password_confirmation: '',
}
const errorMessage = ref('');


async function signup(ev){
    try {
        ev.preventDefault();
        await AuthServices.signup(user, (response)=>{
            store
            .dispatch('signup', response)
            .then ((response)=> {
                router.push({
                    name:'login'
                })
            })
        })
    } catch (error) {
        errorMessage.value = error.response.data.message
        console.log(errorMessage.value)
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
