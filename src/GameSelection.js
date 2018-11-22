import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import './GameSelection.css'

class GameSelection extends Component {
  constructor(props) {
    super(props)
    this.state = {gameId: ''}
  }

  render() {
    const {gameId} = this.state
    return (
      <div className="game-selection">
        GameSelection
        <form>
          <label>
            Game id:
            <input
              type="text"
              value={this.state.gameId}
              onChange={(e) => this.setState({gameId: e.target.value})}
            />
          </label>
        </form>
        <Link to={`/master/${gameId}`} className={cx({'link-disabled': gameId})}>Go</Link>
      </div>
    )
  }
}

export default GameSelection
