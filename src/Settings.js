import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import Songs from './Songs'
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



const Playlists = () => (
    <p>Soittolistat</p>
)

export default Settings