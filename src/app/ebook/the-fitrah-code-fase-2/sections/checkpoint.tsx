import {
  EbookSection,
  Lede,
  P,
  ChapterNav,
} from "../../al-aqsa-dan-horizon-syam/ebook-ui";
import { ReflectBox, CheckpointList } from "../../the-fitrah-code/fitrah-ui";

export function Checkpoint() {
  return (
    <EbookSection
      id="checkpoint2"
      kicker="Checkpoint Fase 2"
      title="Memeriksa Kondisi Batin"
    >
      <Lede>{`Enam hari ini mengajak kita memeriksa kondisi batin dengan jujur. Hawa dapat bekerja seperti gravitasi yang terus menarik ke bawah. Qalb menjadi pusat batin tempat berbagai dorongan ditimbang dan arah hidup dibentuk. Zikir menenangkan, tapi bukan dengan menghapus semua rasa berat. Ghaflah membuat arah hidup tersisih dari perhatian meski keseharian tetap berjalan seperti biasa. Tazkiyah membersihkan agar yang baik punya ruang untuk tumbuh. Dan taubat nasuha mengajarkan bahwa penyesalan harus berubah menjadi kepulangan yang sungguh-sungguh.`}</Lede>
      <P>{`Sebelum melangkah ke fase berikutnya, tanyakan pada dirimu:`}</P>
      <CheckpointList>
        <li>{`Kebiasaan apa yang paling sering menarikku turun belakangan ini?`}</li>
        <li>{`Dalam kondisi apa hatiku paling mudah goyah?`}</li>
        <li>{`Ke mana biasanya aku lari saat mencari ketenangan, dan apakah itu benar-benar menenangkan?`}</li>
        <li>{`Adakah area hidupku yang sedang berjalan dalam ghaflah: sibuk, tetapi arah semakin jarang diperhatikan?`}</li>
        <li>{`“Endapan” batin apa yang paling perlu kubersihkan sekarang?`}</li>
        <li>{`Adakah dosa yang selama ini kutunda untuk benar-benar kuselesaikan lewat taubat, termasuk hak orang lain yang belum kukembalikan?`}</li>
      </CheckpointList>
      <ReflectBox label="Penutup Fase 2">
        <p>{`Fase ini selesai bukan berarti pekerjaannya selesai. Hati yang mulai dijaga dan jiwa yang mulai dibersihkan tetap perlu dirawat setiap hari, sama seperti kaca jendela yang perlu terus dilap agar tidak kembali berdebu.`}</p>
        <p>{`Tapi ada satu pertanyaan yang belum terjawab.`}</p>
        <p>{`Kita sudah mulai membersihkan diri, mengembalikan arah, dan memperbaiki apa yang sempat rusak. Untuk apa semua pemulihan ini sebenarnya digunakan? Seseorang yang sudah kembali kepada Allah tidak berhenti di titik kembali. Ia perlu tahu ke mana selanjutnya ia akan berjalan. Itu yang akan kita bahas di fase berikutnya.`}</p>
      </ReflectBox>
      <ChapterNav
        prev={{ href: "#hari12", label: "Sebelumnya", title: "Hari 12 — Nasuha" }}
      />
    </EbookSection>
  );
}
