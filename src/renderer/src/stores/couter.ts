import { defineStore } from 'pinia'
import { ref } from 'vue'

const useCounterStore = defineStore('counter', () => {
  const count = ref(7)
  const add = () => {
    count.value++
  }

  const subtract = () => {
    count.value--
  }

  return { count, add, subtract }
})

export { useCounterStore }
