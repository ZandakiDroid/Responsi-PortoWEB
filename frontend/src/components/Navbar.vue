<template>
  <header class="bg-white shadow-lg sticky top-0 z-50 animate__animated animate__fadeInDown">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-extrabold text-gray-900 tracking-wide">A R H | Portofolio</div>
      <ul class="flex space-x-8">
        <li><router-link to="/" class="text-gray-700 hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300 font-medium text-lg">Profil</router-link></li>
        <li><router-link to="/education" class="text-gray-700 hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300 font-medium text-lg">Pendidikan</router-link></li>
        <li><router-link to="/skills" class="text-gray-700 hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300 font-medium text-lg">Skill</router-link></li>
        <li><router-link to="/projects" class="text-gray-700 hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300 font-medium text-lg">Proyek</router-link></li>
        <li><router-link to="/contact" class="text-gray-700 hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300 font-medium text-lg">Kontak</router-link></li>
      </ul>
    </nav>
  </header>
</template>
