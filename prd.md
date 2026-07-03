# PRD (Product Requirements Document) — Portfolio Website “Janayu”
**Nama Anak:** Janayu Rin Faizah  
**Tanggal Lahir:** 16 April 2024  
**Website:** `janayu.my.id`  
**Stack:** **ReactJS + TailwindCSS + Lucide Icons**

---

## 1. Ringkasan Produk
Website portfolio untuk Janayu dengan vibe **Japanese anime** yang imut, bersih, dan nyaman untuk dibuka di HP. Website menampilkan:
- Identitas Janayu (nama, tanggal lahir, usia otomatis)
- Hero section dengan logo dan animasi lembut
- Galeri foto (grid responsif + lightbox modal)
- Milestones (pencapaian versi anak—misalnya “first…”, “belajar…”, “ulang tahun…”)
- Guestbook / Kirim salam (opsional, aman & sederhana)
- Animasi reveal dan dekorasi sparkle/petal yang ringan

---

## 2. Tujuan & Problem Statement
### Tujuan
1. Membuat website portfolio yang **aesthetic** dengan palette mirip logo (pink/magenta + navy outline) dan “anime-like vibe”.
2. Memudahkan orang tua menambahkan konten (foto milestones, teks sederhana) tanpa ribet.
3. Menampilkan identitas Janayu dengan cara yang **sweet, tidak norak, dan ringan** di perangkat mobile.
4. Menghadirkan animasi yang menarik tetapi **tidak mengganggu** (tidak berat, tidak berlebihan).

### Problem Statement
- Website keluarga sering terlalu “berat” (animasi/crop/asset besar), sehingga loading lambat di HP.
- Desain anime yang keren kadang terlalu dewasa; dibutuhkan versi yang aman untuk anak.
- Konten berubah sewaktu-waktu (momen baru), jadi layout harus fleksibel.

---

## 3. Sasaran Pengguna (User Personas)
1. **Orang tua / keluarga dekat**
   - Tujuan: menampilkan momen & milestones Janayu dengan tampilan cantik.
   - Perilaku: buka via HP, butuh cepat & mudah.

2. **Teman/kerabat**
   - Tujuan: melihat galeri dan salam/ucapan.
   - Perilaku: scroll cepat, butuh navigasi jelas.

3. **Admin (Orang tua sebagai pengelola)**
   - Tujuan: update foto/milestones.
   - Perilaku: ingin proses update sesimple mungkin.

---

## 4. Ruang Lingkup (Scope)
### In Scope (Wajib)
- Halaman: Home, About, Gallery, Milestones, Guestbook (opsional), Contact footer
- Komponen UI: Header/Navigation, Hero (logo + CTA), Section Reveal, Cards, Gallery Grid, Lightbox Modal
- Animasi ringan:
  - **Background sparkle/petals**
  - **Logo pulse**
  - **Card reveal saat scroll**
  - Transisi halaman/section halus
- Palette & gaya sesuai logo (pink/magenta + navy gelap, background cream/soft)
- Fungsionalitas:
  - Age calculator otomatis dari DOB
  - Gallery: modal pembesar + navigasi (opsional)
  - Guestbook: form “Kirim salam” (bisa tanpa backend untuk MVP)

### Out of Scope (Tidak fokus dulu)
- Login user
- Admin panel rumit
- Sistem upload file langsung dari browser (untuk versi awal)
- Integrasi analytics dan SEO advanced (bisa untuk fase berikut)

---

## 5. Requirements Detail
## 5.1 Desain & Brand Requirements
### Brand Vibe
- Japanese anime-inspired: background soft gradient + dekorasi sparkle/petal + outline navy.
- Tetap ramah anak: warna pastel/pink, gaya tipografi rounded, spacing lega.

### Palette (Disarankan)
Berdasarkan logo (pink/magenta + navy outline):
- Primary Pink: `#C85A73`
- Pink Highlight: `#F3A0B1`
- Navy Outline: `#1B2A4A`
- Background Cream: `#F7F4F0`
- Card White: `#FFFFFF`
- Accent Sparkle: `#FF7CA8`

### Typography (Rekomendasi)
- Body: **Poppins** atau **Nunito**
- Display/Judul: **Poppins** bold / display weight

> Tailwind: pakai class seperti `font-[...]` atau import font via Google Fonts.

---

## 5.2 Halaman & Konten (Konten Awal)
### A) Home
**Komponen:**
- Header sticky (logo mini + menu)
- Hero:
  - Logo Janayu (besar)
  - Judul: “Janayu Rin Faizah”
  - Subjudul: `Born • 16 April 2024`
  - Age otomatis: mis. “Age: 2 years”
  - Tombol: “Lihat Galeri”
