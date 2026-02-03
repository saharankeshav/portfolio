import React from 'react'
import Macwindow from './Macwindow'
import './Spotify.scss'

const Spotify = ({ windowName, setWindowsState }) => {
  return (
    <Macwindow windowName={windowName} setWindowsState={setWindowsState}>
        <iframe className="link" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=In5d6N30lzhDKHHh&amp;list=PLI7mzn3wO-MzhEAluWj1_gnrHn7SuyZc1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Macwindow>
  )
}

export default Spotify
