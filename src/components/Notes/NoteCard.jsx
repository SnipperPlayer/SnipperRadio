import React from 'react'

function NoteCard({ title = 'No title', content = 'No content' }) {
    return (
        <>
            <li className="grid grid-cols-[12%_88%]">
                <span></span>
                <p className="p-2 border-l-4 border-red-300 text-gray-600 text-start">{content}</p>
            </li>
        </>
    )
}

export default NoteCard