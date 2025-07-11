<script setup>
defineProps({ title: String });
</script>
<template>
  <div class="mb-16 text-center animate__animated animate__fadeInUp">
    <h2 class="text-4xl lg:text-5xl font-extrabold text-gray-900 relative inline-block pb-3">
      {{ title }}
      <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-blue-600 rounded-full animate-line-expand"></span>
    </h2>
    <p class="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
      </p>
  </div>
</template>

<style scoped>
@keyframes line-expand {
  0% { width: 0; }
  100% { width: 96px; } /* Equivalent to w-24 */
}

.animate-line-expand {
  animation: line-expand 0.8s ease-out forwards;
}
</style>