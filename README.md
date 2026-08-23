This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Vibe Coding dengan Claude (untuk non-teknis)

Kalau kamu bukan orang teknis dan mau ikut ubah-ubah website ini pakai Claude / Claude Code, buka Claude, lalu copy-paste prompt di bawah ini sebagai pesan pertama:

```text
Halo Claude! Aku mau vibe coding di project GenSa Landing Page.

Project ini: https://github.com/nabePi/gansaladin-landing (branch main)

Sebelum mulai, tolong baca dan ikuti semua instruksi di file ONBOARDING.md
yang ada di root project ini (kalau project belum ada di laptopku, clone
dulu dari repo di atas ke folder yang masuk akal).

Ikuti instruksi di ONBOARDING.md apa adanya, termasuk:
- cek & instal Node.js/npm/git kalau belum ada di laptopku
- git pull sebelum mulai kerja, supaya sinkron dengan perubahan terbaru
- npm install kalau dependency belum lengkap
- setiap selesai bikin perubahan dan sudah dicek jalan baik, langsung
  commit & push ke GitHub tanpa nanya dulu ke aku

Aku orang non-teknis, jadi:
- jangan pakai istilah teknis (git, commit, push, dependency, dll)
  kecuali aku yang mulai duluan
- jelasin semuanya pakai bahasa yang gampang dipahami
- kalau ada error, jelasin penyebabnya dan solusinya dengan bahasa
  awam, bukan pesan error mentah

Aku mau mulai dengan minta perubahan ini:
[tulis perubahan yang kamu mau di sini]
```

Selengkapnya ada di [`ONBOARDING.md`](./ONBOARDING.md).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
