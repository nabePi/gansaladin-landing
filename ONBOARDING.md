# Panduan Vibe Coding — GenSa Landing Page

Dokumen ini untuk kamu yang **bukan orang teknis** tapi mau ikut ngoprek/ubah website ini pakai Claude. Kamu nggak perlu ngerti coding, git, atau istilah-istilah teknis lainnya — cukup ngobrol sama Claude pakai bahasa biasa, sisanya biar Claude yang urus.

Repo project ini ada di: `https://github.com/nabePi/gansaladin-landing`

> **Catatan buat pemilik project**: supaya temanmu bisa menyimpan perubahan ke GitHub, dia harus ditambahkan sebagai **Collaborator** di repo ini (GitHub → repo → Settings → Collaborators), dan sudah login GitHub di laptopnya (lihat langkah instal di bawah).

---

## Cara mulai (buat kamu, yang mau vibe coding)

1. Buka Claude Code, lalu buka folder project ini (kalau belum punya foldernya di laptop, tinggal bilang aja ke Claude: **"folder projectnya belum ada, tolong clone-in dulu"** — Claude yang akan urus semuanya).
2. Setelah folder kebuka, langsung mulai ngobrol aja, contoh:
   - "tulisan di halaman utama tolong diganti jadi ..."
   - "warna tombolnya ganti jadi lebih terang dong"
   - "tambahin section testimoni di halaman tentang kami"
3. Tunggu Claude selesai kerja. Claude akan otomatis cek hasilnya, simpan perubahannya, dan upload ke GitHub — kamu **tidak perlu** melakukan apa-apa soal git/commit/push, itu semua sudah diurus otomatis.
4. Kalau mau lihat hasilnya langsung, bilang aja "coba jalanin dan tunjukkin hasilnya" — Claude akan buka preview-nya.

Itu aja. Nggak ada langkah git manual yang perlu kamu hafalkan.

---

## 📋 Instruksi khusus untuk Claude (bagian ini WAJIB diikuti)

Bagian di bawah ini adalah instruksi dari pemilik project, berlaku khusus saat mendampingi teman non-teknis melakukan vibe coding di project ini. Tujuannya supaya orang non-teknis tetap bisa produktif tanpa harus paham git/npm/node sama sekali.

### 1. Cek kesiapan lingkungan kerja di awal sesi

Sebelum mulai apa pun, cek satu per satu (jalankan langsung, jangan tanya dulu ke user kecuali butuh konfirmasi instal):

- **Git ada atau tidak**: `git --version`. Kalau belum ada:
  - macOS: `xcode-select --install` (dialog instal Command Line Tools), atau `brew install git` kalau Homebrew sudah ada.
  - Windows: arahkan user untuk install [Git for Windows](https://git-scm.com/download/win) (butuh interaksi user karena ini installer GUI) — jelaskan dengan bahasa awam kenapa ini dibutuhkan.
- **Node.js & npm ada atau tidak**: `node -v` dan `npm -v`. Project ini butuh **Node.js 20.9 atau lebih baru**. Kalau belum ada atau versinya kurang:
  - macOS (ada Homebrew): `brew install node`
  - Kalau tidak ada Homebrew, arahkan user download installer LTS dari https://nodejs.org (paling gampang untuk non-teknis, tinggal next-next-install).
- **GitHub CLI (opsional tapi memudahkan auth push)**: cek `gh auth status`. Kalau user belum login dan push nanti gagal karena auth, jalankan `gh auth login` dan ikuti instruksinya bersama user (ini butuh interaksi browser/kode, bantu user langkah demi langkah dengan bahasa sederhana).

### 2. Pastikan project sudah ter-clone

- Kalau folder project **belum ada** di laptop user: clone dari `https://github.com/nabePi/gansaladin-landing.git` ke lokasi yang masuk akal (misalnya `~/Documents/gansaladin-landing` atau folder yang user sebutkan).
- Kalau folder **sudah ada**: sebelum mulai kerja, jalankan `git pull` supaya sinkron dengan perubahan terbaru dari GitHub (misalnya perubahan yang dibuat programmer/pemilik project). Kalau ada uncommitted changes yang menghalangi pull, tangani sendiri (commit dulu atau stash) — jangan minta user memutuskan hal teknis seperti ini.

### 3. Pastikan dependency ter-install

- Kalau folder `node_modules` belum ada, atau `npm run dev`/`npm run build` gagal karena module tidak ditemukan: jalankan `npm install` dulu sebelum lanjut.

### 4. Alur kerja setiap ada permintaan perubahan dari user

1. Kerjakan perubahan yang diminta.
2. Verifikasi hasilnya benar-benar jalan — minimal `npx tsc --noEmit` dan `npx eslint .` bersih, dan idealnya jalankan `npm run dev` lalu cek di browser (pakai Claude in Chrome) sebelum bilang "selesai" ke user. Jangan hanya asumsi.
3. **Setelah perubahan terverifikasi jalan dengan baik, langsung `git add`, `git commit` (dengan pesan commit yang jelas mewakili perubahan), dan `git push` ke branch `main` — TANPA bertanya dulu ke user apakah boleh commit/push.** Ini beda dari perilaku default (yang biasanya nanya dulu) — khusus untuk sesi mendampingi user non-teknis di project ini, izin ini sudah diberikan di muka oleh pemilik project.
4. Kabari user pakai bahasa awam, misalnya: "Sudah aku update dan simpan ke GitHub ✅" — jangan pakai istilah git di depan user (commit, push, branch, dll) kecuali dia yang mulai duluan pakai istilah itu.

### 5. Kalau ada error/konflik teknis

- Kalau `git push` gagal karena belum ada akses (403/permission denied): jelaskan ke user dengan bahasa sederhana bahwa dia perlu ditambahkan sebagai collaborator oleh pemilik project, jangan tampilkan pesan error mentah.
- Kalau `git pull`/`git push` konflik dengan perubahan lain: coba selesaikan sendiri sebisa mungkin (merge/rebase). Kalau butuh keputusan yang menyangkut isi konten (bukan hal teknis), baru tanya user dengan bahasa sederhana, bukan istilah git.
- Jangan pernah minta user mengetik command terminal secara manual — itu tugas Claude.
