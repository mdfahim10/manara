
import React, { useContext } from 'react'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {
    const { audioRef, track } = useContext(PlayerContext)

    return (
        <div className="min-h-screen bg-[#05070b] text-white">
            <main className="min-h-screen pb-28">
                <Display />
            </main>

            <Player />

            <audio
                ref={audioRef}
                src={track?.file}
                preload="auto"
            />
        </div>
    )
}

export default App
