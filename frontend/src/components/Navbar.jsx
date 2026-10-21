import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <header
            className="
                sticky top-0 z-20
                flex items-center justify-between
                gap-3
                py-4 mb-6
                bg-[#071510]/95
                backdrop-blur-xl
                border-b border-[#d6ad55]/15
            "
        >
            {/* Left: Logo and navigation */}
            <div className="flex items-center gap-2 shrink-0">

                {/* Manara Logo */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center mr-1"
                    aria-label="Manara Home"
                >
                    <img
                        src={assets.manara}
                        alt="Manara"
                        className="h-10 w-auto object-contain"
                    />
                </button>

                {/* Back */}
                <button
                    onClick={() => navigate(-1)}
                    className="
                        w-8 h-8 sm:w-9 sm:h-9
                        rounded-xl
                        bg-[#10271c]
                        border border-[#d6ad55]/15
                        flex items-center justify-center
                        hover:bg-[#1a3828]
                        hover:border-[#d6ad55]/40
                        transition
                    "
                    aria-label="Go back"
                >
                    <img
                        className="w-4"
                        src={assets.arrow_left}
                        alt=""
                    />
                </button>

                {/* Forward */}
                <button
                    onClick={() => navigate(1)}
                    className="
                        w-8 h-8 sm:w-9 sm:h-9
                        rounded-xl
                        bg-[#10271c]
                        border border-[#d6ad55]/15
                        flex items-center justify-center
                        hover:bg-[#1a3828]
                        hover:border-[#d6ad55]/40
                        transition
                    "
                    aria-label="Go forward"
                >
                    <img
                        className="w-4"
                        src={assets.arrow_right}
                        alt=""
                    />
                </button>
            </div>

            {/* Search */}
            <div
                className="
                    flex flex-1 min-w-0
                    items-center gap-2 sm:gap-3
                    max-w-[420px]
                    px-3 sm:px-4
                    py-2.5
                    rounded-xl
                    bg-[#102019]
                    border border-[#d6ad55]/15
                    focus-within:border-[#d6ad55]/50
                    focus-within:shadow-[0_0_20px_rgba(214,173,85,0.08)]
                    transition
            "
            >
                <img
                    src={assets.search_icon}
                    className="w-4 opacity-60 shrink-0"
                    alt=""
                />

                <input
                    type="text"
                    placeholder="Search Manara"
                    className="
                        bg-transparent outline-none
                        text-sm text-[#f6f0df]
                        placeholder:text-[#8a9b8d]
                        w-full min-w-0
                    "
                />

                {/* Keyboard shortcut */}
                <span
                    className="
                        hidden lg:block
                        text-[10px] text-[#a9a17e]
                        border border-[#d6ad55]/20
                        rounded px-2 py-1
                    "
                >
                    /
                </span>
            </div>

            {/* Right: Profile */}
            <div className="flex items-center shrink-0">
                <div
                    className="
                        w-8 h-8 sm:w-9 sm:h-9
                        rounded-xl
                        bg-gradient-to-br
                        from-[#d6ad55]
                        via-[#b98b32]
                        to-[#76531c]
                        flex items-center justify-center
                        text-sm font-bold text-[#071510]
                        border border-[#f5d98a]/30
                        shadow-[0_0_20px_rgba(214,173,85,0.12)]
                    "
                >
                    A
                </div>
            </div>
        </header>
    )
}

export default Navbar