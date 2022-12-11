document.addEventListener("contextmenu", (e) => {
  // e.preventDefault();
});

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

const modalBtn = document.querySelectorAll("#showModalBtn");
const modalBody = document.querySelector(".modal-body");
const modalFooter = document.querySelector(".modal-footer");

function showModal() {
  new bootstrap.Modal(document.querySelector("#showModal"), {
    keyboard: true,
    backdrop: "static",
    focus: true,
  }).show();
  document
    .querySelector("#showModal")
    .addEventListener("shown.bs.modal", () => {
      modalBody.focus();
    });
}

[...modalBtn].forEach((a) => {
  a.addEventListener("click", function () {
    if (a.dataset.index == "aws1") {
      modalBody.innerHTML = `<img src="assets/img/sertifikat/aws.jpeg" alt="AWS 1">`;
    } else if (a.dataset.index == "aws2") {
      modalBody.innerHTML = `<img src="assets/img/sertifikat/aws-2.jpeg" alt="AWS 2">`;
    } else if (a.dataset.index == "apo-siak") {
      modalBody.innerHTML = `Aplikasi Online RSUD Tengku Rafi'an ini merupakan aplikasi yang diperuntukkan bagi pasien Rumah Sakit Umum Daerah Tengku Rafi'an Kabupaten Siak yang ingin melakukan pendaftaran secara online. Selain dipergunakan untuk pendaftaran online, aplikasi ini juga berisi informasi-informasi mengenai jadwal dokter, jadwal dokter cuti, informasi unggulan lainnya`;
      modalFooter.innerHTML = `<a href="https://play.google.com/store/apps/details?id=terraedition.rsud.siak" target="_blank"
      class="btn btn-primary text-light text-decoration-none"> Buka Play Store </a>`;
    } else if (a.dataset.index == "apo-selasih") {
      modalBody.innerHTML = `Aplikasi Online RSUD SELASIH RIAU ini merupakan aplikasi yang diperuntukkan bagi pasien Rumah Sakit Umum Daerah Selasih Kabupaten Pelalawan Riau yang ingin melakukan pendaftaran secara online. Selain dipergunakan untuk pendaftaran online, aplikasi ini juga berisi informasi-informasi mengenai jadwal dokter, jadwal dokter cuti, informasi unggulan lainnya`;
      modalFooter.innerHTML = `<a href="https://play.google.com/store/apps/details?id=terraedition.rsud.selasih.riau" target="_blank"
        class="btn btn-primary text-light text-decoration-none"> Buka Play Store </a>`;
    } else if (a.dataset.index == "apo-bengkalis") {
      modalBody.innerHTML = `Aplikasi Online RSUD Bengkalis ini merupakan aplikasi yang diperuntukkan bagi pasien Rumah Sakit Umum Darurat Bengkalis yang ingin melakukan pendaftaran secara online. Selain dipergunakan untuk pendaftaran online, aplikasi ini juga berisi informasi-informasi mengenai jadwal dokter, informasi unggulan lainnya`;
      modalFooter.innerHTML = `<a href="https://play.google.com/store/apps/details?id=appinventor.ai_terraedition.APO_RSUD_Bengkalis" target="_blank"
        class="btn btn-primary text-light text-decoration-none"> Buka Play Store </a>`;
    } else if (a.dataset.index == "apo-dumai") {
      modalBody.innerHTML = `Aplikasi Online RSUD Kota Dumai merupakan aplikasi yang diperuntukkan bagi pasien Rumah Sakit Umum Daerah Kota Dumai yang ingin melakukan pendaftaran secara online. Selain dipergunakan untuk pendaftaran online, aplikasi ini juga berisi informasi-informasi mengenai jadwal dokter, jadwal dokter cuti, informasi unggulan lainnya`;
      modalFooter.innerHTML = `<a href="https://play.google.com/store/apps/details?id=terraedition.rsud.dumai" target="_blank"
        class="btn btn-primary text-light text-decoration-none"> Buka Play Store </a>`;
    } else if (a.dataset.index == "remy-song") {
      modalBody.innerHTML = `Aplikasi Ini dapat digunakan untuk memutar video karaoke serta meremote aplikasi Remy Screen sehingga karaoke dapat lebih nyaman.
      `;
      modalFooter.innerHTML = `<a href="https://play.google.com/store/apps/details?id=terraedition.karaoke.controller" target="_blank"
        class="btn btn-primary text-light text-decoration-none"> Buka Play Store </a>`;
    } else if (a.dataset.index == "remy-screen") {
      modalBody.innerHTML = `Aplikasi yang digunakan untuk menampilkan layar video yang dapat di hubungkan dengan Remy Song - Karaoke
      <br/>
      Catatan : untuk menjalankan aplikasi ini di butuhkan 1 perangkat lain yang meng-install Remy Song - Karaoke
      `;
      modalFooter.innerHTML = `<a href="https://play.google.com/store/apps/details?id=terraedition.karaoke.screen" target="_blank"
        class="btn btn-primary text-light text-decoration-none"> Buka Play Store </a>`;
    } else if (a.dataset.index == "obstacle-adventure") {
      modalBody.innerHTML = `ini merupakan permainan platform 2D, yang dimana pemain harus mengambil 3 kunci untuk melewati level yang ada.
      <br/>
      Sebelum mengumpulkan ke 3 kunci, pemain akan melewati rintangan yang menantang.
      Bukan rintangan saja tetapi ada beberapa monster yang akan menggangu pemain
      <br/> 
      <h4 class="my-2">[Cara Bermain]</h4>
      <ul class="text-start">
      <li> Arahkan Tombol Arah ketempat yang diinginkan agar karakter dapat bergerak</li>
      <li> Tekan tombol "A" di layar anda untuk melompat.</li>
      </ul>
      `;
      modalFooter.innerHTML = `<a href="https://play.google.com/store/apps/details?id=terraedition.obstacle.adventure" target="_blank"
        class="btn btn-primary text-light text-decoration-none"> Buka Play Store </a>`;
    } else if (a.dataset.index == "obstacle-snake") {
      modalBody.innerHTML = `<h3>Apa ?</h3>
      Snake Obstacle adalah game multipemain di mana pemenangnya adalah yang bertahan paling lama. Game ini dapat dimainkan 2 - 4 pemain.
      
      <h3>Fitur ?</h3>

      <ul class="text-start">
      <li>Memiliki lebih dari 10 kulit ular</li>
      
      <li>Memiliki lebih dari 10 peta</li>
      </ul>
      <h3>Cara bermain ?</h3>
      <ul class="text-start">
      <li>Kanan dan Kiri => gunakan for untuk mengontrol gerakan</li>
      <li>Tujuan permainan ini adalah untuk bertahan paling lama dan mengalahkan lawan Anda.</li>
      </ul>
      <h3>Untuk melakukan itu Anda harus:</h3>
      <ul class="text-start">
      <li>Jangan menabrak dinding atau rintangan di peta.</li>
      
      <li>Jangan memukul ekor ular lawan atau ekormu.</li>
      
      <li>Buat lawanmu memukul ekor ularmu.</li>
      </ul>
      `;

      modalFooter.innerHTML = `<a href="https://www.airconsole.com/?preview_token=2924781e4a9da0ed8aba9e38932168e6&preview=https://game.airconsole.com/terraedition.obstacle.snake.cdn.airconsole.com/2021-11-09-08-59-17/" target="_blank"
      class="btn btn-primary text-light text-decoration-none"> Buka Air Console </a>`;
    } else if (a.dataset.index == "war-plane") {
      modalBody.innerHTML = `<h3>Apa ?</h3>
      War Planes adalah game arena pvp multipemain. Game ini dapat dimainkan 2 - 4 pemain.
      
      <h3>Fitur ?</h3>
      <ul class="text-start">
      <li>Memiliki lebih dari 10 pesawat yang dapat digunakan</li>
      
      <li>Memiliki lebih dari 5 jenis peluru</li>
    
      <li>Memiliki lebih dari 5 peta</li>
      </ul>  
      <h3>Cara bermain ?</h3>
      <ul class="text-start">
      <li>Swipe => Anda menggunakan fungsi ini untuk memindahkan pesawat Anda.</li>
      
      <li>Shot => tembak lawan</liShot>
      
      <li>Boost => tahan untuk menambah kecepatan pesawat anda dalam waktu tertentu.</li>
      </ul>
      `;
      modalFooter.innerHTML = `<a href="https://www.airconsole.com/?preview_token=c9b7ae1a1d6cb678cbbc5aaae61f7890&preview=https://game.airconsole.com/terraedition.warplanes.cdn.airconsole.com/2021-10-06-11-52-31/" target="_blank"
        class="btn btn-primary text-light text-decoration-none"> Buka Air Console </a>`;
    } else if (a.dataset.index == "sak") {
      modalBody.innerHTML = `<div>Aplikasi ini dapat digunakan sebagai alat inputan data Rumah Sakit untuk keperluan Akreditasi :
      </div>
      <ol class="text-start">
          <li>
              <div>Halaman Pustaka</div>
              <div>Halaman Pustaka adalah halaman yang digunakan untuk menampilkan data media (file pdf,excel,gambar dan lainnya) yang dibagikan setiap akun administrator.</div>
          </li>
          <li>
              <div>Halaman Administrator</div>
              <div>Halaman Administrator adalah halaman yang digunakan pihak rumah sakit untuk memasukkan
                  data.</div>
              <div>Halaman Administrator memiliki menu :</div>
              <ul>
                  <li>Halaman Managemen Data Pengguna</li>
                  <li>Halaman Managemen Data Dokter</li>
                  <li>Halaman Managemen Data Kamar</li>
                  <li>Halaman Managemen Data Poliklinik</li>
                  <li>Halaman Managemen SKP</li>
                  <li>Halaman Managemen PMKP</li>
                  <li>Halaman Managemen PPI</li>
                  <li>Halaman Pengaturan REST API yang terhubung ke Sistem RS maupun BPJS</li>
                  <li>Halaman Sistem Informasi</li>
                  <li>dan lainnya</li>
              </ul>
          </li>
      </ol>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="assets/img/project/sak.jpeg" class="d-block w-100 h-50" alt="sak-frontend">
        </div>
        <div class="carousel-item">
          <img src="assets/img/project/sak2.jpeg" class="d-block w-100 h-50" alt="sak-backend">
        </div>
        <div class="carousel-item">
          <img src="assets/img/project/sak3.jpeg" class="d-block w-100 h-50" alt="sak-backend">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
     `;
      modalFooter.innerHTML = `<a href="http://siak.pilar-id.io/" target="_blank"
      class="btn btn-primary text-light text-decoration-none"> Kunjungi Link </a>
      <a href="assets/img/project/SAK-Version-2.pdf" target="_blank" download
      class="btn btn-primary text-light text-decoration-none"> Dokumentasi PDF </a>`;
    } else if (a.dataset.index == "profile-dumai") {
      modalBody.innerHTML = `<div>Aplikasi ini dapat digunakan untuk sebagai media informasi untuk menampilkan data rumah sakit :
      </div>
      <ol class="text-start">
          <li>
              <div>Halaman Pengunjung</div>
              <div>Halaman Pengujung adalah halaman untuk pengunjung yang digunakan untuk
                  memberikan informasi seputar rumah sakit.</div>
              <div>Halaman pengunjung memiliki menu :</div>
              <ul>
                  <li>Halaman Utama</li>
                  <li>Halaman Dokter</li>
                  <li>Halaman Jadwal Dokter </li>
                  <li>Halaman Poliklinik</li>
                  <li>Halaman data Kamar, ketersediaan kamar serta harga sewa kamar </li>
                  <li>Halaman Kontak</li>
                  <li>Halaman Agenda</li>
                  <li>Halaman Artikel</li>
                  <li>dan lainnya</li>
              </ul>
          </li>
          <li>
              <div>Halaman Administrator</div>
              <div>Halaman Administrator adalah halaman yang digunakan pihak rumah sakit untuk memasukkan
                  data seputar rumah sakit yang dapat dilihat di halaman pengunjung.</div>
              <div>Halaman Administrator memiliki menu :</div>
              <ul>
                  <li>Halaman Dashboard</li>
                  <li>Halaman Managemen Data Pengguna</li>
                  <li>Halaman Managemen Data Dokter</li>
                  <li>Halaman Managemen Data Fasilitas dan Kamar</li>
                  <li>Halaman Managemen Data Artikel</li>
                  <li>Halaman Managemen Agenda</li>
                  <li>Halaman Managemen Modul</li>
                  <li>Halaman Managemen Pelayanan Pengaduan</li>
                  <li>Halaman Dokumentasi Aplikasi</li>
                  <li>dan lainnya</li>
              </ul>
          </li>
      </ol>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="assets/img/project/dumai.jpeg" class="d-block w-100 h-50" alt="dumai-frontend">
        </div>
        <div class="carousel-item">
          <img src="assets/img/project/dumai2.jpeg" class="d-block w-100 h-50" alt="dumai-backend">
        </div>
        <div class="carousel-item">
          <img src="assets/img/project/dumai3.jpeg" class="d-block w-100 h-50" alt="dumai-backend">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`;
      modalFooter.innerHTML = `<a href="https://rsud.dumaikota.go.id/" target="_blank"
        class="btn btn-primary text-light text-decoration-none"> Kunjungi Link </a>`;
    } else if (a.dataset.index == "ikjr") {
      modalBody.innerHTML = `<div>Aplikasi ini dapat digunakan untuk mendata data anggota serta mencetak kartu anggota:
          </div>
          <ol class="text-start">
              <li>
                  <div>Halaman Administrator</div>
                  <div>Halaman Administrator adalah halaman yang digunakan untuk memasukkan
                      data.</div>
                  <div>Halaman Administrator memiliki menu :</div>
                  <ul>
                      <li>Halaman Managemen Data Pengguna</li>
                      <li>Halaman Managemen Data Anggota</li>
                      <li>Halaman Managemen Data Cetak Kartu Anggota</li>
                      <li>Halaman Custom Template Dashboard</li>
                      <li>Halaman Sistem Informasi</li>
                      <li>dan lainnya</li>
                  </ul>
              </li>
          </ol>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="assets/img/project/ikjr.jpeg" class="d-block w-100 h-50" alt="ikjr-login">
            </div>
            <div class="carousel-item">
              <img src="assets/img/project/ikjr2.jpeg" class="d-block w-100 h-50" alt="ikjr-report">
            </div>
            <div class="carousel-item">
              <img src="assets/img/project/ikjr3.jpeg" class="d-block w-100 h-50" alt="ikjr-member">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
         `;
      modalFooter.innerHTML = `<a href="http://ikjr.pilar-id.io:81/" target="_blank"
          class="btn btn-primary text-light text-decoration-none"> Kunjungi Link </a>`;
    } else if (a.dataset.index == "freelance-job") {
      modalBody.innerHTML = `
          <ol class="text-start">
            <li>Membangun Website dari sisi Frontend dan Backend menggunakan Bahasa Pemograman seperti PHP, Javascript.</li>
            <li>Membuat Aplikasi Android menggunakan Bahasa Pemograman Kotlin</li>
            <li>Membuat REST API sebagai penghubung antar aplikasi</li>
            <li>Membuat Design dalam bentuk Gambar dengan menggunakan Aplikasi Adobe Illustrator serta Video Singkat dengan menggunakan Aplikasi Cyberlink Power Director</li>
            <li>Menyiapkan Server (Hosting, VPS) serta penginstallan Sertifikat SSL pada domain</li>
          </ol>
         `;
      modalFooter.innerHTML = "";
    } else if (a.dataset.index == "cv-persamnas-job") {
      modalBody.innerHTML = `
          <ol class="text-start">
            <li>Membuat Website menggunakan CMS Joomla dan Wordpress.</li>
            <li>Membuat Aplikasi Webview untuk Android</li>
            <li>Membantu Pengembangan Micro Controller (Arduino).</li>
            <li>Membantu Instalasi Jaringan seperti pemasangan Access Point, Penarikkan Kabel Jaringan (Fiber Optik / FO dan Unshielded Twisted Pair / UTP).</li>
            <li>Menyetting Perangkat Mikrotik.</li>
            <li>Menyetting Perangkat Jaringan berbasis Linux seperti Access Point.</li>
            <li>Memonitoring Jaringan Menggunakan Dude</li>
          </ol>
         `;
      modalFooter.innerHTML = "";
    } else if (a.dataset.index == "server") {
      modalBody.innerHTML = `<div>Aplikasi ini dapat digunakan untuk mendata transaksi penjualan atau pembelian:
          </div>
          <ol class="text-start">
              <li>
                  <div>Halaman Administrator</div>
                  <div>Halaman Administrator adalah halaman yang digunakan untuk memasukkan
                      data.</div>
                  <div>Halaman Administrator memiliki menu :</div>
                  <ul>
                      <li>Halaman Managemen Data Produk</li>
                      <li>Halaman Managemen Data Pelanggan</li>
                      <li>Halaman Managemen Data Pemasok</li>
                      <li>Halaman Managemen Data Metode Pembayaran</li>
                      <li>Halaman Managemen Data Transaksi Pembelian</li>
                      <li>Halaman Managemen Data Konfigurasi Aplikasi</li>
                      <li>Halaman Cetak Invoice</li>
                      <li>Halaman Custom Template Dashboard</li>
                      <li>Halaman Sistem Informasi</li>
                      <li>Halaman API OTP WA untuk Notifikasi dari API ke Admin</li>
                      <li>dan lainnya</li>
                  </ul>
              </li>
          </ol>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="assets/img/project/server.jpeg" class="d-block w-100 h-50" alt="server-report-sales">
            </div>
            <div class="carousel-item">
              <img src="assets/img/project/server2.jpeg" class="d-block w-100 h-50" alt="server-product">
            </div>
            <div class="carousel-item">
              <img src="assets/img/project/server3.jpeg" class="d-block w-100 h-50" alt="server-theme">
            </div>
            <div class="carousel-item">
              <img src="assets/img/project/server4.jpeg" class="d-block w-100 h-50" alt="server-graphic-sales">
            </div>
            <div class="carousel-item">
              <img src="assets/img/project/server5.jpeg" class="d-block w-100 h-50" alt="server-manajemen-user">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
         `;
    } else if (a.dataset.index == "cabang") {
      modalBody.innerHTML = `<div>Aplikasi ini dapat digunakan seperti toko online yang data utama berasal dari Aplikasi Pembelian dan Penjualan (Pusat)
          </div>
          <ol class="text-start">
            <li>
                  <div>Halaman Pengunjung</div>
                  <div>Halaman Pengunjung adalah halaman yang digunakan pengunjung website.</div>
                  <div>Halaman Pengunjung memiliki menu :</div>
                  <ul>
                      <li>Halaman Produk</li>
                      <li>Halaman Keranjang</li>
                      <li>Halaman Profile Pengunjung</li>
                      <li>Halaman Transaksi</li>
                      <li>Halaman Customer Service</li>
                      <li>dan lainnya</li>
                  </ul>
              </li>
              <li>
                  <div>Halaman Administrator</div>
                  <div>Halaman Administrator adalah halaman yang digunakan untuk memasukkan
                      data, Halaman ini harus terdata di aplikasi Pusat terlebih dahulu dan diberi akses.</div>
                  <div>Halaman Administrator memiliki menu :</div>
                  <ul>
                      <li>Halaman Managemen Data Produk</li>
                      <li>Halaman Detail Pelanggan dari Rest API</li>
                      <li>Halaman Detail Metode Pembayaran dari Rest API</li>
                      <li>Halaman Konfigurasi Rest API</li>
                      <li>Halaman Managemen Data Konfigurasi Aplikasi</li>
                      <li>Halaman Custom Template Dashboard</li>
                      <li>Halaman Sistem Informasi</li>
                      <li>dan lainnya</li>
                  </ul>
              </li>
          </ol>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="assets/img/project/cabang.jpeg" class="d-block w-100 h-50" alt="cabang-cart">
            </div>
            <div class="carousel-item">
              <img src="assets/img/project/cabang2.jpeg" class="d-block w-100 h-50" alt="cabang-detail-trans">
            </div>
            <div class="carousel-item">
              <img src="assets/img/project/cabang3.jpeg" class="d-block w-100 h-50" alt="cabang-product">
            </div>
            <div class="carousel-item">
              <img src="assets/img/project/cabang4.jpeg" class="d-block w-100 h-50" alt="cabang-trans">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
         `;
    }
    modalFooter.innerHTML += `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>`;
    showModal();
  });
});
