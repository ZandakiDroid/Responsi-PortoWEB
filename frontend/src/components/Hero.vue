<script setup>
// Path ke gambar Anda. Pastikan ini benar.
import profileImage from '@/image/profile.jpg'
</script>

<template>
  <section id="profil" class="bg-white flex items-center min-h-screen">
    <div class="container mx-auto px-6 py-20">
      <div class="flex flex-col-reverse md:flex-row items-center justify-center gap-12 lg:gap-20">
        <!-- Kolom Kiri: Konten Teks -->
        <div class="md:w-1/2 lg:w-[55%] text-center md:text-left">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 leading-tight animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            Ahmad Rafi Hergiawan
          </h1>
          <h2
            class="text-xl lg:text-2xl font-semibold text-blue-600 mb-6 animate-fade-in-up"
            style="animation-delay: 0.3s"
          >
            Web Developer & UI/UX Enthusiast
          </h2>
          <p
            class="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up"
            style="animation-delay: 0.4s"
          >
            Saya adalah mahasiswa <strong>Informatika</strong> dari
            <strong>Universitas Amikom</strong> dengan fokus pada pengembangan web. Saya bersemangat
            dalam merancang antarmuka pengguna yang intuitif (UI/UX) dan membangun aplikasi backend
            yang andal, dengan minat khusus pada aspek <strong>keamanan siber</strong>.
          </p>

          <!-- Tombol Aksi & Tautan Sosial -->
          <div
            class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 animate-fade-in-up"
            style="animation-delay: 0.6s"
          >
            <!-- 1. Tombol diubah menjadi <router-link> untuk navigasi halaman -->
            <router-link
              to="/contact"
              class="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-block w-full sm:w-auto"
            >
              Hubungi Saya
            </router-link>

            <div class="flex items-center gap-4">
              <!-- 2. Ikon LinkedIn diganti dengan Instagram -->
              <a
                href="https://www.instagram.com/rafixme_/"
                target="_blank"
                title="Instagram"
                class="text-gray-500 hover:text-pink-600 transition-colors duration-300"
              >
                <span class="sr-only">Instagram</span>
                <!-- SVG Icon for Instagram -->
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.116 0-3.483.011-4.71.069-2.734.124-3.951 1.348-4.068 4.068-.058 1.226-.069 1.593-.069 4.71s.011 3.483.069 4.71c.117 2.72 1.333 3.944 4.068 4.068 1.227.058 1.594.069 4.71.069s3.483-.011 4.71-.069c2.734-.124 3.951-1.348 4.068-4.068.058-1.227.069-1.594.069-4.71s-.011-3.483-.069-4.71c-.117-2.72-1.334-3.944-4.068-4.068-1.227-.058-1.594-.069-4.71-.069zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM12 14.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm5.187-8.127a.937.937 0 100-1.874.937.937 0 000 1.874z"
                  ></path>
                </svg>
              </a>
              <!-- 3. Link GitHub diisi -->
              <a
                href="https://github.com/ZandakiDroid"
                target="_blank"
                title="GitHub"
                class="text-gray-500 hover:text-gray-900 transition-colors duration-300"
              >
                <span class="sr-only">GitHub</span>
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Kolom Kanan: Gambar Profil -->
        <div
          class="md:w-1/2 lg:w-[45%] flex justify-center items-center animate-fade-in"
          style="animation-delay: 0.1s"
        >
          <div class="relative group w-72 h-72 lg:w-96 lg:h-96">
            <!-- Efek "blob" di background -->
            <div
              class="absolute inset-0 bg-blue-200 rounded-full blur-2xl opacity-50 transform -rotate-12 group-hover:rotate-0 transition-all duration-500"
            ></div>
            <!-- Gambar utama -->
            <div
              class="relative rounded-full overflow-hidden shadow-xl transition-all duration-500 ease-in-out transform group-hover:shadow-2xl group-hover:scale-105"
            >
              <img
                :src="profileImage"
                alt="Foto Profil Ahmad Rafi Hergiawan"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Untuk efek scroll yang halus JIKA Anda menggunakan href="#" */
html {
  scroll-behavior: smooth;
}

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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Menerapkan animasi ke elemen yang diinginkan */
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}
</style>
