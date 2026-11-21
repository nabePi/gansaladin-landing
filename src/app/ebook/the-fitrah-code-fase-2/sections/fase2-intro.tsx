import {
  EbookSection,
  Lede,
  P,
  NoteBox,
  ChapterNav,
} from "../../al-aqsa-dan-horizon-syam/ebook-ui";

export function Fase2() {
  return (
    <EbookSection
      id="fase2"
      kicker="Fase 2 — The Glitch"
      title="Mengenali Gangguan Batin"
    >
      <Lede>{`Enam hari pertama mengajak kita menyingkap `}<em>{`fitrah`}</em>{`, mengenal `}<em>{`nafs`}</em>{`, memahami kerinduan yang mudah terlupa, mengingat kesaksian yang paling mendasar, memilih lurus meski berbeda, dan merawat tubuh serta kehidupan batin sebagai dua amanah yang sama-sama harus dijaga. Tapi mengenali `}<em>{`fitrah`}</em>{` saja belum cukup. `}<em>{`Fitrah`}</em>{` bisa tertutup, sementara hati perlahan melemah tanpa selalu disadari pemiliknya.`}</Lede>
      <P>{`Fase ini menelusuri beberapa kondisi batin yang membuat manusia gelisah tanpa selalu tahu sebabnya. Kita akan membaca gravitasi keinginan yang menjatuhkan, hati yang mudah berbolak-balik, ketenangan yang sering dicari di tempat yang keliru, kelalaian yang menyamar sebagai kesibukan, hingga proses membersihkan dan memulihkan diri dari apa yang selama ini mengaburkan arah.`}</P>
      <NoteBox><b>{`Catatan Pembacaan.`}</b>{` Pada beberapa bagian di fase ini, pemikiran Imam al-Ghazali, terutama dari `}<em>{`Ihya Ulumuddin`}</em>{`, akan membantu memperdalam pembahasan tentang `}<em>{`qalb`}</em>{` dan `}<em>{`tazkiyah`}</em>{`. Perlu ditegaskan sejak awal, pembahasan “penyakit hati” dalam tradisi ini adalah kategori spiritual, bukan diagnosis kesehatan mental. Keduanya bisa saling berkaitan dalam pengalaman seseorang, tapi tidak identik, dan buku ini tidak dimaksudkan untuk menggantikan bantuan tenaga profesional ketika seseorang sedang menghadapi kondisi kesehatan mental yang membutuhkan penanganan khusus.`}</NoteBox>
      <ChapterNav
        prev={{ href: "/ebook/the-fitrah-code", label: "Fase Sebelumnya", title: "Fase I — The Blueprint" }}
        next={{ href: "#hari7", label: "Selanjutnya", title: "Hari 7 — Hawa" }}
      />
    </EbookSection>
  );
}
