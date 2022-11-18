<script setup lang="ts">
// Standard DarkToglle for nuxt/color-mode
// Not in use yet
// Planning to change tailwind-color-module with nuxt/color-mode
const color = useColorMode();
function toggleDark() {
  color.preference = color.value === "dark" ? "light" : "dark";
}
</script>

<template>
  <button
    @click="toggleDark()"
  >
    <Icon
      v-if="color.value === 'light'"
      name="heroicons-outline:moon"
      class="w-8 h-8"
    />
    <Icon v-else name="heroicons-outline:sun" class="w-8 h-8" />
  </button>
</template>
