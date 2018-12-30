import React from 'react'

const Rules = () =>
  <ul>
    <li>Joukkueet valitsevat vuorotellen numerokortteja, joiden perusteella pelinjohtaja kääntää lauluun liittyviä sanoja esille yksi kerrallaan. Vuoron alussa voi valita avaako luukun vai arvaako joukkue laulun ilman luukun avaamista.</li>
    <li>Joukkueet yrittävät keksiä, mikä laulu on kyseessä ja vuorossa oleva joukkue saa arvata ensin.</li>
    <li>Jos joukkue arvaa väärin, mutta laulunäytteessä on oikeassa järjestyksessä kaikki näkyvät sanat, niin joukkue saa jatkaa. Muutoin vuoro siirtyy toiselle joukkueelle.</li>
    <li>Mikäli joukkue ei pysty muodostamaan sanoista laulua, siirtyy vuoro myös toiselle joukkueelle.</li>
    <li>Pisteen saa se joukkue, joka ensimmäisenä arvaa piilossa olevan laulun joko laulamalla sen tai kertomalla esittäjän ja laulun nimen.</li>
    <li>Lopuksi laulu lauletaan yhdessä YouTuben karaokeversion avulla.</li>
    <li>Kun kappale on arvattu, siirrytään toiseen lauluun.</li>
    <li>Voittaja on se joukkue, jolla on ensimmäisenä viisi pistettä.</li>
  </ul>

export default Rules