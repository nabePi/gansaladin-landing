import {
  EbookSection,
  P,
  SectionHead,
  GlossEntry,
  RefCat,
  RefItem,
  ContactRow,
} from "../ebook-ui";

export function Epilog() {
  return (
    <EbookSection id="epilog" kicker="Epilog" title="Yang Telah Kita Pelajari Bersama">
      <P>{`Perjalanan ini dimulai dari sebuah malam, ketika Al-Aqsa menjadi persinggahan sebelum langit dibuka, dan berakhir pada sebuah kota yang diserahkan kepada seorang khalifah yang datang dengan kesederhanaan. Di antara keduanya, terbentang kurang dari dua dekade sejarah yang melibatkan seorang Nabi ﷺ, para sahabatnya, dan generasi yang melanjutkan amanah tersebut.`}</P>
      <P>{`Ada sesuatu yang berubah dalam cara memandang Al-Aqsa bagi siapa pun yang menelusuri keempat bab ini dengan saksama. Al-Aqsa bukan lagi sekadar nama tempat yang muncul dalam berita atau simbol yang diperebutkan maknanya oleh berbagai kepentingan hari ini.`}</P>
      <P>{`Ia adalah simpul tempat risalah para nabi bertemu, kiblat awal kaum Muslimin sebelum mereka diperintahkan menghadap Ka'bah, serta bagian dari horizon dakwah yang semakin nyata pada fase akhir kehidupan Rasulullah ﷺ.`}</P>
      <P>{`Kedudukan sucinya berakar pada wahyu dan ditegaskan oleh riwayat-riwayat yang sahih. Karena itu, nilainya tidak bergantung pada naik-turunnya kepentingan politik pada zaman mana pun, termasuk zaman kita sendiri.`}</P>
      <P>{`Namun, setelah menelusuri seluruh perjalanan ini, kita dapat melihat adanya satu benang merah yang menghubungkan setiap peristiwa. Memang benar, perpindahan kiblat, Perang Mu'tah, Tabuk, pengangkatan Usamah, keteguhan Abu Bakar, hingga kepemimpinan Umar lahir dari konteks dan tantangannya masing-masing, dan tidak satu pun riwayat menyebutkan bahwa seluruhnya dirancang sebagai satu skenario politik yang dirinci sejak awal.`}</P>
      <P>{`Namun ketika seluruh peristiwa itu dirangkai dalam satu alur sejarah, arah perjalanannya terlihat jelas: semakin mendekatkan kaum Muslimin kepada Syam, hingga akhirnya Baitul Maqdis berada di bawah naungan Islam. Membaca arah ini adalah membaca pola secara retrospektif, sebuah cara memandang yang bernilai untuk mengambil pelajaran, namun tetap berbeda kedudukannya dari nash yang menjadi pijakan setiap bab dalam buku ini.`}</P>
      <P>{`Karena itu, pembebasan Baitul Maqdis bukanlah hasil dari satu keputusan yang berdiri sendiri, melainkan puncak dari rangkaian langkah yang saling menyambung: Rasulullah ﷺ meletakkan orientasi dan membuka jalannya, Abu Bakar memastikan arah itu tidak terhenti meskipun dihadang krisis besar, dan Umar melanjutkan momentum tersebut hingga Allah menganugerahkan penyerahan Baitul Maqdis kepada kaum Muslimin.`}</P>
      <P>{`Pada akhirnya, muncul pertanyaan: dari mana seseorang mulai mengambil bagian dalam estafet ini?`}</P>
      <P>{`Jawabannya: mulai ikut serta, dari manapun posisinya. Usamah tidak memulai perjalanannya dengan membebaskan sebuah kota. Ia memulainya dengan menerima amanah kepemimpinan yang dipercayakan kepadanya, meski usianya masih muda.`}</P>
      <P>{`Keteguhan Abu Bakar pun tidak perlu dibaca sebagai bagian dari sebuah skenario besar tentang Syam. Yang tampak jelas adalah keputusannya untuk tidak menunda amanah yang telah ditetapkan Rasulullah ﷺ, meskipun keadaan Madinah sedang sangat sulit.`}</P>
      <P>{`Mengambil bagian dalam estafet semacam ini, bagi kita hari ini, mungkin dimulai dari sesuatu yang jauh lebih sederhana: kesungguhan menjaga apa yang telah dipercayakan kepada kita, di tempat dan zaman yang kita jalani sendiri, tanpa harus menunggu keadaan menjadi sempurna terlebih dahulu.`}</P>
      <P>{`Buku ini ditutup bukan dengan ajakan menyalin sejarah, sebab keadaan, pelaku, dan tantangan tidak pernah kembali dalam bentuk yang sama. Yang dapat diteruskan adalah kualitas manusia yang membentuknya: cara mereka menjaga amanah, membaca keadaan, dan mengambil keputusan di tengah keterbatasan.`}</P>

      <SectionHead>{`Tentang Kelanjutan Ikhtiar Ini`}</SectionHead>
      <p className="mb-0 text-justify">{`Semangat menjaga dan meneruskan amanah sejarah inilah yang melandasi berbagai ruang belajar yang sedang dibangun untuk generasi setelah kita.`}</p>
    </EbookSection>
  );
}

