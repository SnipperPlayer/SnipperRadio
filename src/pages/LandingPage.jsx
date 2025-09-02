import React from 'react'
import AlbumCard from '../components/Albums/AlbumCard.jsx'
import NoteCard from '../components/Notes/NoteCard.jsx'
import PlayerCard from '../components/Player/PlayerCard.jsx'

import DuaLipaCover from '../../src/assets/AlbumsCover/DuaLipaCover.jpg'
import VoiceNotesCover from '../../src/assets/AlbumsCover/VoiceNotesCover.jpg'
import HurryUpTomorrowCover from '../../src/assets/AlbumsCover/HurryUpTomorrowCover.jpg'

import wrinkleTexture from '../assets/tl.png'


//Se piensa primero con el diseño movil y luego con los endpoints se adapta a desktop
//Se usa la clase h-75 para que el div ocupe el 75% de la pantalla
//Se usa la clase lg:h-auto para que el div ocupe el 100% de la pantalla en desktop
//Se usa la clase lg:w-1/2 para que el div ocupe el 50% de la pantalla en desktop
//Se usa la clase lg:flex-row para que los divs se muestren en fila
function LandingPage() {
    return (
        <>
            <div className="text-center gap-2 p-4 h-screen flex flex-col lg:flex-row">
                <div className="h-auto lg:w-1/2 flex flex-col justify-center items-center">
                    <PlayerCard cover={DuaLipaCover} />
                </div>
                <div className="gap-2 flex flex-col lg:w-1/2">
                    <div className="bg-black/50 w-full h-auto flex flex-row justify-center items-center lg:h-1/2 border-y-8 border-dashed border-yellow-300">
                        <div className="p-3 gap-5 w-full flex flex-col justify-center items-center md:flex-row lg:flex-row">
                            <AlbumCard cover={DuaLipaCover} topNumber="1" title="Dua Lipa - Dua Lipa" content="Pop retro con toques de synth y dance, destacando la voz única y la estética visual de los 80s." />
                            <AlbumCard cover={VoiceNotesCover} topNumber="2" title="Voicenotes - Charlie Puth" content="Álbum con sonidos R&B moderno y sintetizadores retro, ideal para playlists nocturnas." />
                            <AlbumCard cover={HurryUpTomorrowCover} topNumber="3" title="Hurry Up Tomorrow - The Weeknd" content="Fusión de soul y funk retro, con grooves cálidos y letras introspectivas." />
                        </div>
                    </div>
                    <div className="relative bg-[#ebd4b2] w-full h-auto flex justify-center"> {/*lg:h-1/2*/}
                        <ul className="w-full divide-y-3 divide-blue-600 overflow-y-auto">
                            <li className="grid grid-cols-[12%_88%]">
                                <span></span>
                                <span className="p-2 border-l-4 border-red-600 text-gray-800 text-start text-xl">REVIEWS</span>
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
                        <div
                            className="absolute inset-0 bg-cover mix-blend-multiply opacity-60 pointer-events-none"
                            style={{ backgroundImage: `url(${wrinkleTexture})` }}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage

