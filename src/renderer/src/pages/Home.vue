<script setup>
import { Button } from '@/components/ui/button';
import { useCounterStore } from '@/stores/couter';
const store = useCounterStore();
</script>

<template>
    <div
        class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative">
        <div class="absolute inset-0 bg-blue-500 opacity-20 blur-3xl w-2/3 h-2/3 rounded-full mx-auto"></div>
        <h1 class="text-4xl font-bold mb-4 animate-pulse relative z-10">Welcome to Your Electron Vue Template</h1>
        <p class="text-lg mb-6 relative z-10">A minimal starter with Vue 3, Vite, Pinia, and Tailwind CSS</p>

        <div class="bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg flex flex-col items-center relative z-10">
            <p class="text-2xl font-semibold">Counter: {{ store.count }}</p>
            <p class="text-lg text-gray-400">Double: {{ store.dubbleCount }}</p>
            <div class="mt-4 flex space-x-4">
                <Button @click="store.decrement"
                    class=" bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 transition-all">
                    Decrement
                </Button>
                <Button @click="store.increment"
                    class=" bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700 transition-all">
                    Increment
                </Button>
            </div>
        </div>
    </div>
</template>
