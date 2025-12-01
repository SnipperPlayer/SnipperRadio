import React from 'react'

function Modal({ setShowModal = false, title, content }) {
    return (
        <div className="bg-gray-900 text-white rounded-t-lg shadow-lg p-6 z-10 max-w-lg w-full h-[80svh]">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p>{content}</p>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setShowModal(false)}
            >
                Close
            </button>
        </div>
    )
}

export default Modal