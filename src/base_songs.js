const songList = [
  {
    "answer": "",
    "artist": "Jari Sillanpää",
    "language": "fi",
    "lyrics": [
      "sinulle",
      "mä",
      "antaisin",
      "sydämen",
      "jos",
      "sä"
    ],
    "name": "Satulinna",
    "question": ""
  },
  {
    "answer": "huumausaineen käyttörikos, rattijuopumus ja liikenneturvallisuuden vaarantaminen",
    "artist": "William",
    "language": "fi",
    "lyrics": [
      "oon",
      "korkeel",
      "niiku",
      "lentokone"
    ],
    "name": "Penelope",
    "question": "William tuomittiin marraskuussa 2023 Pohjois-Karjalan käräjäoikeudessa kolmesta rikoksesta. Nimeä ainakin yksi näistä."
  },
  {
    "answer": "Rock Band 3",
    "artist": "HIM",
    "language": "en",
    "lyrics": [
      "with",
      "the venomous",
      "kiss",
      "you",
      "gave",
      "me",
      "I'm",
      "killing",
      "loneliness"
    ],
    "name": "Killing Loneliness",
    "question": "In which 2010 video game is the song playable?"
  },
  {
    "answer": "Tennispalatsin 1. salissa",
    "artist": "Cheek",
    "language": "fi",
    "lyrics": [
      "tää",
      "ei",
      "tuu",
      "poistuu",
      "täältä",
      "koskaan"
    ],
    "name": "Timantit on ikuisia",
    "question": "Missä elokuvateatterissa kappaleen musiikkivideo esitettiin ensimmäisen kerran 8. elokuuta 2013?"
  },
  {
    "answer": "",
    "artist": "Aladdin",
    "language": "en",
    "lyrics": [
      "A",
      "whole",
      "new",
      "world",
      "a new",
      "fantastic",
      "point",
      "of",
      "view"
    ],
    "name": "The whole new world",
    "question": ""
  },
  {
    "answer": "Slow motion",
    "artist": "Olavi Uusivirta",
    "language": "fi",
    "lyrics": [
      "muistaa",
      "sut",
      "juostiin",
      "kultaa",
      "hiuksissa"
    ],
    "name": "Kultaa hiuksissa",
    "question": "Minkälaisella kameran efektillä biisin musavideo on kuvattu?"
  },
  {
    "answer": "Aku Ankka",
    "artist": "J. Karjalainen",
    "language": "fi",
    "lyrics": [
      "tuo",
      "se",
      "pois",
      "takaisin",
      "sydäntäni",
      "vielä",
      "tarvitsen"
    ],
    "name": "Doris",
    "question": "Missä lehdessä julkaistiin J. Karjalaisen käsikirjoittama tarina Kokkikahakka vuonna 2013?"
  },
  {
    "answer": "1984",
    "artist": "Kirka",
    "language": "fi",
    "lyrics": [
      "se",
      "viimeinen",
      "juna",
      "mun",
      "laukun",
      "vei"
    ],
    "name": "Hengaillaan",
    "question": "Minä vuonna Hengaillaan edusti Suomea Euroviisuissa?"
  },
  {
    "answer": "Hartwall Arena 1.6.2019",
    "artist": "Lenny Kravitz",
    "language": "en",
    "lyrics": [
      "I",
      "want",
      "to",
      "get",
      "away",
      "I",
      "want",
      "to",
      "fly"
    ],
    "name": "Fly Away",
    "question": "Lenny last performed in Finland in 2019, where?"
  },
  {
    "answer": "",
    "artist": "Alessandra Mele",
    "language": "en",
    "lyrics": [
      "She",
      "queen",
      "of",
      "the kings",
      "runnin'",
      "so",
      "fast",
      "beatin'",
      "the wind"
    ],
    "name": "Queen of Kings",
    "question": ""
  },
  {
    "answer": "Satasen laina",
    "artist": "Nylon Beat",
    "language": "fi",
    "lyrics": [
      "en",
      "tarvii",
      "asuntoo",
      "vaan",
      "satasen"
    ],
    "name": "Satasen Laina",
    "question": "Minkä nimisellä albumilla tämä biisi esiintyy?"
  },
  {
    "answer": "Australia. The highway that inspired the title, Canning Highway, connects the Perth Kwinana freeway to its port Fremantle and was home to many of Bon Scott's favourite pubs and hotels, including the Raffles Hotel.",
    "artist": "AC/DC",
    "language": "en",
    "lyrics": [
      "I'm",
      "on",
      "the highway",
      "to",
      "hell"
    ],
    "name": "Highway to Hell",
    "question": "Where is the highway that inspired the title? (country is enough)"
  },
  {
    "answer": "Zero (0)",
    "artist": "Käärijä",
    "language": "fi",
    "lyrics": [
      "rankka",
      "viikko",
      "ja",
      "paljon",
      "pitkii",
      "päiviä",
      "takan"
    ],
    "name": "Cha Cha Cha",
    "question": "Käärijä came second in the 2023 Eurovision Song Contest and received a full 12 points in the public vote from 18 countries. From how many countries did the winner Loreen get a full 12 points in PUBLIC vote?"
  },
  {
    "answer": "",
    "artist": "Nylon Beat",
    "language": "fi",
    "lyrics": [
      "sä",
      "oot",
      "sellainen",
      "kaikki",
      "tietää",
      "sen"
    ],
    "name": "Viimeinen",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Little mermaid",
    "language": "en",
    "lyrics": [
      "Up",
      "where",
      "they",
      "walk",
      "up",
      "where",
      "they",
      "run"
    ],
    "name": "Part of your world",
    "question": ""
  },
  {
    "answer": "Whigfield, Ashley Tisdale, Crazy Frog, Cascada, Glee cast, Joe McElderry, Ariana Grande, Carly Rae Jepsen, Taylor Swift, Hilary Duff (see more from Wikipedia)",
    "artist": "Wham!",
    "language": "en",
    "lyrics": [
      "last",
      "Christmas",
      "I",
      "gave",
      "you",
      "my",
      "heart"
    ],
    "name": "Last Christmas",
    "question": "Name one artist or band who has released a cover song of Last Christmas"
  },
  {
    "answer": "Tiukka punainen haalari",
    "artist": "Erika Vikman",
    "language": "fi",
    "lyrics": [
      "lupaan",
      "että",
      "on",
      "hauskempaa",
      "meil",
      "jotka",
      "löytää"
    ],
    "name": "Syntisten pöytä",
    "question": "Minkä värinen asu Erikalla on päällä biisin musiikkivideossa?"
  },
  {
    "answer": "Paras elokuvamusiikki ja elokuvan kappale ”Colors of the Wind” palkittiin parhaana lauluna",
    "artist": "Pocahontas",
    "language": "fi",
    "lyrics": [
      "oon",
      "vain",
      "sulle",
      "ihminen",
      "villi"
    ],
    "name": "Tuulen värit",
    "question": "Oscar-gaalassa 1996 Pocahontas-elokuva sai kaksi palkintoa, nimeä toinen näistä-"
  },
  {
    "answer": "The Thirteenth Floor",
    "artist": "HIM",
    "language": "en",
    "lyrics": [
      "won't",
      "you",
      "die",
      "tonight",
      "for",
      "love"
    ],
    "name": "Join Me in Death",
    "question": "This song was featured in the end credits of the European version of which sci-fi movie?"
  },
  {
    "answer": "Imagine",
    "artist": "John Lennon",
    "language": "en",
    "lyrics": [
      "imagine",
      "all",
      "the people",
      "sharing",
      "all",
      "the world"
    ],
    "name": "Imagine",
    "question": "What is the name of the album this song appears on?"
  },
  {
    "answer": "In Ruskeasuo, Helsinki. The cover has been chosen many times as the best album cover in Finland.",
    "artist": "Hurriganes",
    "language": "en",
    "lyrics": [
      "I",
      "will",
      "always",
      "only",
      "be",
      "in",
      "love",
      "with",
      "you"
    ],
    "name": "I Will Stay",
    "question": "This song is from album \"Roadrunner\". The album cover features the band members sitting on a backseat of a Cadillac in a neighborhood in Helsinki. What is this neighborhood?"
  },
  {
    "answer": "\"In Bloom\", \"Come as You Are\", \"Breed\", \"Lithium\", \"Polly\", \"Territorial Pissings\", \"Drain You\", \"Lounge Act\", \"Stay Away\", \"On a Plain\", \"Something in the Way\", \"Endless, Nameless\" (hidden track)",
    "artist": "Nirvana",
    "language": "en",
    "lyrics": [
      "hello",
      "hello",
      "hello",
      "how",
      "low"
    ],
    "name": "Smells Like Teen Spirit",
    "question": " This song is from the album Nevermind. Name one song from the same album that isn't \"smells like teen spirit\"."
  },
  {
    "answer": "",
    "artist": "Celine Dion",
    "language": "en",
    "lyrics": [
      "tales",
      "old",
      "as",
      "time",
      "true",
      "as",
      "it",
      "can",
      "be"
    ],
    "name": "Beaty and the beast",
    "question": ""
  },
  {
    "answer": "Rocky III",
    "artist": "Survivor",
    "language": "en",
    "lyrics": [
      "and",
      "he's",
      "watching",
      "us",
      "all",
      "with",
      "the eye",
      "of"
    ],
    "name": "Eye of the Tiger",
    "question": "This song was written as the theme song of which movie in 1982?"
  },
  {
    "answer": "Lähdit smurffii seuraamaan",
    "artist": "Gimmel",
    "language": "fi",
    "lyrics": [
      "sä",
      "siellä",
      "nyt",
      "jo",
      "etsit",
      "muijaa"
    ],
    "name": "Etsit muijaa seuraavaa",
    "question": "Mikä on tämän biisin smurffiversion nimi?"
  },
  {
    "answer": "",
    "artist": "Vilma Alina",
    "language": "fi",
    "lyrics": [
      "siinä",
      "sä",
      "vain",
      "istut",
      "tuijotellen",
      "lasiasi"
    ],
    "name": "Juha88",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Toy Story",
    "language": "en",
    "lyrics": [
      "You've",
      "got",
      "a friend",
      "in",
      "me"
    ],
    "name": "You've got a friend in me",
    "question": ""
  },
  {
    "answer": "Menolippu Mombasaan ja biisin esitti metalliyhtye Denigrate",
    "artist": "Taiska",
    "language": "fi",
    "lyrics": [
      "mä",
      "ensin",
      "näin",
      "vain",
      "meren",
      "sinisen"
    ],
    "name": "Mombasa",
    "question": "Minkä elokuvan tunnusmusiikkina tämä kappale oli vuonna 2002?"
  },
  {
    "answer": "",
    "artist": "Mulan",
    "language": "fi",
    "lyrics": [
      "Kuin",
      "joki",
      "voima",
      "se",
      "meissä",
      "virtaa"
    ],
    "name": "Teistä miehen teen",
    "question": ""
  },
  {
    "answer": "Guitarist John McCurry",
    "artist": "Alice Cooper",
    "language": "en",
    "lyrics": [
      "kiss",
      "you",
      "but",
      "your",
      "lips",
      "are",
      "venomous"
    ],
    "name": "Poison",
    "question": "The song's main riff was written by who?"
  },
  {
    "answer": "Avicii (Tim Bergling)",
    "artist": "Coldplay",
    "language": "en",
    "lyrics": [
      "'cause",
      "you're",
      "a sky",
      "full",
      "of",
      "stars"
    ],
    "name": "A Sky Full of Stars",
    "question": "The band co-wrote and co-produced the song with a Swedish electronic musician, who?"
  },
  {
    "answer": "",
    "artist": "The Frozen",
    "language": "en",
    "lyrics": [
      "The",
      "cold",
      "never",
      "bothered",
      "me",
      "anyway"
    ],
    "name": "Let it go",
    "question": ""
  },
  {
    "answer": "1 billion",
    "artist": "Linkin Park",
    "language": "en",
    "lyrics": [
      "tried",
      "so",
      "hard",
      "and",
      "got",
      "so",
      "far",
      "but",
      "in"
    ],
    "name": "In the End",
    "question": "How many views did the music video surpass on YouTube in July 2020 (in total)?"
  },
  {
    "answer": "50",
    "artist": "Juha Tapio",
    "language": "fi",
    "lyrics": [
      "Tuuli",
      "hiuksillaa",
      "hiekkaa",
      "varpaissaan"
    ],
    "name": "Ohikiitävää",
    "question": "Juha Tapion ikä (2024)"
  },
  {
    "answer": "All five",
    "artist": "Spice Girls",
    "language": "en",
    "lyrics": [
      "if",
      "you",
      "wanna",
      "be",
      "my",
      "lover"
    ],
    "name": "Wannabe",
    "question": "Which of the Spice Girls participated in writing the song?"
  },
  {
    "answer": "Bob Dylanin ”Mr. Tambourine Man” ja hän kirjoitti kappaleen kahden viikon juomaputken jälkeen, viidentenätoista yönä",
    "artist": "Juice Leskinen",
    "language": "fi",
    "lyrics": [
      "kuin",
      "hullu",
      "huudan",
      "rakkauteni",
      "perään"
    ],
    "name": "Viidestoista yö",
    "question": "Minkä Bob Dylanin biisin Juice on sanonut antaneen vaikutteita sanoitukseen ja sävellykseen?"
  },
  {
    "answer": "Brädi",
    "artist": "Robin",
    "language": "fi",
    "lyrics": [
      "mun",
      "sydämestä",
      "puuttuu",
      "palanen"
    ],
    "name": "Puuttuva Palanen",
    "question": "Kuka rap-artisti vierailee tällä biisillä?"
  },
  {
    "answer": "\"In the Shadows of Ukraine\" ",
    "artist": "The Rasmus",
    "language": "en",
    "lyrics": [
      "I've",
      "been",
      "waiting",
      "in",
      "the shadows",
      "for",
      "my"
    ],
    "name": "In the Shadows",
    "question": "There's a new version of the song, co-written by and featuring Ukrainian rap group Kalush Orchestra. What is the name of this song?"
  },
  {
    "answer": "",
    "artist": "Frederik",
    "language": "fi",
    "lyrics": [
      "en",
      "oo",
      "enää",
      "sinisilmäinen",
      "oon"
    ],
    "name": "Kolmekymppinen",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Katri Helena",
    "language": "fi",
    "lyrics": [
      "katson",
      "sineen",
      "taivaan",
      "tähti",
      "kirkkain",
      "sua"
    ],
    "name": "Katson sineen taivaan",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Freeman",
    "language": "fi",
    "lyrics": [
      "pipo",
      "päässä",
      "pakkasella",
      "kotiin",
      "kelpaa",
      "hoiperrella"
    ],
    "name": "Ajetaan tandemilla",
    "question": ""
  },
  {
    "answer": "Keskustan",
    "artist": "Pikku G",
    "language": "fi",
    "lyrics": [
      "sä",
      "oot",
      "valo",
      "mun",
      "pimeydessäin"
    ],
    "name": "Romeo ja Julia",
    "question": "Minkä puolueen listoilla Pikku G. eli Henri Vähäkainu oli ehdolla vuoden 2007 eduskuntavaaleissa?"
  },
  {
    "answer": "\"My Way\"",
    "artist": "David Bowie",
    "language": "en",
    "lyrics": [
      "sailors",
      "fighting",
      "in",
      "the dance",
      "hall"
    ],
    "name": "Life on Mars?",
    "question": "Bowie wrote this song as a parody of which song of Frank Sinatra?"
  },
  {
    "answer": "",
    "artist": "Kaija Koo",
    "language": "fi",
    "lyrics": [
      "oot",
      "liian",
      "kaunis",
      "häpeemään"
    ],
    "name": "Kaunis Rietas Onnellinen",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Siiri Nordin",
    "language": "fi",
    "lyrics": [
      "syvälle",
      "se",
      "upposi",
      "niin",
      "aivan",
      "kuin"
    ],
    "name": "Sydämeni osuman sai",
    "question": ""
  },
  {
    "answer": "Vihellystä",
    "artist": "Popeda",
    "language": "fi",
    "lyrics": [
      "onnellinen",
      "olen",
      "vaan",
      "kun",
      "saan",
      "lihaa"
    ],
    "name": "Lihaa ja perunaa",
    "question": "Tällä biisillä toimi vierailijana Mika Sundqvist, minkälaista ääntä hän lisäsi kappaleeseen?"
  },
  {
    "answer": "Aquarium",
    "artist": "Aqua",
    "language": "en",
    "lyrics": [
      "life",
      "in",
      "plastic",
      "it's",
      "fantastic"
    ],
    "name": "Barbie Girl",
    "question": "What is the name of the group's debut studio album, on which this song was released as the third single?"
  },
  {
    "answer": "Dancehall/pop-artisti Lord Est",
    "artist": "Petri Nygård",
    "language": "fi",
    "lyrics": [
      "siis",
      "hyvästi",
      "selvä",
      "päivä"
    ],
    "name": "Selvä päivä",
    "question": "Kuka artisti vierailee kappaleen kertosäkeellä?"
  },
  {
    "answer": "",
    "artist": "The Frozen",
    "language": "en",
    "lyrics": [
      "Elsa",
      "do",
      "you",
      "wanna",
      "build",
      "snowman"
    ],
    "name": "Do you wanna build a snowman",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Haloo Helsinki!",
    "language": "fi",
    "lyrics": [
      "Eat",
      "sleep",
      "rave"
    ],
    "name": "Reiviluola",
    "question": ""
  },
  {
    "answer": "Seiso hiljaa, pistä silmät kii",
    "artist": "Maija Vilkkumaa",
    "language": "fi",
    "lyrics": [
      "Mulla",
      "on",
      "valtaa",
      "mä",
      "koulutan",
      "muita"
    ],
    "name": "Satumaa-tango",
    "question": "Millä sanoilla alkaa biisi Satumaa-tango"
  },
  {
    "answer": "”kukaan ei ikinä muista sitä oikein”",
    "artist": "Anssi Kela",
    "language": "fi",
    "lyrics": [
      "Meidän",
      "piti",
      "muuttaa",
      "maailmaa"
    ],
    "name": "1972",
    "question": "Minkä takia Anssi Kela on myöhemmin kertonut katuvansa biisin nimeä ”1972”?"
  },
  {
    "answer": "3:00",
    "artist": "Arttu Wiskari",
    "language": "fi",
    "lyrics": [
      "lupaan",
      "että",
      "saunaan",
      "vettä",
      "vien"
    ],
    "name": "Mökkitie",
    "question": "Tasan kuinka monta minuuttia tämän biisin virallinen versio kestää?"
  },
  {
    "answer": "SuomiLOVE",
    "artist": "Gasellit",
    "language": "fi",
    "lyrics": [
      "pyydä",
      "mukaa",
      "mä",
      "oon",
      "imus"
    ],
    "name": "Imus",
    "question": "Minkä televisio-ohjelman viidennellä kaudella tämä biisi esitetään lavalla?"
  },
  {
    "answer": "",
    "artist": "Waldo's people",
    "language": "en",
    "lyrics": [
      "I",
      "dont",
      "wanna",
      "lose",
      "control",
      "but",
      "I'm",
      "falling"
    ],
    "name": "Lose Control",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Conchita Wurst",
    "language": "en",
    "lyrics": [
      "Rise",
      "like",
      "a phoenix",
      "Out",
      "of",
      "the ashes"
    ],
    "name": "Rise Like a Phoenix",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Anssi Kela",
    "language": "fi",
    "lyrics": [
      "samat",
      "tuulet",
      "puhaltaa",
      "samat",
      "sateet",
      "lankeaa"
    ],
    "name": "Puistossa",
    "question": ""
  },
  {
    "answer": "Meksikolaiseen taidemaalari Frida Kahloon.",
    "artist": "Behm",
    "language": "fi",
    "lyrics": [
      "mä",
      "en",
      "tuu",
      "koristaa",
      "sun",
      "seinää",
      "milloinkaan"
    ],
    "name": "Frida",
    "question": "Keneen laulun nimi on viittaus?"
  },
  {
    "answer": "One. The one actual, ironic statement in this song is, \"As the plane crashed down he thought 'well, isn't this nice'...\" Sarcasm is an example of irony, and this thought is a sarcastic one. -- The other events described in the song (rain on your wedding day, a traffic jam when you're already late, etc.), are not examples of irony. Irony is the use of words to convey the opposite of their literal meaning.",
    "artist": "Alanis Morrissette",
    "language": "en",
    "lyrics": [
      "it's",
      "like",
      "rain",
      "on",
      "your",
      "wedding",
      "day"
    ],
    "name": "Ironic",
    "question": "How many statements in this song were actually ironic?"
  },
  {
    "answer": "",
    "artist": "Abba",
    "language": "en",
    "lyrics": [
      "Waterloo",
      "I",
      "was",
      "defeated",
      "you",
      "won"
    ],
    "name": "Waterloo",
    "question": ""
  },
  {
    "answer": "",
    "artist": "O-Zone",
    "language": "other",
    "lyrics": [
      "Vrei",
      "sa",
      "pleci",
      "dar",
      "numa",
      "numa",
      "iei"
    ],
    "name": "Dragosteo din tei",
    "question": ""
  },
  {
    "answer": "",
    "artist": "The Rasmus",
    "language": "en",
    "lyrics": [
      "Jezebel",
      "I",
      "don't",
      "know",
      "how",
      "you",
      "got"
    ],
    "name": "Jezebel",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Lumikki",
    "language": "fi",
    "lyrics": [
      "Laulaen",
      "työtäs",
      "tee",
      "ain",
      "laulaen",
      "työtäs",
      "tee"
    ],
    "name": "Laulaen työtäs tee",
    "question": ""
  },
  {
    "answer": "”Ristinolla”",
    "artist": "Movetron",
    "language": "fi",
    "lyrics": [
      "en",
      "suudella",
      "saisi",
      "sun",
      "huulia"
    ],
    "name": "Romeo ja Julia",
    "question": "Tämä biisi ylsi singlelistalla korkeimmillaan sijalle kaksi. Mikä Movetronin biisi on ainoa singlelistan ykkönen?"
  },
  {
    "answer": "",
    "artist": "Bess",
    "language": "fi",
    "lyrics": [
      "Mä",
      "keinuin",
      "sylissäsi",
      "tähän",
      "tempoon"
    ],
    "name": "Tempo",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Pate Mustajärvi",
    "language": "fi",
    "lyrics": [
      "🍺",
      "📠",
      "&",
      "👴🦃"
    ],
    "name": "Ukkometso",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Britney Spears",
    "language": "en",
    "lyrics": [
      "don't",
      "you",
      "know",
      "that",
      "you're",
      "toxic"
    ],
    "name": "Toxic",
    "question": ""
  },
  {
    "answer": "Kirje on alun perin bosnialaisen Hari Mata Hari -yhtyeen balladi Strah me da te violim",
    "artist": "Janne Hurme",
    "language": "fi",
    "lyrics": [
      "myrsky",
      "repii",
      "puita",
      "taivas",
      "salamoi"
    ],
    "name": "Kirje",
    "question": "Mistä maasta on peräisin tämän kappaleen alkuperäinen versio?"
  },
  {
    "answer": "36",
    "artist": "Taylor Swift",
    "language": "en",
    "lyrics": [
      "baby",
      "I'm",
      "just",
      "gonna",
      "shake",
      "shake"
    ],
    "name": "Shake it Off",
    "question": "How many times the phrase \"shake it off\" shows up in this song (to the nearest five)? "
  },
  {
    "answer": "",
    "artist": "Aristocats",
    "language": "en",
    "lyrics": [
      "When",
      "everybody",
      "wants",
      "to",
      "be",
      "a cat"
    ],
    "name": "Everybody wants to be a cat",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Vicky Rosti / Antti Tuisku",
    "language": "fi",
    "lyrics": [
      "💯",
      "⚡️",
      "👊",
      "🔥"
    ],
    "name": "Sata Salamaa",
    "question": ""
  },
  {
    "answer": "6 (six) times",
    "artist": "Red Hot Chili Peppers",
    "language": "en",
    "lyrics": [
      "hey",
      "oh",
      "listen",
      "what",
      "I",
      "say"
    ],
    "name": "Snow (Hey Oh)",
    "question": "How many times there's a word \"snow\" in the song lyrics?"
  },
  {
    "answer": "",
    "artist": "Jonna Tervomaa",
    "language": "fi",
    "lyrics": [
      "rakkaus",
      "on",
      "kuollut",
      "elämän",
      "virtaan"
    ],
    "name": "Rakkauden haudalla",
    "question": ""
  },
  {
    "answer": "Italian",
    "artist": "ABBA",
    "language": "en",
    "lyrics": [
      "my",
      "my",
      "how",
      "can",
      "I",
      "resist",
      "you"
    ],
    "name": "Mamma Mia",
    "question": "The title of the song is derived from WHICH language, where it is an interjection used in situations of surprise, anxiety or excitement."
  },
  {
    "answer": "Stranger Things, Family Guy, Chuck, The Cleveland Show and South Park",
    "artist": "Toto",
    "language": "en",
    "lyrics": [
      "I",
      "bless",
      "the rains",
      "down",
      "in",
      "Africa"
    ],
    "name": "Africa",
    "question": "Name one TV-show where this song has appeared in?"
  },
  {
    "answer": "Käärijän kappale Cha cha cha",
    "artist": "JVG",
    "language": "fi",
    "lyrics": [
      "ei",
      "enää",
      "duunii",
      "painan",
      "puita",
      "uuniin"
    ],
    "name": "Ikuinen vappu",
    "question": "Marraskuussa 2020 tästä tuli striimatuin suomenkielinen kappale suoratoistopalvelu Spotifyssa, kunnes toinen biisi ylitti sen striimiluvuissa toukokuussa 2023. Mikä tämä vielä enemmän striimannut biisi on?"
  },
  {
    "answer": "",
    "artist": "Hercules",
    "language": "en",
    "lyrics": [
      "I",
      "will",
      "find",
      "my",
      "way",
      "I",
      "can",
      "go",
      "to",
      "distance"
    ],
    "name": "I can go to distance",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Elton John",
    "language": "fi",
    "lyrics": [
      "Se",
      "on",
      "tie",
      "elämän",
      "ja",
      "käyt",
      "kulkemaan"
    ],
    "name": "Elämän tie",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Ariel",
    "language": "fi",
    "lyrics": [
      "Aalloissa",
      "siis",
      "parempi",
      "täällä",
      "myös",
      "sadesäällä",
      "muusta",
      "nyt",
      "viis"
    ],
    "name": "Aalloissa siis",
    "question": ""
  },
  {
    "answer": "Pertti ”Nipa” Neumann",
    "artist": "Dingo",
    "language": "fi",
    "lyrics": [
      "Kaikki",
      "tietää",
      "sun",
      "tuhkimotarinas",
      "nimeltään"
    ],
    "name": "Levoton Tuhkimo",
    "question": "Dingon laulajan nimi"
  },
  {
    "answer": "Release date: October 13, 2023",
    "artist": "Wheatus",
    "language": "en",
    "lyrics": [
      "yeah",
      "I'm",
      "just",
      "a Christmas",
      "dirtbag",
      "baby"
    ],
    "name": "Christmas Dirtbag",
    "question": "This song is from album \"Just a Dirtbag Christmas\". What year this album was released?"
  },
  {
    "answer": "They crashed the mall",
    "artist": "Avril Lavigne",
    "language": "en",
    "lyrics": [
      "have",
      "to",
      "go",
      "and",
      "make",
      "things",
      "so",
      "complicated"
    ],
    "name": "Complicated",
    "question": "Where did the band decide to go in the official music video for \"Complicated\"?"
  },
  {
    "answer": "Imperiumin vastaisku (Star Wars: Episode V – The Empire Strikes Back)",
    "artist": "Eppu Normaali",
    "language": "fi",
    "lyrics": [
      "tahdon",
      "olla",
      "juovuksissa",
      "aina",
      "sekä",
      "maanantaina"
    ],
    "name": "Baarikärpänen",
    "question": "Tämä biisi on albumilta, jonka nimi on myös yhden Star Wars elokuvan nimi. Mikä se on?"
  },
  {
    "answer": "",
    "artist": "Vesala",
    "language": "fi",
    "lyrics": [
      "ajetaan",
      "kovaa",
      "ollaan",
      "ihan",
      "hiljaa"
    ],
    "name": "Tequila",
    "question": ""
  },
  {
    "answer": "Hyvikset ja pahikset",
    "artist": "Kuumaa",
    "language": "fi",
    "lyrics": [
      "Mul",
      "on",
      "hajalla",
      "kengät",
      "ja",
      "palaa",
      "sydän"
    ],
    "name": "Ylivoimainen",
    "question": "Albumin nimi miltä kappale löytyy"
  },
  {
    "answer": "JVG",
    "artist": "Gasellit",
    "language": "fi",
    "lyrics": [
      "vaik",
      "aina",
      "ei",
      "oo",
      "luksusta",
      "oon",
      "asunu",
      "tääl",
      "muksusta"
    ],
    "name": "Mitä mä Malagas?",
    "question": "Mikä toinen bändi tällä biisillä vierailee?"
  },
  {
    "answer": "",
    "artist": "Loreen",
    "language": "en",
    "lyrics": [
      "Forever",
      "till",
      "the end",
      "of",
      "time"
    ],
    "name": "Euphoria",
    "question": ""
  },
  {
    "answer": "Anna was his friend's girlfriend",
    "artist": "Basshunter",
    "language": "sv",
    "lyrics": [
      "jag",
      "känner",
      "en bot",
      "hon",
      "heter",
      "Anna"
    ],
    "name": "Boten Anna",
    "question": " The song relates to Basshunter's real life experiences; he thought for a long time that Anna is his friend's new bot in an IRC channel. Who was Anna really?"
  },
  {
    "answer": "1st of November",
    "artist": "Mariah Carey",
    "language": "en",
    "lyrics": [
      "all",
      "I",
      "want",
      "for",
      "Christmas",
      "is",
      "you"
    ],
    "name": "All I Want for Christmas Is You",
    "question": "Because it's not Christmas until Mariah says it is. On what day each year Mariah announces it's Christmas time?"
  },
  {
    "answer": "",
    "artist": "Eppu Normaali",
    "language": "fi",
    "lyrics": [
      "ei",
      "niistä️",
      "asiat",
      "miksikään",
      "muutu"
    ],
    "name": "Tahroja paperilla",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Verka Serduchka",
    "language": "other",
    "lyrics": [
      "Sieben",
      "sieben",
      "ai",
      "lyulyu",
      "Sieben",
      "sieben",
      "eins",
      "zwei"
    ],
    "name": "Dancing Lasha Tumbai",
    "question": ""
  },
  {
    "answer": "Let's Talk About Love (Dion) and the Titanic soundtrack",
    "artist": "Celine Dion",
    "language": "en",
    "lyrics": [
      "once",
      "more",
      "you",
      "open",
      "the door"
    ],
    "name": "My Heart Will Go On",
    "question": "In 1997 this song was included on two albums, name them both"
  },
  {
    "answer": "Petra (laulu), Emppu (kitara, laulu), Noora (kitara, laulu), Mimmu (basso, laulu), Tuuli (rummut & lyömäsoittimet, laulu), Nea (kosketinsoitin, laulu)",
    "artist": "Tiktak",
    "language": "fi",
    "lyrics": [
      "ehkä",
      "väsyttää",
      "vähän",
      "mutta",
      "nyt",
      "ei",
      "nukuta"
    ],
    "name": "Heilutaan",
    "question": "Bändiin kuului kuusi jäsentä. Nimeä näistä kaksi."
  },
  {
    "answer": "Kiitos ei ole kirosana",
    "artist": "Haloo Helsinki",
    "language": "fi",
    "lyrics": [
      "kello",
      "lyö",
      "kuus",
      "muutetaan",
      "maailmaa",
      "ja",
      "naapuri"
    ],
    "name": "Beibi",
    "question": "Minkä albumin ensimmäisenä singlenä tämä biisi on julkaiistu?"
  },
  {
    "answer": "Rickrolling",
    "artist": "Rick Astley",
    "language": "en",
    "lyrics": [
      "never",
      "gonna",
      "tell",
      "a lie",
      "and",
      "hurt",
      "you"
    ],
    "name": "Never Gonna Give You Up",
    "question": "What is it called when you troll someone in an online discussion by posting a link that unexpectedly directs other users to Rick Astley's \"Never Gonna Give You Up\" video?"
  },
  {
    "answer": "",
    "artist": "Arja Koriseva",
    "language": "fi",
    "lyrics": [
      "saapuu",
      "piilostaan",
      "raunioilla",
      "kimaltelee",
      "kuu"
    ],
    "name": "Kuningaskobra",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Leijonakuningas",
    "language": "fi",
    "lyrics": [
      "Hakuna",
      "matata",
      "sana",
      "ihana",
      "on"
    ],
    "name": "Hakuna matata",
    "question": ""
  },
  {
    "answer": "(Hakaniemi) metro station",
    "artist": "Bomfunk MC's",
    "language": "en",
    "lyrics": [
      "Yeah",
      "straight",
      "from",
      "the top",
      "of",
      "my",
      "dome"
    ],
    "name": "Freestyler",
    "question": "Where was the music video for the song mainly filmed?"
  },
  {
    "answer": "1982",
    "artist": "J. Karjalainen",
    "language": "fi",
    "lyrics": [
      "kun",
      "kohdattiin",
      "oli",
      "pimeää",
      "kun",
      "erottiin"
    ],
    "name": "Ankkurinappi",
    "question": "Minä vuonna tämä läpimurtohitti on julkaistu? (viiden vuoden tarkkuudella)"
  },
  {
    "answer": "\"Kovemmat kädet\" ja kokoelmalevy \"Matkalaulu\"",
    "artist": "PMMP",
    "language": "fi",
    "lyrics": [
      "tämä",
      "voi",
      "olla",
      "koko",
      "elämämme",
      "ihanin",
      "päivä"
    ],
    "name": "Matkalaulu",
    "question": "Matkalaulu on julkaistu kahdella eri levyllä, nimeä näistä ainakin toinen"
  },
  {
    "answer": "Three (3) times",
    "artist": "Lady Gaga, Bradley Cooper",
    "language": "en",
    "lyrics": [
      "I'm",
      "off",
      "the deep",
      "end",
      "watch"
    ],
    "name": "Shallow",
    "question": "How many times this song is heard in the film called A Star Is Born?"
  },
  {
    "answer": "Northern Ireland",
    "artist": "The Cranberries",
    "language": "en",
    "lyrics": [
      "what's",
      "in",
      "your",
      "head",
      "in",
      "your",
      "head"
    ],
    "name": "Zombie",
    "question": "The violence of which country is this protest song about?"
  },
  {
    "answer": "1 billion",
    "artist": "Elton John",
    "language": "en",
    "lyrics": [
      "I",
      "think",
      "it's",
      "gonna",
      "be",
      "a long",
      "long",
      "time"
    ],
    "name": "Rocket Man",
    "question": "On January 2024, Rocket Man surpassed how many streams on Spotify?"
  },
  {
    "answer": "Rihanna's third studio album, Good Girl Gone Bad (2007)",
    "artist": "Rihanna",
    "language": "en",
    "lyrics": [
      "baby",
      "you",
      "got",
      "the keys",
      "now",
      "shut",
      "up",
      "and"
    ],
    "name": "Shut Up and Drive",
    "question": "Which album is this song on?"
  },
  {
    "answer": "1983",
    "artist": "Michael Jackson",
    "language": "en",
    "lyrics": [
      "but",
      "the kid",
      "is",
      "not",
      "my",
      "son"
    ],
    "name": "Billie Jean",
    "question": "What year is this song released?"
  },
  {
    "answer": "The Vampire Diaries, GLOW, Stranger Things, How to Get Away With Murder, Warehouse 13, Pose, Bones, Big Little Lies, The O. C. and It’s a Sin",
    "artist": "Kate Bush",
    "language": "en",
    "lyrics": [
      "only",
      "could",
      "I'd",
      "make",
      "a deal",
      "with",
      "God"
    ],
    "name": "Running Up That Hill (A Deal with God)",
    "question": "Name one TV series where this song or it's cover has been used?"
  },
  {
    "answer": "1991",
    "artist": "Apulanta",
    "language": "fi",
    "lyrics": [
      "missä",
      "kuningas",
      "joka",
      "meidät",
      "vapauttaa"
    ],
    "name": "jumala",
    "question": "Minä vuonna Apulanta on perustettu?"
  },
  {
    "answer": "244",
    "artist": "Sanni",
    "language": "fi",
    "lyrics": [
      "en",
      "ehkä",
      "osaa",
      "sulle",
      "puhua",
      "jos",
      "annetaan"
    ],
    "name": "2080-luvulla",
    "question": "Kappale pysytteli yli 200 viikkoa Suomen virallisella top 100 -radiolistalla. Montako viikkoa biisi yhteensä oli listalla? (kymmenen tarkkuudella)"
  },
  {
    "answer": "",
    "artist": "Katri Helena",
    "language": "fi",
    "lyrics": [
      "tähti",
      "kirkkain",
      "sua",
      "taas",
      "mä",
      "pyynnöin"
    ],
    "name": "Katson sineen taivaan",
    "question": ""
  },
  {
    "answer": "185 642",
    "artist": "Ramses II",
    "language": "fi",
    "lyrics": [
      "kun",
      "mulla",
      "menee",
      "liian",
      "lujaa",
      "sä",
      "vedät"
    ],
    "name": "Villieläin",
    "question": "Kuinka monta kertaa tätä kappaletta kuunneltiin yhden päivän aikana, jotta se teki Suomen Spotifyn päiväkohtaisen striimausennätyksen vuodelle 2022? (kymmenentuhannen tarkkuudella)"
  },
  {
    "answer": "Rihanna",
    "artist": "Ed Sheeran",
    "language": "en",
    "lyrics": [
      "Girl",
      "you",
      "know",
      "I",
      "want",
      "your",
      "love"
    ],
    "name": "Shape of You",
    "question": "The song was originally written at a writing camp with some other artist in mind, who?"
  },
  {
    "answer": "Los Angeles International Airport (LAX)",
    "artist": "Backstreet Boys",
    "language": "en",
    "lyrics": [
      "tell",
      "me",
      "why",
      "I",
      "never",
      "wanna"
    ],
    "name": "I Want It That Way",
    "question": "In which airport was the music video filmed?"
  },
  {
    "answer": "\"Only Girl (In the World)\"",
    "artist": "Robyn",
    "language": "en",
    "lyrics": [
      "I'm",
      "in",
      "the corner",
      "watchin'",
      "you",
      "kiss",
      "her"
    ],
    "name": "Dancing On My Own",
    "question": "The song was nominated at the 53rd Grammy Awards (2011) in the category \"Best Dance Recording\", but lost to what song by Rihanna?"
  },
  {
    "answer": "Donald Trump's, when in July 2016, \"Here Comes the Sun\" was played as the entrance music for Ivanka Trump at the Republican National Convention.",
    "artist": "The Beatles",
    "language": "en",
    "lyrics": [
      "here",
      "comes",
      "the sun",
      "and",
      "I",
      "say"
    ],
    "name": "Here comes the sun",
    "question": "The George Harrison estate complained about the song being used to support *whose* presidential campaign, saying it was \"offensive\" and contrary to their wishes?"
  },
  {
    "answer": "Zen ja moottoripyörän kunnossapito",
    "artist": "Zen Cafe",
    "language": "fi",
    "lyrics": [
      "elät",
      "vain",
      "yhden",
      "kerran",
      "olet",
      "todella"
    ],
    "name": "Todella Kaunis",
    "question": "Minkä nimiseen Robert M. Pirsigin romaaniin Zen Cafe yhteen nimi pohjautuu?"
  },
  {
    "answer": "",
    "artist": "Noa Kirel",
    "language": "en",
    "lyrics": [
      "I'm",
      "gonna",
      "stand",
      "here",
      "like",
      "a unicorn"
    ],
    "name": "Unicorn",
    "question": ""
  },
  {
    "answer": "Timon and Pumba, but John disliked the comical nature of the concept as he declared that the song was meant to follow Disney's tradition of great love songs",
    "artist": "Elton John",
    "language": "en",
    "lyrics": [
      "can",
      "you",
      "feel",
      "the",
      "love",
      "tonight"
    ],
    "name": "Can You Feel the Love Tonight",
    "question": "In the movie Lion King this song was originally planned to be sung only by who two characters?"
  },
  {
    "answer": "",
    "artist": "Anneli Saaristo",
    "language": "fi",
    "lyrics": [
      "tunnetko",
      "jo",
      "rakkauden",
      "sen",
      "onnen",
      "hiljaisen"
    ],
    "name": "Tunnetko Jo Rakkauden",
    "question": ""
  },
  {
    "answer": "3",
    "artist": "A-ha",
    "language": "en",
    "lyrics": [
      "take",
      "on",
      "me",
      "I'll",
      "be",
      "gone"
    ],
    "name": "Take On Me",
    "question": "How many times did a-ha have to release 'Take On Me' before it became a hit?\t"
  },
  {
    "answer": "",
    "artist": "Kaija Koo",
    "language": "fi",
    "lyrics": [
      "juokse",
      "sinne",
      "missä",
      "on",
      "viileää"
    ],
    "name": "Tinakenkätyttö",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Ankronikka",
    "language": "fi",
    "lyrics": [
      "joskus",
      "hyvää",
      "joskus",
      "pahaa",
      "ankat"
    ],
    "name": "Ankronikka",
    "question": ""
  },
  {
    "answer": "Viidenneksi (5)",
    "artist": "Rauli Badding Somerjoki",
    "language": "fi",
    "lyrics": [
      "kun",
      "mä",
      "sinut",
      "kohtasin",
      "oli",
      "ilta",
      "ihanin"
    ],
    "name": "Paratiisi",
    "question": "Helsingin Sanomat pyysi kevään 2009 juttusarjassa lukijoita nimeämään oman ”onnen laulunsa”, ja yli 800 ehdotetun kappaleen joukosta, monenneksiko ”Paratiisi” tuli äänestyksessä?"
  },
  {
    "answer": "Canada",
    "artist": "Carly Rae Jepsen",
    "language": "en",
    "lyrics": [
      "hey",
      "I",
      "just",
      "met",
      "you"
    ],
    "name": "Call Me Maybe",
    "question": "In which country was this song recorded?"
  },
  {
    "answer": "A synthesizer",
    "artist": "Guns N' Roses",
    "language": "en",
    "lyrics": [
      "take",
      "me",
      "down",
      "to",
      "the paradise",
      "city"
    ],
    "name": "Paradise City",
    "question": "This is the only song on the album to feature what musical instrument?"
  },
  {
    "answer": "",
    "artist": "PMMP",
    "language": "fi",
    "lyrics": [
      "heitetäänkö",
      "pois",
      "kaikki",
      "housut",
      "ja",
      "paidat"
    ],
    "name": "Rusketusraidat",
    "question": ""
  },
  {
    "answer": "One billion",
    "artist": "Oasis",
    "language": "en",
    "lyrics": [
      "today",
      "is",
      "gonna",
      "be",
      "the day",
      "that"
    ],
    "name": "Wonderwall",
    "question": "In October 2020, it became the first song from the 1990s to reach how many streams on Spotify?"
  },
  {
    "answer": "",
    "artist": "Tapio Rautavaara",
    "language": "fi",
    "lyrics": [
      "ennen",
      "päivänlaskua",
      "ei",
      "voi",
      "milloinkaan",
      "elää",
      "päällä"
    ],
    "name": "Päivänsäde ja menninkäinen",
    "question": ""
  },
  {
    "answer": "2006",
    "artist": "Lordi",
    "language": "en",
    "lyrics": [
      "all",
      "we",
      "need",
      "is",
      "lightning",
      "with",
      "power"
    ],
    "name": "Hard Rock Hallelujah",
    "question": "What year did Lordi perform this song in Eurovision?"
  },
  {
    "answer": "",
    "artist": "Martti Vainaa & Sallitut aineet",
    "language": "fi",
    "lyrics": [
      "vien",
      "sinut",
      "kahville",
      "ja",
      "nakkikioskille",
      "jatkoille"
    ],
    "name": "Pelimies",
    "question": ""
  },
  {
    "answer": "Pikku G - Solmussa (2017)",
    "artist": "Behm",
    "language": "fi",
    "lyrics": [
      "hei",
      "rakas",
      "kerro",
      "mulle",
      "mikä"
    ],
    "name": "Hei rakas",
    "question": "Kenen suomalaisartistin biisissä Behm on laulanut ja toiminut yhtenä säveltäjistä ennen tämän biisin julkaisua?"
  },
  {
    "answer": "It is about an obsessive stalker",
    "artist": "The Police",
    "language": "en",
    "lyrics": [
      "every",
      "step",
      "you",
      "take",
      "I'll",
      "be",
      "watching",
      "you"
    ],
    "name": "Every Breath You Take",
    "question": "The song sounds like a love song, but what is it really about?"
  },
  {
    "answer": "catchiest",
    "artist": "Queen",
    "language": "en",
    "lyrics": [
      "no",
      "time",
      "for",
      "losers",
      "'cause",
      "we",
      "are"
    ],
    "name": "We Are the Champions",
    "question": "Fill the gap in this sentence: A team of scientific researchers concluded that the song was the *beep* in the history of popular music"
  },
  {
    "answer": "Kaija Koo, Vesala ja Ellinoora",
    "artist": "Jenni Vartiainen",
    "language": "fi",
    "lyrics": [
      "Leiki",
      "hetki",
      "hänen",
      "hiuksillaan"
    ],
    "name": "Missä muruseni on",
    "question": "Jenni Vartiainen kuului Mestarit kokoonpanoon, ketkä olivat muut jäsenet"
  },
  {
    "answer": "",
    "artist": "Arja Koriseva",
    "language": "fi",
    "lyrics": [
      "oon",
      "vain",
      "sulle",
      "ihminen",
      "villi",
      "ja",
      "vaikka",
      "kuinka",
      "katsot"
    ],
    "name": "Tuulen värit",
    "question": ""
  },
  {
    "answer": "",
    "artist": "Valvomo",
    "language": "fi",
    "lyrics": [
      "nosta",
      "tanssija",
      "jalkaa",
      "kohta",
      "pääsee",
      "rytmiin"
    ],
    "name": "Mikä kesä?",
    "question": ""
  }
]

export default songList
