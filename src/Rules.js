import React from 'react'

const enRules =
  <ol>
    <li>The teams take turns choosing number cards, and game keeper reveals the cards one by one.</li>
    <li>If the highlighted word is red, the turn automatically goes to the other team.</li>
    <li>At the beginning of the turn, the team chooses whether to open the next card or whether the team guesses the song using the words already visible.</li>
    <li>If the team guesses the song incorrectly, but the word revealed from the card the team just opened appears in the song, then the team may continue. Otherwise, the turn goes to the other team.</li>
    <li>If the team is unable to form a song from the word, the turn goes to the other team.</li>
    <li>The team that first sings the right song and the right part of the song gets the point.</li>
    <li>Once the song has been guessed, the team that guessed correctly can get an extra point by answering the additional question correctly.</li>
    <li>The teams alternately start the round.</li>
    <li>The winner is the team with more points at the end of the game. At the beginning, you can agree on how many points you need to get to win.</li>
  </ol>

const fiRules =
  <ol>
    <li>Joukkueet valitsevat vuorotellen numerokortteja, joiden perusteella pelin vetäjä kääntää lauluun liittyviä sanoja esille yksi kerrallaan.</li>
    <li>Jos esille käännetty sana on punainen, vuoro siirtyy automaattisesti toiselle joukkueelle.</li>
    <li>Vuoron alussa joukkue valitsee avaako seuraavan luukun vai arvaako joukkue laulun jo näkyvien sanojen avulla.</li>
    <li>Jos joukkue arvaa laulun väärin, mutta joukkueen juuri avaamasta luukusta paljastunut sana (tai sen taivutettu muoto) esiintyy laulussa, niin joukkue saa jatkaa. Muutoin vuoro siirtyy toiselle joukkueelle.</li>
    <li>Mikäli joukkue ei pysty muodostamaan sanasta laulua, siirtyy vuoro toiselle joukkueelle.</li>
    <li>Pisteen saa se joukkue, joka ensimmäisenä laulaa oikean laulun ja oikean kohdan laulusta.</li>
    <li>Kun kappale on arvattu, oikein arvannut joukkue voi saada lisäpisteen vastaamalla oikein lisäkysymykseen.</li>
    <li>Joukkueet aloittavat vuorotellen kierroksen.</li>
    <li>Voittaja on se joukkue, jolla on pelin lopuksi enemmän pisteitä. Alussa voidaan sopia, mihin pistemäärään asti pelataan.</li>
  </ol>

const Rules = ({ lang }) => lang === 'en' ? enRules : fiRules

export default Rules
