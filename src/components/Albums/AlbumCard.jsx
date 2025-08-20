// import React from 'react'

// function AlbumCard({ cover = 'N/A', title = 'N/A', content = 'No content' }) {
//     return (
//         <>
//             <div className='bg-yellow-300 rounded-lg shadow-md flex flex-col justify-center items-center p-2'>
//                 <img class="object-contain aspect-square" src={cover} alt='AlbumImage'/>
//                 <h2 className='text-xl font-bold'>{title}</h2>
//                 <p className='text-base'>{content}</p>
//             </div>
//         </>
//     )
// }

// export default AlbumCard


function AlbumCard({ cover = 'N/A', title = 'N/A', content = 'No content' }) {
    return (
        <div className="flex flex-col justify-center items-center p-2 text-white">
            <div className="relative mx-auto rotate-[2deg] drop-shadow-lg">
                <img
                    src={cover}
                    alt="AlbumImage"
                    className="w-full shadow-inner object-cover"
                />

                {/* Cinta adhesiva - esquinas */}
                <div className="absolute top-[-10px] left-[-10px] w-[60px] h-[20px] bg-yellow-100/80 shadow rotate-[-15deg] z-10" />
                <div className="absolute bottom-[-10px] right-[-10px] w-[60px] h-[20px] bg-yellow-100/80 shadow rotate-[-12deg] z-10" />
            </div>

            <h2 className="text-xl font-bold mt-4">{title}</h2>
        </div>
    )
}

export default AlbumCard
