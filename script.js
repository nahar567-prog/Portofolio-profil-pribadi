// validasi form login

// ambil form dan tempat pesan dari HTML
var form = document.getElementById("formLogin");
var pesan = document.getElementById("pesan");

// jalankan saat tombol login ditekan
form.addEventListener("submit", function (e) {
  // cegah form diproses (halaman tidak reload)
  e.preventDefault();

  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;
  var error = "";

  // cek email
  if (email == "") {
    error = error + "Email tidak boleh kosong<br>";
  } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    error = error + "Format email tidak valid<br>";
  }

  // cek password
  if (password == "") {
    error = error + "Password tidak boleh kosong<br>";
  } else if (password.length < 8) {
    error = error + "Password minimal 8 karakter<br>";
  }

  // kalau ada error tampilkan alert merah, kalau tidak alert hijau
  if (error != "") {
    pesan.innerHTML = '<div class="alert alert-danger">' + error + "</div>";
  } else {
    pesan.innerHTML = '<div class="alert alert-success">Validasi berhasil, data sudah sesuai ketentuan.</div>';
  }
});