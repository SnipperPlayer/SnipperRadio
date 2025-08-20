import React from 'react';

import NoteCard from '../components/Notes/NoteCard.jsx';
import wrinkleTexture from '../assets/tl.png';

import Cassette from '../components/Cassette/Cassette.jsx';

import DuaLipaCover from '../assets/AlbumsCover/DuaLipaCover.jpg';
import VoiceNotesCover from '../assets/AlbumsCover/VoiceNotesCover.jpg';
import HurryUpTomorrowCover from '../assets/AlbumsCover/HurryUpTomorrowCover.jpg';

function LandingPageAlt() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                {/* Sección de títulos */}
                <div className="flex flex-col justify-center items-center py-4">
                    <h1 className="text-3xl md:text-6xl text-white text-center text-shadow-[0_0_7px_#fff]">DIGITAL MEMORIES</h1>
                    <h2 className="text-xl md:text-3xl text-white text-center bg-red-600 px-2">Radio Music</h2>
                </div>


                <div className='w-full min-w-lg max-w-6xl h-auto my-25 md:my-6 rotate-90 md:rotate-0'>
                    <Cassette />
                </div>

                <h1 className="text-2xl md:text-5xl text-white text-center bg-[url('https://s2.svgbox.net/pen-brushes.svg?ic=brush-3&color=green-500')] p-2 mt-6">
                    REVIEWS
                </h1>
                <div className="relative bg-[#ebd4b2] flex flex-col justify-center h-auto w-full max-w-7xl mx-auto my-4">
                    <ul className="w-full divide-y-3 divide-blue-300 overflow-y-auto">
                        <li className="grid grid-cols-[12%_88%]">
                            <span></span>
                            <span className="p-2 border-l-4 border-red-300 text-gray-800 text-start text-xl">REVIEWS</span>
                        </li>
                        <NoteCard title='Titulo 3' content="Radical Optimism… un álbum que exploró mucho, pero no profundizó en nada… ¿por qué falló?" />
                        <NoteCard title='Titulo 3' content="The Weeknd" />
                        <NoteCard title='Titulo 3' content="Charlie Puth" />
                        <NoteCard title='Titulo 3' content="Dua Lipa" />
                        <NoteCard title='Titulo 3' content="Twenty One Pilots" />
                        <NoteCard title='Titulo 3' content="Zara Larsson" />
                        <NoteCard title='Titulo 3' content="Ava Max" />
                        <NoteCard title='Titulo 3' content="Shawn Mendes" />
                    </ul>

                    {/* Textura arrugada */}
                    <div
                        className="absolute inset-0 bg-cover mix-blend-multiply opacity-60 pointer-events-none"
                        style={{ backgroundImage: `url(${wrinkleTexture})` }}
                    />
                </div>

                {/* Sección de Top Albums */}
                <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-2xl md:text-5xl text-white text-center bg-[url('https://s2.svgbox.net/pen-brushes.svg?ic=brush-3&color=4f39f6')] p-2 my-6">
                        TOP WEEKLYS ALBUMS
                    </h1>
                    <div className="grid grid-cols-3 gap-4 max-w-7xl w-full px-4 md:px-0 mx-auto">
                        <figure className="relative flex flex-col items-center">
                            <div className="absolute top-[-4px] md:top-[-12px] w-[clamp(30px,10vw,180px)] h-[clamp(10px,2vw,60px)]  bg-[#eee9d9] rotate-[-2deg] z-10" />
                            <img
                                src={DuaLipaCover}
                                alt="AlbumImage"
                                className="w-full aspect-square object-cover" //shadow-2xl shadow-indigo-600/50
                            />
                            <figcaption className="text-lg md:text-3xl text-center text-white bg-blue-600 px-2 rotate-[-4deg]">
                                TOP 1
                            </figcaption>

                        </figure>

                        <figure className="relative flex flex-col items-center">
                            <div className="absolute top-[-4px] md:top-[-12px] w-[clamp(30px,10vw,180px)] h-[clamp(10px,2vw,60px)]  bg-[#eee9d9] rotate-[-2deg] z-10" />
                            <img
                                src={VoiceNotesCover}
                                alt="AlbumImage"
                                className="w-full aspect-square object-cover"
                            />
                            <figcaption className="text-lg md:text-3xl text-center text-white bg-blue-600 px-2 rotate-[-4deg]">
                                TOP 2
                            </figcaption>
                        </figure>

                        <figure className="relative flex flex-col items-center">
                            <div className="absolute top-[-4px] md:top-[-12px] w-[clamp(30px,10vw,180px)] h-[clamp(10px,2vw,60px)]  bg-[#eee9d9] rotate-[-2deg] z-10" />
                            <img
                                src={HurryUpTomorrowCover}
                                alt="AlbumImage"
                                className="w-full aspect-square object-cover"
                            />
                            <figcaption className="text-lg md:text-3xl text-center text-white bg-blue-600 px-2 rotate-[-4deg]">
                                TOP 3
                            </figcaption>
                        </figure>
                    </div>
                </div>


            </div>
        </>
    )
}

