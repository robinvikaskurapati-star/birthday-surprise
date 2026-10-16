/**
 * ====================================================================
 * 💖 ROMANTIC BIRTHDAY SURPRISE - PERSONALIZATION CONFIGURATION 💖
 * ====================================================================
 * 
 * Welcome Robin! This is the ONE central file you need to edit to customize
 * the entire website for your girlfriend. Every section pulls its content
 * directly from this file.
 * 
 * INSTRUCTIONS:
 * 1. Change the values below inside the quotation marks (e.g., 'Her Name').
 * 2. If you don't know a date yet, leave it empty '' or use the suggested format.
 * 3. To add your own photos: place image files in the `public/photos/` folder
 *    and update the `image` paths in the `gallery` array below.
 * 4. To add custom music: place an MP3 file (e.g. `romantic-melody.mp3`) in the
 *    `public/` folder and update `music.audioSrc` below. If left empty, the site
 *    plays a soft, romantic music-box melody synthesized automatically!
 * 
 * ====================================================================
 */

export const personalization = {
  // ------------------------------------------------------------------
  // 1. NAMES & GENERAL DETAILS
  // ------------------------------------------------------------------
  recipient: {
    name: 'My Sweetheart',            // Replace with her real name or special nickname (e.g., 'Ananya', 'Cutie', 'Angel')
    nickname: 'Babe',                 // Sweet nickname used in subtle buttons and hints
  },
  sender: {
    name: 'Robin',                    // Your name
    signature: 'Forever your person, Robin 💗', // Used at the bottom of the love letter & final surprise
  },

  // ------------------------------------------------------------------
  // 2. DATES
  // ------------------------------------------------------------------
  dates: {
    // Birthday date format: 'YYYY-MM-DD' or leave as string
    birthday: 'Today',                // e.g. 'October 16' or '2026-10-16'
    
    // Anniversary Date (When you started dating / became official)
    // Format: 'YYYY-MM-DD' (e.g. '2024-03-15')
    // If left empty '', the site will show a heartwarming message:
    // "Every second with you is timeless ⏳💫"
    anniversaryDate: '',              // e.g., '2024-06-18' or leave empty '' until ready!
  },

  // ------------------------------------------------------------------
  // 3. WELCOME / HERO SCREEN
  // ------------------------------------------------------------------
  hero: {
    badge: 'Today is your special day ✨',
    greeting: 'Happy Birthday, My Love! 🎂💗',
    subtitle: 'Today is all about you, my favorite person in the entire world.',
    buttonText: 'Open Your Birthday Surprise 🎁',
    hintText: 'Click the button or scroll down to begin the journey 💕',
  },

  // ------------------------------------------------------------------
  // 4. BIRTHDAY CELEBRATION (CAKE & WISH)
  // ------------------------------------------------------------------
  cake: {
    sectionTitle: 'Make a Birthday Wish 🎂',
    sectionSubtitle: 'Tap the candles to blow them out and make a wish from the bottom of your heart!',
    instructionBefore: 'Tap the glowing candles to blow them out 💨',
    instructionAfter: '✨ Your wish has flown up to the stars! May all your dreams come true! ✨',
    secretWishPlaceholder: 'Whisper your secret wish here...',
    wishSavedMessage: 'Your wish has been sealed with love 💖',
  },

  // ------------------------------------------------------------------
  // 5. OUR LOVE STORY (TIMELINE MILESTONES)
  // ------------------------------------------------------------------
  timeline: [
    {
      id: 1,
      tag: 'Chapter 1',
      title: 'The Day We Met 🌸',
      date: '[Add Date or Special Moment]',
      description: 'The universe aligned and brought us together. Out of billions of people in this world, I found you—the sweetest, kindest soul.',
      icon: 'sparkles',
    },
    {
      id: 2,
      tag: 'Chapter 2',
      title: 'Our First Conversation 💬',
      date: '[Add Date or Memory]',
      description: 'Talking to you felt as natural as breathing. Minutes turned into hours, and I knew right away that you were going to be truly special to me.',
      icon: 'message',
    },
    {
      id: 3,
      tag: 'Chapter 3',
      title: 'My Favorite Memory With You 📸',
      date: '[Add Date or Memory]',
      description: 'Whether we were laughing until our stomachs hurt or just sitting in peaceful silence, that moment with you is etched forever in my heart.',
      icon: 'heart',
    },
    {
      id: 4,
      tag: 'Chapter 4',
      title: 'The Moment You Made Me Smile ☀️',
      date: '[Add Date or Memory]',
      description: 'Your laugh, your cute gestures, and the way your eyes light up when you are excited—you brightened my whole world without even trying.',
      icon: 'smile',
    },
    {
      id: 5,
      tag: 'Chapter 5',
      title: 'Our Most Special Memory 💫',
      date: '[Add Date or Memory]',
      description: 'A quiet, perfect moment where time stopped. Looking at you, I realized just how deeply and truly I cherish having you in my life.',
      icon: 'star',
    },
    {
      id: 6,
      tag: 'The Future',
      title: 'All The Little Moments Waiting For Us 🌅',
      date: 'Every tomorrow & forever',
      description: 'More coffee dates, cozy movie nights, spontaneous travels, shared laughs, and countless sunsets. The best chapters of our story are still ahead.',
      icon: 'infinity',
    },
  ],

  // ------------------------------------------------------------------
  // 6. OUR MEMORIES / PHOTO GALLERY (POLAROID CARDS)
  // ------------------------------------------------------------------
  // Put your pictures in `public/photos/` and set the `image` field to '/photos/filename.jpg'.
  // If no custom image is provided, a beautiful romantic illustrated card is displayed!
  gallery: [
    {
      id: 1,
      title: 'Our Cutest Coffee Date ☕',
      caption: 'When coffee was warm, but your company was warmer.',
      date: 'Sweet Memories',
      image: '', // e.g. '/photos/photo1.jpg'
      rotation: '-rotate-2',
      aspect: 'aspect-[4/5]',
    },
    {
      id: 2,
      title: 'Your Radiant Smile ✨',
      caption: 'The smile that lights up my whole universe.',
      date: 'Golden Hour',
      image: '', // e.g. '/photos/photo2.jpg'
      rotation: 'rotate-3',
      aspect: 'aspect-square',
    },
    {
      id: 3,
      title: 'That Unforgettable Adventure 🌿',
      caption: 'Every place is magical as long as I am with you.',
      date: 'Wanderlust',
      image: '', // e.g. '/photos/photo3.jpg'
      rotation: '-rotate-3',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 4,
      title: 'Holding Hands Under The Stars 🌙',
      caption: 'In that quiet moment, my hand found its home.',
      date: 'Stargazing',
      image: '', // e.g. '/photos/photo4.jpg'
      rotation: 'rotate-2',
      aspect: 'aspect-[4/5]',
    },
    {
      id: 5,
      title: 'Uncontrollable Laughs 😂💕',
      caption: 'My favorite sound in the whole wide world is your laugh.',
      date: 'Pure Happiness',
      image: '', // e.g. '/photos/photo5.jpg'
      rotation: '-rotate-1',
      aspect: 'aspect-square',
    },
    {
      id: 6,
      title: 'To All Our Tomorrows 🥂',
      caption: 'Here is to another year of loving you more every single day.',
      date: 'Forever & Always',
      image: '', // e.g. '/photos/photo6.jpg'
      rotation: 'rotate-2',
      aspect: 'aspect-[4/3]',
    },
  ],

  // ------------------------------------------------------------------
  // 7. A FEW REASONS WHY YOU ARE MY FAVORITE PERSON
  // ------------------------------------------------------------------
  reasons: [
    {
      id: 1,
      title: 'Your Contagious Smile ☀️',
      reason: 'Your smile lights up even the darkest days and instantly melts all my stress away.',
      icon: 'smile',
    },
    {
      id: 2,
      title: 'Magic in Ordinary Moments ✨',
      reason: 'With you, even grocery runs and waiting in traffic turn into fun, memorable adventures.',
      icon: 'sparkles',
    },
    {
      id: 3,
      title: 'The Sound of Your Laugh 🎶',
      reason: 'It is the most genuine, heartwarming melody I have ever heard, and hearing it makes my day complete.',
      icon: 'music',
    },
    {
      id: 4,
      title: 'How Lucky You Make Me Feel 🍀',
      reason: 'Every single day I pause and think how blessed I am to have someone as sweet and loving as you by my side.',
      icon: 'heart',
    },
    {
      id: 5,
      title: 'Your Caring Heart 💖',
      reason: 'The pure kindness, gentleness, and empathy you show to everyone around you inspires me.',
      icon: 'handHeart',
    },
    {
      id: 6,
      title: 'The Little Things You Do 🌸',
      reason: 'The way you text me, the funny faces you make, and how you remember small details about us.',
      icon: 'gift',
    },
    {
      id: 7,
      title: 'Simply Being With You 🕊️',
      reason: 'No matter what we are doing, even just sitting in silence, you make everywhere feel like home.',
      icon: 'coffee',
    },
    {
      id: 8,
      title: 'Our Beautiful Future 🌅',
      reason: 'Because there is still so much of this world I want to discover and experience holding your hand.',
      icon: 'sun',
    },
  ],

  // ------------------------------------------------------------------
  // 8. THE PERSONAL LOVE LETTER
  // ------------------------------------------------------------------
  loveLetter: {
    envelopePrompt: 'A Sealed Letter For You 💌 (Tap to Open)',
    salutation: 'My Dearest,',
    paragraphs: [
      'On this day, the most beautiful soul was born, and I am endlessly grateful that our paths crossed in this big world.',
      'You bring warmth to ordinary mornings, laughter to quiet evenings, and peace to my heart in ways no one else ever could. Your kindness, beauty, and bright spirit make everything around you bloom.',
      'Thank you for being my favorite confidante, my biggest smile, and the best part of every day. Seeing you happy is my greatest joy.',
      'On your birthday, I wish you a year filled with boundless happiness, cherished dreams fulfilled, cozy moments, and all the love your heart can hold.',
    ],
    closing: 'With all my heart and love,',
    signature: 'Forever your person, Robin 💗',
  },

  // ------------------------------------------------------------------
  // 9. CUTE LOVE QUIZ
  // ------------------------------------------------------------------
  quiz: {
    title: 'A Little Couple Quiz! 🎮💕',
    subtitle: 'Let’s test our cute memories together!',
    questions: [
      {
        id: 1,
        question: 'Who took longer to get ready for our dates?',
        options: [
          'Definitely you! (Looking stunning takes time 😉)',
          'Me (Staring in the mirror trying to impress you)',
          'Both of us equally!',
          'Time freezes when we are together anyway!',
        ],
        reaction: 'Haha! You always look absolutely breathtaking no matter what! 🥰',
      },
      {
        id: 2,
        question: 'What is our ultimate comfort food craving together?',
        options: [
          'Pizza & Ice Cream 🍕🍦',
          'Late-night snacks & boba Bob🧋',
          'Cozy homemade food 🍲',
          'Dessert first, everything else later! 🍰',
        ],
        reaction: 'Yummy! Whatever we eat, it tastes 100x better when sharing with you! 😋',
      },
      {
        id: 3,
        question: 'Where is our dream spontaneous getaway?',
        options: [
          'A quiet cozy cabin in the misty hills 🏔️',
          'Watching the sunset on a warm sunny beach 🏖️',
          'A romantic city with fairy lights & cafes ☕',
          'Anywhere, as long as we are together ✈️',
        ],
        reaction: 'Any place in the universe is paradise as long as you are by my side! 💖',
      },
      {
        id: 4,
        question: 'How much do I love you?',
        options: [
          'To the moon and back 🌙',
          'More than all the stars in the sky ✨',
          'Beyond what words can ever explain 💗',
          'All of the above, plus infinity! 🚀💖',
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
  // 10. BACKGROUND MUSIC PLAYER
  // ------------------------------------------------------------------
  music: {
    // Put your audio file in `public/` (e.g., `public/birthday-song.mp3`)
    // and write the relative path here: '/birthday-song.mp3'.
    // If left as '' or file not found, the site plays a built-in soothing
    // romantic music-box melody created using Web Audio API!
    audioSrc: '', 
    title: 'Romantic Music Box Melody 🎶',
    artist: 'For You',
  },

  // ------------------------------------------------------------------
  // 11. THE FINAL SURPRISE
  // ------------------------------------------------------------------
  finalSurprise: {
    buttonPrompt: 'One Last Surprise 💌',
    title: 'Happy Birthday, My Queen! 👑🎂',
    message: 'Thank you for existing, for being you, and for bringing pure magic into my life. May this year be as radiant, gentle, and wonderful as your heart.',
    subMessage: 'I will always be here cheering for you, loving you, and making sure you smile every day.',
    signature: 'All my love, Robin 💗',
    replayButton: 'Experience The Magic Again 🌸',
  },
}
