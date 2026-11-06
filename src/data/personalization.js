/**
 * ====================================================================
 * 💖 A LITTLE HEART, A THOUSAND MEMORIES 💖
 * ROMANTIC BIRTHDAY SURPRISE - PERSONALIZATION CONFIGURATION
 * ====================================================================
 * 
 * Welcome Robin! This is the ONE central file you need to customize
 * the entire website for your girlfriend. Every section pulls its content
 * directly from this file.
 * 
 * QUICK CUSTOMIZATION GUIDE:
 * 1. Change the names, dates, and sweet messages below.
 * 2. To add your real photos:
 *    - Save your pictures into `public/images/memories/` (e.g. `our-first-date.jpg`)
 *    - Update the `image` path in the `gallery` array below (e.g. `/images/memories/our-first-date.jpg`)
 *    - The website includes 8 beautiful romantic placeholders so it works immediately even before adding photos!
 * 3. To add your own song:
 *    - Place an MP3 file into `public/audio/` (e.g. `public/audio/romantic-song.mp3`)
 *    - Set `music.audioSrc: '/audio/romantic-song.mp3'`
 *    - If left empty, the site automatically generates a soothing romantic music-box melody in real-time!
 * 4. Anniversary Date:
 *    - Set `dates.anniversaryDate: 'YYYY-MM-DD'` (e.g. '2024-03-15')
 *    - If left empty, it displays a lovely timeless message without broken numbers.
 * 
 * ====================================================================
 */

