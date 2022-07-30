import React from 'react'
import AddSongs from './AddSongs'
import Artist from './Artist'
import Song from './Song'

const Home = () => {
  return (
    <div>
        <Song/>
        <Artist/>
        <AddSongs/>
    </div>
  )
}

export default Home