import React, {Component, Fragment} from 'react'
import _ from 'lodash'

import {getCardStatusesRef, getGameData, getTeamsRef, updatePoints} from './services/firebase'

import './Teams.css'

class Teams extends Component {
  constructor(props) {
    super(props)
    this.state = {
      points: {red: null, blue: null}
    }
    this._pointsRef = null
  }

  async componentDidMount() {
    const {gameId} = this.props
    const game = await getGameData(gameId)
    this.setState({points: {
      red: game.teams.red.points,
      blue: game.teams.blue.points,
    }})
    // set listener to points statuses
    this._pointsRef = getTeamsRef(gameId)
    await this._pointsRef.on('value', (snap) => {
      const teams = snap.val() ? snap.val() : null
      console.log('teams', teams)
      this.setState({points: {
          red: teams.red.points,
          blue: teams.blue.points,
        }})
    })
  }

  componentWillUnmount() {
    this._pointsRef.off()
  }

  addPoint = team => {
    const teamPoints = (_.get(this.state.points, team) || 0)+1
    let points = this.state.points
    points[team] = teamPoints
    this.setState(points)
    updatePoints(this.props.gameId, team, teamPoints)
  }

  reducePoint = team => {
    const teamPoints = (_.get(this.state.points, team) || 0)-1
    let points = this.state.points
    points[team] = teamPoints
    this.setState(points)
    updatePoints(this.props.gameId, team, teamPoints)
  }

  render() {
    const points = team =>
      <Fragment>
        <button onClick={() => this.reducePoint(team)}>-</button>
        <div>{this.state.points[team] || 0}</div>
        <button onClick={() => this.addPoint(team)}>+</button>
      </Fragment>

    return (
      <div className='Teams'>
        <div className='Team Team--blue'>
          <div className='Team__title'>Sininen tiimi</div>
          <div className='Team__points'>{points('blue')}</div>
        </div>
        <div className='Team Team--red'>
          <div className='Team__title'>Punainen tiimi</div>
          <div className='Team__points'>{points('red')}</div>
        </div>
      </div>
    )
  }
}

export default Teams
