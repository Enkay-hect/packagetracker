<template>
    <router-view></router-view>
</template>

<script setup>
import { watch, onUpdated } from 'vue';
import store from './store';

onUpdated(()=>{
    return store.state.searchpackage.package_id
})


</script>

<style  scoped>

</style>
