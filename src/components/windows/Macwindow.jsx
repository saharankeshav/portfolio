import React from 'react'
import { Rnd } from 'react-rnd'
import './MacWindow.scss'

const Macwindow = ({children , windowName , setWindowsState , windowsState}) => {
  return (
   <Rnd
    default={{
        x: 100,
        y: 100,
        width: "50vw",
        height: "70vh"}}
   >
    <div className="window">

    <div className="nav">
        <div className="dots">
            <div  onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))} className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>

        </div>
        <div className="title"><p>keshav -- zsh</p></div>
    </div>
    <div className="main-content">
       {children}
    </div>

    </div>

   </Rnd>
  )
}

export default Macwindow
