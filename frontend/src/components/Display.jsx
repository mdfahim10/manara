import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {

    const displayRef = useRef(null)
    const location = useLocation()

    const isAlbum = location.pathname.includes("/album/")

    const albumId = isAlbum
        ? location.pathname.split("/").pop()
        : null

    const albumData =
        albumId !== null
            ? albumsData[Number(albumId)]
            : null

    useEffect(() => {

        if (isAlbum && albumData) {

            displayRef.current.style.background = `
                radial-gradient(
                    circle at 75% 0%,
                    ${albumData.bgColor}55,
                    transparent 35%
                ),
                linear-gradient(
                    135deg,
                    #0a111a,
                    #070a10 60%,
                    #05070b
                )
            `

        } else {

            displayRef.current.style.background = `
                radial-gradient(
                    circle at 80% 0%,
                    rgba(0, 190, 255, 0.08),
                    transparent 30%
                ),
                radial-gradient(
                    circle at 20% 30%,
                    rgba(65, 255, 130, 0.04),
                    transparent 30%
                ),
                #070a10
            `
        }

    }, [isAlbum, albumData])

    return (
        <div
            ref={displayRef}
            className="
                w-full
                min-h-screen
                px-5
                md:px-8
                pb-10
                text-white
                overflow-auto
                transition-all
                duration-500
            "
        >

            <Routes>

                <Route
                    path="/"
                    element={<DisplayHome />}
                />

                <Route
                    path="/album/:id"
                    element={<DisplayAlbum />}
                />

            </Routes>

        </div>
    )
}

export default Display