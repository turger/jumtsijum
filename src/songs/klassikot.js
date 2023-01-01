const songList = [
  {
    lyrics: {
      0: "oli",
      1: "tunnelma",
      2: "niin",
      3: "huumaava"
    },
    artist: "Rauli Badding Somerjoki",
    song: "Paratiisi"
  },
  {
    lyrics: {
      0: "juokse",
      1: "sinne",
      2: "missä",
      3: "on",
      4: "viileää"
    },
    artist: "Kaija Koo",
    song: "Tinakenkätyttö"
  },
  {
    lyrics: {
      0: "hei",
      1: "me",
      2: "juhliin",
      3: "lähdetään",
      4: "et",
      5: "pääse"
    },
    artist: "Nylon Beat",
    song: "Viimeinen"
  },
  {
    lyrics: {
      0: "💯",
      1: "⚡️",
      2: "👊",
      3: "🔥"
    },
    artist: "Vicky Rosti / Antti Tuisku",
    song: "Sata Salamaa"
  },
  {
    lyrics: {
      0: "sinulle",
      1: "mä",
      2: "antaisin",
      3: "sydämen",
      4: "jos",
      5: "sä"
    },
    artist: "Jari Sillanpää",
    song: "Satulinna"
  },
  {
    lyrics: {
      0: "kun",
      1: "kohdattiin",
      2: "oli",
      3: "pimeää"
    },
    artist: "J. Karjalainen",
    song: "Ankkurinappi"
  },
  {
    lyrics: {
      0: "ei",
      1: "niistä️",
      2: "asiat",
      3: "miksikään",
      4: "muutu"
    },
    artist: "Eppu Normaali",
    song: "Tahroja paperilla"
  },
  {
    lyrics: {
      0: "samat",
      1: "tuulet",
      2: "puhaltaa",
      3: "samat",
      4: "sateet",
      5: "lankeaa"
    },
    artist: "Anssi Kela",
    song: "Puistossa"
  },
  {
    lyrics: {
      0: "taste",
      1: "of",
      2: "your",
      3: "lips",
      4: "I'm",
      5: "on"
    },
    artist: "Britney Spears",
    song: "Toxic"
  },
  {
    lyrics: {
      0: "rakkaus",
      1: "on",
      2: "kuollut",
      3: "elämän",
      4: "virtaan"
    },
    artist: "Jonna Tervomaa",
    song: "Rakkauden haudalla"
  },
  {
    lyrics: {
      0: "en",
      1: "oo",
      2: "enää",
      3: "sinisilmäinen",
      4: "oon"
    },
    artist: "Frederik",
    song: "Kolmekymppinen"
  },
  {
    lyrics: {
      0: "syvälle",
      1: "se",
      2: "upposi",
      3: "niin",
      4: "aivan",
      5: "kuin",
    },
    artist: "Siiri Nordin",
    song: "Sydämeni osuman sai"
  },
  {
    lyrics: {
      0: "usko",
      1: "pois",
      2: "että",
      3: "onnellinen",
      4: "olen",
      5: "vaan"
    },
    artist: "Popeda",
    song: "Lihaa ja perunaa"
  },
  {
    lyrics: {
      0: "oon",
      1: "vain",
      2: "sulle",
      3: "ihminen",
      4: "villi"
    },
    artist: "Pocahontas",
    song: "Tuulen värit"
  },
  {
    lyrics: {
      0: "🍺",
      1: "📠",
      2: "&",
      3: "👴🦃"
    },
    artist: "Pate Mustajärvi",
    song: "Ukkometso"
  },
  {
    lyrics: {
      0: "ne",
      1: "levottomat",
      2: "illat",
      3: "sekä",
      4: "unettomat",
      5: "yöt"
    },
    artist: "Zen Cafe",
    song: "Todella Kaunis"
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
    song: "My Heart Will Go On"
  },
  {
    lyrics: {
      0: "mä",
      1: "ensin",
      2: "näin",
      3: "vain",
      4: "meren",
      5: "sinisen"
    },
    artist: "Taiska",
    song: "Mombasa"
  },
  {
    lyrics: {
      0: "sillä",
      1: "tiesin",
      2: "sen",
      3: "minua",
      4: "vielä",
      5: "etsivän"
    },
    artist: "Leevi and the Leavings",
    song: "Pohjois-Karjala"
  },
  {
    lyrics: {
      0: "ennen",
      1: "päivänlaskua",
      2: "ei",
      3: "voi",
      4: "milloinkaan",
      5: "elää",
      6: "päällä"
    },
    artist: "Tapio Rautavaara",
    song: "Päivänsäde ja menninkäinen"
  },
  {
    lyrics: {
      0: "pipo",
      1: "päässä",
      2: "pakkasella",
      3: "kotiin",
      4: "kelpaa",
      5: "hoiperrella"
    },
    artist: "Freeman",
    song: "Ajetaan tandemilla"
  },
  {
    lyrics: {
      0: "tähti",
      1: "kirkkain",
      2: "sua",
      3: "taas",
      4: "mä",
      5: "pyynnöin"
    },
    artist: "Katri Helena",
    song: "Katson sineen taivaan"
  },
  {
    lyrics: {
      0: "saapuu",
      1: "piilostaan",
      2: "raunioilla",
      3: "kimaltelee",
      4: "kuu"
    },
    artist: "Arja Koriseva",
    song: "Kuningaskobra"
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
    song: "Join Me in Death"
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
    song: ""
  }
  */
]
export default songList
