<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Basic styles, potentially moved from index.css or main.css */
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Inter', sans-serif; /* Example font */
}
</style>
