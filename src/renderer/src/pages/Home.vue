<script setup lang="ts">
import { useCounterStore } from '../stores/couter'
import { RouterLink } from 'vue-router'
const store = useCounterStore()
// import { axiosMainApi } from '@renderer/api/axios.expressApi';
// import axios from 'axios';
import { onMounted } from 'vue';
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';

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
        <Button @click="store.subtract" variant="default" size="default"
            class="cursor-pointer hover:bg-red-700">Subtract</Button>

        <div>
            <RouterLink to="/contact"> Contact </RouterLink>
        </div>
        <div class="p-8 w-min rounded bg-slate-200">
            <h1>Thgis is h1</h1>
            <Button variant="secondary">Click me</Button>
            <Input />
        </div>
        <div>
            <Badge>Badge</Badge>
            <Calendar />

        </div>
    </div>
</template>
