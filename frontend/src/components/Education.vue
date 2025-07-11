<script setup>
import { ref } from 'vue';
// Axios dan onMounted tidak diperlukan lagi untuk data statis, jadi kita hapus.
// import axios from 'axios';
// import { onMounted } from 'vue';
import SectionTitle from './SectionTitle.vue';

// Ganti pengambilan data API dengan data statis langsung di sini.
// Urutkan dari yang terbaru (kuliah) ke yang terlama (SMA).
const educationHistory = ref([
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Informatika'
  },
  {
    id: 2,
    period: '2020 - 2023',
    institution: 'SMA Negeri 3 Klaten',
    major: 'MIPA (Matematika dan Ilmu Pengetahuan Alam)'
  },
  // Anda bisa menambahkan riwayat pendidikan lain di sini jika ada (misal: SMP)
  // {
  //   id: 3,
  //   period: '2015 - 2018',
  //   institution: 'SMP Negeri X',
  //   major: 'Siswa'
  // }
]);

// Fungsi onMounted yang mengambil data dari API dihapus.
/*
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error('Error fetching education history:', error);
  }
});
*/
</script>

<template>
  <section id="pendidikan" class="py-20 bg-white sm:py-24">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />

      <!-- Timeline Container -->
      <div class="relative max-w-3xl mx-auto mt-12">
        <!-- Garis Vertikal Timeline -->
        <!-- Disesuaikan agar lebih baik di mobile -->
        <div class="absolute w-1 bg-blue-200 h-full left-4 transform -translate-x-1/2 md:left-1/2"></div>

        <!-- Loop untuk setiap item pendidikan -->
        <div v-for="(edu, index) in educationHistory" :key="edu.id" class="mb-10 relative">

          <!-- Wrapper untuk layout kiri-kanan di desktop -->
          <div class="md:flex" :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''">

            <!-- Bagian Kosong (untuk spacing di desktop) -->
            <div class="w-1/2 hidden md:block"></div>

            <!-- Kartu Konten -->
            <div class="w-full md:w-1/2 md:pr-10" :class="index % 2 === 0 ? 'md:pr-0 md:pl-10' : ''">
              <div class="pl-12 md:pl-0 relative">
                <!-- Titik pada Timeline -->
                <div class="absolute w-5 h-5 bg-white border-4 border-blue-600 rounded-full top-1 -left-8 transform -translate-x-1/2 md:left-auto" :class="index % 2 === 0 ? 'md:-right-12 md:translate-x-1/2' : 'md:-left-12 md:-translate-x-1/2'"></div>

                <!-- Konten Teks -->
                <div class="bg-gray-50 rounded-lg shadow-md p-6">
                  <p class="font-semibold text-blue-600 text-sm mb-1">{{ edu.period }}</p>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">{{ edu.institution }}</h3>
                  <p class="text-gray-600">{{ edu.major }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Menambahkan sedikit transisi untuk efek yang lebih halus */
.relative {
  transition: all 0.3s ease-in-out;
}
</style>
