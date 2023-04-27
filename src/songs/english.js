const songList = [
  {
    lyrics: {
      0: "all",
      1: "we",
      2: "need",
      3: "is",
      4: "lightning",
      5: "with",
      6: "power"
    },
    artist: "Lordi",
    song: "Hard Rock Hallelujah",
    question: "What year did Lordi perform this song in Eurovision?",
    answer: "2006"
  },
  {
    lyrics: {
      0: "I",
      1: "played",
      2: "with",
      3: "your",
      4: "heart",
      5: "got",
      6: "lost"
    },
    artist: "Britney Spears",
    song: "Oops!…I Did It Again",
    question: "In the music video of this song, what is the profession of a man who has fallen in love with Britney?",
    answer: "Astronaut"
  },
  {
    lyrics: {
      0: "once",
      1: "more",
      2: "you",
      3: "open",
      4: "the",
      5: "door"
    },
    artist: "Celine Dion",
    song: "My Heart Will Go On",
    question: "In 1997 this song was included on two albums, name them both",
    answer: "Let's Talk About Love (Dion) and the Titanic soundtrack"
  },
  {
    lyrics: {
      0: "close",
      1: "your",
      2: "eyes",
      3: "give",
      4: "me",
      5: "your",
      6: "hand"
    },
    artist: "The Bangles",
    song: "Eternal Flame",
    question: "Upon its 1989 single release, Eternal Flame became a number-one hit in how many countries?",
    answer: "Nine (9)"
  },
  {
    lyrics: {
      0: "all",
      1: "I",
      2: "ever",
      3: "needed",
      4: "is",
      5: "here"
    },
    artist: "Depeche Mode",
    song: "Enjoy the Silence",
    question: "The Anton Corbijn -directed music video for Enjoy the Silence references the themes and storyline of what book?",
    answer: "The Little Prince from Antoine de Saint-Exupéry"
  },
  {
    lyrics: {
      0: "and",
      1: "can",
      2: "you",
      3: "feel",
      4: "the",
      5: "love"
    },
    artist: "Elton John",
    song: "Can You Feel the Love Tonight",
    question: "In the movie Lion King this song was originally planned to be sung only by who two characters?",
    answer: "Timon and Pumba, but John disliked the comical nature of the concept as he declared that the song was meant to follow Disney's tradition of great love songs"
  },
  {
    lyrics: {
      0: "tell",
      1: "me",
      2: "why",
      3: "I",
      4: "never",
      5: "wanna"
    },
    artist: "Backstreet Boys",
    song: "I Want It That Way",
    question: "In which airport was the music video filmed?",
    answer: "Los Angeles International Airport (LAX)"
  },
  {
    lyrics: {
      0: "today",
      1: "is",
      2: "gonna",
      3: "be",
      4: "the",
      5: "day",
      6: "that"
    },
    artist: "Oasis",
    song: "Wonderwall",
    question: "In October 2020, it became the first song from the 1990s to reach how many streams on Spotify?",
    answer: "One billion"
  },
  {
    lyrics: {
      0: "take",
      1: "a",
      2: "lot",
      3: "to",
      4: "drag",
      5: "me",
      6: "away"
    },
    artist: "Toto",
    song: "Africa",
    question: "Name one TV-show where this song has appeared in?",
    answer: "Stranger Things, Family Guy, Chuck, The Cleveland Show and South Park"
  },
  {
    lyrics: {
      0: "kiss",
      1: "you",
      2: "but",
      3: "your",
      4: "lips",
      5: "are"
    },
    artist: "Alice Cooper",
    song: "Poison",
    question: "The song's main riff was written by who?",
    answer: "Guitarist John McCurry"
  },
  {
    lyrics: {
      0: "if",
      1: "you",
      2: "wanna",
      3: "be",
      4: "my",
      5: "lover"
    },
    artist: "Spice Girls",
    song: "Wannabe",
    question: "Which of the Spice Girls participated in writing the song?",
    answer: "All five"
  },
  {
    lyrics: {
      0: "been",
      1: "love",
      2: "but",
      3: "it's",
      4: "over",
      5: "now"
    },
    artist: "Roxette",
    song: "It Must Have Been Love",
    question: "How many different versions of the song have been officially released?",
    answer: "Four (4)"
  },
  {
    lyrics: {
      0: "won't",
      1: "you",
      2: "die",
      3: "tonight",
      4: "for",
      5: "love"
    },
    artist: "HIM",
    song: "Join Me in Death",
    question: "This song was featured in the end credits of the European version of which sci-fi movie?",
    answer: "The Thirteenth Floor"
  },
  {
    lyrics: {
      0: "where",
      1: "the",
      2: "grass",
      3: "is",
      4: "green",
      5: "and"
    },
    artist: "Guns N' Roses",
    song: "Paradise City",
    question: "This is the only song on the album to feature what musical instrument?",
    answer: "A synthesizer"
  },
  {
    lyrics: {
      0: "the",
      1: "night",
      2: "is",
      3: "calling",
      4: "me",
      5: "like",
      6: "a",
      7: "drum"
    },
    artist: "The Rasmus",
    song: "F-F-F-Falling",
    question: "The music video for F-F-F-Falling was shot in what city in Finland?",
    answer: "Vantaa"
  },
  {
    lyrics: {
      0: "It's",
      1: "just",
      2: "another",
      3: "rainy",
      4: "Sunday",
      5: "afternoon"
    },
    artist: "Fool's Garden",
    song: "Lemon Tree",
    question: "From what album is this song?",
    answer: "Dish of the Day"
  },
  {
    lyrics: {
      0: "It's",
      1: "like",
      2: "rain",
      3: "on",
      4: "your",
      5: "wedding",
      6: "day"
    },
    artist: "Alanis Morrissette",
    song: "Ironic",
    question: "This song includes a moderate tempo of how many beats per minute?",
    answer: "Eighty-five"
  },
  {
    lyrics: {
      0: "no",
      1: "time",
      2: "for",
      3: "losers",
      4: "'cause",
      5: "we",
      6: "are"
    },
    artist: "Queen",
    song: "We Are the Champions",
    question: "Fill the gap in this sentence: A team of scientific researchers concluded that the song was the *beep* in the history of popular music",
    answer: "catchiest"
  },
  {
    lyrics: {
      0: "but",
      1: "the",
      2: "kid",
      3: "is",
      4: "not",
      5: "my",
      6: "son"
    },
    artist: "Michael Jackson",
    song: "Billie Jean",
    question: "What year is this song released?",
    answer: "1983"
  },
  {
    lyrics: {
      0: "I'm",
      1: "off",
      2: "the",
      3: "deep",
      4: "end",
      5: "watch"
    },
    artist: "Lady Gaga, Bradley Cooper",
    song: "Shallow",
    question: "How many times this song is heard in the film called A Star Is Born?",
    answer: "Three (3) times"
  }
  /*
  ,
  {
    lyrics: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: ""
    },
    artist: "",
    song: "",
    question: "",
    answer: ""
  }
  */
]
export default songList