export function TentangGensa() {
  return (
    <EbookSection id="tentang-gensa" kicker="Penerbit" title="Tentang GenSa">
      <P>{`GenSa, kependekan dari Generasi Saladin, adalah inisiatif edukasi dan literasi yang dikembangkan oleh Yayasan Saladin Peradaban Berilmu. Melalui berbagai program pembelajaran, media, dan ruang kolaborasi, GenSa berupaya mendekatkan generasi muda kepada sejarah, sirah, dan warisan peradaban Islam.`}</P>
      <P>{`Ikhtiar ini berangkat dari keyakinan bahwa sejarah tidak cukup hanya dikenang. Ia perlu dipahami secara jujur, ditelusuri melalui sumber yang dapat dipertanggungjawabkan, dan dibaca sebagai bekal untuk menghadapi persoalan zaman.`}</P>
      <P>{`Semangat tersebut terangkum dalam kalimat yang menjadi pijakan GenSa:`}</P>
      <p className="my-6 text-center text-[1.3em] font-black text-[#7A1524]">
        {`Learn History. Repeat Victory.`}
      </p>
      <P>{`Kalimat ini bukan ajakan untuk menyalin peristiwa masa lalu secara harfiah. Setiap zaman memiliki keadaan, pelaku, dan tantangannya sendiri. Yang dapat dipelajari dan diteruskan adalah kualitas manusia serta prinsip yang memungkinkan suatu generasi menghadapi zamannya: kesungguhan dalam belajar, keteguhan menjaga amanah, keberanian mengambil tanggung jawab, dan kemampuan bertindak di tengah keterbatasan.`}</P>
      <p className="mb-0 text-justify">{`Buku yang berada di tangan pembaca merupakan salah satu bagian dari ikhtiar tersebut. GenSa berupaya menyajikan sejarah melalui pendekatan yang teliti terhadap sumber, tanpa menjadikannya terasa jauh dari pembaca umum.`}</p>

      <SectionHead>{`Program dan Kanal GenSa`}</SectionHead>
      <p className="mb-[18px] text-justify">
        <b className="text-[#7A1524]">{`GenSa TV`}</b>
        <br />
        {`Menghadirkan konten video mengenai sejarah, sirah, pembentukan karakter, dan peradaban Islam melalui berbagai seri dokumenter, pembelajaran, podcast, dan refleksi.`}
      </p>
      <p className="mb-[18px] text-justify">
        <b className="text-[#7A1524]">{`GenSa Class`}</b>
        <br />
        {`Program pembelajaran daring yang membahas tema-tema sejarah dan peradaban secara lebih mendalam, terarah, dan terstruktur.`}
      </p>
      <p className="mb-[18px] text-justify">
        <b className="text-[#7A1524]">{`Rumah Literasi GenSa`}</b>
        <br />
        {`Dirintis sebagai ruang baca, belajar, dan diskusi yang mempertemukan generasi muda dengan literatur sejarah dan peradaban Islam.`}
      </p>

      <SectionHead>{`Kontak dan Tautan Resmi`}</SectionHead>
      <ContactRow k="Website">{`gensaladin.id`}</ContactRow>
      <ContactRow k="Instagram">{`@gen.saladin`}</ContactRow>
      <ContactRow k="YouTube">{`GenSa TV`}</ContactRow>
    </EbookSection>
  );
}

