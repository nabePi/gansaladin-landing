import {
  EbookSection,
  P,
  IntroLine,
  QuoteBlock,
  SectionHead,
  ReflectBox,
  ChapterNav,
  ChapterHero,
} from "../ebook-ui";

export function Bab1() {
  return (
    <EbookSection
      id="bab1"
      kicker="Bab Satu"
      title="Al-Aqsa dalam Isra' Mi'raj"
      sub="Al-Aqsa hadir dalam Isra' sebagai tempat yang diberkahi dan simpul kesinambungan risalah para nabi."
      paper
    >
      <ChapterHero label="Ilustrasi pembuka Bab Satu" />

      <P>{`Ada satu malam dalam sirah nabawiyah yang paling sering dituturkan dengan penuh kekaguman, tetapi paling jarang direnungkan susunan peristiwanya. Pada malam itu, Rasulullah ﷺ diperjalankan dari Masjidil Haram menuju Masjidil Aqsa. Dari sana, beliau mengalami Mi'raj ke langit, bertemu dengan para nabi, dan diperlihatkan sebagian tanda kebesaran Allah yang belum pernah beliau saksikan sebelumnya. Rangkaian peristiwa itu dikenal sebagai Isra' dan Mi'raj, salah satu peristiwa paling agung dalam sejarah kenabian.`}</P>
      <P>{`Namun ada satu hal yang mudah terlewat ketika perhatian kita langsung tertuju kepada perjalanan menuju langit. Sebelum mengalami Mi'raj, Rasulullah ﷺ lebih dahulu dibawa menuju sebuah tempat di bumi. Bukan ke sembarang tempat, melainkan ke Al-Aqsa, dan justru di situlah letak sesuatu yang layak direnungkan lebih dalam. Mengapa dalam rangkaian menuju langit yang begitu agung itu, Allah lebih dahulu menyebut sebuah tempat di bumi?`}</P>
      <P>{`Perjalanan menuju Al-Aqsa itu disebutkan dalam Al-Qur'an, sementara rangkaian Mi'raj ke langit baru diterangkan lebih lanjut melalui hadits-hadits sahih. Dalam salah satu riwayat, Rasulullah ﷺ menceritakan bahwa beliau dibawa dengan Buraq menuju Baitul Maqdis, menambatkan Buraq, memasuki masjid, dan melaksanakan salat, sebelum perjalanan menuju langit dilanjutkan.`}</P>

      <QuoteBlock
        arabic={`أنَّ النبي صلَّى اللَّه عليه وسلم أُتِيَ بالبراقِ ليلةَ أسري بِهِ ملجمًا مسرجًا فاستصعبَ عليْهِ فقالَ لَهُ جبريلُ أبمحمَّدٍ تفعلُ هذا فما رَكبَكَ أحدٌ أَكرمُ على اللَّهِ منْهُ قالَ : فارفضَّ عرقًا`}
        cite="HR. at-Tirmidzi"
      >
        <p>{`"Sesungguhnya Nabi ﷺ didatangkan seekor Buraq pada malam Isra'. Buraq itu telah dipasang kekang dan pelana, namun ia tampak sulit dikendalikan (gelisah). Lalu Jibril berkata kepadanya, 'Apakah kepada Muhammad engkau berbuat seperti ini? Demi Allah, tidak pernah ada seorang pun yang lebih mulia di sisi Allah daripada beliau yang pernah menunggangimu.' Maka seketika itu Buraq pun bercucuran keringat."`}</p>
      </QuoteBlock>

      <P>{`Perihal alasan di balik susunan perjalanan ini sendiri tidak dijelaskan secara terperinci oleh nash. Kita tidak akan mengklaim mengetahui secara pasti alasan yang tidak dinyatakan oleh Allah dan Rasul-Nya. Namun ayat dan riwayat ini membuka ruang bagi para ulama untuk membaca kedudukan Al-Aqsa dalam sejarah risalah, dan pembacaan itu tidak berdiri di ruang kosong.`}</P>

      <SectionHead>{`Peneguhan pada Fase Makkah Akhir`}</SectionHead>
      <P>{`Banyak penulis sirah menempatkan Isra' Mi'raj pada fase akhir periode Makkah, sebuah masa yang berat bagi Rasulullah ﷺ dan kaum Muslimin.`}</P>

      <QuoteBlock cite="Dr. Raghib Sirjani, dalam Qisshatu Islam">
        <p>{`"Para sejarawan dan penulis sirah, seperti Ibnu al-Atsir dan al-Waqidi, berpendapat bahwa peristiwa Isra' terjadi pada tahun ke-12 kenabian, tepatnya sekitar delapan belas bulan atau satu tahun sebelum hijrah."`}</p>
      </QuoteBlock>

      <P>{`Boikot terhadap Bani Hasyim telah berakhir, namun tidak lama kemudian Khadijah dan Abu Thalib, dua orang yang memiliki kedudukan penting dalam kehidupan Rasulullah ﷺ, wafat dalam rentang waktu yang berdekatan. Periode itu dikenal dalam banyak karya sirah sebagai 'Am al-Huzn, tahun kesedihan.`}</P>
      <P>{`Penanggalan pasti Isra' Mi'raj sendiri diperselisihkan di kalangan penulis sirah, sehingga hubungan kronologisnya dengan masa-masa sulit itu memiliki perbedaan riwayat. Namun sebagian ulama membaca kedekatan waktu tersebut sebagai bentuk peneguhan dari Allah kepada Rasul-Nya di tengah kesulitan yang dihadapinya, sebuah pembacaan hikmah yang kuat, meski tidak dinyatakan secara eksplisit oleh nash itu sendiri.`}</P>

      <SectionHead>{`Jejak Risalah yang Lebih Tua`}</SectionHead>
      <P>{`Ada pula konteks yang lebih tua dari sekadar masa hidup Rasulullah ﷺ. Al-Aqsa dan Baitul Maqdis telah lama berkaitan dengan sejarah para nabi dan tradisi tauhid, jauh sebelum kerasulan Nabi Muhammad ﷺ.`}</P>

      <IntroLine>{`Abdullah bin Abbas mengatakan,`}</IntroLine>
      <QuoteBlock
        arabic={`البيت المقدس بنته الأنبياء وسكنته الأنبياء، ما فيه موضع شبر إلا وقد صلّى فيه نبي أو أقام فيه ملك`}
        cite="Mu'jam al-Buldan, Yaqut al-Hamawi"
      >
        <p>{`"Baitul Maqdis dibangun oleh para nabi dan dihuni oleh para nabi. Tidak ada sejengkal pun tempat di sana, kecuali pernah digunakan untuk salat oleh seorang nabi atau pernah menjadi tempat tinggal seorang malaikat."`}</p>
      </QuoteBlock>

      <P>{`Ia bukan lokasi yang baru mendapatkan makna pada masanya. Ketika Al-Qur'an menyebutnya sebagai tujuan Isra', ayat itu menunjuk kepada tempat yang telah memiliki hubungan panjang dengan sejarah kenabian, dan dari hubungan itulah para ulama kemudian membaca Al-Aqsa sebagai bagian dari kesinambungan risalah para nabi.`}</P>

      <QuoteBlock cite="Ithaf al-Ikhsa bi Fada'il al-Masjid al-Aqsa, hlm. 102–104. Lihat juga: Mu'jam al-Buldan, hlm. 166.">
        <p>{`"Baitul Maqdis adalah tempat yang paling dekat di bumi dengan langit. Dajjal dihalangi untuk memasukinya. Ya'juj dan Ma'juj akan binasa di sekitarnya. Nabi Adam berwasiat agar dimakamkan di sana; demikian pula Ishaq dan Ibrahim. Ya'qub dibawa dari negeri Mesir hingga dimakamkan di sana. Yusuf juga berwasiat ketika wafat di Mesir agar jasadnya dipindahkan ke sana. Ibrahim berhijrah dari 'Kutsi' menuju Baitul Maqdis. Di sanalah tempat manusia dikumpulkan (mahsyar), dan darinya mereka dibangkitkan kembali. Di sana Allah menerima tobat Dawud, di sana Ibrahim membenarkan mimpinya, dan di sana Isa berbicara kepada manusia ketika masih berada dalam buaian."`}</p>
      </QuoteBlock>

      <SectionHead>{`Keberkahan di Sekelilingnya`}</SectionHead>
      <IntroLine>{`Allah berfirman,`}</IntroLine>
      <QuoteBlock
        arabic={`سُبْحَٰنَ ٱلَّذِىٓ أَسْرَىٰ بِعَبْدِهِۦ لَيْلًا مِّنَ ٱلْمَسْجِدِ ٱلْحَرَامِ إِلَى ٱلْمَسْجِدِ ٱلْأَقْصَا ٱلَّذِى بَٰرَكْنَا حَوْلَهُۥ`}
        cite="QS. Al-Isra': 1"
      >
        <p>{`"Maha Suci Allah, yang telah memperjalankan hamba-Nya pada suatu malam dari Al Masjidil Haram ke Al Masjidil Aqsha yang telah Kami berkahi sekelilingnya…"`}</p>
      </QuoteBlock>

      <P>{`Ayat ini menyebut perjalanan Isra' secara eksplisit, dengan Al-Aqsa sebagai tujuannya, dan menyebut salah satu hikmahnya, agar Allah memperlihatkan sebagian tanda kebesaran-Nya.`}</P>
      <P>{`Salah satu bagian terpenting dari ayat ini adalah frasa alladzi barakna hawlahu, "yang telah Kami berkahi sekelilingnya".`}</P>
      <P>{`Al-Qur'an tidak hanya menyebut keberkahan pada satu bangunan, tetapi pada kawasan di sekelilingnya, sebuah pernyataan yang menolak pemahaman bahwa keberkahan Al-Aqsa terbatas pada bentuk fisik bangunan tertentu.`}</P>
      <P>{`Ini penting diingat, karena bentuk arsitektur yang berdiri hari ini belum ada pada masa Isra' Mi'raj. Ketika kita berbicara tentang Al-Aqsa pada masa Nabi ﷺ, yang dimaksud adalah tempat dan kawasan sucinya, bukan bangunan modern yang kita kenal.`}</P>
      <P>{`Meski demikian, batas geografis kawasan yang diberkahi tidak ditetapkan secara terperinci oleh ayat ini. Para mufasir, termasuk dalam Tafsir al-Tabari dan Tafsir Ibn Katsir, menghubungkan keberkahan tersebut dengan Baitul Maqdis dan wilayah sekitarnya, sementara sebagian penjelasan tafsir mengaitkannya dengan kawasan Syam dalam cakupan yang lebih luas.`}</P>
      <P>{`Kita tidak menetapkan satu garis batas yang pasti, karena batas itu sendiri tidak dinyatakan secara eksplisit oleh ayat. Yang dapat kita pegang dengan kokoh adalah bahwa keberkahan itu nyata dan mencakup kawasan sekitar Al-Aqsa, sementara rincian luasnya tetap berada dalam ruang penafsiran.`}</P>

      <IntroLine>{`Syaikhul Islam Ibnu Taimiyyah berkata,`}</IntroLine>
      <QuoteBlock
        arabic={`والبركة تتناول البركة في الدين، والبركة في الدنيا وكلاهما معلوم لا ريب فيه`}
        cite="Majmu' al-Fatawa li Syaikh al-Islam Ibn Taymiyyah, jilid 27, hlm. 44"
      >
        <p>{`"Keberkahan itu (Al Aqsha dan Baitul Maqdis) mencakup keberkahan dalam urusan agama dan keberkahan dalam urusan dunia. Keduanya merupakan perkara yang telah nyata dan tidak diragukan lagi."`}</p>
      </QuoteBlock>

      <SectionHead>{`Bertemu dan Mengimami Para Nabi`}</SectionHead>
      <P>{`Al-Aqsa juga tidak hanya disebut sebagai tempat yang diberkahi. Dalam rangkaian Isra' Mi'raj, ia berkaitan dengan pertemuan Rasulullah ﷺ bersama para nabi terdahulu. Sejumlah riwayat sahih menyebutkan bahwa Rasulullah ﷺ berkumpul dan melaksanakan salat bersama para nabi di Baitul Maqdis, dengan beliau sebagai imam, meski rincian susunan peristiwanya berbeda-beda antara satu riwayat dengan riwayat lain.`}</P>

      <QuoteBlock
        arabic={`فَلَمَّا دَخَلَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ الْمَسْجِدَ الأَقْصَى، قَامَ يُصَلِّي، ثُمَّ الْتَفَتَ، فَإِذَا النَّبِيُّونَ أَجْمَعُونَ يُصَلُّونَ مَعَهُ.`}
        cite="Musnad Ahmad"
      >
        <p>{`"Ketika Nabi ﷺ memasuki Masjid al-Aqsa, beliau berdiri untuk melaksanakan salat. Setelah itu beliau menoleh, ternyata seluruh para nabi sedang salat bersama beliau."`}</p>
      </QuoteBlock>

      <P>{`Para ulama membaca imamah ini sebagai simbol kedudukan risalah terakhir dan kesinambungannya dengan risalah para nabi sebelumnya, bahwa Islam tidak lahir di ruang kosong, melainkan datang membenarkan dan menyempurnakan apa yang telah dibawa sebelumnya.`}</P>
      <P>{`Namun perlu ditegaskan, peristiwa mengimami para nabi itu sendiri disebutkan dalam riwayat, sementara pemahaman bahwa peristiwa itu melambangkan kesinambungan risalah adalah hasil pembacaan para ulama terhadap maknanya.`}</P>

      <SectionHead>{`Kemuliaan yang Mendahului Konflik Modern`}</SectionHead>
      <P>{`Memahami hal ini penting, sebab ada satu anggapan yang cukup sering muncul, terutama bagi mereka yang mengenal Al-Aqsa melalui pemberitaan, bahwa Al-Aqsa baru menjadi penting bagi umat Islam setelah konflik modern terjadi.`}</P>
      <P>{`Anggapan ini keliru. Al-Aqsa telah disebut dalam Al-Qur'an sejak periode Makkah, ketika umat Islam belum memiliki kekuatan politik dan belum menguasai wilayah mana pun. Kedudukannya dalam Islam tidak dibangun sebagai respons terhadap konflik hari ini. Konflik modern membuat perhatian dunia kembali tertuju kepadanya, namun konflik itu bukan sumber kemuliaannya.`}</P>

      <SectionHead>{`Antara Nash dan Pembacaan Makna`}</SectionHead>
      <P>{`Di sinilah dua tingkat pemahaman yang telah kita telusuri saling menemukan tempatnya. Yang ditegaskan langsung oleh Al-Qur'an dan riwayat sahih adalah bahwa Rasulullah ﷺ diperjalankan dari Masjidil Haram menuju Al-Aqsa, bahwa kawasan sekelilingnya diberkahi, dan bahwa peristiwa itu memperlihatkan sebagian tanda kebesaran Allah.`}</P>
      <P>{`Yang dituntun maknanya oleh para ulama adalah bahwa Al-Aqsa merupakan simpul kesinambungan risalah para nabi, dan bahwa imamah Rasulullah ﷺ melambangkan penyempurnaan risalah terakhir. Tanpa pembacaan para ulama, kita mungkin tahu bahwa Rasulullah ﷺ pernah diperjalankan ke Al-Aqsa, tetapi tidak sepenuhnya memahami mengapa itu penting bagi kedudukan risalah yang beliau bawa.`}</P>
      <P>{`Isra' Mi'raj sering dikenang melalui perjalanan Rasulullah ﷺ menuju langit. Namun rangkaian perjalanan agung itu lebih dahulu membawa beliau menuju Al-Aqsa, sebuah tempat yang telah lama diberkahi dan berkaitan dengan sejarah panjang para nabi.`}</P>
      <p className="mb-0 text-justify">{`Ia tidak baru menjadi penting ketika konflik modern terjadi. Ia telah lama menjadi bagian dari sejarah wahyu, jauh sebelum namanya hadir melalui layar dan berita yang kita saksikan hari ini.`}</p>

      <ReflectBox>{`Setelah memahami keberkahan Al-Aqsa dan hubungannya dengan rangkaian risalah para nabi, adakah yang berubah dalam cara kita memandang tempat ini?`}</ReflectBox>

      <ChapterNav
        prev={{ href: "#cara-membaca", label: "Sebelumnya", title: "Cara Membaca Buku Ini" }}
        next={{ href: "#bab2", label: "Selanjutnya", title: "Bab Dua — Kiblat Awal" }}
      />
    </EbookSection>
  );
}
