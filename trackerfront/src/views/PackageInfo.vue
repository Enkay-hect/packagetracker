<template>
    <div class="homeparent" >
        <div class='homegrid'>

            <div class="packinfo" style="">
                        <div>
                            <div class="divplaceholder" style="height: 5rem;"></div>
                            <img src="../assets/images/uniuyologo.png" alt="" srcset="">
                            <h4>Package Information</h4>
                        </div>
                        <!-- <h4>University of Uyo <br>Tracking sytem</h4> -->

                <div style="margin-top: 7%;"> Enter Package Information

                    <form action="" style="display:flex; flex-direction: column;">
                        <input type="text" name="" id="fullname" placeholder="Fullname">
                        <input type="text" name="" id="username" placeholder="Username">
                        <input type="text" name="" id="staffid" placeholder="Staff id">
                        <input type="password" name="" id="password" placeholder="Password">
                    </form>
                </div>


            </div>

        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>

.packinfo img{
    margin: 0 auto;
    height: 6rem;
    width: 8rem;

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
    width: 50%;
    min-height: 100vh;
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    align-items: center;
    text-align: center;
}

.packinfo{
    display:grid;
    grid-template-columns: 1fr 2fr
}

.packinfo form input{
    margin: 1rem 0;
}

    @media (max-width: 700px) {
        .packinfo{
            display: flex;
            flex-direction: column;
        }

        .divplaceholder{
            display: none;
        }

}

</style>
