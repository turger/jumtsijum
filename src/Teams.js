import React, {useEffect, useRef, useState} from 'react'
import {getOneGame, getTeamsRef, updatePoints} from './services/firebase'
import './Teams.css'

const Teams = ({gameId, buttonsDisabled}) => {
  const initialPoints = {red: null, blue: null}

  const [points, setPoints] = useState(initialPoints)
  const pointsRef = useRef(null)

  useEffect(() => {
    const getGamePoints = async () => {
      const game = await getOneGame(gameId)
      setPoints({
        red: game.teams.red.points,
        blue: game.teams.blue.points,
      })
    }

    getGamePoints()
  }, [gameId]);

  useEffect(() => {
    const setListenerToPoints = async () => {
      pointsRef.current = getTeamsRef(gameId)
      await pointsRef.current.on('value', (snap) => {
        const teams = snap.val() ? snap.val() : null
        setPoints({
          red: teams.red.points,
          blue: teams.blue.points,
        })
      })
    }
    setListenerToPoints()
  }, [gameId]);

  const updateTeamPoints = (team, points) => {
    setPoints((previousPoints) => {
      updatePoints(gameId, team, previousPoints[team] + points)
      return {...previousPoints, ...{[team]: previousPoints[team] + points}}
    })
  }

  const teamPoints = team =>
    <>
      {!buttonsDisabled && <button onClick={() => updateTeamPoints(team, -1)}>-</button>}
      <div>{points[team] || 0}</div>
      {!buttonsDisabled && <button onClick={() => updateTeamPoints(team, 1)}>+</button>}
    </>

  return (
    <div className='Teams'>
      <div className='Team Team--blue'>
        <div className='Team__title'>Sininen tiimi</div>
        <div className='Team__points'>{teamPoints('blue')}</div>
      </div>
      <div className='Team Team--red'>
        <div className='Team__title'>Punainen tiimi</div>
        <div className='Team__points'>{teamPoints('red')}</div>
      </div>
    </div>
  )

}

export default Teams
