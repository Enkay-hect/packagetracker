<template>
       <div v-if="store.state.searchpackage.final_destination==1" class="homeparent" style="display:flex; flex-direction: column; position: fixed">
            <div id="infocontainer" >
                <img class="xx" @click="closee()"  src="./../assets/images/circle-xmark-solid.svg" alt="" style="cursor: pointer;">
            </div>
        <div class='homegrid'>

            <div >
                <h2 style="margin-bottom: 1.5rem;">Hey!</h2>
                <h4 style="margin-bottom: 1.5rem;">Mail with id:{{store.state.searchpackage.package_id}} has been delivered</h4>

                <div>
                    <img src="../assets/images/success.png" alt="">
                </div>
            </div>

        </div>
    </div>

     <div v-else class="wrapper">
             <div id="infocontainer" >
                <img class="xx" @click="closee()"  src="./../assets/images/circle-xmark-solid.svg" alt="" style="cursor: pointer;">
            </div>

        <div class="mapApi">
            <div>Mail Name: {{ store.state.searchpackage.name }}</div>
            <div>Mail ID: {{ store.state.searchpackage.package_id }}</div>
            <!-- <div>{{ store.state.searchpackage.destination }}</div> -->
        </div>


        <div class="wrapperchild">

            <div class="childtext">
                <div class="textt">
                    {{store.state.searchpackage.postoffice}}
                    <br>{{ timee }}
                    <br>{{ datee }}

                </div>

                <div class="subchild1">
                    <div class="iconcircle" style="background-color: green;">1</div>
                    <div class="lineseparator" style="background-color: green;"></div>

                </div>
            </div>

            <div v-if="store.state.searchpackage.final_destination !== 1" class="childtext" id="childtext2">
                <div class="textt abcd">
                    {{store.state.searchpackage.destination}}
                    <br>{{ utime }}
                    <br>{{ udate }}

                </div>

                <div class="subchild1">
                    <div class="iconcircle" id="point2">2</div>
                    <div class="lineseparator" id="line2"></div>

                </div>
            </div>

            <div class="childtext">
                <div class="textt abcde">
                    package at final position
                    <br> date/time
                </div>

                <div class="subchild1">
                    <div class="iconcircle" id="point3">3</div>
                </div>
            </div>

            <!-- <div v-else class="childtext">
                <div class="textt abcde">
                    package at final position
                    <br> date/time
                </div>

                <div class="subchild1" >
                    <div style="background-color: green;" class="iconcircle" id="point3">3</div>
                </div>
            </div> -->

        </div>
    </div>





</template>

<script setup>
import { onMounted, onUpdated,onBeforeMount } from 'vue';
import store from '../store';
import router from '../router';

const created_at = store.state.searchpackage.created_at

        const splitDatetime = created_at.split('T')
        const date = splitDatetime[1].split(':')
        const time = splitDatetime[0].split('-')

        const datee = `${date[0]+':'+date[1]}`
        const timee = `${time[2] + '-'+ time[1] + '-'+ time[0]}`


        const updated_at = store.state.searchpackage.updated_at
        const usplitDatetime = updated_at.split('T')
        const dat = usplitDatetime[1].split(':')
        const tim = usplitDatetime[0].split('-')

        const udate = `${dat[0]+':'+dat[1]}`
        const utime = `${tim[2] + '-'+ tim[1] + '-'+ tim[0]}`



        function closee(ev){
            router.push({
                name: 'trackpackage',
            })
            store.commit("clearsearchpackage");
        }



</script>

<style scoped>
#infocontainer{
    min-height: 10vh;
    width: 100%;
    /* position: ; */
    z-index: 1;
    display: flex;
    justify-content: right;
    /* background-color: rgb(250, 240, 240); */
}
#infocontainer img{
    min-height: 2rem;
    width: 2rem;
    margin-right: 35rem;
}

    @media (max-width: 1538px) {
        #infocontainer img
    {
        margin-right: 12rem;
    }

}

@media (max-width: 800px) {
        #infocontainer img
    {
        margin-right: 3rem;
    }
}
.mapApi{
    height: 20vh;
    width: 25%;
    text-align: center;
    /* border: 2px solid black; */
}
.abcd{
    margin-top: -1.8rem;
}
.abcde{
    margin-top: -1.8rem;
}
.textt{
    width: 9rem;
    height: 5rem;
    padding-right: 2rem;
    text-align: right;
    /* border: 3px solid green; */
}

.subchild1{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

}

.childtext{
    display: flex;
}

.wrapper{
    width: 100%;
    /* margin: 0 auto; */
    /* border: 3px solid red; */
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.wrapperchild{
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.iconcircle{
    width: 30px;
    height: 30px;
    background-color: red;
    color: white;
    border-radius: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.lineseparator{
    width: 10px;
    height: 8rem;
    background-color: red;
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
        width: 70%;

        min-height: 100vh;
        display: grid;
        /* grid-template-columns: 1fr 1fr; */
        align-items: center;
        text-align: center;
    }

    .homegrid img{
        height: 5rem;
        width: 6rem;
    }

</style>

