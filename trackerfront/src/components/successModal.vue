<template>

    <div class="parent" id="parent">


        <div class="child">
            <div class="close">
                <img  style="width: 3rem; cursor:pointer" src="../assets/images/circle-xmark-solid.svg" alt="">
                <!-- <strong @click="closee()" style="cursor: pointer;">X</strong> -->
            </div>

            <img src="../assets/images/success.png" alt="">
            <!-- <h2 style="color: green;">SUCCESS!!!</h2> -->
            <h3>Mail created with<br>id: {{ store.state.packagedata.package_id }} </h3>
            <h3 style="color: red;">Please take note of your mail ID</h3>
        </div>

    </div>


</template>

<script setup>
import store from '../store/index.js'



</script>


<style scoped>

.parent{
    width: 100%;
    min-height: 100vh;
    background-color: rgb(250, 240, 240);
    display: flex;
    flex-direction: column;
    position: fixed;
    /* display: none; */
    /* margin: 0 auto; */
}

.child{
    width: 50%;
    min-height: 60vh;
    margin: auto ;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
}

.close{
    width: 90%;
    display: flex;
    justify-content: right;
    margin-top: 0.5rem;
    /* padding: 0.5rem 1rem 0 0; */
}

img{
    height: 6rem;
    width: 8rem;
}
</style>
