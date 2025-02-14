import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  
  const doubleCount = computed(() => {
    return count.value * 2
  })
  
  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  return { count, increment, decrement, doubleCount }
})

export { useCounterStore }
