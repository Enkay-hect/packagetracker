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

                <div style="margin-top: 7%; color:maroon"> Register</div>

                    <form action="" style="grid; grid-template-columns: 1fr 1fr;  column-gap: 50px;">
                        <input v-model="user.name" type="text" name="" id="name" placeholder="name">
                        <input v-model="user.email" type="text" name="" id="email" placeholder="Email">
                        <input v-model="user.staff_id" type="text" name="" id="staffid" placeholder="Staff id">
                        <input v-model="user.phone_number" type="number" name="" id="phonenumber" placeholder="Phone Number">
                        <input v-model="user.password" type="password" name="" id="password" placeholder="Password">
                        <input v-model="user.password_confirmation" type="text" name="" id="lastname" placeholder="confirm_password">


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

const user = {
    name: '',
    email: '',
    staff_id: '',
    phone_number: '',
    password: '',
    password_confirmation: '',
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
