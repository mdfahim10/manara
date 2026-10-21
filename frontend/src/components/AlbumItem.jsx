import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {

    const navigate = useNavigate()

    return (
        <div
            onClick={() => navigate(`/album/${id}`)}
            className="
                group
                cursor-pointer
                rounded-2xl
                overflow-hidden
                bg-[#0c1118]
                border border-white/[0.06]
                hover:border-cyan-300/20
                transition-all
                duration-300
                hover:-translate-y-1
            "
        >
            <div className="relative aspect-square overflow-hidden">
                <img
                    className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                    src={image}
                    alt={name}
                />
                <div className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-transparent
                    to-transparent
                " />
                <div className="
                    absolute
                    bottom-3
                    right-3
                    w-10 h-10
                    rounded-xl
                    bg-white
                    text-black
                    flex items-center justify-center
                    opacity-0
                    translate-y-2
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    shadow-xl
                ">
                    ▶
                </div>
            </div>
            <div className="p-4">
                <p className="font-semibold truncate">
                    {name}
                </p>
                <p className="
                    text-xs
                    text-slate-500
                    mt-1
                    line-clamp-2
                    leading-5
                ">
                    {desc}
                </p>
            </div>
        </div>
    )
}
export default AlbumItem