import React from 'react'
import Macwindow from './Macwindow'
import './Resume.scss'

const Resume = ({ windowName, setWindowsState }) => {
  return (
    <Macwindow windowName={windowName} setWindowsState={setWindowsState}>
        <div className="resume-window">
            <iframe src="/resume.pdf" frameborder="0"></iframe>
        </div>
    </Macwindow>
  )
}

export default Resume
