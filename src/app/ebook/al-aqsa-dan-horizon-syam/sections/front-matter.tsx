import {
  EbookSection,
  Lede,
  P,
  PullIdea,
  LayerGrid,
  LayerCard,
  SectionHead,
  Timeline,
} from "../ebook-ui";

export function KataPengantar() {
  return (
    <EbookSection id="kata-pengantar" kicker="Bagian Depan" title="Kata Pengantar">
      <Lede>{`Al-Aqsa adalah salah satu nama yang paling sering kita ucapkan, namun paling jarang benar-benar kita pahami.`}</Lede>
      <P>{`Kebanyakan dari kita mengenalnya melalui berita. Melalui foto-foto yang membuat dada sesak, melalui doa yang dipanjatkan setiap kali namanya disebut, melalui simbol yang kita cintai tanpa selalu tahu persis mengapa. Kecintaan itu tulus, dan tidak ada yang keliru darinya. Namun kecintaan yang berdiri sendiri, tanpa ilmu yang menopangnya, mudah goyah begitu ada yang bertanya, memang mengapa Al-Aqsa begitu penting.`}</P>
      <P>{`Buku ini ditulis untuk menjawab pertanyaan itu dengan menelusuri Al-Aqsa sebagaimana ia disebutkan dalam Al-Qur'an, dijelaskan hadits-hadits sahih, dicatat riwayat sirah, dan dituturkan sejarah awal Islam. Dari sumber-sumber itulah kita akan memahami Al-Aqsa sebagai tempat yang diberkahi dan kiblat awal umat Islam, sekaligus menelusuri keterkaitannya dengan horizon Syam dan keputusan-keputusan generasi sahabat setelah wafat Nabi ﷺ.`}</P>
      <P>{`Kami percaya, cinta yang paling kokoh adalah cinta yang berdiri di atas ilmu, bukan yang hanya menyala ketika berita datang. Karena itu, buku ini mengajak kamu belajar dengan disiplin, membedakan apa yang ditegaskan oleh nash, apa yang disampaikan melalui riwayat sejarah, dan apa yang merupakan pembacaan makna. Ketiganya penting, namun tidak boleh dicampur begitu saja seolah memiliki bobot yang sama.`}</P>
      <P>{`Buku ini disusun oleh tim GenSa, dengan semangat yang terus kami bawa: Learn History. Repeat Victory. Kami percaya bahwa belajar sejarah bukan untuk berhenti pada nostalgia, melainkan untuk memahami bagaimana generasi terdahulu menghadapi zamannya, agar kita lebih jernih dalam membaca zaman kita sendiri.`}</P>
      <P>{`Kami berharap, setelah menyelesaikan buku ini, cara kamu memandang Al-Aqsa tidak lagi sama seperti sebelumnya. Bukan karena emosi yang bertambah, melainkan karena ilmu yang bertambah pula.`}</P>
      <p className="mt-[30px] mb-[18px] text-justify">{`Selamat membaca.`}</p>
      <p className="mb-0 text-justify">{`Tim GenSa`}<br />{`Yayasan Saladin Peradaban Berilmu`}</p>
    </EbookSection>
  );
}

