import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData, assets } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
    return (
        <>
            <Navbar />

            {/* Manara Islamic Learning Hero */}
            <section
                className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    min-h-[360px]
                    p-8
                    md:p-14
                    mb-10
                    bg-gradient-to-br
                    from-[#12382c]
                    via-[#0b211b]
                    to-[#070e0b]
                    border border-[#d9a441]/20
            "
            >
                {/* Emerald Background Glow */}
                <div
                    className="
                        absolute
                        -right-24
                        -top-32
                        w-96 h-96
                        rounded-full
                        bg-emerald-400/10
                        blur-3xl
                    "
                />

                {/* Golden Background Glow */}
                <div
                    className="
                        absolute
                        right-20
                        bottom-[-150px]
                        w-80 h-80
                        rounded-full
                        bg-amber-400/10
                        blur-3xl
                    "
                />

                {/* Subtle Decorative Border */}
                <div
                    className="
                        absolute
                        inset-4
                        rounded-2xl
                        border border-[#d9a441]/[0.06]
                        pointer-events-none
                "
            />

            {/* Hero Content */}
            <div className="relative max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                    <img
                        src={assets.manara}
                        alt="Manara"
                        className="w-12 h-12 object-contain"
                    />

                    <div>
                        <p
                            className="
                                text-xs
                                tracking-[0.25em]
                                uppercase
                                text-[#e5bd68]
                                font-semibold
                            "
                        >
                            Your journey to understanding Islam
                        </p>

                        <p className="text-xs text-emerald-100/50 mt-1">
                            Knowledge • Faith • Purpose
                        </p>
                    </div>
                </div>

                <h1
                    className="
                        text-4xl
                        md:text-6xl
                        font-bold
                        leading-[1.08]
                        tracking-tight
                        text-[#fff8e7]
            "
            >
                Learn Islam.
                <span className="block text-[#e5bd68]">
                    Live with purpose.
                </span>
            </h1>

            <p
                className="
                    mt-6
                    text-emerald-50/70
                    max-w-xl
                    leading-7
                    text-sm
                    md:text-base
                "
            >
                Explore the Quran, the life of Prophet Muhammad ﷺ,
                Islamic beliefs, and everyday guidance through
                organized lessons and carefully curated learning series.
            </p>

            {/* Start Learning */}
            <div className="mt-8 flex flex-wrap gap-3">
                <button
                    onClick={() =>
                        document
                            .getElementById('learning-paths')
                            ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="
                        px-6 py-3
                        rounded-xl
                        bg-gradient-to-r
                        from-[#e5bd68]
                        to-[#c99832]
                        text-[#172015]
                        text-sm
                        font-semibold
                        shadow-lg
                        shadow-amber-900/20
                        hover:brightness-110
                        transition
                    "
                >
                    Start learning
                </button>
            </div>
        </div>
    </section>

    {/* Islamic Learning Collections */}
    <section id="learning-paths" className="mb-10">
        <div className="flex items-end justify-between mb-5">
            <div>
                <p
                    className="
                        text-xs
                        text-[#e5bd68]
                        uppercase
                        tracking-[0.2em]
                    "
                >
                    Curated for you
                </p>

                <h2 className="text-2xl font-bold mt-1 text-[#fff8e7]">
                    Explore learning paths
                </h2>

                <p className="text-sm text-emerald-50/50 mt-2">
                    Discover Islamic knowledge through organized collections.
                </p>
            </div>
        </div>

        <div
            className="
                grid
                grid-cols-2
                md:grid-cols-4
                xl:grid-cols-6
                gap-4
            "
        >
            {albumsData.map((item) => (
                <AlbumItem
                    key={item.id}
                    name={item.name}
                    desc={item.desc}
                    id={item.id}
                    image={item.image}
        />
    ))}
</div>
</section>

{/* Recently Added Lessons */}
<section className="mb-10">
    <div className="mb-5">
        <p
            className="
                text-xs
                text-[#e5bd68]
                uppercase
                tracking-[0.2em]
            "
        >
            Recently added
        </p>

        <h2 className="text-2xl font-bold mt-1 text-[#fff8e7]">
            Continue your learning
        </h2>

        <p className="text-sm text-emerald-50/50 mt-2">
            Discover new lessons and revisit what you've learned.
        </p>
    </div>

    <div
        className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-3
        "
    >
        {songsData.map((item) => (
            <SongItem
                key={item.id}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
        />
    ))}
</div>
</section>
</>
)
}

export default DisplayHome