import React, { Component } from 'react'
import './Teams.css'

class Teams extends Component {
  render() {
    return (
      <div className="Teams">
        <div className="Team Team--blue">
          Sininen tiimi
        </div>
        <div className="Team Team--red">
          Punainen tiimi
        </div>
      </div>
    )
  }
}

export default Teams
