<template>
  <span :class="['inline-block tabular-nums text-black dark:text-white tracking-wider', className]" ref="refElement">{{ formattedValue }}</span>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  direction: {
    type: String,
    default: 'up'
  },
  delay: {
    type: Number,
    default: 0
  },
  className: {
    type: String,
    default: ''
  }
})

const refElement = ref(null)
const formattedValue = ref(0)
const motionValue = useMotionValue(props.direction === 'down' ? props.value : 0)
const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 })

onMounted(() => {
  const inView = useInView(refElement, { once: true, margin: '0px' })

  watch([motionValue, inView], () => {
    if (inView) {
      setTimeout(() => {
        motionValue.set(props.direction === 'down' ? 0 : props.value)
      }, props.delay * 1000)
    }
  })

  springValue.on('change', (latest) => {
    formattedValue.value = Intl.NumberFormat('en-US').format(Number(latest.toFixed(0)))
  })
})
</script>