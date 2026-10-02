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

- Statistik mengikuti foto papan profil yang diberikan: 1.066 penduduk (537 laki-laki, 529 perempuan), serta 372 KK (281 kepala keluarga laki-laki, 91 perempuan). Batang jenis kelamin menggunakan `<progress max="1066" value="537">`; bila angka diubah, sesuaikan total, label, persentase, `max`, dan `value` sekaligus. Tahun data pada foto belum diketahui.
- Luas lahan ditranskripsikan sesuai papan: permukiman `32 ha/m²`, pertanian `33 ha/m²`, pekarangan `20 ha/m²`, pemakaman `6.000 m²`. Penulisan `ha/m²` pada sumber ambigu, sehingga tidak dijumlahkan atau diubah menjadi total km². Konfirmasi satuan, luas perkantoran/sekolah, dan total wilayah sebelum melengkapinya. Foto kelompok umur sudah tersedia, tetapi rentangnya berbeda dari kategori situs; lihat transkripsi di bawah sebelum mengisi empat kategori.
- Angka UMKM dan fasilitas di beranda masih contoh. Jumlah **3 lingkungan** diberikan untuk proyek ini, tetapi nama kepala lingkungan belum tersedia. Kode pos `95441` dan nama lurah `Yanny Tumewu, SE` juga berasal dari data yang diberikan; nama lurah tercantum pada [situs Pemerintah Kota Tomohon](https://tomohon.go.id/kecamatan-tomohon-tengah/) saat halaman ini dibuat. Periksa ulang sebelum publikasi karena jabatan dapat berubah.
- Catatan sejarah pada `profile.html` merujuk [RPJMD Kota Tomohon 2021–2026](https://tomohon.go.id/wp-content/uploads/2023/05/RPJMD-KOTA-TOMOHON-TAHUN-2021-2026.pdf) untuk catatan kawasan Kamasi tahun 1855, serta [berita Pemerintah Kota Tomohon](https://tomohon.go.id/ibadah-syukur-hut-kelurahan-kamasi-satu-ke-10/) untuk peringatan HUT ke-10 tahun 2018. Catatan kawasan Kamasi bukan otomatis tanggal pembentukan Kelurahan Kamasi Satu. Lengkapi riwayat dengan arsip kelurahan dan narasumber warga.
- Daftar lurah menampilkan nama yang dapat ditemukan dalam sumber BPS dan Pemerintah Kota Tomohon. Tahun “tercatat” bukan rentang masa jabatan; lengkapi tanggal mulai–akhir jabatan dan lurah lain menggunakan arsip/SK kelurahan sebelum menganggap daftar ini lengkap. Inisial pada kartu hanya placeholder visual, bukan foto resmi.
- Tab UMKM sudah menampilkan foto Pabrik Tahu, Kacang Hai, dan Pabrik Roti. Detail pengelola, alamat, serta ragam produk masih perlu diverifikasi. Struktur organisasi masih mengandung konten contoh. Kartu Lingkungan I–III memakai placeholder untuk nama kepala dan wakil; pastikan keberadaan jabatan wakil dari struktur resmi sebelum mengisinya. Perbarui nama, jabatan, deskripsi, foto, dan izin publikasi sebelum ditampilkan sebagai informasi resmi.
- Sematan Google Maps mencari kawasan Kamasi Satu, bukan menandai titik kantor kelurahan. Ganti URL sematan setelah koordinat kantor dipastikan.

## Transkripsi kelompok umur

Angka berikut dibaca dari foto papan profil yang diberikan. Tanda `—` berarti kolom kosong pada foto, bukan jumlah nol. Kategori situs tetap Balita (0–6), Anak (7–17), Dewasa (18–64), dan Lansia (65+).

| Usia pada papan | Laki-laki | Perempuan | Jumlah angka terisi |
| --- | ---: | ---: | ---: |
| 0–5 | 27 | 32 | 59 |
| 6–10 | 38 | 32 | 70 |
| 11–15 | 37 | 39 | 76 |
| 16–20 | 48 | 33 | 81 |
| 21–25 | 45 | 34 | 79 |
| 26–30 | 38 | 37 | 75 |
| 31–35 | 33 | 45 | 78 |
| 36–40 | 32 | 37 | 69 |
| 41–45 | 41 | 46 | 87 |
| 46–50 | 38 | 42 | 80 |
| 51–55 | 41 | 39 | 80 |
| 56–60 | 41 | 33 | 74 |
| 61–65 | 19 | 22 | 41 |
| 66–70 | 31 | 27 | 58 |
| 71–75 | 16 | 14 | 30 |
| 76–80 | 15 | 11 | 26 |
| 81–85 | — | 2 | 2 |
| 86–90 | — | — | — |
| 91+ | — | — | — |

Jumlah seluruh angka yang terisi: **540 laki-laki + 525 perempuan = 1.065 jiwa**. Ini berbeda dari papan total penduduk sebelumnya (**537 laki-laki + 529 perempuan = 1.066 jiwa**). Jangan mengganti total penduduk atau menganggap kolom kosong sebagai nol tanpa konfirmasi.

Pengelompokan tepat memerlukan rincian usia 6 tahun, 16–17 tahun, 18–20 tahun, dan 65 tahun. Angka pada kelompok 6–10, 16–20, dan 61–65 tidak dapat langsung dimasukkan seluruhnya ke salah satu kategori situs.

### Estimasi empat kategori

Pengguna menyetujui estimasi proporsional dengan label **Estimasi**. Perhitungan mengasumsikan persebaran merata di dalam setiap rentang lima tahunan yang melintasi batas kategori. Kolom kosong tidak dianggap data nol; perhitungan hanya mewakili 1.065 jiwa yang angkanya terisi pada tabel umur, bukan memastikan cakupan seluruh penduduk.

| Kategori situs | Perhitungan sebelum pembulatan | Estimasi jiwa | Persentase dari 1.065 |
| --- | --- | ---: | ---: |
| Balita (0–6) | 59 + 1/5 × 70 = 73 | 73 | 6,9% |
| Anak (7–17) | 4/5 × 70 + 76 + 2/5 × 81 = 164,4 | 165 | 15,5% |
| Dewasa (18–64) | 3/5 × 81 + 622 + 4/5 × 41 = 703,4 | 703 | 66,0% |
| Lansia (65+) | 1/5 × 41 + 116 = 124,2 | 124 | 11,6% |

Pembulatan memakai metode sisa terbesar agar jumlah tetap **1.065 jiwa**. Setelah pembulatan ke bawah, satu jiwa sisa dialokasikan ke Anak; sisa pecahan Anak dan Dewasa sama besar, sehingga ikatan ditentukan oleh urutan kategori. Persentase dihitung dari angka hasil pembulatan. Total penduduk **1.066** dan angka laki-laki/perempuan pada ringkasan tetap mengikuti foto papan total sebelumnya. Ganti estimasi, persentase, label, dan catatan setelah data per usia tersedia.
