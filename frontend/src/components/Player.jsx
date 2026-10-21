import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
    const {
        track,
        seekBar,
        seekBg,
        playStatus,
        play,
        pause,
        time,
        previous,
        next,
        seekSong
    } = useContext(PlayerContext)

    return (
        <div
            className="
                fixed
                bottom-4
                left-3
                right-3
                md:left-4
                md:right-4
                z-50
                h-24
                px-3
                md:px-6
                rounded-2xl
                bg-[#0b1b13]/95
                backdrop-blur-2xl
                border border-[#d6ad55]/20
                shadow-[0_20px_80px_rgba(0,0,0,0.7)]
                flex items-center
                gap-3
                md:gap-4
            "
        >
            {/* Track Information */}
            <div
                className="
                    flex
                    items-center
                    gap-2
                    md:gap-3
                    min-w-0
                    w-[30%]
                    md:w-[25%]
                "
            >
                {/* Current Track Image */}
                <img
                    src={track?.image}
                    className="
                        w-10 h-10
                        md:w-14 md:h-14
                        rounded-xl
                        object-cover
                        shadow-lg
                        shrink-0
                        border border-[#d6ad55]/20
                    "
                    alt={track?.name || 'Current track'}
                />

                {/* Track Details */}
                <div className="min-w-0 hidden sm:block">
                    <p
                        className="
                            font-semibold
                            text-sm
                            text-[#f6f0df]
                            truncate
                        "
                    >
                        {track?.name}
                    </p>

                    <p
                        className="
                            text-xs
                            text-[#9aab9d]
                            mt-1
                            truncate
                        "
                    >
                        {track?.desc}
                    </p>
                </div>
            </div>

            {/* Playback Controls and Progress */}
            <div
                className="
                    flex-1
                    flex
                    flex-col
                    items-center
                    gap-2
                    min-w-0
                "
            >
                {/* Playback Buttons */}
                <div className="flex items-center gap-4 md:gap-5">
                    <button
                        className="
                            hidden sm:block
                            opacity-60
                            hover:opacity-100
                            transition
                        "
                        aria-label="Shuffle"
                    >
                        <img
                            src={assets.shuffle_icon}
                            className="w-4"
                            alt="Shuffle"
                        />
                    </button>

                    <button
                        onClick={previous}
                        className="
                            opacity-70
                            hover:opacity-100
                            transition
                        "
                        aria-label="Previous track"
                    >
                        <img
                            src={assets.prev_icon}
                            className="w-4"
                            alt="Previous"
                        />
                    </button>

                    {/* Play / Pause */}
                    <button
                        onClick={playStatus ? pause : play}
                        className="
                            w-10 h-10
                            md:w-12 md:h-12
                            rounded-full
                            bg-gradient-to-br
                            from-[#f5d98a]
                            to-[#b98b32]
                            flex items-center justify-center
                            hover:scale-105
                            hover:shadow-[0_0_25px_rgba(214,173,85,0.25)]
                            transition
                            shadow-[0_0_20px_rgba(214,173,85,0.12)]
                        "
                        aria-label={playStatus ? 'Pause' : 'Play'}
                    >
                        <img
                            src={
                                playStatus
                                    ? assets.pause_icon
                                    : assets.play_icon
                            }
                            className="w-4"
                            alt={playStatus ? 'Pause' : 'Play'}
                        />
                    </button>

                    <button
                        onClick={next}
                        className="
                            opacity-70
                            hover:opacity-100
                            transition
                        "
                        aria-label="Next track"
                    >
                        <img
                            src={assets.next_icon}
                            className="w-4"
                            alt="Next"
                        />
                    </button>

                    <button
                        className="
                            hidden sm:block
                            opacity-60
                            hover:opacity-100
                            transition
                        "
                        aria-label="Loop"
                    >
                        <img
            src={assets.loop_icon}
            className="w-4"
            alt="Loop"
        />
                    </button>
                </div>

                {/* Seek Bar */}
                <div
                    className="
                        flex
                        items-center
                        gap-2
                        md:gap-3
                        w-full
                        max-w-[620px]
                    "
        >
            <span
                className="
                    text-[10px]
                    text-[#9aab9d]
                    w-7
                    text-right
                    shrink-0
                "
            >
                {String(time.currentTime.minute).padStart(2, '0')}:
                {String(time.currentTime.second).padStart(2, '0')}
            </span>

            <div
                ref={seekBg}
                onClick={seekSong}
                className="
                    flex-1
                    h-1
                    rounded-full
                    bg-[#d6ad55]/15
                    cursor-pointer
                    overflow-hidden
                "
            >
                <div
                    ref={seekBar}
                    className="
                        h-full
                        w-0
                        rounded-full
                        bg-gradient-to-r
                        from-[#b98b32]
                        via-[#e6c66c]
                        to-[#f5e4a8]
                    "
                />
            </div>

            <span
                className="
                    text-[10px]
                    text-[#9aab9d]
                    w-7
                    shrink-0
                "
            >
                {String(time.totalTime.minute).padStart(2, '0')}:
                {String(time.totalTime.second).padStart(2, '0')}
            </span>
        </div>
    </div>

    {/* Additional Player Controls */}
    <div
        className="
            hidden md:flex
            items-center
            justify-end
            gap-4
            w-[20%]
        "
    >
        <button
            className="opacity-60 hover:opacity-100"
            aria-label="Queue"
        >
            <img
                src={assets.queue_icon}
                className="w-4"
                alt="Queue"
            />
        </button>

        <button
            className="opacity-60 hover:opacity-100"
            aria-label="Audio"
        >
            <img
                src={assets.speaker_icon}
                className="w-4"
                alt="Audio"
            />
        </button>

        <div
            className="
                w-20
                h-1
                rounded-full
                bg-[#d6ad55]/15
                overflow-hidden
        "
        >
            <div
                className="
                    w-[65%]
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-[#b98b32]
                    to-[#f5d98a]
                "
            />
        </div>

        <button
            className="opacity-60 hover:opacity-100"
            aria-label="Expand player"
        >
            <img
                src={assets.zoom_icon}
                className="w-4"
                alt="Expand"
            />
        </button>
    </div>
</div>
)
}

export default Player