export const personalization = {
  // ------------------------------------------------------------------
  // 1. NAMES & SENDER DETAILS
  // ------------------------------------------------------------------
  recipient: {
    name: 'My Love',                  // Replace with her real name or nickname (e.g., 'Ananya', 'Priya', 'Cutie')
    nickname: 'Sweetheart',           // Sweet pet name used in buttons and hints
  },
  sender: {
    name: 'Robin',                    // Your name
    signature: 'Forever your person, Robin 💗', // Used at the bottom of the love letter & final surprise
  },

  // ------------------------------------------------------------------
  // 2. IMPORTANT DATES
  // ------------------------------------------------------------------
  dates: {
    // Birthday date display
    birthday: 'Today',                // e.g. 'October 16' or 'November 6'
    
    // Anniversary Date (When your journey together began)
    // Format: 'YYYY-MM-DD' (e.g. '2024-04-18')
    // If left empty '', the site gracefully displays:
    // "Every single moment spent with you is special, timeless and forever precious." ⏳✨
    anniversaryDate: '',              // e.g., '2024-05-20' or leave empty '' until ready!
  },

  // ------------------------------------------------------------------
  // 3. SECTION B: PERSONALIZED BIRTHDAY WELCOME
  // ------------------------------------------------------------------
  hero: {
    badge: 'Today is your special day ✨',
    greeting: 'Happy Birthday, My Love! 🎂💗',
    subtitle: 'Today is all about you, my favorite person in the entire world.',
    buttonText: "Let's Explore Our Memories 💕",
    hintText: 'Click the button or scroll down to begin our journey 💕',
  },

  // ------------------------------------------------------------------
  // 4. SECTION C: OUR MEMORIES INSIDE THE HEART (PHOTO GALLERY)
  // ------------------------------------------------------------------
  // At least 8 editable photo slots with portrait, square, and landscape support.
  // Drop your photos in `public/images/memories/` and set the path below!
  // Pre-configured with 8 beautiful, illustrated local SVG cards that never 404.
  gallery: [
    {
      id: 1,
      title: 'Our Sweet Coffee Date ☕',
      caption: 'When coffee was warm, but your company and smile were warmer.',
      date: 'Sweet Moments',
      image: '/images/memories/memory1.svg', // Replace with '/images/memories/your-photo1.jpg'
      frameStyle: 'heart',                   // 'heart' | 'polaroid' | 'rounded'
      aspect: 'aspect-square',
      rotation: '-rotate-2',
    },
    {
      id: 2,
      title: 'Your Radiant Smile ✨',
      caption: 'The smile that lights up my whole universe and melts away all my worries.',
      date: 'Golden Hour',
      image: '/images/memories/memory2.svg',
      frameStyle: 'polaroid',
      aspect: 'aspect-square',
      rotation: 'rotate-3',
    },
    {
      id: 3,
      title: 'That Unforgettable Adventure 🌿',
      caption: 'Every place is magical and breathtaking as long as I am walking by your side.',
      date: 'Wanderlust',
      image: '/images/memories/memory3.svg',
      frameStyle: 'rounded',
      aspect: 'aspect-[4/3]',
      rotation: '-rotate-3',
    },
    {
      id: 4,
      title: 'Under The Starlit Sky 🌙',
      caption: 'In that quiet, gentle moment, my hand found its forever home in yours.',
      date: 'Stargazing',
      image: '/images/memories/memory4.svg',
      frameStyle: 'heart',
      aspect: 'aspect-square',
      rotation: 'rotate-2',
    },
    {
      id: 5,
      title: 'Pure Uncontrollable Laughs 😂💕',
      caption: 'My absolute favorite melody in the entire wide world is the sound of your laugh.',
      date: 'Pure Happiness',
      image: '/images/memories/memory5.svg',
      frameStyle: 'polaroid',
      aspect: 'aspect-square',
      rotation: '-rotate-1',
    },
    {
      id: 6,
      title: 'Golden Hour Together 🌅',
      caption: 'Watching the sky turn pink and orange, but unable to take my eyes off you.',
      date: 'Sunset Memories',
      image: '/images/memories/memory6.svg',
      frameStyle: 'rounded',
      aspect: 'aspect-[4/3]',
      rotation: 'rotate-2',
    },
    {
      id: 7,
      title: 'Cozy Rainy Afternoon 🌧️',
      caption: 'Wrapped in warm blankets, sharing hot tea, listening to raindrops with you.',
      date: 'Peaceful Days',
      image: '/images/memories/memory7.svg',
      frameStyle: 'polaroid',
      aspect: 'aspect-square',
      rotation: '-rotate-2',
    },
    {
      id: 8,
      title: 'To All Our Tomorrows 🥂',
      caption: 'Here is to another year of loving you more deeply every single day.',
      date: 'Forever & Always',
      image: '/images/memories/memory8.svg',
      frameStyle: 'heart',
      aspect: 'aspect-square',
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
      date: '[Add Date or Special Moment]',
      description: 'The universe aligned and brought us together. Out of billions of people in this world, I found you—the sweetest, kindest soul.',
      icon: 'sparkles',
      photo: '', // Optional milestone photo path, e.g. '/images/memories/day-we-met.jpg'
    },
    {
      id: 2,
      tag: 'Chapter 2',
      title: 'Our First Conversation 💬',
      date: '[Add Date or Memory]',
      description: 'Talking to you felt as natural as breathing. Minutes turned into hours, and I knew right away that you were going to be truly special to me.',
      icon: 'message',
      photo: '',
    },
    {
      id: 3,
      tag: 'Chapter 3',
      title: 'My Favourite Memory 📸',
      date: '[Add Date or Memory]',
      description: 'Whether we were laughing until our stomachs hurt or just sitting in peaceful silence, that moment with you is etched forever in my heart.',
      icon: 'heart',
      photo: '',
    },
    {
      id: 4,
      tag: 'Chapter 4',
      title: 'A Moment That Made Me Smile ☀️',
      date: '[Add Date or Memory]',
      description: 'Your laugh, your cute gestures, and the way your eyes light up when you are excited—you brightened my whole world without even trying.',
      icon: 'smile',
      photo: '',
    },
    {
      id: 5,
      tag: 'Chapter 5',
      title: 'Our Most Special Memory 💫',
      date: '[Add Date or Memory]',
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
      reason: 'Your smile makes my day better instantly. It lights up even the darkest room and melts away all my stress.',
      icon: 'smile',
    },
    {
      id: 2,
      title: 'Magic in Ordinary Moments ✨',
      reason: 'You make ordinary moments special. Even a simple grocery run or sitting in traffic turns into a cherished adventure with you.',
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
      reason: 'You make me feel lucky. Every single day I pause and realize how deeply blessed I am to have you holding my hand.',
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
      reason: 'I love spending time with you. No matter where we are, even in total silence, just being near you feels like home.',
      icon: 'coffee',
    },
    {
      id: 8,
      title: 'Our Beautiful Future 🌅',
      reason: 'There is still so much I want to experience with you. Every dream, trip, and quiet evening is better with you in it.',
      icon: 'sun',
    },
  ],

  // ------------------------------------------------------------------
  // 7. SECTION F: INTERACTIVE BIRTHDAY CAKE
  // ------------------------------------------------------------------
  cake: {
    sectionTitle: 'Make a Birthday Wish 🎂',
    sectionSubtitle: 'Tap the candles to blow them out and make a wish from the bottom of your heart!',
    instructionBefore: 'Tap the glowing candles to blow them out 💨',
    instructionAfter: 'Your wish deserves to come true ✨',
    secretWishPlaceholder: 'Whisper your secret wish here...',
    wishSavedMessage: 'Your wish has been sealed with love in your heart 💖',
  },

  // ------------------------------------------------------------------
  // 8. SECTION G: THE PERSONAL LOVE LETTER
  // ------------------------------------------------------------------
  loveLetter: {
    envelopePrompt: 'A Sealed Letter For You 💌 (Tap to Open)',
    salutation: 'My Dearest,',
    paragraphs: [
      'On this day, the most beautiful soul was born, and I am endlessly grateful that our paths crossed in this big world.',
      'You bring warmth to ordinary mornings, laughter to quiet evenings, and peace to my heart in ways no one else ever could. Your kindness, beauty, and bright spirit make everything around you bloom.',
      'Thank you for being my favorite confidante, my biggest smile, and the best part of every day. Seeing you happy is my greatest joy in life.',
      'On your birthday, I wish you a year filled with boundless happiness, cherished dreams fulfilled, cozy moments, and all the love your heart can hold.',
    ],
    closing: 'With all my heart and endless love,',
    signature: 'Forever your person, Robin 💗',
  },

  // ------------------------------------------------------------------
  // 9. SECTION I: CUTE LOVE QUIZ
  // ------------------------------------------------------------------
  quiz: {
    title: 'A Little Couple Quiz! 🎮💕',
    subtitle: 'Let’s test our cute memories together!',
    questions: [
      {
        id: 1,
        question: 'What is my absolute favourite thing about you?',
        options: [
          'Your gorgeous smile that lights up my whole day ✨',
          'Your cute laugh that melts my heart 🥰',
          'Your kind, gentle, and caring soul 💖',
          'All of the above, plus a million more reasons! 👑',
        ],
        reaction: 'Ding ding ding! You are perfection in every way possible! 💕',
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
        reaction: 'Correct answer! Infinity and beyond, always and forever! 🏆💕',
      },
    ],
    completion: {
      badge: '100% Soulmate Verified! 🏆💖',
      message: 'You scored a perfect match! You are officially my favorite person in the entire universe.',
      restartButton: 'Play Quiz Again 🔄',
    },
  },

  // ------------------------------------------------------------------
  // 10. SECTION J: BACKGROUND MUSIC
  // ------------------------------------------------------------------
  music: {
    // Drop an MP3 into `public/audio/` (e.g. `public/audio/romantic-song.mp3`)
    // and write the path here: '/audio/romantic-song.mp3'.
    // If left as '' or file not found, the site automatically generates
    // a soothing romantic music-box melody in the browser!
    audioSrc: '',
    title: 'Romantic Music Box Melody 🎶',
    artist: 'For You',
  },

  // ------------------------------------------------------------------
  // 11. SECTION K: THE FINAL SURPRISE
  // ------------------------------------------------------------------
  finalSurprise: {
    buttonPrompt: 'One Last Surprise 💌',
    title: 'Happy Birthday, My Love! 💗',
    message: 'Thank you for existing, for being you, and for bringing pure magic into my life. May this year be as radiant, gentle, and wonderful as your heart.',
    subMessage: 'I will always be right here cheering for you, loving you, and making sure you smile every single day.',
    signature: 'Forever your person, Robin.',
    replayButton: 'Start Our Little Story Again 🌸',
  },
};
