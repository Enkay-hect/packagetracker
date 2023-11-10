<template>
    <div class="parent">

        <div class="child">
            <form action="">
                <input type="search" name="" id="">
                <button>Search</button>
            </form>

            <form action="" class="input-wrapper">
                <label for="ttext">Package Info</label>
                <textarea name="" id="ttext" cols="30" rows="10"></textarea>
                <div class="textareaBtn">
                    <button style="border-radius: 5px; width:40%">Agent Office</button>
                    <button style="border-radius: 5px;width:40%">
                        <router-link to="/packagedetails" style="color: white; text-decoration: none;">
                            Destination
                        </router-link>
                    </button>

                </div>
            </form>
        </div>

    </div>
</template>

<script setup>
import { useRoute, useRouter, RouterLink } from 'vue-router';

</script>

<style  scoped>
.parent{
    width: 100%;
    min-height: 100vh;
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
.input-wrapper textarea {
  border: 1px solid gray;
  border-radius: 6px;
  position: relative;
  border: 2px solid black;
  width: 95%;
  margin: 10px;
  line-height: 4ex;
  padding: 1rem;
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
