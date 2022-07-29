<template>
    <div>
        <Button @click="counter.increment()">{{ counter.count }}</Button>
    </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()

    return {
      counter
    }
  },
}
</script>

