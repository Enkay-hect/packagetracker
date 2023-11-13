<template>
     <!-- <div id="infocontainer" >
            <div class="xx" @click="closee()">X</div>
    </div> -->
    <successModal id="modal" @click="closee()" style="display: none;"/>
    <loggedInNav id="unfix"/>

    <div class="homeparent" >
        <div class='homegrid'>

            <div class="packinfo" style="">
                        <div class="imgg">
                            <div class="divplaceholder" style="height: 3rem;"></div>
                            <img src="../assets/images/uniuyologo.png" alt="" srcset="">
                            <div>Enter Mail Details  <br>{{store.state.user.data.name}} <br>{{store.state.user.data.staffId}} </div>

                        </div>
                        <!-- <h4>University of Uyo <br>Tracking sytem</h4> -->

                <div style="margin-top: 7%; display: grid; flex-direction: column; align-items: center; justify-content: space-evenly;">

                    <h4 style="text-align: center;">Enter Package Information</h4>

                    <form @submit="packagedataa" class="foorm" action="" >
                       <div>
                            <input v-model="packagedata.name" type="text" name="" id="fullname" placeholder="Sender Name" required>
                            <input v-model="packagedata.email" type="text" name="" id="Email" placeholder="Email" required>
                            <input v-model="packagedata.phone_number" type="text" name="" id="username" placeholder="Phone Number" required>
                            <input v-model="packagedata.postoffice" type="text" name="" id="" placeholder="Posting office" required>
                            <input v-model="packagedata.destination" type="text" name="" id="" placeholder="Destination" required>
                            <!-- <input v-model="packagedata.staffId" type="text" name="" id=""  disabled :placeholder="store.state.user.data.staffId"> -->

                       </div>
                        <button style="margin-top: 1.5rem; width:50%; place-self: center;" class="btnsubmit">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import store from '../store';
import AuthServices from '../apiServices/authServices';
import loggedInNav from '../components/loggedInNav.vue';
import successModal from '../components/successModal.vue';

import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();


const packagedata = {
    name: '',
    email: '',
    phone_number: '',
    postoffice: '',
    sender_id: store.state.user.data.staffId
}

function closee(){
    document.getElementById('modal').style.display = 'none'
    document.getElementById('unfix').style.display = 'flex'

    store.commit("clearsearchpackage");

                router.push({
                    name:'trackpackage'
                })
}


const errorMessage = ref('')

async function packagedataa(ev){
    try {
        ev.preventDefault();
        await AuthServices.packagdata(packagedata, (response)=>{
            store
            .dispatch('packagee', response)
            .then ((response)=> {
                document.getElementById('unfix').style.display = 'none'

                document.getElementById('modal').style.display = 'flex'
            })
        })
    } catch (error) {
        errorMessage.value = error.response.data.message
        console.log(error)
    }

}

</script>

<style scoped>

.imgg{
    place-self: center;
}

.foorm{
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.foorm div{
    display: grid;
}


.btnsubmit{
    padding: 0.5rem 1rem;
    border: none;
    background-color: green;
    color: white;
    font-family: Georgia, 'Times New Roman', Times, serif;
    border-radius: 5px;
}

.btnsubmit:hover{
    background-color: rgb(40, 119, 40);
}


.packinfo img{
    margin: 0 auto;
    height: 6rem;
    width: 8rem;

}

.homeparent{
    width: 10%;
    min-height: 65vh;
    min-width: 100vw;
    /* width: 100%; */
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    /* position: absolute; */
}

.homegrid{
    margin: 0 auto;
    width: 80%;
    min-height: 50vh;
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    align-items: center;
    text-align: center;
}

.packinfo{
    display:grid;
    grid-template-columns: 1fr 1fr
}

.foorm{
    width: 25rem;
}

.packinfo form input{
    margin: 1rem 0;
    height: 2rem;
    border-radius: 10px;
    padding: 0 1rem;
}

    @media (max-width: 700px) {
        .packinfo{
            display: flex;
            flex-direction: column;
        }

        .foorm{
            width: 20rem;
        }

        .divplaceholder{
            display: none;
        }

}

</style>
