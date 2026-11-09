import {
  EbookSection,
  Lede,
  P,
  SectionHead,
  PullIdea,
  QuoteBlock,
  RefItem,
  ChapterNav,
} from "../../al-aqsa-dan-horizon-syam/ebook-ui";
import {
  ReflectBox,
} from "../fitrah-ui";

export function Hari5() {
  return (
    <EbookSection
      id="hari5"
      kicker="Fase 1 · Hari Lima"
      title="Hanif"
      sub="Melawan Arus dengan Ukuran yang Jelas"
      paper
    >
      <Lede>{`Berbeda dari kebanyakan orang tidak selalu berarti benar.`}</Lede>
      <P>{`Ini penting ditegaskan sejak awal, karena kadang seseorang merasa paling berani melawan arus, padahal yang sedang ia turuti hanya egonya sendiri. Ada orang yang menolak arus karena memang berpegang pada sesuatu yang benar, dan ada yang menolak arus semata karena tidak suka disamakan dengan orang lain. Dari luar, dua sikap ini bisa terlihat identik. Yang membedakan bukan seberapa berbeda seseorang dari sekelilingnya, tapi apa yang membuatnya berbeda.`}</P>
      <P>{`Al-Qur’an punya satu kata untuk keberanian berbeda yang punya ukuran jelas seperti ini: `}<em>{`hanif`}</em>{`.`}</P>
      <SectionHead>{`Ayat & Konteks`}</SectionHead>
      <QuoteBlock
        arabic={`إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ حَنِيفًا ۖ وَمَآ أَنَا۠ مِنَ ٱلْمُشْرِكِينَ`}
        cite={`QS. Al-An’am: 79`}
      >
        <p>{`“Aku hadapkan wajahku kepada (Allah) yang menciptakan langit dan bumi dengan penuh kepasrahan (mengikuti) agama yang benar, dan aku bukanlah termasuk orang-orang musyrik.”`}</p>
      </QuoteBlock>
      <P>{`Ayat ini berkisah ketika Nabi Ibrahim berhadapan dengan kemusyrikan kaumnya. Yang menarik, Ibrahim tidak sedang menolak kebiasaan kaumnya karena ingin tampil beda. Rangkaian ayat sebelumnya menampilkan bagaimana ia membongkar kesalahan penyembahan kepada benda-benda langit, sesuatu yang terbit, tenggelam, berubah, dan bergantung tidak mungkin layak menjadi Tuhan.`}</P>
      <P>{`Maka ketika Ibrahim menyatakan bahwa ia menghadapkan wajahnya kepada Dia yang menciptakan langit dan bumi, keberpalingannya dari kesyirikan bukan lahir dari dorongan untuk berbeda, tetapi dari kesadaran tauhid yang jelas.`}</P>
      <SectionHead>{`Jejak Kata`}</SectionHead>
      <P>{`Ar-Raghib al-Asfahani menjelaskan `}<em>{`hanif`}</em>{` sebagai kecenderungan meninggalkan kesesatan menuju kelurusan.`}</P>
      <P>{`Perhatikan urutannya. Bukan sekadar “condong”, tapi condong yang punya arah, dari sesat menuju lurus. Ini penting dipahami dengan tepat, karena kalau `}<em>{`hanif`}</em>{` diartikan sekadar “berbeda dari kebanyakan”, kata ini bisa dipakai untuk membenarkan hampir semua sikap menyimpang, asal terasa berbeda. Padahal maknanya justru sebaliknya. `}<em>{`Hanif`}</em>{` bukan berarti selalu memilih jalan yang ganjil, bukan pula sikap anti-masyarakat, dan bukan kebanggaan karena merasa lebih saleh dari orang lain. `}<em>{`Hanif`}</em>{` adalah kecenderungan sadar untuk kembali kepada kebenaran, sekalipun itu berarti berbeda dari kebanyakan orang.`}</P>
      <PullIdea>{`Bukan tentang menjadi berbeda. Tentang menjadi lurus.`}</PullIdea>
      <SectionHead>{`Refleksi`}</SectionHead>
      <P>{`Hari ini, arus zaman bergerak sangat cepat. Apa yang viral mudah terasa benar, karena semua orang membicarakannya. Apa yang ramai dibicarakan mudah terasa penting, karena diam-diam kita takut ketinggalan. Saat kamu memilih tidak ikut menyebarkan sesuatu yang kamu tahu keliru, atau menolak jalan pintas yang tidak halal meski semua orang menyebutnya realistis, kamu mungkin akan dianggap kaku, ketinggalan zaman, atau tidak realistis.`}</P>
      <P>{`Tapi rasa asing itu sendiri tidak otomatis membuktikan kamu benar. Banyak orang yang keliru juga merasa dirinya sendirian dan istimewa karena kesendirian itu. Perasaan “aku berbeda dari kebanyakan” bisa muncul dari kebenaran, tapi bisa juga muncul dari kesombongan, dari luka masa lalu, atau sekadar dari keinginan untuk terlihat unik.`}</P>
      <P>{`Karena itu, seorang hanif tidak berhenti pada perasaan saja. Ia mengukur langkahnya dengan sesuatu yang lebih stabil daripada perasaan sesaat: wahyu, ilmu, dan akhlak. Ia mau belajar. Ia mau dikoreksi, bahkan ketika koreksi itu tidak nyaman didengar. Keberanian yang benar bukan keberanian untuk melawan semua orang demi sensasi melawan. Keberanian yang benar adalah keberanian untuk tetap lurus, justru ketika kebenaran yang sudah diuji itu menuntut kita berdiri sendirian.`}</P>
      <ReflectBox label="Latihan Hari Ini">
        <p>{`Ingat satu momen ketika kamu memilih berbeda dari kebanyakan orang karena sebuah prinsip.`}</p>
        <p>{`Tanyakan dengan jujur: apakah prinsip itu berdiri di atas wahyu, ilmu, dan akhlak, atau sebenarnya aku hanya ingin terlihat berbeda, lebih baik, atau lebih berani dari yang lain?`}</p>
        <p>{`Bila kamu ragu menjawabnya sendiri, mintalah nasihat dari orang berilmu yang kamu percaya.`}</p>
      </ReflectBox>
      <SectionHead>{`Catatan Rujukan`}</SectionHead>
      <div>
        <RefItem>{`QS. Al-An’am: 79`}</RefItem>
        <RefItem>{`Ar-Raghib al-Asfahani, `}<em>{`Al-Mufradat fi Gharib al-Qur’an`}</em>{`, entri حنف`}</RefItem>
      </div>
      <ChapterNav
        prev={{ href: "#hari4", label: "Sebelumnya", title: "Hari 4 — Alast" }}
        next={{ href: "#hari6", label: "Selanjutnya", title: "Hari 6 — Basyar dan Ruh" }}
      />
    </EbookSection>
  );
}
