<template>
    <!-- <div class="homeparent" style="">
        <div class='homegrid'>

            <div >
                <h2 style="margin-bottom: 1.5rem;">Hey!</h2>
                <h4 style="margin-bottom: 1.5rem;">Product with id:1234123412 has been delivered</h4>

                <div>
                    <img src="../assets/images/success.png" alt="">
                </div>
            </div>




        </div>
    </div> -->


    <div class="wrapper">

        <div class="mapApi">
            Lorem ipsum dolor sit amet.
        </div>


        <div class="wrapperchild">
            <div class="childtext">
                <div class="textt">
                    Package in transit
                    <br> date/time
                </div>

                <div class="subchild1">
                    <div class="iconcircle">1</div>
                    <div class="lineseparator"></div>

                </div>
            </div>

            <div v-if="intermediate" class="childtext" id="childtext2">
                <div class="textt abcd">
                    Package at intermediate position
                    <br> date/time
                </div>

                <div class="subchild1">
                    <div class="iconcircle">1</div>
                    <div class="lineseparator"></div>

                </div>
            </div>

            <div class="childtext">
                <div class="textt abcde">
                    package at final position
                    <br> date/time
                </div>

                <div class="subchild1">
                    <div class="iconcircle">1</div>
                </div>
            </div>

        </div>
    </div>


</template>

<script setup>
import { onMounted, onUpdated } from 'vue';

const intermediate = true


onMounted(()=>{
    const abc = document.getElementById("childtext2")
    abc.style.color = 'red'
})





</script>

<style scoped>

.mapApi{
    height: 20vh;
    width: 25%;
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

