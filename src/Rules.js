import React from 'react'

const Rules = () =>
  <ol>
    <li>Joukkueet valitsevat vuorotellen numerokortteja, joiden perusteella pelinjohtaja kääntää lauluun liittyviä sanoja esille yksi kerrallaan.</li>
    <li>Jos esille käännetty sana on punainen, vuoro siirtyy automaattisesti toiselle joukkueelle.</li>
    <li>Vuoron alussa joukkue valitsee avaako seuraavan luukun vai arvaako joukkue laulun jo näkyvien sanojen avulla.</li>
    <li>Joukkueet yrittävät keksiä, mikä laulu on kyseessä ja vuorossa oleva joukkue saa arvata ensin.</li>
    <li>Jos joukkue arvaa laulun väärin, mutta on ennen arvaamista avannut luukun ja luukusta paljastunut sana (tai sen taivutettu muoto) esiintyy laulussa, niin joukkue saa jatkaa. Muutoin vuoro siirtyy toiselle joukkueelle.</li>
    <li>Mikäli joukkue ei pysty muodostamaan sanasta laulua, siirtyy vuoro toiselle joukkueelle.</li>
    <li>Pisteen saa se joukkue, joka ensimmäisenä laulaa oikean laulun ja oikean kohdan laulusta.</li>
    <li>Kun kappale on arvattu, siirrytään seuraavaan lauluun.</li>
    <li>Voittaja on se joukkue, jolla on pelin lopuksi enemmän pisteitä.</li>
  </ol>

export default Rules