const GLOSSARY = [
  { term: "Aelia", desc: "Nama yang digunakan untuk Jerusalem/Baitul Maqdis dalam konteks administratif pada periode penyerahan kota kepada Khalifah Umar bin Khattab, sekitar 637–638 M." },
  { term: "Ajnadayn", desc: "Nama pertempuran antara pasukan Muslim dan Romawi pada 634 M, salah satu titik penting dalam melemahnya pertahanan Romawi di Palestina, mendahului Pertempuran Yarmuk." },
  { term: "al-Syuruth al-'Umariyyah", desc: "Kumpulan ketentuan mengenai kedudukan komunitas non-Muslim (ahl al-dzimmah) yang berkembang dan dikodifikasi pada periode setelah masa Umar bin Khattab. Perlu dibedakan dari Jaminan Keamanan Umar bagi Penduduk Aelia." },
  { term: "Baitul Maqdis", desc: "Istilah dalam literatur Islam untuk kawasan suci atau kota Al Quds/Jerusalem. Cakupannya dapat berbeda sesuai konteks sumber." },
  { term: "Estafet", desc: "Dalam buku ini, istilah yang menggambarkan kesinambungan tanggung jawab, nilai, dan keputusan kepemimpinan dari satu generasi ke generasi berikutnya." },
  { term: "Hadits sahih", desc: "Riwayat perkataan, perbuatan, atau ketetapan Rasulullah ﷺ yang telah melalui penilaian ketat para ulama hadits dan dinyatakan memenuhi syarat kesahihan sanad dan matan." },
  { term: "Isra'", desc: "Perjalanan malam Rasulullah ﷺ dari Masjidil Haram di Makkah menuju Masjidil Aqsa di Baitul Maqdis, sebagaimana disebutkan dalam QS Al-Isra' [17]: 1." },
  { term: "Istinbath", desc: "Proses penyimpulan atau penggalian makna dan hukum dari nash oleh para ulama, berbeda dari nash itu sendiri." },
  { term: "Kiblat", desc: "Arah yang dituju umat Islam ketika melaksanakan salat. Awalnya menghadap Baitul Maqdis, kemudian dipindahkan menghadap Ka'bah berdasarkan QS Al-Baqarah [2]: 142-144." },
  { term: "Khulafa' al-Rasyidin", desc: "Empat khalifah pertama dalam sejarah Islam setelah wafatnya Rasulullah ﷺ: Abu Bakar, Umar bin Khattab, Utsman bin Affan, dan Ali bin Abi Thalib." },
  { term: "Mi'raj", desc: "Perjalanan naiknya Rasulullah ﷺ ke langit dari Baitul Maqdis, kelanjutan dari peristiwa Isra'." },
  { term: "Mu'tah", desc: "Ekspedisi militer pada tahun kedelapan hijriah. Sejumlah sumber sirah mengaitkan pemberangkatannya dengan terbunuhnya al-Harits bin Umair al-Azdi." },
  { term: "Nash", desc: "Teks eksplisit dari Al-Qur'an dan hadits sahih, sebagai lawan dari istinbath atau pembacaan pola." },
  { term: "Patriark", desc: "Gelar pemimpin gerejawi tertinggi dalam tradisi Kristen tertentu, seperti Sophronius yang memimpin Baitul Maqdis pada masa penyerahan kota." },
  { term: "Riddah", desc: "Gerakan kemurtadan dan penolakan sebagian kelompok terhadap otoritas pemerintahan Islam setelah wafatnya Rasulullah ﷺ." },
  { term: "Riwayat", desc: "Laporan atau catatan mengenai suatu peristiwa yang diteruskan dari generasi ke generasi, dengan tingkat kekuatan yang bervariasi." },
  { term: "Sanad", desc: "Rangkaian perawi yang menyampaikan suatu riwayat atau hadits, digunakan untuk menilai kekuatan dan keabsahan riwayat tersebut." },
  { term: "Sirah", desc: "Catatan sejarah kehidupan Rasulullah ﷺ, mencakup perjalanan hidup, dakwah, dan peristiwa-peristiwa penting di dalamnya." },
  { term: "Syam", desc: "Kawasan regional historis yang luas, mencakup area yang kini dikenal sebagai Palestina, Suriah, Yordania, dan Lebanon." },
  { term: "Tabuk", desc: "Mobilisasi besar yang dipimpin langsung oleh Rasulullah ﷺ menuju perbatasan Syam pada tahun kesembilan hijriah." },
  { term: "Yarmuk", desc: "Pertempuran besar antara pasukan Muslim dan Romawi pada 636 M, yang meruntuhkan kekuatan lapangan utama Romawi di Syam." },
];

