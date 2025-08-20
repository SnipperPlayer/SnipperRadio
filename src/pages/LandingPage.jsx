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
                            <AlbumCard cover={DuaLipaCover} title='Top 1' content="Contenido 1" />
                            <AlbumCard cover={VoiceNotesCover} title='Top 2' content="Contenido 2" />
                            <AlbumCard cover={HurryUpTomorrowCover} title='Top 3' content="Contenido 3" />
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


{/* 
<div className="flex justify-center items-center h-screen">
    <div className="flex flex-col gap-2 text-center lg:flex-row w-full max-w-4xl p-4">

        <div className="bg-gray-200 rounded-xl h-[200px] lg:h-auto lg:w-1/2 flex items-center justify-center">
            w-1/2
        </div>
        <div className="flex flex-col gap-2 lg:w-1/2">
            <div className="w-full bg-sky-500 rounded-xl h-[100px] lg:h-1/2 flex items-center justify-center">
                w-2.1
            </div>
            <div className="w-full bg-emerald-500 rounded-xl h-[100px] lg:h-1/2 flex items-center justify-center">
                w-2.1
            </div>
        </div>

    </div>
</div> 
*/}