- Section pendek: “Milestones terbaru” (3 kartu)
- CTA kecil: “Kirim salam”

**Animasi:**
- Background sparkle/petals slow loop
- Logo pulse 2–3 detik sekali

### B) About
- Foto Janayu (atau ilustrasi placeholder)
- Teks singkat:
  - “Halo, aku Janayu!”
  - “Aku lahir pada 16 April 2024.”
  - “Setiap hari ada hal baru yang aku pelajari.”
- Timeline mini (3–6 item)

### C) Gallery
- Grid responsif:
  - Mobile: 2 kolom
  - Tablet: 3 kolom
  - Desktop: 4 kolom
- Lightbox modal:
  - gambar besar
  - caption sederhana (tanggal/momen)
- Efek hover: glow pink halus

### D) Milestones / Portfolio
- Kartu-kartu milestone:
  - “First Smile”
  - “First Step”
  - “First Drawing”
  - “Ulang Tahun #1” (diisi nanti)
- Masing-masing kartu ada ikon Lucide (heart/star/flower/footprints)
- Tag/warna: variasi pastel pink

### E) Guestbook (Opsional tapi direkomendasikan)
MVP: **form sederhana** tanpa backend (hanya alert/preview lokal) atau simpan lokal (localStorage).
- Input:
  - Nama (opsional atau default “Tamu”)
  - Pesan ucapan
- Tombol submit
- Tampilan daftar pesan terbaru (dari localStorage)

> Catatan: untuk deployment awal, ini cukup aman dan tidak perlu database.

### F) Footer
- Link navigasi kecil
- Copyright
- Catatan: “Made with love”

---

## 5.3 Functional Requirements
1. **Age Calculator**
   - Input: DOB `2024-04-16`
   - Output: tahun, bulan (opsional), tampilkan human readable.
2. **Gallery Lightbox**
   - buka modal saat klik
   - close dengan tombol X / click outside
3. **Scroll Reveal**
   - IntersectionObserver: elemen muncul saat masuk viewport
4. **Guestbook MVP**
   - simpan pesan ke localStorage
   - tampilkan pesan terbaru
5. **Responsive**
   - semua halaman optimal di iPhone/Android mid range

---

## 5.4 Non-Functional Requirements
- **Performance**
  - Page load cepat: target < 2–3 detik di jaringan 4G (perkiraan)
  - Hindari animasi heavy; gunakan CSS animations + transform/opacity.
- **Accessibility**
  - Kontras warna cukup
  - Tombol punya label
  - Modal focus handling sederhana (minimal: trap focus opsional untuk MVP)
- **Maintainability**
  - Struktur komponen rapi (components/, pages/, data/)

---

## 6. Fitur Animasi (Spesifikasi Tingkat Tinggi)
### 6.1 Background Sparkle/Petal
- Bentuk: bintang kecil / petal blur
- Loop pelan (durasi 8–14 detik)
- Intensitas rendah (reduce motion support)

### 6.2 Reveal on Scroll
- Elemen diberi kelas: `opacity-0 translate-y-4`
- Saat visible: `opacity-100 translate-y-0`
- Duration: ~600–800ms, easing `ease-out`

### 6.3 Logo Pulse
- Menggunakan keyframes scale kecil + shadow drop
- Stop jika user prefer `prefers-reduced-motion`

### 6.4 Hover Cards
- `transform: translateY(-6px)`
- Glow: `box-shadow` pink tipis

---

## 7. Technical Requirements (Brief Arsitektur)
### Rekomendasi Struktur Repo
- `src/components/`
  - `Header.tsx`, `Hero.tsx`, `Section.tsx`, `Card.tsx`, `Reveal.tsx`
- `src/pages/`
  - `Home.tsx`, `About.tsx`, `Gallery.tsx`, `Milestones.tsx`, `Guestbook.tsx`
- `src/data/`
  - `gallery.ts`, `milestones.ts`, `aboutTimeline.ts`
- `src/lib/`
  - `age.ts` util
  - `localStorage.ts`
- `src/App.tsx`
- `src/main.tsx`

### Routing
- React Router: `/`, `/about`, `/gallery`, `/milestones`, `/guestbook`

### Styling
- TailwindCSS untuk layout dan komponen
- Custom theme via `tailwind.config.js` (extend colors & background)

### Icon
- Lucide Icons: `Heart`, `Sparkles`, `Star`, `Flower`, `MapPin`, `MessageCircle`, `Camera`, dsb.

