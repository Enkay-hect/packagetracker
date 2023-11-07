<template>
   <div class="homeparent" style="">
        <div class='homegrid'>

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
                <form action="" style="grid; grid-template-columns: 1fr 1fr;  column-gap: 50px;     margin-bottom: 2rem;
">
                    <input type="text" name="" id="staffid" placeholder="staff id">
                    <input type="password" name="" id="pass" placeholder="password">
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
