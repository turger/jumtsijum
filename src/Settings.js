import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom'
import Songs from './songs'
import Playlists from './Playlists'
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
    <div className='nav-wrapper'>
        <NavItem label='Songs' route='/settings/songs'></NavItem>
        <NavItem label='Playlists' route='/settings/playlists'></NavItem>
    </div>
)

const NavItem = ({ label, route }) => (
    <NavLink className='nav-link' activeClassName='nav-link-active' to={route}>{label}</NavLink>
)

export default Settings