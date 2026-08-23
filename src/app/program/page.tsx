import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import ProgramTabs from "./program-tabs";

export const metadata: Metadata = {
  title: "Program — Yayasan Saladin Peradaban Berilmu",
};

const pillars = [
  {
    num: "01",
    title: "Pendidikan & Karakter",
    tagline: "Membentuk intelektual berakhlak mulia",
    items: [
      {
        name: "Kajian Non-Formal",
        status: "berjalan" as const,
        manfaat: "Pemuda & Masyarakat Umum",
        output: "Peserta kajian aktif",
        cara: "Hadir atau ikuti online",
        link: "https://event.gensaladin.id",
      },
      {
        name: "Seminar & Workshop",
        status: "berjalan" as const,
        manfaat: "Pelajar & Mahasiswa",
        output: "Sertifikat & modul",
        cara: "Daftar per event",
        link: "https://event.gensaladin.id",
      },
      {
        name: "Pengembangan Modul & Buku Ajar",
        status: "segera" as const,
        manfaat: "Pendidik & Santri",
        output: "Publikasi cetak & digital",
        cara: "Bergabung sebagai penulis",
      },
      {
        name: "Pembinaan Komunitas Pemuda",
        status: "berjalan" as const,
        manfaat: "Komunitas pemuda Islam",
        output: "Komunitas aktif terbina",
        cara: "Daftar komunitas mitra",
      },
    ],
  },
  {
    num: "02",
    title: "Literasi & Dakwah Digital",
    tagline: "Menjangkau generasi melalui teknologi",
    items: [
      {
        name: "Produksi Konten Multi-Platform",
        status: "berjalan" as const,
        manfaat: "Pengguna media sosial",
        output: "Konten dakwah berkualitas",
        cara: "Follow & sebarkan",
      },
      {
        name: "Podcast & Video Edukasi",
        status: "berjalan" as const,
        manfaat: "Umum",
        output: "Episode reguler",
        cara: "Subscribe & dengarkan",
      },
      {
        name: "Platform Edukasi Digital",
        status: "segera" as const,
        manfaat: "Pelajar & masyarakat",
        output: "Kursus & modul online",
        cara: "Daftar akun gratis",
      },
      {
        name: "Arsip Digital Peradaban Islam",
        status: "segera" as const,
        manfaat: "Peneliti & pelajar",
        output: "Database tokoh & peristiwa",
        cara: "Jadilah kontributor",
      },
    ],
  },
  {
    num: "03",
    title: "Kolaborasi & Aksi Sosial",
    tagline: "Dampak nyata di tengah masyarakat",
    items: [
      {
        name: "Kemitraan Strategis",
        status: "berjalan" as const,
        manfaat: "Lembaga & organisasi",
        output: "Program kolaboratif",
        cara: "Hubungi tim kami",
      },
      {
        name: "Program Sosial & Kemanusiaan",
        status: "berjalan" as const,
        manfaat: "Masyarakat marginal",
        output: "Bantuan langsung & pemberdayaan",
        cara: "Donasi atau relawan",
      },
      {
        name: "Beasiswa & Santunan",
        status: "segera" as const,
        manfaat: "Pelajar kurang mampu",
        output: "Penerima beasiswa aktif",
        cara: "Dukung program ini",
      },
      {
        name: "Pembinaan Komunitas",
        status: "berjalan" as const,
        manfaat: "Komunitas lokal",
        output: "Komunitas mandiri & aktif",
        cara: "Daftar komunitas binaan",
      },
    ],
  },
];

export default function ProgramPage() {
  return (
    <div className="pt-20">
      <PageHeader
        eyebrow="Program Kami"
        title="Tiga Pilar Gerakan"
        titleEmphasis="yang Berakar Kuat"
        desc="Dirancang untuk membentuk insan berilmu, memperluas dakwah digital, dan membangun dampak sosial yang nyata."
      />
      <ProgramTabs pillars={pillars} />
    </div>
  );
}
