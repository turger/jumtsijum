const songList = [
  {
    lyrics: ["sä", "oot", "sellainen", "kaikki", "tietää", "sen"],
    artist: "Nylon Beat",
    name: "Viimeinen"
  },
  {
    lyrics: ["samat", "tuulet", "puhaltaa", "samat", "sateet", "lankeaa"],
    artist: "Anssi Kela",
    name: "Puistossa"
  },
  {
    lyrics: ["don't", "you", "know", "that", "you're", "toxic"],
    artist: "Britney Spears",
    name: "Toxic"
  },
  {
    lyrics: ["sä", "oot", "valo", "mun", "pimeydessäin"],
    artist: "Pikku G",
    name: "Romeo ja Julia"
  },
  {
    lyrics: ["ehkä", "väsyttää", "vähän", "mutta", "nyt", "ei", "nukuta"],
    artist: "Tiktak",
    name: "Heilutaan"
  },
  {
    lyrics: ["missä", "kuningas", "joka", "meidät", "vapauttaa"],
    artist: "Apulanta",
    name: "Jumala"
  },
  {
    lyrics: ["tunnetko", "jo", "rakkauden", "sen", "onnen", "hiljaisen"],
    artist: "Anneli Saaristo",
    name: "Tunnetko Jo Rakkauden"
  },
  {
    lyrics: ["heitetäänkö", "pois", "kaikki", "housut", "ja", "paidat"],
    artist: "PMMP",
    name: "Rusketusraidat"
  },
  {
    lyrics: ["nosta", "tanssija", "jalkaa", "kohta", "pääsee", "rytmiin"],
    artist: "Valvomo",
    name: "Mikä kesä?"
  },
  {
    lyrics: ["vien", "sinut", "kahville", "ja", "nakkikioskille", "jatkoille"],
    artist: "Martti Vainaa & Sallitut aineet",
    name: "Pelimies"
  }, {
    lyrics: ["all", "we", "need", "is", "lightning", "with", "power"],
    artist: "Lordi",
    name: "Hard Rock Hallelujah",
    question: "What year did Lordi perform this song in Eurovision?",
    answer: "2006"
  },
  {
    lyrics: ["once", "more", "you", "open", "the", "door"],
    artist: "Celine Dion",
    name: "My Heart Will Go On",
    question: "In 1997 this song was included on two albums, name them both",
    answer: "Let's Talk About Love (Dion) and the Titanic soundtrack"
  },
  {
    lyrics: ["can", "you", "feel", "the", "love", "tonight"],
    artist: "Elton John",
    name: "Can You Feel the Love Tonight",
    question: "In the movie Lion King this song was originally planned to be sung only by who two characters?",
    answer: "Timon and Pumba, but John disliked the comical nature of the concept as he declared that the song was meant to follow Disney's tradition of great love songs"
  },
  {
    lyrics: ["tell", "me", "why", "I", "never", "wanna"],
    artist: "Backstreet Boys",
    name: "I Want It That Way",
    question: "In which airport was the music video filmed?",
    answer: "Los Angeles International Airport (LAX)"
  },
  {
    lyrics: ["today", "is", "gonna", "be", "the", "day", "that"],
    artist: "Oasis",
    name: "Wonderwall",
    question: "In October 2020, it became the first song from the 1990s to reach how many streams on Spotify?",
    answer: "One billion"
  },
  {
    lyrics: ["I", "bless", "the", "rains", "down", "in", "Africa"],
    artist: "Toto",
    name: "Africa",
    question: "Name one TV-show where this song has appeared in?",
    answer: "Stranger Things, Family Guy, Chuck, The Cleveland Show and South Park"
  },
  {
    lyrics: ["kiss", "you", "but", "your", "lips", "are", "venomous"],
    artist: "Alice Cooper",
    name: "Poison",
    question: "The song's main riff was written by who?",
    answer: "Guitarist John McCurry"
  },
  {
    lyrics: ["if", "you", "wanna", "be", "my", "lover"],
    artist: "Spice Girls",
    name: "Wannabe",
    question: "Which of the Spice Girls participated in writing the song?",
    answer: "All five"
  },
  {
    lyrics: ["won't", "you", "die", "tonight", "for", "love"],
    artist: "HIM",
    name: "Join Me in Death",
    question: "This song was featured in the end credits of the European version of which sci-fi movie?",
    answer: "The Thirteenth Floor"
  },
  {
    lyrics: ["take", "me", "down", "to", "the", "paradise", "city"],
    artist: "Guns N' Roses",
    name: "Paradise City",
    question: "This is the only song on the album to feature what musical instrument?",
    answer: "A synthesizer"
  },
  {
    lyrics: ["It's", "like", "rain", "on", "your", "wedding", "day"],
    artist: "Alanis Morrissette",
    name: "Ironic",
    question: "This song includes a moderate tempo of how many beats per minute?",
    answer: "Eighty-five"
  },
  {
    lyrics: ["no", "time", "for", "losers", "'cause", "we", "are"],
    artist: "Queen",
    name: "We Are the Champions",
    question: "Fill the gap in this sentence: A team of scientific researchers concluded that the song was the *beep* in the history of popular music",
    answer: "catchiest"
  },
  {
    lyrics: ["but", "the", "kid", "is", "not", "my", "son"],
    artist: "Michael Jackson",
    name: "Billie Jean",
    question: "What year is this song released?",
    answer: "1983"
  },
  {
    lyrics: ["I'm", "off", "the", "deep", "end", "watch"],
    artist: "Lady Gaga, Bradley Cooper",
    name: "Shallow",
    question: "How many times this song is heard in the film called A Star Is Born?",
    answer: "Three (3) times"
  },
  {
    lyrics: ["siis", "hyvästi", "selvä", "päivä"],
    artist: "Petri Nygård",
    name: "Selvä päivä",
    question: "Kuka artisti vierailee kappaleen kertosäkeellä?",
    answer: "Dancehall/pop-artisti Lord Est"
  },
  {
    lyrics: ["pyydä", "mukaa", "mä", "oon", "imus",],
    artist: "Gasellit",
    name: "Imus",
    question: "Minkä televisio-ohjelman viidennellä kaudella tämä biisi esitetään lavalla?",
    answer: "SuomiLOVE"
  },
  {
    lyrics: ["en", "tarvii", "asuntoo", "vaan", "satasen"],
    artist: "Nylon Beat",
    name: "Satasen Laina",
    question: "Minkä nimisellä albumilla tämä biisi esiintyy?",
    answer: "Satasen laina"
  },
  {
    lyrics: ["hei", "rakas", "kerro", "mulle", "mikä",],
    artist: "Behm",
    name: "Hei rakas",
    question: "Kenen suomalaisartistin biisissä Behm on laulanut ja toiminut yhtenä säveltäjistä ennen tämän biisin julkaisua?",
    answer: "Pikku G - Solmussa (2017)"
  },
  {
    lyrics: ["lupaan", "että", "on", "hauskempaa", "meil", "jotka", "löytää",],
    artist: "Erika Vikman",
    name: "Syntisten pöytä",
    question: "Minkä värinen asu Erikalla on päällä biisin musiikkivideossa?",
    answer: "Tiukka punainen haalari"
  },
  {
    lyrics: ["kun", "kohdattiin", "oli", "pimeää", "kun", "erottiin"],
    artist: "J. Karjalainen",
    name: "Ankkurinappi",
    question: "Minä vuonna tämä läpimurtohitti on julkaistu?",
    answer: "1982"
  },
  {
    lyrics: ["myrsky", "repii", "puita", "taivas", "salamoi"],
    artist: "Janne Hurme",
    name: "Kirje",
    question: "Mistä maasta on peräisin tämän kappaleen alkuperäinen versio?",
    answer: "Kirje on alun perin bosnialaisen Hari Mata Hari -yhtyeen balladi Strah me da te violim"
  },
  {
    lyrics: ["kun", "mä", "sinut", "kohtasin", "oli", "ilta", "ihanin"],
    artist: "Rauli Badding Somerjoki",
    name: "Paratiisi",
    question: "Helsingin Sanomat pyysi kevään 2009 juttusarjassa lukijoita nimeämään oman ”onnen laulunsa”, ja yli 800 ehdotetun kappaleen joukosta, monenneksiko ”Paratiisi” tuli äänestyksessä?",
    answer: "Viidenneksi (5)"
  },
  {
    lyrics: ["in", "your", "head", "in", "your", "head"],
    artist: "The Cranberries",
    name: "Zombie",
    question: "Minkä alueen väkivaltaisuuksia tämä protestilaulu käsittelee?",
    answer: "Pohjois-Irlannin"
  },
  {
    lyrics: ["kuin", "hullu", "huudan", "rakkauteni", "perään"],
    artist: "Juice Leskinen",
    name: "Viidestoista yö",
    question: "Minkä Bob Dylanin biisin Juice on sanonut antaneen vaikutteita sanoitukseen ja sävellykseen?",
    answer: "Bob Dylanin ”Mr. Tambourine Man” ja hän kirjoitti kappaleen kahden viikon juomaputken jälkeen, viidentenätoista yönä"
  },
  {
    lyrics: ["muistaa", "sut", "juostiin", "kultaa", "hiuksissa"],
    artist: "Olavi Uusivirta",
    name: "Kultaa hiuksissa",
    question: "Minkälaisella kameran efektillä biisin musavideo on kuvattu?",
    answer: "Slow motion"
  },
  {
    lyrics: ["sä", "siellä", "nyt", "jo", "etsit", "muijaa"],
    artist: "Gimmel",
    name: "Etsit muijaa seuraavaa",
    question: "Mikä on tämän biisin smurffiversion nimi?",
    answer: "Lähdit smurffii seuraamaan"
  },
  {
    lyrics: ["en", "suudella", "saisi", "sun", "huulia"],
    artist: "Movetron",
    name: "Romeo ja Julia",
    question: "Monennelle sijalle singlelistalla tämä biisi ylsi korkeimmillaan?",
    answer: "2."
  },
  {
    lyrics: ["se", "viimeinen", "juna", "mun", "laukun", "vei"],
    artist: "Kirka",
    name: "Hengaillaan",
    question: "Minä vuonna Hengaillaan edusti Suomea Eurovision laulukilpailussa?",
    answer: "1984"
  },
  {
    lyrics: ["juokse", "sinne", "missä", "on", "viileää"],
    artist: "Kaija Koo",
    name: "Tinakenkätyttö"
  },
  {
    lyrics: ["💯", "⚡️", "👊", "🔥"],
    artist: "Vicky Rosti / Antti Tuisku",
    name: "Sata Salamaa"
  },
  {
    lyrics: ["sinulle", "mä", "antaisin", "sydämen", "jos", "sä"],
    artist: "Jari Sillanpää",
    name: "Satulinna"
  },
  {
    lyrics: ["ei", "niistä️", "asiat", "miksikään", "muutu"],
    artist: "Eppu Normaali",
    name: "Tahroja paperilla"
  },
  {
    lyrics: ["rakkaus", "on", "kuollut", "elämän", "virtaan"],
    artist: "Jonna Tervomaa",
    name: "Rakkauden haudalla"
  },
  {
    lyrics: ["en", "oo", "enää", "sinisilmäinen", "oon"],
    artist: "Frederik",
    name: "Kolmekymppinen"
  },
  {
    lyrics: ["syvälle", "se", "upposi", "niin", "aivan", "kuin",],
    artist: "Siiri Nordin",
    name: "Sydämeni osuman sai"
  },
  {
    lyrics: ["oon", "vain", "sulle", "ihminen", "villi"],
    artist: "Pocahontas",
    name: "Tuulen värit"
  },
  {
    lyrics: ["🍺", "📠", "&", "👴🦃"],
    artist: "Pate Mustajärvi",
    name: "Ukkometso"
  },
  {
    lyrics: ["ne", "levottomat", "illat", "sekä", "unettomat", "yöt"],
    artist: "Zen Cafe",
    name: "Todella Kaunis"
  },
  {
    lyrics: ["mä", "ensin", "näin", "vain", "meren", "sinisen"],
    artist: "Taiska",
    name: "Mombasa"
  },
  {
    lyrics: ["ennen", "päivänlaskua", "ei", "voi", "milloinkaan", "elää", "päällä"],
    artist: "Tapio Rautavaara",
    name: "Päivänsäde ja menninkäinen"
  },
  {
    lyrics: ["pipo", "päässä", "pakkasella", "kotiin", "kelpaa", "hoiperrella"],
    artist: "Freeman",
    name: "Ajetaan tandemilla"
  },
  {
    lyrics: ["tähti", "kirkkain", "sua", "taas", "mä", "pyynnöin"],
    artist: "Katri Helena",
    name: "Katson sineen taivaan"
  },
  {
    lyrics: ["saapuu", "piilostaan", "raunioilla", "kimaltelee", "kuu"],
    artist: "Arja Koriseva",
    name: "Kuningaskobra"
  },
  {
    lyrics: ["ajetaan", "kovaa", "ollaan", "ihan", "hiljaa"],
    artist: "Vesala",
    name: "Tequila"
  },
  {
    lyrics: ["mun", "sydämestä", "puuttuu", "palanen"],
    artist: "Robin",
    name: "Puuttuva Palanen"
  },
  {
    lyrics: ["kello", "lyö", "kuus", "muutetaan", "maailmaa", "ja", "naapuri"],
    artist: "Haloo Helsinki",
    name: "Beibi"
  },
  {
    lyrics: ["onnellinen", "olen", "vaan", "kun", "saan", "lihaa"],
    artist: "Popeda",
    name: "Lihaa ja perunaa"
  },
  {
    lyrics: ["en", "ehkä", "osaa", "sulle", "puhua", "jos", "annetaan"],
    artist: "Sanni",
    name: "2080-luvulla"
  },
  {
    lyrics: ["oot", "liian", "kaunis", "häpeemään"],
    artist: "Kaija Koo",
    name: "Kaunis Rietas Onnellinen"
  },
  {
    lyrics: ["siinä", "sä", "vain", "istut", "tuijotellen", "lasiasi"],
    artist: "Vilma Alina",
    name: "Juha88"
  },
  {
    lyrics: ["ei", "enää", "duunii", "painan", "puita", "uuniin"],
    artist: "JVG",
    name: "Ikuinen vappu"
  },
  {
    lyrics: ["kun", "mulla", "menee", "liian", "lujaa", "sä", "vedät"],
    artist: "Ramses II",
    name: "Villieläin"
  }
]
export default songList
