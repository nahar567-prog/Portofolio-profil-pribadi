// data semua catatan, kuncinya sama dengan id di link (detail.html?id=statistika)
var data = {
  perkembangan: {
    judul: "Tahap Perkembangan Kognitif Piaget",
    matkul: "Perkembangan Peserta Didik",
    gambar: "https://placehold.co/800x400/1b2a49/ffffff?text=Perkembangan+Peserta+Didik",
    deskripsi: "Piaget membagi perkembangan berpikir anak menjadi empat tahap berdasarkan usia. Tiap tahap punya cara berpikir yang berbeda.",
    daftar: [
      "Assessment: proses mengumpulkan dan menganalisis informasi untuk mengetahui kemampuan yang dialami siswa.",
      "Evaluation: proses menilai hasil pembelajaran untuk menentukan apakah tujuan pembelajaran tercapai."
    ],
    contoh: "Setelah melihat hasil tes mahasiswa yang memperoleh nilai 80, guru mengetahui bahwa mahasiswa tersebut sudah memahami sebagian besar kosakata bahasa Inggris, tetapi masih kesulitan menggunakannya dalam kalimat. Dengan demikian, guru dapat mengetahui bagian yang perlu ditingkatkan oleh mahasiswa.",
    gambarTugas: "https://placehold.co/900x450/e8ebf2/1b2a49?text=Screenshot+Tugas",
    keteranganTugas: "Hasil tugas mata kuliah Perkembangan Peserta Didik."
  },

  statistika: {
    judul: "Ukuran Pemusatan Data",
    matkul: "Statistika Pendidikan",
    gambar: "https://placehold.co/800x400/2a9d8f/ffffff?text=Statistika+Pendidikan",
    deskripsi: "Ukuran pemusatan dipakai untuk menggambarkan satu nilai yang mewakili sekumpulan data, misalnya nilai ujian satu kelas.",
    daftar: [
      "Populasi: keseluruhan individu atau objek yang diteliti.",
      "Sampel: sebagian dari populasi yang diteliti.",
      "Jenis variabel: variabel bebas, terikat, moderator, intervening, dan lain-lain."
    ],
    contoh: "Populasi dalam penelitian ini adalah seluruh mahasiswa yang berjumlah 140 orang. Sampel merupakan sebagian dari populasi yang dijadikan sebagai sumber data dalam penelitian. Dalam penelitian ini, jumlah sampel yang digunakan adalah sebanyak 20 mahasiswa dari total populasi 140 mahasiswa. Dengan demikian, penelitian ini melibatkan 20 responden yang dipilih untuk memperoleh data sesuai dengan tujuan penelitian.",
    gambarTugas: "https://placehold.co/900x450/e8ebf2/1b2a49?text=Screenshot+Tugas",
    keteranganTugas: "Hasil tugas mata kuliah Statistika Pendidikan."
  },

  elearning: {
    judul: "Model Desain ADDIE",
    matkul: "Desain dan Pengembangan e-Learning",
    gambar: "https://placehold.co/800x400/ef6f5e/ffffff?text=Desain+e-Learning",
    deskripsi: "ADDIE adalah model yang sering dipakai untuk merancang pembelajaran, termasuk e-learning. Namanya singkatan dari lima tahap.",
    daftar: [
      "Analysis: menganalisis kebutuhan dan karakter peserta didik.",
      "Design: merancang tujuan, materi, dan alur belajar.",
      "Development: membuat bahan ajar atau medianya.",
      "Implementation: menerapkan pembelajaran ke peserta didik.",
      "Evaluation: menilai hasil dan memperbaiki kekurangan."
    ],
    contoh: "Untuk kelas online, tahap analysis bisa dimulai dengan menanyakan perangkat dan sinyal internet yang dipakai peserta didik.",
    gambarTugas: "https://placehold.co/900x450/e8ebf2/1b2a49?text=Screenshot+Tugas",
    keteranganTugas: "Hasil tugas mata kuliah Desain dan Pengembangan e-Learning."
  },

  web: {
    judul: "Dasar Pemrograman Web",
    matkul: "Pemrograman Web",
    gambar: "https://placehold.co/800x400/3b4a6b/ffffff?text=Pemrograman+Web",
    deskripsi: "Website statis dibangun dari HTML untuk isi, CSS untuk tampilan, dan JavaScript untuk interaksi. Bootstrap membantu membuat tampilan lebih cepat.",
    daftar: [
      "HTML: menyusun struktur halaman.",
      "CSS: mengatur warna, jarak, dan tata letak.",
      "Bootstrap: komponen siap pakai seperti navbar dan card.",
      "JavaScript: membuat halaman bisa bereaksi, misalnya validasi form."
    ],
    contoh: "Di website ini, JavaScript dipakai di halaman Login untuk mengecek email dan password, dan di halaman Catatan untuk fitur cari.",
    gambarTugas: "https://placehold.co/900x450/e8ebf2/1b2a49?text=Screenshot+Tugas",
    keteranganTugas: "Hasil tugas mata kuliah Pemrograman Web."
  }
};

// ambil id dari alamat halaman
var params = new URLSearchParams(window.location.search);
var id = params.get("id");

// kalau id tidak ada atau salah, pakai catatan pertama
var catatan = data[id];
if (catatan == undefined) {
  catatan = data["perkembangan"];
}

// fungsi bantu: aman kalau elemen tidak ditemukan
function isiTeks(idElemen, teks) {
  var el = document.getElementById(idElemen);
  if (el) {
    el.textContent = teks;
  } else {
    console.warn("Elemen id='" + idElemen + "' tidak ada di HTML");
  }
}

function isiGambar(idElemen, src, alt) {
  var el = document.getElementById(idElemen);
  if (el) {
    el.src = src;
    el.alt = alt;
  } else {
    console.warn("Elemen id='" + idElemen + "' tidak ada di HTML");
  }
}

// tampilkan ke halaman
document.title = "Catatan Belajar | " + catatan.judul;
isiTeks("judul", catatan.judul);
isiTeks("matkul", catatan.matkul);
isiTeks("deskripsi", catatan.deskripsi);
isiTeks("contoh", catatan.contoh);
isiTeks("keteranganTugas", catatan.keteranganTugas);
isiGambar("gambar", catatan.gambar, catatan.judul);
isiGambar("gambarTugas", catatan.gambarTugas, "Hasil tugas " + catatan.matkul);

// isi daftar poin satu per satu
var ulDaftar = document.getElementById("daftar");
if (ulDaftar) {
  ulDaftar.innerHTML = "";
  for (var i = 0; i < catatan.daftar.length; i++) {
    var li = document.createElement("li");
    li.textContent = catatan.daftar[i];
    ulDaftar.appendChild(li);
  }
} else {
  console.warn("Elemen id='daftar' tidak ditemukan di HTML");
}