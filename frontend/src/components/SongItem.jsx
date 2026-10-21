import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({ name, image, desc, id }) => {
    const { playWithId } = useContext(PlayerContext)

    return (
        <div
            onClick={() => playWithId(id)}
            className="
                group
                flex items-center gap-3 md:gap-4
                p-3
                rounded-2xl
                bg-white/[0.025]
                border border-white/[0.05]
                hover:bg-white/[0.055]
                hover:border-cyan-300/10
                cursor-pointer
                transition
            "
        >
            {/* Track Image */}
            <div className="relative shrink-0">
                <img
                    className="
                        w-14 h-14
                        md:w-16 md:h-16
                        rounded-xl
                        object-cover
                    "
                    src={image}
                    alt={name}
                />

                {/* Play Overlay */}
                <div
                    className="
                        absolute inset-0
                        rounded-xl
                        bg-black/50
                        flex items-center justify-center
                        opacity-0
                        group-hover:opacity-100
                        transition
                    "
                >
                    <span className="text-white text-lg">
                        ▶
                    </span>
                </div>
            </div>

            {/* Track Details */}
            <div className="min-w-0 flex-1">
                <p
                    className="
                        font-semibold
                        truncate
                        text-sm
                    "
            >
                {name}
            </p>

            <p
                className="
                    text-xs
                    text-slate-500
                    mt-1
                    truncate
            "
            >
                {desc}
            </p>
        </div>

        {/* Small Manara Logo */}
        <img
            src={assets.manara}
            alt="Manara"
            className="
                hidden sm:block
                w-6 h-6
                object-contain
                opacity-50
                group-hover:opacity-90
                transition
            "
        />

        {/* Favorite Button */}
        <button
            onClick={(e) => e.stopPropagation()}
            className="
                hidden sm:flex
                w-9 h-9
                rounded-xl
                items-center justify-center
                text-slate-500
                hover:text-white
                hover:bg-white/[0.06]
                transition
            "
            aria-label="Add to favorites"
        >
            ♡
        </button>
        </div>
    )
}

export default SongItem