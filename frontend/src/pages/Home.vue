<template>
    <div class="h-full">
        <Header :sendData="getData" />
        <Content :appData="appData" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Content from '../components/Content.vue'

const appData = ref(null)

function getData(data) {
    appData.value = data
    console.log(appData.value)
}
</script>

<style>
</style>