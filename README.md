# Kamasi 1 — Tomohon

Website statis Kamasi 1 dengan section Home, Profil, Data Penduduk, UMKM, Sejarah, Struktur Organisasi, dan Kontak. Dibangun hanya dengan HTML5, CSS3, dan Vanilla JavaScript. Tidak ada proses build atau dependensi frontend.

## Menjalankan

Buka `index.html` melalui server lokal statis agar modul JavaScript dapat dimuat dengan benar. Jika Python tersedia di PATH, jalankan dari folder `kamasi1-website`:

```powershell
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Struktur

- `index.html` — markup halaman dan anchor section berikutnya.
- `css/variables.css` — warna, radius, tipografi, dan token desain.
- `css/reset.css`, `style.css`, `components.css`, `responsive.css` — reset, layout, komponen, dan breakpoint.
- `js/main.js`, `navbar.js`, `animation.js` — inisialisasi, navigasi, dan animasi.
- `assets/images/hero/kamasi-hero.jpg` — gambar ilustratif hasil image generation, bukan foto dokumentasi lokasi.
- `assets/images/profile/kamasi-profile.jpg` — ilustrasi suasana untuk section Profil, bukan foto dokumentasi lokasi.
- `assets/images/umkm/umkm-illustration.jpg` — ilustrasi produk usaha, bukan dokumentasi UMKM tertentu.
- `assets/images/history/`, `assets/images/structure/` — disiapkan untuk aset konten berikutnya.

## Sebelum publikasi

Ganti angka `X.XXX+`, `XXX+`, `XX+`, dan `XX` dengan data Kamasi 1 yang terverifikasi. Bila tersedia foto lokasi asli dengan izin penggunaan, ganti gambar hero dan perbarui teks alternatif serta label ilustrasinya.

Section Profil di `index.html` memakai narasi dan dua angka contoh (`± 1,8 km²`, `4 lingkungan`). Cari komentar `TODO` di section tersebut untuk mengganti teks, data, gambar, teks alternatif, dan label ilustrasi dengan informasi resmi.

Section Data Penduduk juga memakai data simulasi, bukan data resmi: total 3.240 jiwa, laki-laki 1.598, perempuan 1.642, kepala keluarga 920, dan kelompok usia 702 + 2.190 + 348 jiwa. Saat menggantinya, perbarui angka yang terlihat, persentase, serta atribut `value` dan `max` pada tiga elemen `<progress>` agar grafik tetap sesuai.

Section UMKM menampilkan tiga kategori contoh dan satu gambar ilustratif. Ganti dengan kategori, nama usaha, deskripsi, dan foto nyata setelah mendapat izin publikasi. Perbarui juga `alt` dan keterangan gambar.

Section Sejarah adalah kerangka kronologi contoh, bukan riwayat resmi. Isi periode, tanggal, peristiwa, dan sumber yang dapat diverifikasi sebelum dipublikasikan sebagai informasi wilayah.

Section Struktur Organisasi memakai jabatan, nama, dan hubungan kerja contoh. Ganti seluruhnya sesuai dokumen organisasi terbaru. Menu “Struktur” mengarah ke section ini dan menggantikan Galeri.

Section Kontak belum memiliki nomor, email, alamat kantor lengkap, atau jam layanan resmi. Isilah data terverifikasi sebelum menambahkan tautan `tel:` dan `mailto:`. Sematan Google Maps memakai pencarian kawasan “Kamasi Satu, Tomohon Tengah, Kota Tomohon” dan memerlukan internet; ini **bukan** penanda titik kantor. Jika ingin menunjuk alamat kantor tertentu, ganti URL `iframe` dan tautan “Buka di Google Maps” setelah lokasi pastinya diverifikasi.

Footer berisi navigasi situs, identitas wilayah, tautan ke situs Pemerintah Kota Tomohon, dan catatan bahwa data contoh belum boleh dianggap rujukan resmi. Tahun hak cipta diisi otomatis lewat `js/main.js`.
