<!-- button.vue -->
<template>
  <button class="ml-button" :class="styleClass">
    <slot />
  </button>
</template>

<script lang="ts">
import './style/index.less'
import { defineComponent, computed, useSlots } from 'vue'
import { buttonProps } from './types'
export default defineComponent({
  name: 'ml-button',
  props: buttonProps,
  setup(props) {
    const styleClass = computed(() => {
      return {
        [`ml-button--${props.type}`]: props.type,
        [`ml-button--${props.size}`]: props.size
      }
    })

    const slots = useSlots()

    return {
      styleClass,
      slots
    }
  }
})
</script>
