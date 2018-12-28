import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {getGameMastersOnlineRef} from './services/firebase'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {onlineCount: null}
    this._gameMastersOnlineRef = null
  }

  componentDidMount() {
    this._gameMastersOnlineRef = getGameMastersOnlineRef(this.props.gameId)
    this._gameMastersOnlineRef.on('value', (snap) => {
      const onlineCount = snap.val() ? Object.keys(snap.val()).length : 0
      this.setState({onlineCount})
    })
  }

  componentWillUnmount() {
    this._gameMastersOnlineRef.off()
  }

  render() {
    return (
      <div className='Header'>
        <div>Cool game</div>
        <div>Game id: {this.props.gameId}</div>
        { this.state.onlineCount > 1 &&
          <div>Is someone cheating?! {this.state.onlineCount} eyepairs peeping this page.</div>
        }
      </div>
    )
  }
}

Header.propTypes = {
  gameId: PropTypes.string
}

export default Header
