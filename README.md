# Kamasi 1 — Tomohon

Landing page statis untuk profil Kamasi 1. Dibangun hanya dengan HTML5, CSS3, dan Vanilla JavaScript. Tidak ada proses build atau dependensi frontend.

## Menjalankan

Buka `index.html` melalui server lokal statis agar modul JavaScript dapat dimuat dengan benar. Jika Python tersedia di PATH, jalankan dari folder `kamasi1-website`:

```powershell
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Struktur

- `index.html` — markup landing page dan anchor section berikutnya.
- `css/variables.css` — warna, radius, tipografi, dan token desain.
- `css/reset.css`, `style.css`, `components.css`, `responsive.css` — reset, layout, komponen, dan breakpoint.
- `js/main.js`, `navbar.js`, `animation.js` — inisialisasi, navigasi, dan animasi.
- `assets/images/hero/kamasi-hero.jpg` — gambar ilustratif hasil image generation, bukan foto dokumentasi lokasi.
- `assets/images/profile/`, `umkm/`, `history/`, `gallery/` — disiapkan untuk konten tahap berikutnya.

## Sebelum publikasi

Ganti angka `X.XXX+`, `XXX+`, `XX+`, dan `XX` dengan data Kamasi 1 yang terverifikasi. Bila tersedia foto lokasi asli dengan izin penggunaan, ganti gambar hero dan perbarui teks alternatif serta label ilustrasinya.
