import React from 'react'

function NoteCard({ title = 'No title', content = 'No content' }) {
    return (
        <>
            {/* <li className="grid md:grid-cols-[12%_88%]">
                    <span></span>
                    <p className="text-gray-600 text-start px-2 text-md">{content}</p>
                    <br />
                </li> */}
            {/* <li className="hover:bg-gray-100/50 hover:pl-5 duration-200 cursor-pointer">
                <p className="text-gray-600 text-start text-lg font-semibold">
                    {content}
                    <a href="#" className="text-blue-600 hover:underline text-lg w-full h-auto text-right"> &gt; </a>
                </p>
                <br />
            </li> */}
            <li
                className="hover:bg-gray-100/50 hover:pl-5 duration-200 cursor-pointer flex justify-between items-center"
                onClick={() => alert(`Título: ${title}\n\nContenido: ${content}`)}
            >
                <p className="text-gray-600 text-start text-lg font-semibold">
                    {title}
                </p>
                {/* Ícono de flecha SVG en línea para indicar que es clickeable */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right text-blue-600 flex-shrink-0">
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </li>
            <br />
        </>
    )
}

export default NoteCard