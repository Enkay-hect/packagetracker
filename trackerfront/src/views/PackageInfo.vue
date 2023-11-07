<template>
    <div class="homeparent" >
        <div class='homegrid'>

            <div class="packinfo" style="">
                        <div>
                            <div class="divplaceholder" style="height: 3rem;"></div>
                            <img src="../assets/images/uniuyologo.png" alt="" srcset="">
                            <div>Package Information  <br>Admin name <br>Staff id </div>

                        </div>
                        <!-- <h4>University of Uyo <br>Tracking sytem</h4> -->

                <div style="margin-top: 7%; display: flex; flex-direction: column; align-items: center;">

                    <h4 style="text-align: center;">Enter Package Information</h4>

                    <form class="foorm" action="" style="display:flex; flex-direction: column; justify-content: center;">
                        <input type="text" name="" id="fullname" placeholder="Package Name">
                        <input type="text" name="" id="username" placeholder="Phone Number">
                        <input type="text" name="" id="staffid" placeholder="Destination">                    </form>
                        <button style="margin-top: 1.5rem;" class="btnsubmit">Submit</button>

                </div>


            </div>

        </div>
    </div>

</template>

<script setup>

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


.packinfo img{
    margin: 0 auto;
    height: 6rem;
    width: 8rem;

}

.homeparent{
    width: 10%;
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
    width: 80%;
    min-height: 100vh;
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
    height: 3rem;
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
