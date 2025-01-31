<script setup lang="ts">
import { useCounterStore } from '../stores/couter'
import { RouterLink } from 'vue-router'
const store = useCounterStore()
import { axiosMainApi } from '@renderer/api/axios.expressApi';
import axios from 'axios';
import { onMounted } from 'vue';

const fetchData = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        console.log("Fetch response:", data);
    } catch (error) {
        console.error("Fetch error:", (error as Error).message);
    }
}



onMounted(() => {
    console.log("mounted")
    fetchData()
})
</script>

<template>
    <div>
        <h1>Counter</h1>
        <p class="text-blue-500 text-2xl">This is</p>
        <button @click="store.add">Count {{ store.count }}</button>
        <button @click="store.subtract">Subtract</button>

        <div>
            <RouterLink to="/contact"> Contact </RouterLink>
        </div>
    </div>
</template>
