import {
  EbookSection,
  Lede,
  P,
  ChapterNav,
} from "../../al-aqsa-dan-horizon-syam/ebook-ui";
import {
  ReflectBox,
  CheckpointList,
} from "../fitrah-ui";

export function Checkpoint() {
  return (
    <EbookSection
      id="checkpoint1"
      kicker="Checkpoint Fase 1"
      title="Membaca Ulang Dirimu"
      sub="Audit singkat sebelum melangkah ke fase berikutnya."
    >
      <Lede>{`Enam hari pertama ini bukan tentang menjadi manusia yang langsung sempurna, melainkan tentang melihat diri dengan lebih jujur. Kita telah berbicara tentang fitrah yang mungkin tertutup, nafs yang perlu dididik, kerinduan manusia pada makna, kesaksian kepada Allah, keberanian untuk lurus, dan keseimbangan merawat tubuh serta hati.`}</Lede>
      <P>{`Sebelum masuk ke fase berikutnya, berhenti sejenak dan tanyakan pada dirimu:`}</P>
      <CheckpointList>
        <li>{`Apa yang selama ini paling menutupi fitrahku?`}</li>
        <li>{`Dorongan apa yang paling sering memimpin hidupku?`}</li>
        <li>{`Dalam hal apa aku sering mencari makna di tempat yang salah, dan apa yang sebenarnya sedang aku lupakan?`}</li>
        <li>{`Kapan terakhir kali aku benar-benar sadar bahwa Allah adalah Rabb-ku?`}</li>
        <li>{`Prinsip apa yang perlu ku jaga meski tidak selalu populer?`}</li>
        <li>{`Bagian mana dari diriku yang selama ini paling aku abaikan, tubuh, akal, atau hati?`}</li>
      </CheckpointList>
      <ReflectBox label="Penutup Fase 1">
        <p>{`Fitrah bukan slogan. Ia amanah. Dan sebelum seseorang berbicara tentang misi besar, ia perlu lebih dulu jujur mengenali siapa dirinya, apa yang sedang menggerakkannya, dan kepada siapa hidupnya seharusnya kembali.`}</p>
      </ReflectBox>
      <ChapterNav
        prev={{ href: "#hari6", label: "Sebelumnya", title: "Hari 6 — Basyar dan Ruh" }}
      />
    </EbookSection>
  );
}
