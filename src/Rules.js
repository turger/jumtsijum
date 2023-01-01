import React from 'react'

const Rules = () =>
  <ol>
    <li>Joukkueet valitsevat vuorotellen numerokortteja, joiden perusteella pelin vetäjä kääntää lauluun liittyviä sanoja esille yksi kerrallaan.</li>
    <li>Jos esille käännetty sana on punainen, vuoro siirtyy automaattisesti toiselle joukkueelle.</li>
    <li>Vuoron alussa joukkue valitsee avaako seuraavan luukun vai arvaako joukkue laulun jo näkyvien sanojen avulla.</li>
    <li>Jos joukkue arvaa laulun väärin, mutta joukkueen juuri avaamasta luukusta paljastunut sana (tai sen taivutettu muoto) esiintyy laulussa, niin joukkue saa jatkaa. Muutoin vuoro siirtyy toiselle joukkueelle.</li>
    <li>Mikäli joukkue ei pysty muodostamaan sanasta laulua, siirtyy vuoro toiselle joukkueelle.</li>
    <li>Pisteen saa se joukkue, joka ensimmäisenä laulaa oikean laulun ja oikean kohdan laulusta.</li>
    <li>Kun kappale on arvattu, siirrytään seuraavaan lauluun.</li>
    <li>Joukkueet aloittavat vuorotellen kierroksen.</li>
    <li>Voittaja on se joukkue, jolla on pelin lopuksi enemmän pisteitä. Alussa voidaan sopia, mihin pistemäärään asti pelataan.</li>
  </ol>

export default Rules