export function Glosarium() {
  return (
    <EbookSection id="glosarium" kicker="Rujukan Istilah" title="Glosarium">
      {GLOSSARY.map((g) => (
        <GlossEntry key={g.term} term={g.term}>
          {g.desc}
        </GlossEntry>
      ))}
    </EbookSection>
  );
}

export function Rujukan() {
  return (
    <EbookSection id="rujukan" kicker="Bibliografi" title="Daftar Rujukan">
      <RefCat title="Al-Qur'an dan Tafsir">
        <RefItem>{`Kementerian Agama Republik Indonesia. Al-Qur'an dan Terjemahannya: Edisi Penyempurnaan 2019. Jakarta, 2019.`}</RefItem>
        <RefItem>{`Al-Tabari, Muhammad ibn Jarir. Jami' al-Bayan 'an Ta'wil Ay al-Qur'an.`}</RefItem>
        <RefItem>{`Ibn Katsir, Ismail ibn Umar. Tafsir al-Qur'an al-'Azim.`}</RefItem>
      </RefCat>

      <RefCat title="Hadits Sahih">
        <RefItem>{`Al-Bukhari, Muhammad ibn Ismail. Sahih al-Bukhari. Hadits no. 7, 1189, 3366, 4261–4262, 4418, dan 4469.`}</RefItem>
        <RefItem>{`Muslim ibn al-Hajjaj. Sahih Muslim. Hadits no. 162a, 172, 520a, 1397a, dan 2769a–b.`}</RefItem>
      </RefCat>

      <RefCat title="Sirah dan Sejarah Awal Islam">
        <RefItem>{`Al-Waqidi, Muhammad ibn Umar. al-Maghazi.`}</RefItem>
        <RefItem>{`Ibn Sa'd, Muhammad. al-Tabaqat al-Kubra.`}</RefItem>
        <RefItem>{`Al-Tabari, Muhammad ibn Jarir. Tarikh al-Rusul wa al-Muluk.`}</RefItem>
        <RefItem>{`Al-Baladzuri, Ahmad ibn Yahya. Futuh al-Buldan.`}</RefItem>
        <RefItem>{`Ibn Katsir, Ismail ibn Umar. al-Bidayah wa al-Nihayah.`}</RefItem>
      </RefCat>

      <RefCat title="Fiqh Klasik">
        <RefItem>{`Ibn Qayyim al-Jawziyyah. Ahkam Ahl al-Dhimmah. Ed. Yusuf al-Bakri dan Ahmad al-'Ararūri. Dammam: Dar Ramadi li-l-Nashr, 1418 H/1997 M.`}</RefItem>
      </RefCat>

      <RefCat title="Kajian Modern">
        <RefItem>{`Levy-Rubin, Milka. "Shurut Umar and Its Alternatives: The Legal Debate throughout the Eighth and Ninth Centuries over the Status of the Dhimmis." Jerusalem Studies in Arabic and Islam 30 (2005): 170–206.`}</RefItem>
        <RefItem>{`Alkiek, Tesneem. Religious Minorities under Muslim Rule. Yaqeen Institute for Islamic Research, 2017.`}</RefItem>
        <RefItem>{`Al-Asykar, Usamah Jum'ah. Futuh Filisthin. Muassasah Filisthin li ats-Tsaqafah wa an-Nasyr.`}</RefItem>
      </RefCat>

      <div className="mt-[30px] rounded-md border border-dashed border-[#A8842B] bg-white px-5 py-4 text-[.92em] text-[#666]">
        <b className="text-[#7A1524]">{`Catatan Penelusuran.`}</b>{` Nomor hadits dan keterangan kitab atau bab dicantumkan pada akhir masing-masing bab. Penomoran dapat berbeda antar-edisi, sehingga pembaca disarankan menelusuri riwayat melalui nama koleksi, kitab, perawi, dan potongan matan.`}
      </div>
    </EbookSection>
  );
}
