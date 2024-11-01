<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 24 24"
    :aria-label="props.label"
    :role="props.label ? 'img' : 'presentation'"
    :class="[
      'inline-block align-middle',
      props.color ? `text-${props.color}` : '',
      props.className,
    ]"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <!-- Slot for custom paths -->
    <slot />
  </svg>
</template>

<script setup lang="ts">
interface IconProps {
  // Icon size in pixels
  size?: number | string;
  // Tailwind color class (e.g. 'blue-500')
  color?: string;
  // Additional classes
  className?: string;
  // Accessibility label
  label?: string;
}

const props = withDefaults(defineProps<IconProps>(), {
  size: 24,
  color: '',
  className: '',
  label: '',
})
</script>

<style scoped>
svg {
  flex-shrink: 0;
}
</style>
