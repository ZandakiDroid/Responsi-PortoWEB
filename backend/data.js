const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
  { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 3 Klaten', major: 'MIPA (Matematika dan Ilmu Pengetahuan Alam)' }
];

const skills = [
  { name: 'HTML5', level: 'Mahir' },
  { name: 'CSS3 & Tailwind', level: 'Mahir' },
  { name: 'JavaScript', level: 'Menengah' },
  { name: 'Vue.js', level: 'Menengah' },
  { name: 'UI/UX Design', level: 'Menengah' },
  { name: 'Figma', level: 'Menengah' },
  { name: 'Penetration Testing', level: 'Dasar' },
  { name: 'Digital Drawing', level: 'Dasar' }
];

const projects = [
  {
    title: 'Website JWR Comp',
    description: 'Sebuah website e-commerce yang dirancang untuk JWR Comp, toko yang menjual komponen dan aksesoris komputer. Dilengkapi dengan katalog produk, detail barang, dan desain yang responsif.',
    image: '/image/jwrcomp.png', // Updated path to be relative to the public directory
    tech: ['Vue.js', 'Tailwind CSS', 'Node.js', 'Express'],
    link: '#'
  },
  {
    title: 'Portofolio Pribadi',
    description: 'Proyek website portofolio ini sendiri, dirancang dan dikembangkan untuk menampilkan keahlian, riwayat pendidikan, dan proyek-proyek saya. Dibangun dengan teknologi web modern untuk performa yang cepat.',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    tech: ['Vue 3', 'Vite', 'Tailwind CSS', 'Figma'],
    link: '#'
  },
  {
    title: 'Alat Keamanan Jaringan',
    description: 'Sebuah tool command-line sederhana yang dibuat dengan Python untuk melakukan pemindaian port dasar pada jaringan lokal. Proyek ini bertujuan untuk melatih fundamental keamanan siber dan networking.',
    image: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    tech: ['Python', 'Scapy', 'CLI'],
    link: '#'
  }
];

module.exports = { educationHistory, skills, projects };