export function Prolog() {
  return (
    <EbookSection id="prolog" kicker="Prolog" title="Dari Berita Menuju Pengetahuan">
      <Lede>{`Kamu mungkin sudah mengenal nama Al-Aqsa jauh sebelum membuka buku ini.`}</Lede>
      <P>{`Bukan dari kitab atau majelis ilmu, melainkan dari layar. Dari judul berita yang datang silih berganti, dari foto-foto yang membuat dada sesak, dan dari pesan yang dibagikan berulang kali. Nama Al-Aqsa terasa begitu akrab, padahal yang paling sering kita kenal hanyalah luka yang mengelilinginya.`}</P>
      <P>{`Itu bukan sesuatu yang perlu disesali. Begitulah sebagian besar dari kita pertama kali berjumpa dengan nama ini, melalui rasa sebelum ilmu, melalui simpati sebelum pemahaman. Rasa itu tulus, sebagaimana kepedulian seorang mukmin kepada saudaranya. Namun rasa saja, betapapun tulusnya, tidak cukup untuk menopang kecintaan yang ingin bertahan lama. Tanpa ilmu, ia mudah meredup ketika berita berhenti mengalir dan mudah goyah ketika seseorang bertanya, memang mengapa Al-Aqsa begitu penting?`}</P>
      <P>{`Buku ini mengajakmu menjawab pertanyaan itu, dimulai dari empat pertanyaan yang akan kita telusuri bersama.`}</P>

      <PullIdea label="Empat Pertanyaan Utama">
        {`Mengapa dalam rangkaian Isra' Mi'raj, Rasulullah ﷺ lebih dahulu dibawa menuju Al-Aqsa sebelum mengalami Mi'raj ke langit? Jika kiblat kemudian dipindahkan menuju Ka'bah, apakah Al-Aqsa kehilangan kemuliaannya? Mengapa pada penghujung fase Madinah, perhatian Rasulullah ﷺ semakin berkaitan dengan wilayah Syam? Dan mengapa perhatian terhadap wilayah itu tetap berlanjut dalam keputusan para sahabat setelah beliau wafat?`}
      </PullIdea>

      <P>{`Empat pertanyaan tersebut bukan sekadar pembuka. Keempatnya adalah peta. Bab demi bab dalam buku ini akan menuntunmu menapaki peta itu satu demi satu, dari makna spiritual, menuju kedudukan syariat, menuju strategi dakwah dalam sejarah, hingga sampai pada estafet yang diteruskan generasi sahabat.`}</P>
      <P>{`Kamu akan melihat bagaimana rangkaian Isra' Mi'raj menghadirkan Al-Aqsa sebagai tempat yang diberkahi, dan bagaimana dari rangkaian itu kita dapat membaca posisinya sebagai simpul kesinambungan risalah. Islam tidak lahir di ruang kosong. Ia datang membenarkan dan menyempurnakan risalah tauhid yang dibawa oleh para nabi sebelumnya.`}</P>
      <P>{`Kamu akan menelusuri bagaimana kedudukan Al-Aqsa sebagai kiblat awal umat Islam tidak gugur ketika arah kiblat berubah. Perpindahan itu menempatkan setiap tempat suci dalam kedudukan syar'i yang tepat, tanpa menghapus kemuliaan yang telah ditetapkan baginya.`}</P>
      <P>{`Kamu akan membaca bagaimana perhatian Rasulullah ﷺ terhadap Syam tidak dapat disederhanakan sebagai ambisi perluasan wilayah. Ia terlihat dalam rangkaian dakwah, diplomasi, perlindungan terhadap utusan, keamanan, dan kesiapan menghadapi perubahan di kawasan utara.`}</P>
      <P>{`Dan kamu akan mengikuti bagaimana perhatian terhadap Syam berlanjut melalui keputusan para sahabat setelah wafat Nabi ﷺ, dari pelaksanaan pasukan Usamah pada masa Abu Bakar hingga perkembangan pada masa Umar, sampai memasuki babak penyerahan Baitul Maqdis kepada pemerintahan Islam.`}</P>
      <P>{`Buku ini bukan sekadar kumpulan informasi tentang Al-Aqsa. Ini adalah ruang untuk membangun pemahaman yang utuh, dari ayat, hadits, peristiwa sirah, dan perjalanan generasi setelah Nabi ﷺ, dilihat sebagai bagian-bagian yang saling berhubungan, tanpa mencampur tingkat kepastian masing-masing.`}</P>
      <P>{`Di situlah letak perbedaan antara mengenal dan memahami. Mengenal cukup dengan mendengar sebuah nama berulang kali. Memahami menuntut ketekunan, kerendahan hati, dan keberanian untuk tidak tergesa-gesa menyimpulkan.`}</P>
      <P>{`Pada akhirnya, kecintaan yang paling kokoh bukanlah kecintaan yang paling keras suaranya, melainkan yang paling dalam akarnya. Cinta yang berdiri di atas ilmu tidak mudah padam ketika berita berhenti mengalir, sebab ia tidak sepenuhnya bergantung pada berita untuk tetap hidup.`}</P>
      <p className="mb-0 text-justify">{`Selamat memasuki halaman-halaman berikutnya. Mari kita mulai, dari berita menuju pengetahuan.`}</p>
    </EbookSection>
  );
}

