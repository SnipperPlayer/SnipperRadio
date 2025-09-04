import React from 'react';

function AlbumCard({ cover = 'N/A', topNumber = '#', title = 'N/A', author = 'No Author', year = '0000' }) {
    return (
        <figure className="relative bg-black border-gray-400 border-2 p-3 w-full h-auto hover:scale-[1.09] transition-transform duration-300" /*w-72 max-w-sm*/>
            <div className="absolute -top-2 left-3 w-[60px] h-[15px] -rotate-3 [background:repeating-linear-gradient(-45deg,#f5d000_0,#f5d000_8px,black_8px,black_16px)]"></div>
            <img
                src={cover}
                alt="AlbumImage"
                className="w-full aspect-square object-cover" //shadow-2xl shadow-indigo-600/50 mt-4 mb-4
            />
            <figcaption className="mt-3 mb-3 text-center">
                <h3 className="text-white text-2xl">
                    {title}
                </h3>
                <p className="text-lg text-white font-medium">
                    {author}
                </p>
                <p className="text-lg text-gray-300 font-medium">
                    {year}
                </p>
            </figcaption>
            <span className="absolute -bottom-2 right-3 bg-[#0074d9] text-white text-md px-2 py-1 transform rotate-3">
                TOP {topNumber}
            </span>
        </figure>
    )
}

export default AlbumCard

