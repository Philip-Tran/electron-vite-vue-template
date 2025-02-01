<script setup>
import { Badge } from '@/components/ui/badge';

</script>

<template>
    <div
        class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative">
        <div class="absolute inset-0 bg-blue-500 opacity-20 blur-3xl w-2/3 h-2/3 rounded-full mx-auto"></div>
        <h1 class="text-4xl font-bold mb-4 animate-pulse relative z-10">About This Template</h1>
        <p class="text-lg mb-6 relative z-10 max-w-2xl text-center">
            This is a minimal Electron + Vue 3 template powered by Vite, Pinia, Tailwind CSS v4 and ShadcnUi.
            It provides a fast and modern development experience with reactive state management and efficient styling.
        </p>
        <div class="bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg flex flex-col items-center relative z-10">
            <p class="text-lg text-gray-400 text-center">Designed for developers who want a quick and flexible setup.
            </p>
        </div>
        <div class="mt-5">
            <RouterLink to="/">
                <Badge class="bg-blue-500">Home</Badge>
            </RouterLink>
        </div>
    </div>
</template>
