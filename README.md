# Kamasi 1 — Tomohon

Website statis Kamasi 1 dengan section Home, Profil, dan Data Penduduk. Dibangun hanya dengan HTML5, CSS3, dan Vanilla JavaScript. Section lain masih berupa anchor placeholder. Tidak ada proses build atau dependensi frontend.

## Menjalankan

Buka `index.html` melalui server lokal statis agar modul JavaScript dapat dimuat dengan benar. Jika Python tersedia di PATH, jalankan dari folder `kamasi1-website`:

```powershell
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Struktur

- `index.html` — markup Home, Profil, Data Penduduk, dan anchor section berikutnya.
- `css/variables.css` — warna, radius, tipografi, dan token desain.
- `css/reset.css`, `style.css`, `components.css`, `responsive.css` — reset, layout, komponen, dan breakpoint.
- `js/main.js`, `navbar.js`, `animation.js` — inisialisasi, navigasi, dan animasi.
- `assets/images/hero/kamasi-hero.jpg` — gambar ilustratif hasil image generation, bukan foto dokumentasi lokasi.
- `assets/images/profile/kamasi-profile.jpg` — ilustrasi suasana untuk section Profil, bukan foto dokumentasi lokasi.
- `assets/images/umkm/`, `history/`, `structure/` — disiapkan untuk konten tahap berikutnya.

## Sebelum publikasi

Ganti angka `X.XXX+`, `XXX+`, `XX+`, dan `XX` dengan data Kamasi 1 yang terverifikasi. Bila tersedia foto lokasi asli dengan izin penggunaan, ganti gambar hero dan perbarui teks alternatif serta label ilustrasinya.

Section Profil di `index.html` memakai narasi dan dua angka contoh (`± 1,8 km²`, `4 lingkungan`). Cari komentar `TODO` di section tersebut untuk mengganti teks, data, gambar, teks alternatif, dan label ilustrasi dengan informasi resmi.

Section Data Penduduk juga memakai data simulasi, bukan data resmi: total 3.240 jiwa, laki-laki 1.598, perempuan 1.642, kepala keluarga 920, dan kelompok usia 702 + 2.190 + 348 jiwa. Saat menggantinya, perbarui angka yang terlihat, persentase, serta atribut `value` dan `max` pada tiga elemen `<progress>` agar grafik tetap sesuai.

Menu “Struktur” mengarah ke `#structure`, placeholder untuk section Struktur Organisasi yang menggantikan Galeri.
