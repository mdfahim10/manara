import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbum = () => {

    const { id } = useParams()

    const albumData = albumsData[Number(id)]

    const { playWithId } = useContext(PlayerContext)

    if (!albumData) {
        return (
            <div className="pt-20 text-center">
                <h2 className="text-2xl font-bold">
                    Album not found
                </h2>
            </div>
        )
    }

    return (
        <>
            <Navbar />

            <section className="
                relative
                overflow-hidden
                rounded-3xl
                p-6 md:p-10
                bg-gradient-to-br
                from-white/[0.05]
                to-transparent
                border border-white/[0.07]
            ">

                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: `radial-gradient(
                            circle at 20% 20%,
                            ${albumData.bgColor},
                            transparent 45%
                        )`
                    }}
                />

                <div className="
                    relative
                    flex
                    flex-col
                    md:flex-row
                    gap-7
                    md:items-end
                ">

                    <img
                        className="
                            w-44 h-44
                            md:w-56 md:h-56
                            object-cover
                            rounded-2xl
                            shadow-2xl
                        "
                        src={albumData.image}
                        alt={albumData.name}
                    />

                    <div>

                        <p className="
                            text-xs
                            uppercase
                            tracking-[0.25em]
                            text-cyan-300
                            mb-3
                        ">
                            TuneFlow Collection
                        </p>

                        <h1 className="
                            text-4xl
                            md:text-6xl
                            font-bold
                            tracking-tight
                        ">
                            {albumData.name}
                        </h1>

                        <p className="
                            text-slate-400
                            mt-4
                            max-w-xl
                        ">
                            {albumData.desc}
                        </p>

                        <div className="
                            flex items-center
                            gap-3
                            mt-5
                            text-xs
                            text-slate-500
                        ">

                            <img
                                src={assets.tuneflow}
                                className="w-20 h-auto"
                                alt="TuneFlow"
                            />

                            <span>•</span>
                            <span>Curated collection</span>
                            <span>•</span>
                            <span>{songsData.length} tracks</span>

                        </div>

                    </div>

                </div>

            </section>

            <section className="mt-8">

                <div className="
                    grid
                    grid-cols-[40px_1fr_80px]
                    md:grid-cols-[50px_1fr_180px_80px]
                    px-4
                    pb-3
                    border-b border-white/[0.06]
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    text-slate-600
                ">

                    <span>#</span>
                    <span>Track</span>
                    <span className="hidden md:block">
                        Collection
                    </span>
                    <span className="text-right">
                        Time
                    </span>

                </div>

                <div className="mt-2">

                    {songsData.map((item, index) => (

                        <div
                            key={item.id}
                            onClick={() => playWithId(item.id)}
                            className="
                                group
                                grid
                                grid-cols-[40px_1fr_80px]
                                md:grid-cols-[50px_1fr_180px_80px]
                                items-center
                                px-4 py-3
                                rounded-xl
                                cursor-pointer
                                hover:bg-white/[0.05]
                                transition
                            "
                        >

                            <span className="
                                text-sm
                                text-slate-600
                                group-hover:text-cyan-300
                            ">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className="
                                flex items-center
                                gap-3
                                min-w-0
                            ">

                                <img
                                    src={item.image}
                                    className="
                                        w-11 h-11
                                        rounded-lg
                                        object-cover
                                    "
                                    alt={item.name}
                                />

                                <div className="min-w-0">

                                    <p className="
                                        text-sm
                                        font-semibold
                                        truncate
                                    ">
                                        {item.name}
                                    </p>

                                    <p className="
                                        text-xs
                                        text-slate-600
                                        truncate
                                        mt-1
                                    ">
                                        {item.desc}
                                    </p>

                                </div>

                            </div>

                            <span className="
                                hidden md:block
                                text-xs
                                text-slate-600
                            ">
                                {albumData.name}
                            </span>

                            <span className="
                                text-right
                                text-xs
                                text-slate-500
                            ">
                                {item.duration}
                            </span>

                        </div>

                    ))}

                </div>

            </section>

        </>
    )
}

export default DisplayAlbum