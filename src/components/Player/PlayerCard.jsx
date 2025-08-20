import React from 'react'

function PlayerCard({ cover = 'N/A', songTitle = `Song Title`, year = '2000', albumTitle = 'Album Title', artistName= 'Artist Name' }) {
    return (
        <>
            <div className='relative bg-[#e0ded8] h-full w-full lg:w-4/5 p-3 min-h-[90dvh]'>
                <figure className="flex flex-col gap-3">
                    <img className="object-contain aspect-square w-full" src={cover} alt='AlbumImage' />
                    <figcaption className="space-y-1">
                        <div className="grid grid-cols-[65%_35%]">
                            <h1 className="p-2 text-end text-2xl">{songTitle}</h1>
                            <span className="p-2 text-start text-2xl">{year}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x-4 text-2xl">
                            <h3 className="p-2 text-end">{albumTitle}</h3>
                            <h3 className="p-2 text-start">{artistName}</h3>
                        </div>
                    </figcaption>
                </figure>
                {/* Cinta adhesiva - esquinas */}
                <div className="absolute top-[-10px] left-[-10px] w-[60px] h-[20px] bg-yellow-100/80 shadow rotate-[-12deg] z-10" />
                <div className="absolute bottom-[-10px] right-[-10px] w-[60px] h-[20px] bg-yellow-100/80 shadow rotate-[-12deg] z-10" />
            </div>
        </>
        // <div className="bg-[#e0ded8] h-full w-full lg:w-4/5 p-4 min-h-[500px] transition-shadow duration-300 hover:shadow-xl">
        //     <figure className="flex flex-col gap-3">
        //         <div className="overflow-hidden">
        //             <img
        //                 className="object-contain aspect-square w-full transform transition-transform duration-500 hover:scale-105"
        //                 src={cover}
        //                 alt="Portada del álbum de Dua Lipa"
        //             />
        //         </div>
        //         <figcaption className="space-y-1">
        //             <h2 className="text-xl font-bold text-start">Dua Lipa</h2>
        //             <p className="text-start text-gray-700">
        //                 Contenido de la portada
        //             </p>
        //         </figcaption>
        //     </figure>
        // </div>
    )
}

export default PlayerCard