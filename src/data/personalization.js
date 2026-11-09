/**
 * ====================================================================
 * 💖 A LITTLE HEART, A THOUSAND MEMORIES 💖
 * ROMANTIC BIRTHDAY SURPRISE - PERSONALIZATION CONFIGURATION
 * ====================================================================
 * 
 * Configured with love for Siri Bngrm (Seethaa) by Dileep.
 * 
 * ====================================================================
 */

export const personalization = {
  // ------------------------------------------------------------------
  // 0. PRIVACY & PASSCODE PROTECTION 🔐
  // ------------------------------------------------------------------
  security: {
    enabled: true,                   // Private lock enabled for privacy
    passcode: 'siri',                // Secret code to unlock (also accepts 'bngrm', 'seethaa', 'love', 'dileep')
    magicKey: 'bngrm',               // Private magic key for direct link: ?key=bngrm
    hint: "Hint: Dileep's sweet name for you 💖 (siri / bngrm)",
    lockedTitle: 'A Secret Surprise For Siri 🔐💖',
    lockedSubtitle: "This private digital world is crafted with love just for Dileep's favorite person.",
  },

  // ------------------------------------------------------------------
  // 1. NAMES & SENDER DETAILS
  // ------------------------------------------------------------------
  recipient: {
    name: 'Siri Bngrm',               // Her name
    nickname: 'Bngrm',                // Her sweet pet name (Bangaram / Gold)
    specialName: 'Seethaa',           // Her affectionate nickname
  },
  sender: {
    name: 'Dileep',                   // Your name
    signature: 'Forever your person, Dileep 💗', // Signature for letter & final surprise
  },

  // ------------------------------------------------------------------
  // 2. IMPORTANT DATES
  // ------------------------------------------------------------------
  dates: {
    birthday: 'Today',                // Birthday display
    // Anniversary Date (Format: 'YYYY-MM-DD', e.g. '2024-03-15')
    // If left empty '', the site gracefully displays:
    // "Every single moment spent with you is special, timeless and forever precious." ⏳✨
    anniversaryDate: '',
  },

  // ------------------------------------------------------------------
  // 3. SECTION B: PERSONALIZED BIRTHDAY WELCOME
  // ------------------------------------------------------------------
  hero: {
    badge: 'Today is your special day ✨',
    greeting: 'Happy Birthday, My Love! 🎂💗',
    subtitle: 'Today is all about you, Siri Bngrm — my favorite person in the entire world.',
    buttonText: "Let's Explore Our Memories 💕",
    hintText: 'Click the button or scroll down to begin our journey 💕',
  },

  // ------------------------------------------------------------------
  // 4. SECTION C: OUR MEMORIES INSIDE THE HEART (PHOTO GALLERY)
  // ------------------------------------------------------------------
  // Configured with Dileep's uploaded photos for Siri Bngrm!
  // Frames and aspect ratios adjusted perfectly to match each photograph.
  gallery: [
    {
      id: 1,
      title: 'Ninnu chusi modhati saari premalo padda moment ✨',
      caption: 'Ninnu modatisari chusina kshaname naa manasu nee daggara aagipoyindhi maa  Ee Prema vadhu em vadhu  anukunna time lo entry ichav Appudu nuvvu oka andamaina parichayam maatram kaani ee roju naa jeevithantham naatho undalani korukune naa sarvaswanni ayyav ❤️🥹',
      date: 'Pure Joy',
      image: 'images/memories/photo1.jpeg',
      frameStyle: 'polaroid',
      aspect: 'aspect-[4/5] sm:aspect-[3/4]',
      objectPosition: 'center 45%',
      rotation: '-rotate-2',
    },
    {
      id: 2,
      title: 'Neekosam vethiki nen chesina konni panulu',
      caption: `Ninnu chudalane chinna thapanatho nee kosam Music Club Editor gaa join ayya ❤️\nAlaa aina ninnu daggara nunchi chudochu, neetho matladochu ani nee kosam vasthu unde vadini\nAppatlo manaki teliyadu aa chinna chinna moments okaroju mana life lo intha beautiful memories avuthayani\nIdhigo… manaki teliyakundane kalisi digina mana first memories lo oka picture 🧿❤️`,
      date: 'First Picture',
      image: 'images/memories/photo2.jpeg',
      frameStyle: 'rounded',
      aspect: 'aspect-[3/4]',
      objectPosition: 'center 40%',
      rotation: 'rotate-2',
    },
    {
      id: 3,
      title: 'maniddari madya peruguthunna bandham',
      caption: `Alaa manaki teliyakundane mana bandham roju rojuki balapaduthu vachindhi Oka roju anukokunda iddaram pakkapakkana kurchuni, rojantha kalisi time spend chesam\nAa roje manam iddaram kalisi modatisari Lakshmi Narasimha Swamy vari darshanam chesukunnam Aa tharvatha mana iddari kalayikaki gurthuga ee first memory ni capture chesukunnam\nAppatiki manaki teliyadu ee chinna kshanale mana jeevithamlo intha pedda memories avuthayani 🫠😍`,
      date: 'Pure Bond',
      image: 'images/memories/photo3.jpeg',
      frameStyle: 'polaroid',
      aspect: 'aspect-[16/10]',
      objectPosition: 'center',
      rotation: '-rotate-3',
    },
    {
      id: 4,
      title: 'Ninnu chudalani pergina korika',
      caption: `College holidays lo roju ninnu chudalane korika naalo peruguthu vachindhi entha try chesina kalavadam kudaraledhu\nKaani aa devudike mana iddarini kalapalani anipinchindemo Convocation day Kalisi chance vachindhi aa roju ninnu chusinappudu, 5 minutes alane ninnu chusthu undipoya\nAa roju neetho spend chesina aa konni nimishala aanandham mundhu inni rojula badhantha marchipoya Malli naa face lo smile vachindhi Bngrm ❤️🥹`,
      date: 'Convocation Day',
      image: 'images/memories/photo4.jpeg',
      frameStyle: 'polaroid',
      aspect: 'aspect-[16/9]',
      objectPosition: 'center 40%',
      rotation: 'rotate-2',
    },
    {
      id: 5,
      title: 'Chilipi chestalu',
      caption: `College lo classes unna kuda neetho time spend cheyyalani bunk kotti mari nee kosam vachevadini Ninnu ala chusthu entho santhoshapadevadini\nAlaa roju matladukuntu okari gurinchi okaram telusukuntu manaki teliyakundane inkaa daggaravuthunnam 🫠❤️`,
      date: 'Sweet Bunks',
      image: 'images/memories/photo5.jpeg',
      frameStyle: 'rounded',
      aspect: 'aspect-[16/9]',
      objectPosition: 'center 30%',
      rotation: '-rotate-2',
    },
    {
      id: 6,
      title: 'Mana kadhaki prarambhaniki nuv ichini sankethapu roju',
      caption: `Aa tharvatha mellaga nuv naa ni manasulo mata chapesav  aa roju naa happiness ni maatallo cheppalenu Asalu naatho matladithe chaalu anukunna naaku, nuvve vachi nenu neeku ishtam ani cheppesariki naa aanandhaniki haddulu levu ❤️\nAa tharvatha naa birthday roju neeku propose chesaa Ala mana love journey official gaa start ayina roju naa birthday avvadam naaku eppatiki oka special memory 😘🧿`,
      date: 'Our Love Story',
      image: 'images/memories/photo6.jpeg',
      frameStyle: 'polaroid',
      aspect: 'aspect-[16/9]',
      objectPosition: 'center 35%',
      rotation: 'rotate-2',
    },
    {
      id: 7,
      title: 'Prema puttina kothaloni visheshalu',
      caption: `Alaa manam iddaram Hackathon lo okariki okaram help chesukuntu, enno moments ni happy gaa complete chesam ❤️\nAlage mana jeevithamlo enni ups and downs vachina okariki okaram thoduga nilabaduthu, mana bandhan ni inkaa strong chesukundham\nEnni atankulu edhuraina sare, okari cheyyi okaram eppatiki vadalakudadhu. Mana journey lo gelupaina, otamaina kalise edurukundham ❤️🫂`,
      date: 'Together Forever',
      image: 'images/memories/photo7.jpeg',
      frameStyle: 'polaroid',
      aspect: 'aspect-[3/4]',
      objectPosition: 'center 55%',
      rotation: '-rotate-1',
    },
    {
      id: 8,
      title: 'Manalni manam ennadu veedukovadhu',
      caption: `Appati nunchi okate lakshyam… elaagaina ninnu pelli chesukovali, enni kashtalu vachina mana intlo vallani oppinchali ❤️ Anduke daily 2–3 varaku startup meedha work chesthu, neeku naa progress report isthu, manamiddaram mana careers meedha focus chesthunnam\nAlaage college lo Traditional day roju Ammu ki mana relationship parichayam cheddam ani thanani teesukochi, mana matter cheppesaa. Aa roju manam andharam kalisi entha happy ga unnam kadhaa! ❤️🥹`,
      date: 'Traditional Day',
      image: 'images/memories/photo8.jpeg',
      frameStyle: 'rounded',
      aspect: 'aspect-[16/9]',
      objectPosition: 'center 40%',
      rotation: 'rotate-1',
    },
  ],

  // ------------------------------------------------------------------
  // 5. SECTION D: OUR LOVE STORY TIMELINE
  // ------------------------------------------------------------------
  timeline: [
    {
      id: 1,
      tag: 'Chapter 1',
      title: 'The Day We Met 🌸',
      date: 'The Beginning of Magic',
      description: 'The universe aligned and brought us together. Out of billions of people in this world, I found you—the sweetest, kindest soul.',
      icon: 'sparkles',
      photo: '',
    },
    {
      id: 2,
      tag: 'Chapter 2',
      title: 'Our First Conversation 💬',
      date: 'Hours Like Minutes',
      description: 'Talking to you felt as natural as breathing. Minutes turned into hours, and I knew right away that you were going to be truly special to me.',
      icon: 'message',
      photo: '',
    },
    {
      id: 3,
      tag: 'Chapter 3',
      title: 'My Favourite Memory 📸',
      date: 'Etched in My Heart',
      description: 'Whether we were laughing until our stomachs hurt or just sitting in peaceful silence, that moment with you is etched forever in my heart.',
      icon: 'heart',
      photo: '',
    },
    {
      id: 4,
      tag: 'Chapter 4',
      title: 'A Moment That Made Me Smile ☀️',
      date: 'Pure Sunshine',
      description: 'Your laugh, your cute gestures, and the way your eyes light up when you are excited—you brightened my whole world without even trying.',
      icon: 'smile',
      photo: '',
    },
    {
      id: 5,
      tag: 'Chapter 5',
      title: 'Our Most Special Memory 💫',
      date: 'Time Stood Still',
      description: 'A quiet, perfect moment where time stopped. Looking at you, I realized just how deeply and truly I cherish having you in my life.',
      icon: 'star',
      photo: '',
    },
    {
      id: 6,
      tag: 'The Future',
      title: 'All The Beautiful Moments Still Waiting For Us 🌅',
      date: 'Every tomorrow & forever',
      description: 'More coffee dates, cozy movie nights, spontaneous travels, shared laughs, and countless sunsets. The best chapters of our story are still ahead.',
      icon: 'infinity',
      photo: '',
    },
  ],

  // ------------------------------------------------------------------
  // 6. SECTION E: A FEW REASONS WHY YOU'RE MY FAVORITE PERSON 💗
  // ------------------------------------------------------------------
  reasons: [
    {
      id: 1,
      title: 'Your Contagious Smile ☀️',
      reason: 'Your smile makes my day better instantly. If I could make one wish today, it would be to see that beautiful smile of yours forever.',
      icon: 'smile',
    },
    {
      id: 2,
      title: 'Magic in Ordinary Moments ✨',
      reason: 'You make ordinary moments special. Even a simple grocery run or sitting in traffic turns into a cherished adventure with you, Bngrm.',
      icon: 'sparkles',
    },
    {
      id: 3,
      title: 'The Sound of Your Laugh 🎶',
      reason: 'I love the way you laugh. It is the most genuine, heartwarming melody I have ever heard, and hearing it completes my day.',
      icon: 'music',
    },
    {
      id: 4,
      title: 'How Lucky You Make Me Feel 🍀',
      reason: 'Among billions of people in this world, my heart found its favourite person in you. You make me feel so incredibly lucky every day.',
      icon: 'heart',
    },
    {
      id: 5,
      title: 'Pure Happiness In My Life 💖',
      reason: 'You bring happiness into my life. Your kindness, your gentleness, and your warm spirit inspire me to be a better person.',
      icon: 'handHeart',
    },
    {
      id: 6,
      title: 'Unforgettable Little Things 🌸',
      reason: 'You make little things unforgettable. The cute ways you text me, your silly expressions, and the small details you remember.',
      icon: 'gift',
    },
    {
      id: 7,
      title: 'Spending Time With You 🕊️',
      reason: 'I love spending time with you. Every memory with you is my favourite, and just being near you feels like home.',
      icon: 'coffee',
    },
    {
      id: 8,
      title: 'Our Beautiful Future 🌅',
      reason: "You're not just a chapter in my life; you're the beautiful story I never want to end. Every tomorrow feels special with you in it.",
      icon: 'sun',
    },
  ],

  // ------------------------------------------------------------------
  // 7. SECTION F: INTERACTIVE BIRTHDAY CAKE
  // ------------------------------------------------------------------
  cake: {
    sectionTitle: 'Make a Birthday Wish, Siri 🎂',
    sectionSubtitle: 'Tap the candles to blow them out and make a wish from the bottom of your heart!',
    instructionBefore: 'Tap the glowing candles to blow them out 💨',
    instructionAfter: 'Your wish deserves to come true, Seethaa ✨',
    secretWishPlaceholder: 'Whisper your secret wish here, Bngrm...',
    wishSavedMessage: 'Your wish has been sealed with love in your heart 💖',
  },

  // ------------------------------------------------------------------
  // 8. SECTION G: THE PERSONAL LOVE LETTER
  // ------------------------------------------------------------------
  loveLetter: {
    envelopePrompt: 'A Sealed Letter For Siri 💌 (Tap to Open)',
    salutation: 'My Dearest Siri Bngrm (Seethaa),',
    paragraphs: [
      'Among billions of people in this world, my heart found its favourite person in you.',
      "You're not just a chapter in my life; you're the beautiful story I never want to end.",
      'Every heartbeat carries a little piece of you, every memory with you is my favourite, and every tomorrow feels special because I get to imagine you in it.',
      'I may not have the perfect words to describe what you mean to me, but if I could make one wish today, it would be to see that beautiful smile of yours forever.',
    ],
    closing: 'Happy Birthday Seethaa ❤️✨ With all my heart and endless love,',
    signature: 'Forever your person, Dileep 💗',
  },

  // ------------------------------------------------------------------
  // 9. SECTION I: CUTE LOVE QUIZ
  // ------------------------------------------------------------------
  quiz: {
    title: 'A Little Couple Quiz! 🎮💕',
    subtitle: 'Let’s test our cute memories together, Bngrm!',
    questions: [
      {
        id: 1,
        question: 'What is my absolute favourite thing about you?',
        options: [
          'That beautiful smile of yours that lights up my whole world ✨',
          'Your cute laugh that melts my heart 🥰',
          'Your kind, gentle, and caring soul 💖',
          'All of the above, plus a million more reasons! 👑',
        ],
        reaction: 'Ding ding ding! You are perfection in every way possible, Seethaa! 💕',
      },
      {
        id: 2,
        question: 'Who took longer to get ready for our dates?',
        options: [
          'Definitely you! (Looking breathtaking takes time 😉)',
          'Me (Staring in the mirror trying to impress you)',
          'Both of us equally!',
          'Time freezes when we are together anyway!',
        ],
        reaction: 'Haha! You always look absolutely stunning no matter what! 🥰',
      },
      {
        id: 3,
        question: 'What is our ultimate comfort craving together?',
        options: [
          'Pizza & Ice Cream 🍕🍦',
          'Late-night snacks & sweet treats 🧋',
          'Cozy homemade food 🍲',
          'Dessert first, everything else later! 🍰',
        ],
        reaction: 'Yummy! Whatever we eat, it tastes 100x better when sharing with you! 😋',
      },
      {
        id: 4,
        question: 'How much do I love you?',
        options: [
          'To the moon and back 🌙',
          'More than all the stars in the night sky ✨',
          'Beyond what words can ever explain 💗',
          'All of the above, multiplied by infinity! 🚀💖',
        ],
        reaction: 'Correct answer! Infinity and beyond, always and forever, Bngrm! 🏆💕',
      },
    ],
    completion: {
      badge: '100% Soulmate Verified! 🏆💖',
      message: 'You scored a perfect match! You are officially my favorite person in the entire universe, Seethaa.',
      restartButton: 'Play Quiz Again 🔄',
    },
  },

  // ------------------------------------------------------------------
  // 10. SECTION J: BACKGROUND MUSIC
  // ------------------------------------------------------------------
  music: {
    audioSrc: '/audio/siri-song.mp3', // Custom uploaded song!
    title: 'Special Melody for Siri 🎶',
    artist: 'With All My Love • Dileep',
  },

  // ------------------------------------------------------------------
  // 11. SECTION K: THE FINAL SURPRISE
  // ------------------------------------------------------------------
  finalSurprise: {
    buttonPrompt: 'One Last Surprise 💌',
    title: 'Happy Birthday, Seethaa! 👑🎂💗',
    message: "Among billions of people in this world, my heart found its favourite person in you. You're not just a chapter in my life; you're the beautiful story I never want to end.",
    subMessage: 'Every heartbeat carries a little piece of you, and if I could make one wish today, it would be to see that beautiful smile of yours forever. Happy Birthday, Siri Bngrm ❤️✨',
    signature: 'Forever your person, Dileep.',
    replayButton: 'Start Our Little Story Again 🌸',
  },
};
