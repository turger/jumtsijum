import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Main from './Main'
import './index.css'

ReactDOM.render(
  (
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  ),
  document.getElementById('root')
)