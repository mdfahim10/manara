import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef(null);
    const seekBg = useRef(null);
    const seekBar = useRef(null);

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);

    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    });

    const play = () => {

        if (!audioRef.current) return;

        audioRef.current.play()
            .then(() => {
                setPlayStatus(true);
            })
            .catch((error) => {
                console.log("Playback prevented:", error);
            });
    };

    const pause = () => {

        if (!audioRef.current) return;

        audioRef.current.pause();
        setPlayStatus(false);
    };

    const playWithId = (id) => {

        if (!songsData[id]) {
            console.error("Invalid song ID:", id);
            return;
        }

        setTrack(songsData[id]);
    };

    const previous = () => {

        if (track.id > 0) {
            setTrack(songsData[track.id - 1]);
        }
    };

    const next = () => {

        if (track.id < songsData.length - 1) {
            setTrack(songsData[track.id + 1]);
        }
    };

    const seekSong = (e) => {

        if (!audioRef.current || !seekBg.current) return;

        const width = seekBg.current.offsetWidth;

        const clickPosition = e.nativeEvent.offsetX;

        const duration = audioRef.current.duration;

        if (!duration) return;

        audioRef.current.currentTime =
            (clickPosition / width) * duration;
    };

    useEffect(() => {

        if (!audioRef.current) return;

        const audio = audioRef.current;

        const updateTime = () => {

            if (!audio.duration) return;

            const progress =
                (audio.currentTime / audio.duration) * 100;

            if (seekBar.current) {
                seekBar.current.style.width = `${progress}%`;
            }

            setTime({
                currentTime: {
                    second: Math.floor(audio.currentTime % 60),
                    minute: Math.floor(audio.currentTime / 60)
                },

                totalTime: {
                    second: Math.floor(audio.duration % 60),
                    minute: Math.floor(audio.duration / 60)
                }
            });
        };

        audio.addEventListener("timeupdate", updateTime);

        return () => {
            audio.removeEventListener("timeupdate", updateTime);
        };

    }, [track]);

    useEffect(() => {

        if (!audioRef.current || !track) return;

        audioRef.current.load();

        audioRef.current
            .play()
            .then(() => {
                setPlayStatus(true);
            })
            .catch(() => {
                setPlayStatus(false);
            });

    }, [track]);

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,

        track,
        setTrack,

        playStatus,
        setPlayStatus,

        time,
        setTime,

        play,
        pause,
        playWithId,

        previous,
        next,

        seekSong
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;