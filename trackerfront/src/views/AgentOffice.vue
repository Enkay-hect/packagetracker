<template>
    <loggedInNav style=""/>
    <div class="parent">

        <div class="child">
            <form action="" @submit="getPack">
                <input v-model="pack.package_id" type="search" name="" id="" placeholder="Enter tracking id">
                <button>Search</button>
            </form>

            <form  action="" class="input-wrapper">
                <label class="ttext" for="ttext">Package Info</label>
                <div class="textArea" name="" id="ttext" cols="30" rows="10" disabled>
                    <h4>name: {{ store.state.searchpackage.name }}</h4>
                    <h4>email: {{ store.state.searchpackage.email }}</h4>
                    <h4>Package_ID: {{ store.state.searchpackage.package_id }}</h4>
                    <h4> Destination: {{ store.state.searchpackage.destination }}</h4>
                </div>

                <div v-if="store.state.searchpackage.final_destination!=1" class="textareaBtn" >
                    <button @click="agentOffice" style="border-radius: 5px; width:40%">Agent Office</button>
                    <button  @click="setDestination" style="border-radius: 5px;width:40%" type="">
                            Destination
                    </button>

                </div>

                <div v-else class="textareaBtn" >
                    <button style="border-radius: 5px; width:40%; background-color:rgb(14, 179, 14)" disabled>Agent Office</button>

                    <button  @click="setDestination" style="border-radius: 5px;width:40%; background-color:rgb(14, 179, 14)" type="" disabled>
                            Destination
                    </button>
                </div>
            </form>

            <form action="" @submit="newDes" style="display:none" id="show">
                <input v-model="newDesData.newdestination" type="search" name="" id="" placeholder="Enter new destination">
                <button>Post</button>
            </form>


        </div>

    </div>
</template>

<script setup>
import { useRoute, useRouter, RouterLink } from 'vue-router';
import AuthServices from '../apiServices/authServices';
import store from '../store/index.js';
import { ref, onMounted } from 'vue';
import loggedInNav from '../components/loggedInNav.vue'


const router = useRouter();

const des = store.state.searchpackage.final_destination



const pack = {
    package_id: store.state.searchpackage.package_id
}

const newDesData ={
    package_id: store.state.searchpackage.package_id,
    staffId:   store.state.user.data.staffId,
    newdestination: ''
}



const errorMessage = ref('')

function agentOffice(ev){
    ev.preventDefault()
    document.getElementById('show').style.display='flex'
}

async function newDes(ev){
    ev.preventDefault();

    try {
        await AuthServices.newDestination(newDesData, (response)=>{
            store.dispatch('newDesData', response)
            .then((response)=>{
                router.push({
                    name: 'trackpackage'
                })

            })
            store.commit('clearsearchpackage')
        })

    } catch (error) {
        errorMessage.value = error
        alert(errorMessage.value)
    }
}


async function getPack(ev){
    // ev.preventDefault();

    try {
        await AuthServices.serpack(pack, (response)=>
        {
            store
            .dispatch('getPack', response)
            .then((response)=>{
                // document.getElementById('infocontainer').style.display = 'flex'
            })
        })

    } catch (error) {
        errorMessage.value = error.response.data.message
        alert(errorMessage.value)
    }

}

async function setDestination(ev){
    ev.preventDefault();
    try {
        await AuthServices.finaldestination(pack, (response)=>{
            store
            .dispatch('setdes', response)
            .then((response)=>{
                router.push({
                    name: 'trackpackage'
                })
            })
            store.commit('clearsearchpackage')
        })

    } catch (error) {

    }
}

</script>

<style  scoped>
.newdes{
    min-height: 10vh;
    /* border: 2px solid black; */
    width: 100%;
    position: relative;
}

.newdesInput{
    height: 2rem;
    border: 2px solid red;
}
.textArea{
    min-height: 25vh;
    border: 2px solid black;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.textArea h4{
    margin-left: 1rem;
}

.ttext{
    margin-top: -0.75rem;
}
.parent{
    width: 100%;
    height: auto;
    display:flex;
    justify-content: center;
    align-items: center;
}

.child{
    width: 60%;
    margin: 0 auto;
    min-height: 70vh;
    /* border: 2px solid maroon; */
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.child form{
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.child form input{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    height: 2rem;
    width: 80%;
    border: 2px solid black;
}
.child form button{
    height: 2rem;
    width: 20%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: green;
    color: white;
    border: 2px solid green;
}
.input-wrapper{
    position: relative;
    display: flex;
    flex-direction: column;
    /* border: 2px solid black; */
}
.input-wrapper textArea {
  border: 1px solid gray;
  border-radius: 6px;
  position: relative;
  box-sizing: border-box;
  border: 2px solid black;
  width: 100%;
  margin: 10px;
  line-height: 4ex;
  /* padding-left: -5rem; */
  resize: none;
  display: flex;
  flex-direction: row;
}

.input-wrapper label {
  position: absolute;
  top: 0.2ex;
  z-index: 1;
  left: 4em;
  background-color: white;
  padding: 0 5px;
}

.textareaBtn{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    border-radius: 5px;
    margin-top: 1rem;
}

@media (max-width: 800px) {
    .child{
        width: 85%;
    }
}

</style>
