<script setup>
import { ref } from 'vue';
import SectionTitle from './SectionTitle.vue';

// Axios dan onMounted tidak diperlukan lagi, kita hapus.

// Definisikan data proyek secara statis.
// Anda bisa menambahkan atau mengubah proyek ini sesuai kebutuhan.
const projects = ref([
  {
    title: 'Website JWR Comp',
    description: 'Sebuah website e-commerce yang dirancang untuk JWR Comp, toko yang menjual komponen dan aksesoris komputer. Dilengkapi dengan katalog produk, detail barang, dan desain yang responsif.',
    image: 'src/image/jwrcomp.png',
    tech: ['Vue.js', 'Tailwind CSS', 'Node.js', 'Express'],
    link: '#' // Ganti '#' dengan link GitHub atau link live proyek Anda
  },
  {
    title: 'Portofolio Pribadi',
    description: 'Proyek website portofolio ini sendiri, dirancang dan dikembangkan untuk menampilkan keahlian, riwayat pendidikan, dan proyek-proyek saya. Dibangun dengan teknologi web modern untuk performa yang cepat.',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    tech: ['Vue 3', 'Vite', 'Tailwind CSS', 'Figma'],
    link: '#' // Ganti '#' dengan link GitHub ke repositori portofolio ini
  },
  {
    title: 'Alat Keamanan Jaringan',
    description: 'Sebuah tool command-line sederhana yang dibuat dengan Python untuk melakukan pemindaian port dasar pada jaringan lokal. Proyek ini bertujuan untuk melatih fundamental keamanan siber dan networking.',
    image: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    tech: ['Python', 'Scapy', 'CLI'],
    link: '#' // Ganti '#' dengan link GitHub ke repositori proyek ini
  }
]);
</script>

<template>
  <section id="proyek" class="py-20 bg-gray-50 sm:py-24">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <p class="text-center text-lg text-gray-600 max-w-2xl mx-auto -mt-4 mb-12">
        Berikut adalah beberapa proyek yang pernah saya kerjakan, menunjukkan aplikasi praktis dari keahlian saya.
      </p>

      <!-- Grid untuk menampilkan kartu proyek -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        <!-- Loop melalui setiap proyek -->
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
          :style="{ 'animation': `fadeInUp 0.5s ease-out ${0.1 * index}s forwards`, 'opacity': 0 }"
        >
          <!-- Gambar Proyek -->
          <div class="overflow-hidden h-56">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />
          </div>

          <!-- Konten Teks Proyek -->
          <div class="p-6 flex flex-col h-[calc(100%-14rem)]">
            <h3 class="text-xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4 leading-relaxed text-sm flex-grow line-clamp-3">{{ project.description }}</p>

            <!-- Tag Teknologi -->
            <div class="mb-4 flex flex-wrap gap-2">
              <span v-for="t in project.tech" :key="t" class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">{{ t }}</span>
            </div>

            <!-- Tombol Link -->
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 flex items-center mt-auto group/link">
              Lihat Detail
              <svg class="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
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
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Utilitas untuk membatasi jumlah baris deskripsi */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>