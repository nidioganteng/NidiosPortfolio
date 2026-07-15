export const id = {
  nav: {
    home: "Beranda",
    about: "Tentang",
    projects: "Proyek",
    contact: "Kontak",
  },
  hero: {
    greeting: "Halo, Saya Nidio",
    taglineDesktop: "Membangun Dunia Digital\nSatu Piksel dalam Satu Waktu",
    taglineMobile: "Suka Menciptakan\nPengalaman Digital",
    roles: ["Pengembang Web", "Pengembang Frontend", "Desainer UI/UX"],
  },
  about: {
    title: "Tentang Saya",
    bio: {
      name: "Halo, Saya Nidio Tilman",
      description:
        "Saya adalah web developer yang bersemangat dalam menciptakan pengalaman digital yang responsif, aksesibel, dan ramah pengguna. Dengan pemahaman yang kuat terhadap tools frontend seperti React dan Tailwind CSS, dikombinasikan dengan keahlian UI/UX design menggunakan Figma, saya mengubah ide menjadi antarmuka yang fungsional dan menarik secara visual.",
    },
    codeCraft: "KARYA KODE",
    timezone: {
      title: "Zona Waktu",
      description: "Saya berbasis di Jupiter, dan terbuka untuk bekerja secara remote di seluruh dunia",
    },
    cta: "Ingin memulai sebuah proyek bersama?",
    tools: {
      title: "Tools & Teknologi",
      description:
        "Saya membangun aplikasi web modern dengan perpaduan desain dan kode menggunakan HTML, CSS, JavaScript, React, Python, dan Figma.",
    },
    copyEmail: {
      copy: "Salin Alamat Email",
      copied: "Email Tersalin",
    },
  },
  projects: {
    title: "Proyek Saya",
    readMore: "Selengkapnya",
    viewProject: "Lihat Proyek",
    items: [
      {
        id: 1,
        title: "Platform E-commerce",
        description:
          "Platform e-commerce yang menghubungkan retailer kecil dengan supplier, memudahkan pembelian barang kebutuhan pokok dengan harga terjangkau.",
        subDescription: [
          "BetaZeta adalah platform e-commerce yang mudah digunakan, dibangun dengan HTML, JavaScript, dan CSS, dirancang untuk menghubungkan retailer kecil dengan supplier barang kebutuhan pokok. Platform ini dilengkapi UI/UX yang intuitif, tampilan responsif, dan fungsi \"Beli Sekarang\" yang langsung menghubungkan pembeli ke penjual melalui WhatsApp, lengkap dengan detail lokasi penjual dan daftar produk yang komprehensif.",
        ],
      },
      {
        id: 2,
        title: "Platform Akses Data Medis Terdesentralisasi",
        description:
          "Platform berbasis blockchain yang memberikan pasien kendali penuh atas rekam medis mereka untuk berbagi data secara aman dan lancar antar penyedia layanan kesehatan.",
        subDescription: [
          "Medical Chain ID adalah platform berbasis blockchain yang dikembangkan dengan Motoko, React, Tailwind CSS, dan Vite, memungkinkan pasien untuk secara aman memiliki dan mengelola rekam medis mereka. Platform ini menawarkan enkripsi canggih, autentikasi tanpa kata sandi, dan kontrol akses yang terperinci, memungkinkan berbagi data kesehatan secara lancar dan aman antar institusi kesehatan yang berbeda.",
        ],
      },
      {
        id: 3,
        title: "Platform Agensi Pengembangan Web",
        description:
          "Website agensi pengembangan web tempat klien dapat menjelajahi layanan, menghubungi tim, dan memesan proyek dengan mudah.",
        subDescription: [
          "Codeblock adalah platform agensi pengembangan web yang dibangun dengan React, Tailwind CSS, dan JavaScript. Platform ini menampilkan layanan agensi dalam antarmuka yang bersih dan profesional, memungkinkan calon klien untuk mempelajari layanan yang tersedia, menghubungi tim, dan mengajukan permintaan pemesanan untuk memulai proyek web mereka.",
        ],
      },
      {
        id: 4,
        title: "Platform Pembelajaran Adaptif untuk Anak dengan Autisme",
        description:
          "Platform pembelajaran interaktif yang dirancang untuk anak-anak dengan autisme, menggabungkan video pelajaran dan kuis dalam antarmuka yang jelas dan aksesibel.",
        subDescription: [
          "NeuraBloom adalah aplikasi web yang dibangun dengan Laravel, Tailwind CSS, dan MySQL, dirancang untuk mendukung anak-anak dengan autisme melalui pembelajaran terstruktur. Setiap modul menggabungkan video pelajaran dengan kuis tindak lanjut, memperkuat pemahaman dalam alur yang konsisten. UI dirancang dengan cermat agar visual jelas dan ramah autisme, memastikan konten mudah dinavigasi dan dinikmati.",
        ],
      },
      {
        id: 5,
        title: "Platform Pemesanan & Manajemen Perjalanan Terpadu",
        description:
          "Platform pemesanan perjalanan full-stack di mana pengguna dapat menjelajahi trip, memesan dengan pembayaran Stripe, dan melacak riwayat perjalanan — semua dikelola melalui dashboard admin yang komprehensif.",
        subDescription: [
          "Mijn Amor adalah platform perjalanan yang sepenuhnya responsif, dibangun dengan Laravel, Tailwind CSS, dan MySQL. Pengguna harus mendaftar untuk mengakses platform, di mana mereka dapat menjelajahi produk perjalanan, memesan trip dengan mengisi detail penumpang dan tanggal perjalanan, serta menyelesaikan pembayaran melalui Stripe. Pemesanan yang dikonfirmasi muncul di halaman perjalanan pribadi pengguna, menampilkan detail keberangkatan dan tautan grup WhatsApp untuk koordinasi trip. Pengguna juga dapat melihat perjalanan masa lalu melalui halaman rekam jejak dan menghubungi admin secara langsung satu per satu. Di sisi admin, dashboard menyediakan gambaran lengkap tentang pemesanan, pendapatan, dan aktivitas pengguna. Admin dapat mengelola produk perjalanan dan rekam jejak dengan kemampuan CRUD penuh — termasuk judul, deskripsi, foto, harga, dan tautan WhatsApp — serta memantau semua pengguna terdaftar dan melacak status pembayaran di semua transaksi.",
        ],
      },
      {
        id: 6,
        title: "Platform Deteksi Kanker Kulit Berbasis AI",
        description:
          "Aplikasi web bertenaga AI dua tahap yang mendeteksi risiko kanker kulit melalui analisis gejala dan klasifikasi gambar, dengan rekomendasi kesehatan yang dapat ditindaklanjuti.",
        subDescription: [
          "YourSkin adalah platform deteksi kanker kulit yang dibangun dengan React, Tailwind CSS, Python, dan MySQL. Platform ini menggunakan pendekatan deteksi dua tahap: Tahap 1 menerapkan model Random Forest untuk menganalisis 12 gejala klinis dan menilai tingkat risiko. Jika risiko terdeteksi, Tahap 2 mengaktifkan model deep learning EfficientNet-B3 di mana pengguna mengunggah gambar kulit untuk klasifikasi jenis kanker yang tepat. Berdasarkan hasilnya, platform memberikan rekomendasi yang disesuaikan — baik menyarankan kunjungan dokter maupun memberikan tips perawatan pencegahan.",
        ],
      },
    ],
  },
  contact: {
    title: "Hubungi Saya",
    description:
      "Baik Anda ingin membangun website baru, meningkatkan platform yang ada, atau sekadar menyapa, jangan ragu untuk menghubungi saya.",
    name: { label: "Nama Lengkap", placeholder: "Nama Anda" },
    email: { label: "Email", placeholder: "Alamat email Anda" },
    message: { label: "Pesan", placeholder: "Tulis pesan Anda..." },
    send: "Kirim",
    sending: "Mengirim...",
    success: "Pesan Anda telah terkirim!",
    error: "Terjadi kesalahan!",
  },
  footer: {
    terms: "Syarat & Ketentuan",
    privacy: "Kebijakan Privasi",
    copyright: "© 2025 Nidio Tilman. Semua hak dilindungi.",
  },
};
