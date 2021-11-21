import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import { getSongsRef, uploadBaseSongs } from './services/firebase'
import './Settings.css'


const Settings = () => (
    <Router>
        <SettingsNav />
        <Switch>
            <Route exact path='/settings/songs' component={Songs} />
            <Route exact path='/settings/playlists' component={Playlists} />
            <Redirect from='/settings' to='/settings/songs' />
        </Switch>
    </Router>
)


const SettingsNav = () => (
    <div className='navWrapper'>
        <NavItem label='Songs' route='/settings/songs'></NavItem>
        <NavItem label='Playlists' route='/settings/playlists'></NavItem>
    </div>
)

const NavItem = ({ label, route }) => (
    <Link to={route}>{label}</Link>
)

const Songs = () => {
    const [songs, setSongs] = useState([])

    useEffect(() => { 
        const listener = getSongsRef().on('value', snapshot => {
            console.log('re-listening')
            setSongs(snapshot.val())
        })

        return () => getSongsRef().off('value', listener)
    },[])

    return (
        <>
            {songs?.length > 0 && songs.map(song => <p key={song.song}>{song.artist} - {song.song}</p>)}
            {songs?.length > 0 && <p>Yhteensä {songs.length} kappaletta</p>}
            <button onClick={resetSongsInDB}>Palauta oletuskappaleet</button>
        </>
    )
}

const Playlists = () => (
    <p>Soittolistat</p>
)

const resetSongsInDB = () => {
    if (window.confirm('Haluatko varmasti yliajaa nykyiset kappaleet oletuskappaleilla?')) {
        uploadBaseSongs()
    }
}

export default Settings