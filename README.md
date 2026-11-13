# Amar Tech — GitHub Pages

Website blog teknologi statis menggunakan HTML, CSS, dan JavaScript.

## Isi website
- `index.html` — beranda
- `artikel/ai-produktivitas-mahasiswa.html` — artikel SEO utama
- `tentang.html` — profil Amar Tech
- `kontak.html` — halaman kontak dan form demo
- `assets/css/style.css` — desain responsif
- `assets/js/main.js` — navigasi mobile dan interaksi form demo
- `robots.txt` dan `sitemap.xml` — file pendukung SEO

## Cara menerbitkan ke GitHub Pages
1. Ekstrak ZIP ini.
2. Masuk ke GitHub dan buat repository baru bernama `amar-tech`.
3. Pilih **Public** (untuk GitHub Free) dan buat repository.
4. Unggah seluruh ISI folder `amar-tech` ke root repository. Pastikan `index.html` berada di root, bukan di dalam folder tambahan.
5. Buka **Settings → Pages**.
6. Pada **Build and deployment**, pilih **Deploy from a branch**.
7. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
8. Tunggu proses deployment selesai. Alamat project site biasanya:
   `https://USERNAME.github.io/amar-tech/`

## Penting: ganti placeholder URL
Sebelum mengandalkan SEO dan mengirim sitemap ke Google, ganti `USERNAME` pada:
- `index.html`
- `artikel/ai-produktivitas-mahasiswa.html`
- `tentang.html`
- `kontak.html`
- `robots.txt`
- `sitemap.xml`

Ganti dengan username GitHub yang benar. Contoh format URL: `https://nama-akun.github.io/amar-tech/`.

## Catatan
- Repository dan website GitHub Pages dapat diakses publik. Jangan unggah password, token, data pribadi, atau dokumen rahasia.
- Form pada halaman Kontak adalah demo sisi browser. Form tidak mengirim atau menyimpan data ke server.
- Kartu artikel tambahan di beranda merupakan placeholder editorial yang mengarah ke artikel utama. Buat artikel terpisah sebelum menganggapnya sebagai artikel yang sudah diterbitkan.
- Setelah website aktif, periksa URL, tautan, tampilan mobile, dan hasil SEO checker.
