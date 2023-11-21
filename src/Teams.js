import React, {useEffect, useRef, useState} from 'react'
import cx from 'classnames'
import {getOneGame, getTeamsRef, updatePoints} from './services/firebase'
import './Teams.css'

const Teams = ({gameId, buttonsDisabled}) => {
  const [teams, setTeams] = useState({})
  const teamsRef = useRef(null)

  useEffect(() => {
    const getGamePoints = async () => {
      const game = await getOneGame(gameId)
      setTeams(game.teams)
    }

    getGamePoints()
  }, [gameId]);

  useEffect(() => {
    const setListenerToTeams = async () => {
      teamsRef.current = getTeamsRef(gameId)
      await teamsRef.current.on('value', (snap) => {
        const teams = snap.val() ? snap.val() : null
        setTeams(teams)
      })
    }
    setListenerToTeams()
  }, [gameId]);

  const updateTeamPoints = (team, points) => {
    setTeams((previousTeams) => {
      updatePoints(gameId, team, previousTeams[team].points + points)
      return {...previousTeams, ...{[team]: {points: previousTeams[team].points + points}}}
    })
  }

  const teamPoints = team =>
    <>
      {!buttonsDisabled && <button onClick={() => updateTeamPoints(team, -1)}>-</button>}
      <div>{teams[team] ? teams[team].points : 0}</div>
      {!buttonsDisabled && <button onClick={() => updateTeamPoints(team, 1)}>+</button>}
    </>

  return (
    <div className='Teams'>
      {Object.keys(teams).map(team =>
        <div key={team} className={cx('Team', `Team--${team}`)}>
          <div className='Team__title'>team {team}</div>
          <div className='Team__points'>{teamPoints(team)}</div>
        </div>
      )}
    </div>
  )

}

export default Teams
