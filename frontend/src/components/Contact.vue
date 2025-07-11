<template>
  <section id="kontak" class="bg-gray-50 py-20 sm:py-32">
    <div class="container mx-auto px-6">
      <!-- Judul Section dengan Animasi -->
      <div class="max-w-3xl mx-auto text-center animate-fade-in-up" style="animation-delay: 0.1s">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900">Hubungi Saya</h2>
        <p class="mt-4 text-lg text-gray-600">
          Punya ide proyek atau ingin berkolaborasi? Saya akan senang mendengar dari Anda. Isi
          formulir di bawah atau hubungi saya melalui info kontak yang tersedia.
        </p>
      </div>

      <!-- Wrapper Konten (Info & Form) -->
      <div class="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        <!-- Kolom Kiri: Info Kontak & Sosial Media dengan Animasi -->
        <div class="space-y-8 animate-fade-in-up" style="animation-delay: 0.3s">
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Info Kontak</h3>
            <ul class="space-y-4 text-gray-700">
              <!-- Email -->
              <li class="flex items-start gap-4">
                <div class="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <span class="font-semibold block">Email</span>
                  <a
                    href="mailto:ahmadrafihergiawan@gmail.com"
                    class="hover:text-blue-600 transition-colors"
                    >ahmadrafihergiawan@gmail.com</a
                  >
                </div>
              </li>
              <!-- Lokasi -->
              <li class="flex items-start gap-4">
                <div class="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span class="font-semibold block">Lokasi</span>
                  <p>Klaten, Indonesia</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Terhubung di Media Sosial</h3>
            <div class="flex space-x-4">
              <!-- Instagram -->
              <a
                href="https://www.instagram.com/rafixme_/"
                target="_blank"
                title="Instagram"
                class="text-gray-500 hover:text-pink-600 transition-colors duration-300"
              >
                <span class="sr-only">Instagram</span>
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.116 0-3.483.011-4.71.069-2.734.124-3.951 1.348-4.068 4.068-.058 1.226-.069 1.593-.069 4.71s.011 3.483.069 4.71c.117 2.72 1.333 3.944 4.068 4.068 1.227.058 1.594.069 4.71.069s3.483-.011 4.71-.069c2.734-.124 3.951-1.348 4.068-4.068.058-1.227.069-1.594.069-4.71s-.011-3.483-.069-4.71c-.117-2.72-1.334-3.944-4.068-4.068-1.227-.058-1.594-.069-4.71-.069zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM12 14.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm5.187-8.127a.937.937 0 100-1.874.937.937 0 000 1.874z"
                  ></path>
                </svg>
              </a>
              <!-- GitHub -->
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

        <!-- Kolom Kanan: Form Kontak dengan Animasi -->
        <div
          class="bg-white p-8 rounded-lg shadow-lg animate-fade-in-up"
          style="animation-delay: 0.5s"
        >
          <form @submit.prevent="handleSubmit">
            <div class="space-y-6">
              <!-- Form inputs -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1"
                  >Nama Lengkap</label
                >
                <input
                  v-model="formData.name"
                  type="text"
                  name="name"
                  id="name"
                  required
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1"
                  >Alamat Email</label
                >
                <input
                  v-model="formData.email"
                  type="email"
                  name="email"
                  id="email"
                  required
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1"
                  >Subjek</label
                >
                <input
                  v-model="formData.subject"
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1"
                  >Pesan Anda</label
                >
                <textarea
                  v-model="formData.message"
                  name="message"
                  id="message"
                  rows="5"
                  required
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-105"
                >
                  Kirim Pesan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Menampung data dari form
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

// Fungsi yang dijalankan saat form disubmit
const handleSubmit = () => {
  // PENTING: Untuk membuat form ini benar-benar berfungsi, Anda perlu
  // menghubungkannya ke layanan backend atau layanan pihak ketiga seperti
  // Formspree, Netlify Forms, atau Getform.io.

  // Untuk sekarang, kita hanya akan menampilkan datanya di console.
  console.log('Form Data Submitted:', formData.value)
  alert(`Terima kasih, ${formData.value.name}! Pesan Anda telah diterima (simulasi).`)

  // Kosongkan form setelah submit
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
}
</script>

<style scoped>
/* Definisikan keyframes untuk animasi */
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

/* Buat kelas helper untuk menerapkan animasi */
.animate-fade-in-up {
  opacity: 0; /* Mulai dalam keadaan transparan */
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>
