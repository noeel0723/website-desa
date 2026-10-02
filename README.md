# Kamasi I — Tomohon

Website statis Kelurahan Kamasi Satu dengan HTML5, CSS3, dan Vanilla JavaScript. Tidak memakai framework, library frontend, atau proses build. Beranda memuat pengantar profil, UMKM, struktur organisasi, dan kontak; halaman `profile.html` memuat profil lengkap, data penduduk, dan sejarah.

## Menjalankan

Buka `index.html` langsung di browser. Skrip memakai `defer` dan dimuat berurutan sehingga tab UMKM serta navigasi tetap berfungsi melalui `file://`. Untuk pratinjau melalui server lokal, jika Python tersedia di PATH, jalankan dari folder `kamasi1-website`:

```powershell
python -m http.server 8000
```

Lalu buka `http://localhost:8000/` dan `http://localhost:8000/profile.html`.

## Struktur

- `index.html` — beranda dengan pengantar profil, pilihan UMKM, struktur, kontak, dan peta.
- `profile.html` — profil lengkap, data penduduk, catatan sejarah, dan daftar lurah yang terdokumentasi.
- `css/profile-page.css` — layout khusus halaman profil; CSS lain berisi token, komponen, dan breakpoint bersama.
- `js/` — navigasi mobile, status navbar, tab UMKM, animasi halus, dan fallback gambar.
- `assets/images/profile/kamasi1.jpg` — foto profil dalam format JPEG.
- `assets/images/hero/kamasi-hero .jpg` — foto hero; spasi sebelum `.jpg` dikodekan sebagai `%20` pada URL HTML.
- `assets/images/umkm/pabrik-tahu.jpg` — salinan JPEG yang kompatibel dengan browser dari foto `umkm.jpg` yang sebenarnya berformat HEIC meskipun berekstensi `.jpg`; file asal tidak diubah.
- `assets/images/umkm/kacang-hai.jpg` — salinan JPEG kompatibel dari `kacanghai.jpg` yang sebenarnya berformat HEIC; file asal tetap utuh.
- `assets/images/umkm/pabrikroti.jpeg` — foto produksi roti yang ditampilkan pada tab UMKM.

## Sebelum publikasi

- Angka penduduk pada beranda dan halaman profil **masih simulasi**: 3.240 penduduk, 920 kepala keluarga, 1.598 laki-laki, 1.642 perempuan, serta kategori usia Balita (0–6): 320, Anak (7–17): 550, Dewasa (18–64): 2.022, dan Lansia (65+): 348 jiwa. Ganti angka, persentase, `value`, `max`, serta `aria-label` pada `<progress>` secara bersamaan setelah data resmi tersedia.
- Angka UMKM, fasilitas, dan luas wilayah di beranda masih contoh. Jumlah **3 lingkungan** diberikan untuk proyek ini, tetapi nama kepala lingkungan belum tersedia. Kode pos `95441` dan nama lurah `Yanny Tumewu, SE` juga berasal dari data yang diberikan; nama lurah tercantum pada [situs Pemerintah Kota Tomohon](https://tomohon.go.id/kecamatan-tomohon-tengah/) saat halaman ini dibuat. Periksa ulang sebelum publikasi karena jabatan dapat berubah.
- Catatan sejarah pada `profile.html` merujuk [RPJMD Kota Tomohon 2021–2026](https://tomohon.go.id/wp-content/uploads/2023/05/RPJMD-KOTA-TOMOHON-TAHUN-2021-2026.pdf) untuk catatan kawasan Kamasi tahun 1855, serta [berita Pemerintah Kota Tomohon](https://tomohon.go.id/ibadah-syukur-hut-kelurahan-kamasi-satu-ke-10/) untuk peringatan HUT ke-10 tahun 2018. Catatan kawasan Kamasi bukan otomatis tanggal pembentukan Kelurahan Kamasi Satu. Lengkapi riwayat dengan arsip kelurahan dan narasumber warga.
- Daftar lurah menampilkan nama yang dapat ditemukan dalam sumber BPS dan Pemerintah Kota Tomohon. Tahun “tercatat” bukan rentang masa jabatan; lengkapi tanggal mulai–akhir jabatan dan lurah lain menggunakan arsip/SK kelurahan sebelum menganggap daftar ini lengkap. Inisial pada kartu hanya placeholder visual, bukan foto resmi.
- Tab UMKM sudah menampilkan foto Pabrik Tahu, Kacang Hai, dan Pabrik Roti. Detail pengelola, alamat, serta ragam produk masih perlu diverifikasi. Struktur organisasi masih mengandung konten contoh. Kartu Lingkungan I–III memakai placeholder untuk nama kepala dan wakil; pastikan keberadaan jabatan wakil dari struktur resmi sebelum mengisinya. Perbarui nama, jabatan, deskripsi, foto, dan izin publikasi sebelum ditampilkan sebagai informasi resmi.
- Sematan Google Maps mencari kawasan Kamasi Satu, bukan menandai titik kantor kelurahan. Ganti URL sematan setelah koordinat kantor dipastikan.