export function CaraMembaca() {
  return (
    <EbookSection id="cara-membaca" kicker="Panduan" title="Cara Membaca Buku Ini">
      <P>{`Memahami Al-Aqsa berarti melihat ayat, hadits, riwayat sirah, dan pembacaan makna sebagai bagian-bagian yang saling berhubungan, tanpa mencampur tingkat kepastian masing-masing. Setiap kali menemukan sebuah pernyataan dalam buku ini, ajukan dua pertanyaan: dari mana ia berasal, dan seberapa kuat dasar yang menopangnya. Jawabannya akan membawamu ke salah satu dari empat lapis berikut.`}</P>

      <LayerGrid>
        <LayerCard title="Lapis Pertama — Al-Qur'an">
          {`Kalam Allah yang teksnya diwariskan secara mutawatir, kepastian sumbernya tidak diragukan. Namun memahami maknanya tetap membutuhkan tafsir para ulama.`}
        </LayerCard>
        <LayerCard title="Lapis Kedua — Hadits">
          {`Memiliki tingkat kekuatan yang beragam, dibaca melalui sanad, matan, dan penilaian ahli hadits. Setiap kutipan disertai koleksi asal dan statusnya.`}
        </LayerCard>
        <LayerCard title="Lapis Ketiga — Riwayat Sirah dan Sejarah Awal Islam">
          {`Sebagian bersanad dan dapat diperbandingkan, sebagian lain berasal dari kitab sejarah dengan tingkat kehati-hatian berbeda.`}
        </LayerCard>
        <LayerCard title="Lapis Keempat — Kajian Modern dan Satu Cara Membaca">
          {`Membantu memahami konteks dan pelajaran, tetapi tetap analisis, bukan dalil. Pijakannya selalu kembali kepada Al-Qur'an, hadits, dan sumber sirah.`}
        </LayerCard>
      </LayerGrid>

      <P>{`Keempat lapis ini saling berkaitan. Sebuah bab biasanya dimulai dari nash, dilengkapi riwayat dan konteks sejarah, lalu bergerak menuju pembacaan makna. Namun alur ini tidak boleh mengaburkan bobotnya. Analisis, betapapun masuk akal, tidak pernah setara dengan kepastian Al-Qur'an atau hadits sahih yang menjadi dasarnya.`}</P>

      <SectionHead>{`Tentang Catatan Kaki dan Rujukan`}</SectionHead>
      <P>{`Kutipan hadits disertai nama koleksi, kitab atau bab, perawi, status, dan nomor edisi, karena penomoran dapat berbeda antar cetakan. Daftar rujukan lengkap tersusun per kategori di akhir buku.`}</P>

      <SectionHead>{`Tentang Istilah Al-Aqsa dan Baitul Maqdis`}</SectionHead>
      <P>{`Al-Masjid al-Aqsa merujuk pada kawasan suci yang diberkahi, tidak terbatas pada bangunan Masjid Qibli yang dikenal hari ini. Baitul Maqdis, dalam sumber klasik, dapat merujuk pada kawasan itu sendiri atau Jerusalem secara lebih luas, tergantung konteks.`}</P>
      <p className="mb-0 text-justify">{`Dengan bekal ini, kamu siap memasuki bab pertama: bukan sebagai pembaca yang menerima pernyataan secara mentah, melainkan yang tahu kapan berpegang pada nash, kapan membaca riwayat dengan hati-hati, dan kapan menimbang sebuah analisis sebagai salah satu kemungkinan pembacaan.`}</p>
    </EbookSection>
  );
}

const TIMELINE_ITEMS = [
  {
    time: "sekitar 620–621 M",
    event: "Isra' dan Mi'raj",
    desc: "Al-Aqsa disebut sebagai tujuan Isra', kawasan yang diberkahi, dan tempat salat sebelum Mi'raj.",
  },
  {
    time: "1–2 H / 622–624 M",
    event: "Kiblat menuju Baitul Maqdis, kemudian dipindahkan",
    desc: "Umat diuji untuk mengikuti Rasul. Ka'bah ditetapkan sebagai arah salat, sedangkan kemuliaan Al-Aqsa tetap terjaga.",
  },
  {
    time: "sekitar 6–7 H",
    event: "Surat kepada Heraklius",
    desc: "Dakwah memasuki ruang diplomatik yang lebih luas.",
  },
  {
    time: "8 H / 629 M",
    event: "Mu'tah",
    desc: "Tiga pemimpin gugur berurutan. Peristiwa memperlihatkan kehormatan utusan dan estafet komando.",
  },
  {
    time: "9 H / 630 M",
    event: "Tabuk",
    desc: "Mobilisasi besar menuju kawasan utara menjadi ujian kesiapan, loyalitas, dan kemampuan mengalahkan penundaan.",
  },
  {
    time: "11 H / 632 M",
    event: "Pasukan Usamah",
    desc: "Penunjukan pemimpin muda menjadi pelajaran tentang kelayakan, kepercayaan, dan amanah.",
  },
  {
    time: "632–634 M",
    event: "Konsolidasi Abu Bakar",
    desc: "Pasukan Usamah diberangkatkan, kemudian gerak ke Irak dan Syam memasuki fase baru.",
  },
  {
    time: "634 M",
    event: "Ajnadayn",
    desc: "Salah satu kemenangan awal penting di kawasan Palestina dan Syam.",
  },
  {
    time: "636 M",
    event: "Yarmuk",
    desc: "Titik balik utama yang melemahkan kekuatan lapangan Romawi di Syam.",
  },
  {
    time: "637–638 M",
    event: "Penyerahan Baitul Maqdis",
    desc: "Umar datang menerima penyerahan. Sumber berbeda dalam menempatkan tahapan peristiwa.",
  },
];

export function TimelineSection() {
  return (
    <EbookSection id="timeline" kicker="Peta Waktu" title="Timeline Lintas Bab">
      <Timeline items={TIMELINE_ITEMS} />
    </EbookSection>
  );
}

export function FrontMatter() {
  return (
    <>
      <KataPengantar />
      <Prolog />
      <CaraMembaca />
      <TimelineSection />
    </>
  );
}
