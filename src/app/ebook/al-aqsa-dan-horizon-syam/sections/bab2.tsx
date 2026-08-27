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

export function Bab2() {
  return (
    <EbookSection
      id="bab2"
      kicker="Bab Dua"
      title="Baitul Maqdis sebagai Kiblat Awal"
      sub="Perpindahan kiblat mengubah arah salat, bukan menghapus kemuliaan Al-Aqsa."
      paper
    >
      <ChapterHero label="Ilustrasi pembuka Bab Dua" />

      <P>{`Ada sebuah pertanyaan yang mungkin pernah terlintas ketika seseorang pertama kali mengetahui bahwa umat Islam dahulu salat menghadap Baitul Maqdis, sebelum kemudian menghadap Ka'bah.`}</P>
      <P>{`Jika arah salat itu dipindahkan, apakah Baitul Maqdis kehilangan kemuliaannya? Apakah tempat yang pernah menjadi kiblat, lalu tidak lagi menjalankan fungsi tersebut, berkurang kedudukannya di sisi Allah?`}</P>
      <P>{`Pertanyaan ini wajar muncul. Dalam pengalaman manusia, sesuatu yang digantikan sering dianggap kalah dari yang menggantikannya. Namun, perpindahan kiblat bukan kisah tentang satu tempat yang menang dan tempat lain yang kalah. Status Baitul Maqdis sebagai arah salat memang berubah, tetapi kemuliaan Al-Aqsa tidak ikut berpindah bersamanya.`}</P>

      <SectionHead>{`Ketika Arah Berubah`}</SectionHead>
      <P>{`Setelah hijrah ke Madinah, Rasulullah ﷺ dan kaum Muslimin salat menghadap Baitul Maqdis selama kurang lebih enam belas hingga tujuh belas bulan.`}</P>

      <IntroLine>{`Dari Al-Barra bin Azib radhiyallahu anhu meriwayatkan,`}</IntroLine>
      <QuoteBlock
        arabic={`صلينا مع النبيِّ نحو بيت المقدسِ ستةَ عشرَ شهرًا، أو سبعةَ عشرَ شهرًا وصُرف إلى القبلةِ`}
        cite="HR. al-Bukhari (no. 40), Muslim (no. 525), dan at-Tirmidzi"
      >
        <p>{`"Kami shalat bersama Nabi ﷺ menghadap Baitul Maqdis selama enam belas bulan, atau tujuh belas bulan. Kemudian beliau diperintahkan untuk berpaling menghadap kiblat (Ka'bah)."`}</p>
      </QuoteBlock>

      <P>{`Setelah itu, Allah memerintahkan mereka menghadap Masjidil Haram, sebagaimana disebutkan dalam ayat berikut:`}</P>
      <QuoteBlock
        arabic={`قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِى ٱلسَّمَآءِ ۖ فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضَىٰهَا ۚ فَوَلِّ وَجْهَكَ شَطْرَ ٱلْمَسْجِدِ ٱلْحَرَامِ ۚ وَحَيْثُ مَا كُنتُمْ فَوَلُّوا۟ وُجُوهَكُمْ شَطْرَهُ`}
        cite="QS. Al-Baqarah: 144"
      >
        <p>{`"Sungguh Kami (sering) melihat mukamu menengadah ke langit, maka sungguh Kami akan memalingkan kamu ke kiblat yang kamu sukai. Palingkanlah mukamu ke arah Masjidil Haram. Dan dimana saja kamu berada, palingkanlah mukamu ke arahnya…"`}</p>
      </QuoteBlock>

      <P>{`Rangkaian ayat tersebut menegaskan bahwa perpindahan arah bukan perubahan yang lahir dari pertimbangan manusia, melainkan ketetapan Allah. Di dalamnya terdapat ujian ketaatan. Perubahan kiblat menampakkan siapa yang benar-benar mengikuti Rasulullah ﷺ dan siapa yang berpaling ketika ketetapan Allah tidak sesuai dengan kebiasaan atau harapannya.`}</P>

      <QuoteBlock
        arabic={`مَا جَعَلْنَا ٱلْقِبْلَةَ ٱلَّتِى كُنتَ عَلَيْهَآ إِلَّا لِنَعْلَمَ مَن يَتَّبِعُ ٱلرَّسُولَ مِمَّن يَنقَلِبُ عَلَىٰ عَقِبَيْهِ`}
        cite="QS. Al-Baqarah: 143"
      >
        <p>{`"…Dan Kami tidak menetapkan kiblat yang menjadi kiblatmu (sekarang) melainkan agar Kami mengetahui (supaya nyata) siapa yang mengikuti Rasul dan siapa yang membelot…"`}</p>
      </QuoteBlock>

      <P>{`Ayat 143 juga menjelaskan bahwa perubahan itu terasa berat, kecuali bagi orang-orang yang diberi petunjuk oleh Allah. Dengan demikian, perpindahan kiblat bukan sekadar persoalan geografis. Ia merupakan bagian dari pendidikan keimanan, ketundukan, dan kepatuhan kepada wahyu.`}</P>
      <P>{`Perintah menghadap Ka'bah kemudian menetapkan Masjidil Haram sebagai kiblat tetap umat Islam. Namun, berakhirnya status Baitul Maqdis sebagai arah salat tidak berarti seluruh kedudukannya ikut berakhir. Menjadi kiblat merupakan salah satu kedudukan syar'i yang pernah dimilikinya. Ketika kedudukan tersebut berpindah, keutamaan lain yang telah ditetapkan bagi Al-Aqsa tetap terjaga.`}</P>

      <QuoteBlock cite="Asy Syaikh Mahmud Shiyam, Ulama Palestina">
        <p>{`"Masjid Al Aqsha memang bukan lagi menjadi kiblat shalat kita, namun ia masih dan akan senantiasa menjadi kiblat jihad kita."`}</p>
      </QuoteBlock>

      <SectionHead>{`Kemuliaan yang Tidak Ikut Berpindah`}</SectionHead>
      <P>{`Kedudukan khusus Al-Aqsa disebutkan melalui hadits-hadits Rasulullah ﷺ yang tidak bergantung pada statusnya sebagai kiblat.`}</P>
      <P>{`Dalam hadits yang diriwayatkan Abu Hurairah, Rasulullah ﷺ menyebut tiga masjid sebagai tujuan perjalanan khusus untuk beribadah, yaitu Masjidil Haram, Masjid Nabawi, dan Masjidil Aqsa. Hadits ini menempatkan Al-Aqsa bersama dua masjid utama lainnya dalam satu penyebutan yang istimewa.`}</P>

      <IntroLine>{`Ada pula hadits Abu Dzar al-Ghifari.`}</IntroLine>
      <QuoteBlock
        arabic={`يا رسولَ اللهِ ، أيُّ مسجدٍ وضعَ في الأرضِ أولَ ؟ قال : المسجدُ الحرامُ ، قلتُ : ثم أيُّ ؟ قال : المسجدُ الأقصى ، قلتُ : كم بينهما ؟ قال : أربعون سنةً`}
        cite="HR. al-Bukhari, Muslim no. 520, dan an-Nasa'i no. 690"
      >
        <p>{`"Aku bertanya, 'Wahai Rasulullah, masjid apakah yang pertama kali dibangun di muka bumi?' Beliau menjawab, 'Masjidil Haram.' Aku bertanya lagi, 'Kemudian masjid apa?' Beliau menjawab, 'Masjid al-Aqsa.' Aku bertanya, 'Berapa jarak waktu antara pembangunan keduanya?' Beliau menjawab, 'Empat puluh tahun. Kemudian, di mana pun waktu salat telah tiba untukmu, maka salatlah di sana, karena seluruh bumi dapat menjadi tempat salat.'"`}</p>
      </QuoteBlock>

      <P>{`Hadits-hadits tersebut menyampaikan hal yang berbeda. Hadits tiga masjid menegaskan kedudukan khusus Al-Aqsa sebagai tujuan perjalanan ibadah. Sementara itu, hadits Abu Dzar menunjukkan posisinya yang sangat awal dalam sejarah rumah ibadah di bumi.`}</P>
      <P>{`Fakta bahwa Masjidil Aqsa disebut sebagai masjid kedua memperlihatkan betapa dalam akar sejarahnya dalam tradisi tauhid.`}</P>
      <P>{`Masjidil Haram memang memiliki kedudukan yang lebih utama dalam sejumlah aspek syariat. Ia menjadi kiblat tetap umat Islam, tempat pelaksanaan haji, dan masjid pertama yang dibangun di bumi sebagaimana disebutkan dalam hadits Abu Dzar. Namun, keutamaan Masjidil Haram tidak meniadakan kedudukan khusus Al-Aqsa.`}</P>
      <P>{`Mengakui adanya hierarki keutamaan bukan berarti menghapus kemuliaan tempat lain. Yang berubah adalah status Baitul Maqdis sebagai arah salat umat Islam. Yang tetap adalah keberkahan, kedudukan sejarah, dan keutamaan ibadah yang ditetapkan baginya melalui sumber-sumber yang lain.`}</P>

      <SectionHead>{`Kesinambungan Risalah, Kekhususan Syariat`}</SectionHead>
      <P>{`Sebagian ulama membaca perpindahan kiblat sebagai salah satu penanda terbentuknya identitas ibadah umat Muhammad ﷺ.`}</P>
      <P>{`Selama menghadap Baitul Maqdis, kaum Muslimin dan komunitas Yahudi di Madinah sama-sama menjadikan kawasan tersebut sebagai arah dalam ibadah mereka, meskipun berada dalam tradisi dan ketentuan yang berbeda. Perintah menghadap Ka'bah kemudian menegaskan kekhususan syariat umat Islam dan menghubungkan mereka kembali dengan warisan Nabi Ibrahim.`}</P>
      <P>{`Namun, pembentukan identitas bukan satu-satunya makna yang dapat dibaca dari rangkaian ayat tersebut. QS al-Baqarah juga menekankan ketaatan kepada Rasulullah ﷺ, ujian keimanan, kedudukan umat pertengahan, hubungan dengan warisan Ibrahim, dan ketundukan penuh kepada ketetapan Allah.`}</P>
      <P>{`Karena itu, perpindahan kiblat tidak boleh dibaca hanya sebagai upaya membedakan umat Islam dari umat yang lain. Ia merupakan peristiwa yang memiliki makna yang begitu besar.`}</P>
      <P>{`Perpindahan tersebut juga tidak memutus kesinambungan risalah tauhid. Islam hadir sebagai kelanjutan dan penyempurnaan risalah para nabi. Kekhususan syariat umat Muhammad ﷺ tidak meniadakan hubungan tersebut.`}</P>

      <IntroLine>{`Abu Hurairah meriwayatkan,`}</IntroLine>
      <QuoteBlock
        arabic={`مَثَلي ومَثَلُ الأنْبِياءِ مِن قَبْلي كمَثَلِ رَجُلٍ ابْتَنى بُنْيانًا فأحسَنَه وأكمَلَه، إلَّا مَوْضِعَ لَبِنَةٍ مِن زاوِيَةٍ مِن زواياه`}
        cite="HR. Muslim no. 2286 dan Ahmad no. 7485"
      >
        <p>{`"Perumpamaanku dan perumpamaan para nabi sebelumku adalah seperti seorang laki-laki yang membangun sebuah bangunan. Ia membangunnya dengan sangat indah dan sempurna, hanya saja masih tersisa satu tempat untuk sebuah batu bata di salah satu sudutnya. Lalu orang-orang mengelilingi bangunan itu, mengaguminya, dan berkata, 'Kami belum pernah melihat bangunan yang lebih indah daripada ini, seandainya saja tempat batu bata itu tidak kosong.' Maka akulah batu bata itu."`}</p>
      </QuoteBlock>

      <P>{`Umat Islam melanjutkan risalah tauhid yang sama, tetapi dengan syariat dan arah ibadah yang ditetapkan khusus bagi mereka. Di sinilah kesinambungan risalah dan kekhususan syariat bertemu. Islam tidak berdiri terpisah dari sejarah para nabi, tetapi juga tidak melebur tanpa identitas ke dalam tradisi yang telah ada sebelumnya.`}</P>

      <SectionHead>{`Apa yang Berubah, Apa yang Tetap`}</SectionHead>
      <P>{`Di sinilah batas antara pernyataan eksplisit nash dan pembacaan para ulama perlu kembali diperjelas.`}</P>
      <P>{`Perintah perpindahan kiblat dinyatakan dalam QS al-Baqarah ayat 142 sampai 144. Kedudukan khusus Al-Aqsa sebagai tujuan perjalanan ibadah disebutkan dalam hadits tiga masjid. Sementara itu, hadits Abu Dzar menempatkan Masjidil Aqsa sangat awal dalam sejarah rumah ibadah di bumi.`}</P>
      <P>{`Pokok-pokok pernyataan tersebut disebutkan secara eksplisit oleh sumber. Namun, cakupan, hubungan, dan implikasinya tetap membutuhkan penjelasan tafsir dan syarah.`}</P>
      <P>{`Sementara itu, pemahaman bahwa perpindahan kiblat turut menegaskan kekhususan syariat dan identitas ibadah umat Muhammad ﷺ merupakan pembacaan para ulama terhadap konteks serta rangkaian ayat. Pembacaan ini memiliki dasar yang kuat, tetapi tidak boleh ditempatkan sebagai satu-satunya maksud ayat atau sebagai bunyi eksplisit teks.`}</P>
      <P>{`Pembedaan tersebut menjaga kita dari dua kekeliruan. Kekeliruan pertama adalah menganggap bahwa Baitul Maqdis kehilangan seluruh kemuliaannya ketika tidak lagi menjadi kiblat. Kekeliruan kedua adalah menolak adanya perbedaan keutamaan antara Masjidil Haram dan Masjidil Aqsa.`}</P>
      <p className="mb-0 text-justify">{`Mengakui hierarki keutamaan tidak berarti menghapus kedudukan khusus yang telah ditetapkan wahyu bagi Al-Aqsa.`}</p>

      <ReflectBox>{`Jika perpindahan kiblat tidak menghapus kemuliaan Al-Aqsa, apa yang perlu diperbaiki dari cara kita memahami hubungan antara Ka'bah dan Baitul Maqdis, dua tempat suci yang keutamaannya ditetapkan melalui wahyu, meskipun dengan kedudukan yang berbeda?`}</ReflectBox>

      <ChapterNav
        prev={{ href: "#bab1", label: "Sebelumnya", title: "Bab Satu — Isra' Mi'raj" }}
        next={{ href: "#bab3", label: "Selanjutnya", title: "Bab Tiga — Horizon Syam" }}
      />
    </EbookSection>
  );
}
