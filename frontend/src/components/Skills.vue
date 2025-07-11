<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const skills = ref([]);

const getSkillLevelWidth = (level) => {
  switch (level.toLowerCase()) {
    case 'mahir': return '90%';
    case 'menengah': return '70%';
    case 'dasar': return '40%';
    case 'ahli': return '95%';
    default: return '50%';
  }
};

onMounted(async () => {
  try {
    const response = await axios.get('/api/skills');
    skills.value = response.data;
  } catch (error) {
    console.error('Error fetching skills:', error);
  }
});
</script>

<template>
  <section id="skill" class="py-20 bg-gray-50 sm:py-24">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <p class="text-center text-lg text-gray-600 max-w-2xl mx-auto -mt-4 mb-12">
        Berikut adalah beberapa teknologi dan keahlian yang saya kuasai dan sedang saya kembangkan.
      </p>

      <!-- Grid untuk menampilkan kartu keahlian -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">

        <!-- Loop melalui setiap skill -->
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="bg-white p-6 rounded-xl shadow-md text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          :style="{ 'animation': `fadeInUp 0.5s ease-out ${0.1 * index}s forwards`, 'opacity': 0 }"
        >
          <!-- Nama Keahlian -->
          <h3 class="text-lg font-bold text-gray-800 mb-1">{{ skill.name }}</h3>

          <!-- Level Keahlian -->
          <p class="text-blue-600 font-semibold text-sm">{{ skill.level }}</p>

          <!-- Progress Bar -->
          <div class="w-full bg-gray-200 rounded-full h-2.5 mt-4">
            <div class="bg-blue-500 h-2.5 rounded-full" :style="{ width: getSkillLevelWidth(skill.level) }"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animasi kustom untuk entrance yang lebih halus */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
