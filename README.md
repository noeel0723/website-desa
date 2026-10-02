# Kamasi I — Tomohon

Website statis Kelurahan Kamasi Satu dengan HTML5, CSS3, dan Vanilla JavaScript. Tidak memakai framework, library frontend, atau proses build. Beranda memuat pengantar profil, UMKM, struktur organisasi, dan kontak; halaman `profile.html` memuat profil lengkap, data penduduk, dan sejarah.

## Menjalankan

Buka `index.html` melalui server lokal statis agar modul JavaScript dapat dimuat dengan benar. Jika Python tersedia di PATH, jalankan dari folder `kamasi1-website`:

```powershell
python -m http.server 8000
```

Lalu buka `http://localhost:8000/` dan `http://localhost:8000/profile.html`.

## Struktur

- `index.html` — beranda dengan pengantar profil, UMKM, struktur, kontak, dan peta.
- `profile.html` — profil lengkap, data penduduk, serta catatan sejarah.
- `css/profile-page.css` — layout khusus halaman profil; CSS lain berisi token, komponen, dan breakpoint bersama.
- `js/` — navigasi mobile, status navbar, animasi halus, dan fallback gambar.
- `assets/images/profile/kamasi1.jpg` — foto profil dalam format JPEG.
- `assets/images/hero/kamasi-hero .jpg` — foto hero; spasi sebelum `.jpg` dikodekan sebagai `%20` pada URL HTML.

## Sebelum publikasi

- Angka penduduk pada beranda dan halaman profil **masih simulasi**: 3.240 penduduk, 920 kepala keluarga, 1.598 laki-laki, 1.642 perempuan, serta kategori usia Balita (0–6): 320, Anak (7–17): 550, Dewasa (18–64): 2.022, dan Lansia (65+): 348 jiwa. Ganti angka, persentase, `value`, `max`, serta `aria-label` pada `<progress>` secara bersamaan setelah data resmi tersedia.
- Angka UMKM, fasilitas, luas wilayah, dan jumlah lingkungan di beranda masih contoh. Kode pos `95441` dan nama lurah `Yanny Tumewu, SE` berasal dari data yang diberikan untuk proyek; nama lurah juga tercantum pada [situs Pemerintah Kota Tomohon](https://tomohon.go.id/kecamatan-tomohon-tengah/) saat halaman ini dibuat. Periksa ulang sebelum publikasi karena jabatan dapat berubah.
- Catatan sejarah pada `profile.html` merujuk [RPJMD Kota Tomohon 2021–2026](https://tomohon.go.id/wp-content/uploads/2023/05/RPJMD-KOTA-TOMOHON-TAHUN-2021-2026.pdf) untuk catatan kawasan Kamasi tahun 1855, serta [berita Pemerintah Kota Tomohon](https://tomohon.go.id/ibadah-syukur-hut-kelurahan-kamasi-satu-ke-10/) untuk peringatan HUT ke-10 tahun 2018. Catatan kawasan Kamasi bukan otomatis tanggal pembentukan Kelurahan Kamasi Satu. Lengkapi riwayat dengan arsip kelurahan dan narasumber warga.
- UMKM dan struktur organisasi masih mengandung konten contoh. Perbarui nama, jabatan, deskripsi, foto, dan izin publikasi sebelum ditampilkan sebagai informasi resmi.
- Sematan Google Maps mencari kawasan Kamasi Satu, bukan menandai titik kantor kelurahan. Ganti URL sematan setelah koordinat kantor dipastikan.
