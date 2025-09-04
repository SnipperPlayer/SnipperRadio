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
                className="hover:bg-gray-100/50 hover:pl-5 hover:pr-5 duration-200 cursor-pointer flex justify-between items-center"
                onClick={() => alert(`Título: ${title}\n\nContenido: ${content}`)}
            >
                <p className="text-gray-600 text-start text-lg font-semibold">
                    {title}
                </p>
                {/* Ícono de flecha SVG en línea para indicar que es clickeable */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="currentColor" color="#000000ff" className="flex-shrink-0 ml-2">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd"></path>             </svg>
            </li>
            <br />
        </>
    )
}

export default NoteCard