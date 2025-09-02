import React, { useState } from 'react';

import NoteCard from '../components/Notes/NoteCard.jsx';
import AlbumCard from '../components/Albums/AlbumCard.jsx';

import wrinkleTexture from '../assets/tl.png';
import Cassette from '../components/Cassette/Cassette.jsx';

import DuaLipaCover from '../assets/AlbumsCover/DuaLipaCover.jpg';
import VoiceNotesCover from '../assets/AlbumsCover/VoiceNotesCover.jpg';
import HurryUpTomorrowCover from '../assets/AlbumsCover/HurryUpTomorrowCover.jpg';

import notesdata from "../database/notes.json";

function LandingPageAlt() {
    // const [count, setCount] = useState(0);

    // const covers = [DuaLipaCover, VoiceNotesCover, HurryUpTomorrowCover, DuaLipaCover, VoiceNotesCover, HurryUpTomorrowCover];
    // const coverOne = covers[count];

    // const handleNext = () => {
    //     if (count + 1 >= covers.length) {
    //         setCount(0);
    //         return;
    //     }
    //     setCount(count + 1);
    // };
    // const handlePrev = () => {
    //     if (count - 1 < 0) {
    //         setCount(covers.length - 1);
    //         return;
    //     }
    //     setCount(count - 1)
    // };
  const [activeIndex, setActiveIndex] = useState(0);


    return (
        <>
            <div className="flex flex-col justify-center items-center">
                {/* Sección de títulos */}
                <header className="flex flex-col justify-center items-center py-4">
                    <h1 className="text-3xl md:text-6xl text-white text-center text-shadow-[0_0_7px_#fff]">DIGITAL MEMORIES</h1>
                    <h2 className="text-xl md:text-3xl text-white text-center bg-red-600 px-2">Radio Music</h2>
                </header>


                <div className="w-full min-w-md max-w-6xl h-auto my-25 md:my-6 rotate-90 md:rotate-0">
                    <Cassette />
                </div>

                <section className="relative flex flex-col justify-center items-center max-w-7xl w-[90%] md:w-[95%] mx-auto my-3">
                    {/* Titulo */}
                    <h2 className="text-2xl md:text-5xl text-white text-center px-4 py-2 md:px-6 md:py-3 bg-[url('https://s2.svgbox.net/pen-brushes.svg?ic=brush-3&color=green-500')] ">
                        REVIEWS
                    </h2>

                    {/* Titulo Latest News */}
                    <div className="absolute bg-red-700 z-10 top-[78px] md:top-[100px] w-full h-10 pl-[40px] md:pl-[90px] flex items-center">
                        <h3 className="text-white text-2xl md:text-3xl">Latest News:</h3>
                    </div>

                    {/* Líneas horizontales del cuaderno */}
                    <article className="relative w-full my-3 bg-[repeating-linear-gradient(#ebd4b2_0px,#ebd4b2_26px,#8ec5ff_26px,#8ec5ff_28px)]"
                        style={{ clipPath: `polygon(1% 2%, 3.5% 0.1%, 6.8% 0.1%, 12.3% 1.5%, 15.7% 0.7%, 24.7% 2%, 31.2% 0%, 35.9% 2.3%, 40.6% 0.5%, 47.1% 1.8%, 49.9% 1%, 75.8% 1.4%, 78.5% 1.7%, 84% 2.6%, 100%  2.4%, 100% 98.6%, 98% 98.6%, 93.6% 97.4%, 90.3% 98.3%, 86.8% 98.3%, 78.6% 98.5%, 76.4% 99.2%, 69.7% 99.8%, 64.2% 99.3%, 61.8% 99.2%, 57.2% 98.1%, 33.8% 97.3%, 28.2% 99.4%, 27% 98.3%, 22.1% 98.6%, 13.1% 97.1%, 7.6% 98.3%, 4.2% 98.3%, 1% 98.6%)` }}
                    >
                        <ul className="leading-[28px] pt-[82.8px] pl-[40px] md:pl-[90px] pr-[10px]" /*font-normal tracking-[1px] word-spacing-[4px]*/>
                            {notesdata.map((note, index) => (
                                <NoteCard key={index} title={note.title} content={note.content} />
                            ))}
                        </ul>
                        {/* Textura arrugada */}
                        <div className="absolute inset-0 bg-cover mix-blend-multiply opacity-60 pointer-events-none"
                            style={{ backgroundImage: `url(${wrinkleTexture})` }}
                        />
                        {/* Línea vertical roja */}
                        <div className="absolute top-0 h-full w-[3px] left-[30px] md:left-[80px] bg-[rgba(255,0,0,0.4)]" />
                    </article>
                </section>

                {/* <hr class="border-0 h-4 w-full max-w-7xl [background:repeating-linear-gradient(-45deg,yellow_0,yellow_25px,black_25px,black_50px)]" /> */}

                {/* Sección de Top Albums */}
                <section className="flex flex-col justify-center items-center max-w-7xl w-[90%] md:w-[95%] mx-auto my-6">
                    {/* Titulo */}
                    <h2 className="text-2xl md:text-5xl text-white text-center px-4 py-2 md:px-6 md:py-3 bg-[url('https://s2.svgbox.net/pen-brushes.svg?ic=brush-3&color=4f39f6')]">
                        TOP WEEKLYS ALBUMS
                    </h2>
                    {/* Album Grid */}
                    <article className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full my-6">
                        <AlbumCard cover={DuaLipaCover} topNumber="1" title="Dua Lipa (Album)" author="Dua Lipa" year="2017" />
                        <AlbumCard cover={VoiceNotesCover} topNumber="2" title="Voicenotes" author="Charlie Puth" year="2018" />
                        <AlbumCard cover={HurryUpTomorrowCover} topNumber="3" title="Hurry Up Tomorrow" author="The Weeknd" year="2025" />
                    </article>
                </section>


                {/* <button onClick={handlePrev} className="size-20 bg-indigo-600">Prev</button>
                <button onClick={handleNext} className="size-20 bg-indigo-600">Next</button>
                <article className="flex flex-row gap-10 max-w-7xl w-full mx-auto my-6 overflow-hidden ">
                    <div
                        className="flex transition-transform duration-500  gap-10"
                        style={{ transform: `translateX(-${count * 17}%)` }}
                    >
                        {covers.map((coverO, index) => (
                            <AlbumCard key={index} cover={coverO} topNumber="1" title="Dua Lipa - Dua Lipa" content="Pop retro con toques de synth y dance, destacando la voz única y la estética visual de los 80s." />
                        ))}
                    </div>
                </article> */}


            </div>
        </>
    )
}

export default LandingPageAlt