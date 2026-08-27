import {
  EbookSection,
  P,
  IntroLine,
  QuoteBlock,
  PullIdea,
  SectionHead,
  ReflectBox,
  NoteBox,
  ChapterNav,
  ChapterHero,
} from "../ebook-ui";

export function Bab4() {
  return (
    <EbookSection
      id="bab4"
      kicker="Bab Empat"
      title="Pasukan Usamah dan Estafet Sejarah"
      paper
    >
      <ChapterHero label="Ilustrasi pembuka Bab Empat" />

      <PullIdea label="Gagasan Utama">
        {`Estafet sejarah adalah kesinambungan tanggung jawab, bukan pewarisan satu blueprint politik.`}
      </PullIdea>

      <P>{`Menjelang akhir hayatnya, Rasulullah ﷺ menunjuk Usamah bin Zaid untuk memimpin sebuah pasukan menuju kawasan utara yang terhubung dengan Syam.`}</P>

      <IntroLine>{`Abdullah bin Umar meriwayatkan,`}</IntroLine>
      <QuoteBlock
        arabic={`بَعَثَ النَّبيُّ صلَّى اللهُ عليه وسلَّم بَعثًا، وأمَّرَ عليهم أُسامةَ بنَ زَيدٍ، فطَعَنَ بَعضُ النَّاسِ في إمارَتِه`}
        cite="HR. al-Bukhari no. 3730 dan Muslim no. 2426"
      >
        <p>{`Rasulullah ﷺ mengirim sebuah pasukan dan mengangkat Usamah bin Zaid sebagai panglimanya. Sebagian orang kemudian mencela kepemimpinannya. Maka Nabi ﷺ bersabda: "Jika kalian mencela kepemimpinannya, sungguh dahulu kalian juga pernah mencela kepemimpinan ayahnya. Demi Allah, sesungguhnya ayahnya benar-benar layak menjadi seorang pemimpin, dan termasuk orang yang paling aku cintai. Adapun Usamah ini, sungguh ia juga termasuk orang yang paling aku cintai setelah ayahnya."`}</p>
      </QuoteBlock>

      <P>{`Sebagian orang mempersoalkan kepemimpinannya karena usianya yang masih muda. Rasulullah ﷺ tetap mempertahankan keputusan tersebut dan menegaskan kelayakan Usamah, sebagaimana sebelumnya beliau juga membela kepemimpinan ayahnya, Zaid bin Haritsah.`}</P>
      <P>{`Dari keteguhan Rasulullah ﷺ mempertahankan keputusan tersebut, kita dapat membaca satu pelajaran penting. Kepercayaan tidak ditentukan oleh usia dan kedudukan sosial semata. Ia juga dibangun di atas kelayakan, pengalaman, dan keyakinan bahwa seseorang mampu menunaikan amanah yang diberikan kepadanya.`}</P>

      <QuoteBlock cite="Dr. Ali Ash-Shalabi, Durus wa al-'Ibar min Infadz ash-Shiddiq Jaisy Usamah">
        <p>{`"Ini menjadi pelajaran penting bagi generasi muda tentang peran dan kedudukan mereka dalam mengabdi kepada Islam. Jika kita menelusuri kembali sejarah dakwah Islam pada periode Makkah maupun Madinah, akan ditemukan banyak bukti bahwa para pemuda memegang peranan besar dalam menjaga Al-Qur'an dan Sunnah, mengelola urusan pemerintahan, ikut berjihad di jalan Allah, serta berdakwah menyebarkan Islam."`}</p>
      </QuoteBlock>

      <P>{`Ketika pasukan itu masih berada dalam tahap persiapan untuk menjalankan misinya, Rasulullah ﷺ wafat. Madinah segera memasuki masa yang sangat berat. Beberapa kelompok mengaku sebagai nabi, sebagian orang menolak membayar zakat, dan sebagian lainnya keluar dari ketaatan kepada pemerintahan Islam.`}</P>
      <p className="mb-0 text-justify">{`Keputusan yang sebelumnya berada di bawah kepemimpinan Nabi ﷺ kini harus ditangani oleh khalifah pertama, di tengah krisis yang belum pernah dihadapi umat ini sebelumnya.`}</p>

      <SectionHead>{`Keputusan yang Tidak Ditunda`}</SectionHead>
      <P>{`Dalam keadaan tersebut, muncul pertimbangan agar keberangkatan pasukan Usamah ditunda. Madinah membutuhkan kekuatan untuk menghadapi berbagai ancaman yang datang dari dalam Jazirah.`}</P>
      <P>{`Namun, dalam riwayat sejarah, Abu Bakar menegaskan bahwa pasukan yang telah dipersiapkan Rasulullah ﷺ harus tetap diberangkatkan. Ia tidak mengubah keputusan tersebut hanya karena keadaan telah berganti dan tekanan semakin besar.`}</P>
      <P>{`Yang diteruskan secara langsung oleh Abu Bakar adalah pasukan Usamah, bukan satu proyek politik yang secara eksplisit dirumuskan untuk membebaskan Baitul Maqdis. Di tengah krisis, ia memilih menjalankan sesuatu yang telah ditetapkan Rasulullah ﷺ, sementara persoalan di dalam negeri tetap harus dihadapi secara bersamaan.`}</P>
      <P>{`Dari keputusan tersebut, kita dapat membaca pelajaran tentang keteguhan. Menjaga amanah tidak selalu dilakukan ketika keadaan mendukung. Terkadang, justru pada saat keadaan berubah dan alasan untuk menunda terasa paling kuat, kesungguhan seseorang diuji.`}</P>
      <p className="mb-0 text-justify">{`Pasukan Usamah kemudian diberangkatkan. Abu Bakar sendiri memimpin penanganan krisis di Jazirah Arab.`}</p>

      <SectionHead>{`Ketika Keseimbangan Syam Berubah`}</SectionHead>
      <P>{`Setelah krisis di Jazirah mulai terkendali, pemerintahan Abu Bakar mengirim beberapa pasukan menuju Irak dan Syam. Di antara para panglima utama yang bergerak menuju kawasan Syam terdapat Abu Ubaidah bin Jarrah, Amr bin Ash, Yazid bin Abi Sufyan, dan Syurahbil bin Hasanah. Dalam fase awal operasi tersebut, Khalid bin Walid juga dipindahkan dari front Irak untuk memperkuat pasukan Muslim di Syam.`}</P>
      <P>{`Pada 634 M, pasukan Muslim meraih kemenangan penting dalam Pertempuran Ajnadayn. Sumber-sumber sejarah tidak selalu memberikan rincian yang sama mengenai susunan komando kedua pihak. Namun, pertempuran tersebut dapat ditempatkan sebagai salah satu titik penting dalam melemahnya pertahanan Romawi di Palestina.`}</P>
      <P>{`Ketika Abu Bakar wafat, kepemimpinan berpindah kepada Umar bin Khattab. Salah satu keputusan Umar adalah menegaskan kepemimpinan Abu Ubaidah bin Jarrah sebagai komandan utama pasukan Muslim di front Syam.`}</P>
      <P>{`Alasan perubahan komando tersebut disampaikan dalam bentuk yang beragam dalam sumber sejarah. Sebagian pembacaan melihatnya sebagai upaya menjaga disiplin komando dan mencegah ketergantungan umat kepada satu figur. Pembacaan lain menempatkannya dalam konteks administrasi dan kebijakan pemerintahan Umar yang lebih luas.`}</P>
      <P>{`Sejumlah riwayat menggambarkan Khalid menerima perubahan komando dan tetap mengambil bagian dalam operasi berikutnya.`}</P>
      <P>{`Pada 636 M, pasukan Muslim meraih kemenangan besar dalam Pertempuran Yarmuk. Kemenangan tersebut meruntuhkan kekuatan lapangan utama Romawi dan mengubah keseimbangan kekuatan di Syam. Namun, Yarmuk tidak langsung mengakhiri seluruh perlawanan Romawi di kawasan tersebut.`}</P>
      <P>{`Baitul Maqdis termasuk di antara kota-kota yang kemudian menghadapi pengepungan. Dengan demikian, Yarmuk tidak perlu disebut sebagai akhir dari seluruh proses, tetapi sebagai salah satu perubahan besar yang membuka fase berikutnya dalam sejarah Syam.`}</P>
      <P>{`Setiap peristiwa dalam rangkaian ini memiliki sebab dan konteksnya sendiri. Pengiriman pasukan pada masa Abu Bakar, perubahan komando pada masa Umar, Ajnadayn, dan Yarmuk bukanlah langkah-langkah dari satu rencana yang seluruh ujungnya telah diketahui sejak awal.`}</P>
      <p className="mb-0 text-justify">{`Jika dibaca secara retrospektif, rangkaian tersebut memperlihatkan kesinambungan keterlibatan pemerintahan Islam dengan kawasan Syam. Namun, pola itu terlihat dari masa sesudahnya.`}</p>

      <SectionHead>{`Ketika Baitul Maqdis Diserahkan`}</SectionHead>
      <P>{`Setelah Yarmuk, pasukan Muslim melanjutkan operasi terhadap kota-kota yang masih bertahan. Menurut sejumlah kronik, Baitul Maqdis dikepung selama beberapa bulan. Kota ini memiliki pertahanan yang kuat dan kedudukan penting dalam kawasan tersebut.`}</P>
      <P>{`Sejumlah riwayat sejarah menyebut bahwa Patriark Sophronius, pemimpin gerejawi kota, meminta agar penyerahan diterima langsung oleh Khalifah Umar. Permintaan ini kemudian disampaikan kepada Madinah, dan Umar datang menuju Baitul Maqdis untuk menerima penyerahan kota.`}</P>
      <P>{`Penanggalan peristiwa tersebut tidak sepenuhnya sama dalam berbagai rekonstruksi sejarah. Karena itu, waktu penyerahannya lebih aman ditempatkan sekitar 637 sampai 638 M, bukan pada satu angka tahun yang dianggap mutlak.`}</P>
      <P>{`Citra Umar sebagai pemimpin yang hidup sederhana telah menjadi bagian penting dari cara generasi berikutnya mengingat peristiwa tersebut. Dalam tradisi Islam, penyerahan sebuah kota besar tidak dikenang melalui pesta kemegahan seorang penakluk, tetapi melalui gambaran seorang khalifah yang tidak membiarkan kemenangan menjauhkannya dari kesederhanaan.`}</P>
      <p className="mb-0 text-justify">{`Sumber-sumber sejarah juga menyebut adanya jaminan keamanan bagi penduduk Aelia dalam konteks penyerahan kota. Jaminan tersebut hadir dalam beberapa versi dengan redaksi dan klausul yang tidak sepenuhnya sama. Dokumen ini perlu dibedakan dari teks yang berkembang kemudian dan dikenal sebagai al-Syuruth al-'Umariyyah, yaitu kumpulan ketentuan mengenai komunitas non-Muslim.`}</p>

      <IntroLine>{`Teks Jaminan Keamanan Aelia:`}</IntroLine>
      <QuoteBlock>
        <p>{`"Inilah jaminan keamanan yang diberikan oleh hamba Allah, Umar, Amirul Mukminin, kepada penduduk Ilya' (Al Quds/Jerusalem). Beliau memberikan jaminan keamanan bagi jiwa, harta, gereja-gereja, salib-salib, orang yang sakit maupun yang sehat, serta seluruh pemeluk agama mereka. Gereja-gereja mereka tidak boleh ditempati, tidak boleh dihancurkan, tidak boleh dikurangi sedikit pun bangunan atau lahannya. Mereka tidak boleh dipaksa meninggalkan agama mereka, dan tidak seorang pun dari mereka boleh disakiti.`}</p>
        <p>{`Penduduk Ilya' wajib membayar jizyah, sebagaimana yang dibayarkan oleh penduduk kota-kota lain. Siapa pun di antara mereka yang keluar dari kota, maka keselamatan jiwa dan hartanya dijamin hingga tiba di tempat yang aman. Adapun yang tetap tinggal, maka ia juga berada dalam jaminan keamanan dan berkewajiban membayar jizyah sebagaimana penduduk Ilya' lainnya.`}</p>
        <p>{`Atas seluruh isi dokumen ini berlaku perjanjian Allah, jaminan Rasul-Nya, jaminan para khalifah, dan jaminan seluruh kaum mukminin, selama mereka menunaikan kewajiban membayar jizyah."`}</p>
      </QuoteBlock>

      <SectionHead>{`Estafet Tanpa Wasiat Politik Tunggal`}</SectionHead>
      <P>{`Jika setiap peristiwa ini dipandang secara terpisah, ia tampak sebagai keputusan-keputusan yang berdiri sendiri: penunjukan Usamah, keteguhan Abu Bakar di tengah krisis, perubahan komando dan rangkaian kemenangan pada masa Umar, hingga penyerahan Baitul Maqdis. Namun ketika disusun dalam satu rangkaian sejarah, arah perjalanannya terlihat jelas, menuju Syam, hingga akhirnya Baitul Maqdis berada di bawah naungan Islam.`}</P>
      <P>{`Rasulullah ﷺ memulai langkah pertama dengan mengirim pasukan Usamah menuju perbatasan Syam. Abu Bakar, meski Madinah sedang dilanda krisis, tetap bersikeras memberangkatkan pasukan itu, lalu memperluas ekspedisi ke Irak dan Syam setelah Jazirah Arab berhasil dipersatukan. Umar melanjutkan estafet tersebut dengan mengatur strategi dan menunjuk para panglima terbaik, hingga akhirnya datang sendiri menerima penyerahan Baitul Maqdis.`}</P>
      <P>{`Memang tidak ada riwayat yang menyebut Rasulullah ﷺ menyusun sebuah blueprint politik yang secara eksplisit memerintahkan pembebasan Baitul Maqdis. Namun arah perjalanan sejarah menunjukkan bahwa setiap keputusan besar itu saling menyambung, menjadi mata rantai yang pada akhirnya mengantarkan kaum Muslimin kepada pembebasan kota suci tersebut. Yang berpindah dari fase kenabian menuju masa Khulafa' al-Rasyidin bukan hanya tanggung jawab kepemimpinan semata, melainkan juga arah yang sama, yang terus dijaga oleh setiap generasi yang menerimanya.`}</P>
      <P>{`Estafet dalam bab ini bukan sekadar kesinambungan nilai dan kepemimpinan, tetapi juga kesinambungan sebuah misi besar. Usamah tidak menghadapi persoalan yang sama dengan Umar, sebagaimana Abu Bakar tidak memimpin dalam keadaan yang sama dengan Rasulullah ﷺ. Namun, di tengah perubahan situasi dan tantangan yang terus berkembang, mereka tetap menjaga arah perjuangan yang sama.`}</P>
      <P>{`Karena itulah, pembebasan Baitul Maqdis tidak lahir dari satu keputusan besar yang berdiri sendiri, melainkan merupakan buah dari rangkaian kepemimpinan yang saling menyambung, hingga cita-cita itu terwujud pada masa Umar bin Khattab.`}</P>
      <p className="mb-0 text-justify">{`Perjalanan panjang ini, dari sebuah pasukan yang dipimpin seorang pemuda hingga penyerahan sebuah kota kepada seorang khalifah yang dikenang karena kesederhanaannya, mengingatkan kita bahwa sejarah besar jarang dibentuk oleh satu keputusan yang menentukan segalanya. Karena itulah, pembebasan Baitul Maqdis bukanlah hasil kerja satu orang atau satu masa, melainkan buah dari estafet kepemimpinan yang dijaga dengan istiqamah dari satu generasi ke generasi berikutnya.`}</p>

      <ReflectBox>{`Setelah melihat bahwa Usamah, Abu Bakar, para panglima, dan Umar menghadapi keadaan yang berbeda, apa yang dapat kita pelajari tentang menjaga arah tanpa harus mengulang cara yang sama?`}</ReflectBox>

      <NoteBox>
        <b>{`Catatan Istilah.`}</b>{` Dalam literatur berbahasa Inggris, al-Syuruth al-'Umariyyah sering disebut Pact of Umar. Istilah ini tidak selalu merujuk pada jaminan keamanan yang diberikan kepada penduduk Aelia dalam konteks penyerahan Baitul Maqdis.`}
      </NoteBox>

      <ChapterNav
        prev={{ href: "#bab3", label: "Sebelumnya", title: "Bab Tiga — Horizon Syam" }}
        next={{ href: "#epilog", label: "Selanjutnya", title: "Epilog" }}
      />
    </EbookSection>
  );
}
