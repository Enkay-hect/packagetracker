<template>
<loggedInNav />

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
        <form @submit="getPack" action="">
            <input v-model="pack.package_id" type="search" name="" id="" required>
            <button>Search</button>
        </form>

        <div>Track Item</div>
      </div>


        <div>Powered by Uniuyo</div>

  </div>
 </div>

</template>

<script setup>
import loggedInNav from '../components/loggedInNav.vue';
import AuthServices from '../apiServices/authServices';
import store from '../store/index.js';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const pack = {
    package_id: ''
}

const error = ref('')

async function getPack(ev){
    ev.preventDefault();

    try {
        await AuthServices.serpack(pack, (response)=>{
            store
            .dispatch('getPack', response)
            .then((response)=>{
                router.push({
                    name: 'packagedetails'
                })
            })
         })
    } catch (error) {

    }

}

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



</style>