export default LandingPageAlt

//<div className="relative bg-[#ebd4b2] flex flex-col justify-center w-full h-auto max-w-7xl mx-auto my-4">
//                    <ul className="w-full divide-y-3 divide-blue-300 overflow-y-auto">
//                        <li className="grid grid-cols-[12%_88%]">
//                            <span></span>
//                            <span className="p-2 border-l-4 border-red-300 text-gray-800 text-start text-xl">REVIEWS</span>
//                        </li>
//                        <NoteCard title='Titulo 3' content="Radical Optimism… un álbum que exploró mucho, pero no profundizó en nada… ¿por qué falló?" />
//                        <NoteCard title='Titulo 3' content="Sección 2" />
//                        <NoteCard title='Titulo 3' content="Sección 2" />
//                        <NoteCard title='Titulo 3' content="Sección 2" />
//                        <NoteCard title='Titulo 3' content="Sección 2" />
//                        <NoteCard title='Titulo 3' content="Sección 2" />
//                        <NoteCard title='Titulo 3' content="Sección 2" />
//                        <NoteCard title='Titulo 3' content="Sección 2" />
//                    </ul>
//
//                    {/* Textura arrugada */}
//                  <div
//                      className="absolute inset-0 bg-cover mix-blend-multiply opacity-60 pointer-events-none"
//                    style={{ backgroundImage: `url(${wrinkleTexture})` }}
//              />
//        </div>
{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-7xl mx-auto">
                    <div className='text-center bg-white'>
                        hola
                    </div>
                    <div className="relative flex flex-col justify-center h-auto w-full bg-[#ebd4b2]">
                        <ul className="w-full divide-y-3 divide-blue-300 overflow-y-auto">
                            <li className="grid grid-cols-[12%_88%]">
                                <span></span>
                                <span className="p-2 border-l-4 border-red-300 text-gray-800 text-start text-xl">REVIEWS</span>
                            </li>
                            <NoteCard title='Titulo 3' content="Radical Optimism… un álbum que exploró mucho, pero no profundizó en nada… ¿por qué falló?" />
                            <NoteCard title='Titulo 3' content="Sección 2" />
                            <NoteCard title='Titulo 3' content="Sección 2" />
                            <NoteCard title='Titulo 3' content="Sección 2" />
                            <NoteCard title='Titulo 3' content="Sección 2" />
                            <NoteCard title='Titulo 3' content="Sección 2" />
                            <NoteCard title='Titulo 3' content="Sección 2" />
                            <NoteCard title='Titulo 3' content="Sección 2" />
                        </ul>

                        {/* Textura arrugada */}
{/* <div
                            className="absolute inset-0 bg-cover mix-blend-multiply opacity-60 pointer-events-none"
                            style={{ backgroundImage: `url(${wrinkleTexture})` }}
                        />
                    </div>
                </div> */}