---

## 8. Data & Konten (Cara Update)
### Sumber konten
- Untuk MVP: data statis di `src/data/*.ts`
- Contoh struktur (konsep):
  - Gallery item: `{ id, src, alt, date, caption }`
  - Milestone item: `{ id, title, description, icon, dateLabel, gradient }`

### Prinsip
- Tambah item baru cukup edit file data
- Foto:
  - gunakan format webp/jpg
  - kompres ukuran (mis. max 1200px lebar)

---

## 9. Acceptance Criteria (Kriteria Lulus)
1. Website menampilkan semua halaman yang disepakati dan bisa navigasi lancar.
2. Warna dan vibe sesuai logo (pink/magenta + navy outline).
3. Age otomatis benar untuk DOB 16 April 2024 (minimal akurat “tahun”).
4. Gallery:
   - grid rapi dan responsif
   - modal terbuka/tertutup mulus
5. Animasi:
   - reveal dan sparkle tidak berat
   - `prefers-reduced-motion` dihormati
6. Guestbook MVP:
   - kirim salam tersimpan di localStorage dan tampil di halaman.
7. Tidak ada error console saat penggunaan normal.

---

## 10. Outlines Timeline (Saran Sprint)
**Sprint 0 (1 hari)**
- Setup repo, Tailwind theme, routing skeleton

**Sprint 1 (2–3 hari)**
- Header, Home hero + animasi background + reveal
- About section

**Sprint 2 (2–3 hari)**
- Gallery grid + lightbox modal
- Milestones cards

**Sprint 3 (1–2 hari)**
- Guestbook MVP
- Polishing UI, responsive tuning, performance pass

**UAT + Deploy (1 hari)**
- Isi konten awal
- Deploy ke domain `janayu.my.id`

---

## 11. Risiko & Mitigasi
- **Foto terlalu berat** → kompres, lazy load images (`loading="lazy"`).
- **Animasi bikin pusing** → reduce motion & intensitas rendah.
- **Konten berubah-ubah** → pisahkan data ke folder `src/data`.

---

# Brief Implementasi (Detail untuk Developer)

## A) Setup
1. Buat project React (Vite disarankan).
2. Install:
   - `tailwindcss`
   - `react-router-dom`
   - `lucide-react`
3. Setup Tailwind theme:
   - extend colors sesuai palet
4. Buat route dasar.

## B) UI/Komponen Wajib
1. `Header`
   - sticky, menu anchor
   - tombol CTA kecil “Kirim Salam”
2. `Hero`
   - logo besar (SVG/PNG)
   - subtitle + age
   - CTA to `/gallery`
3. `Reveal` wrapper
   - IntersectionObserver
4. `SectionTitle`
   - styling konsisten anime-like
5. `GalleryGrid`
   - map data gallery
6. `LightboxModal`
   - open/close + next/prev optional
7. `MilestoneCard`
   - icon dari lucide + gradient pastel

## C) Animasi (Implementasi)
- Sparkle background: komponen `SparkleBg` yang render beberapa elemen (10–25) absolut di hero (CSS animation delay random).
- Reveal: `useEffect` + observer.
- Pulse logo: class `animate-[pulseGlow_2.2s_ease-in-out_infinite]`

## D) Data Format (Contoh)
- `src/data/gallery.ts`
```ts
export const gallery = [
  {
    id: "g1",
    src: "/images/gallery/01.webp",
    alt: "Janayu tersenyum",
    dateLabel: "Mei 2024",
    caption: "First smile vibes ✨",
  },
  // ...
];
```

## E) Guestbook MVP
- Submit:
  - simpan array ke localStorage key `janayu_guestbook`
  - tampilkan 5 pesan terakhir
- UI:
  - form sederhana + list card kecil

---

# Lampiran: Pertanyaan yang Perlu Kamu Jawab (biar saya kunci PRD jadi final)
1. Kamu mau menu apa saja di navbar? (Home/About/Gallery/Milestones/Guestbook)
2. Untuk **Guestbook**, kamu mau:
   - (A) tanpa backend (localStorage) untuk MVP
   - (B) pakai backend sederhana (mis. Firebase/Supabase)?
3. Logo Janayu yang dipakai:
   - (A) PNG dari gambar ini sebagai hero
   - (B) butuh dibuat versi SVG (biar makin anime & scalable)
4. Apakah kamu punya foto awal Janayu (mis. 3–6) untuk gallery + 1 foto hero?
5. Kamu ingin gunakan bahasa:
   - 100% Indonesia, atau campur sedikit “Konnichiwa / Sparkle” Jepang?

