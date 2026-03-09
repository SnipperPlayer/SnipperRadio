import React, { useEffect } from 'react';

function Modal({ setShowModal, title, content }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setShowModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [setShowModal]);

    return (
        <div className="relative flex flex-col items-center max-w-lg w-full mx-auto">
            <div
                className="relative bg-zinc-900 text-zinc-100 p-8 shadow-[10px_10px_0px_0px_rgba(30,58,138,0.5)] flex flex-col h-[85svh]  overflow-hidden"
                style={{ clipPath: `polygon(1% 1%, 100% 0%, 100% 100%, 0% 100%)` }}
            >
                {/* Franja superior gruesa como alternativa al borde */}
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-900"></div>

                {/* Título Achicado y Sofisticado */}
                <h2 className="text-xl md:text-2xl font-bold leading-tight text-blue-100 uppercase break-words border-b border-dashed border-blue-800 pb-3 mb-6 tracking-tight">
                    {title}
                </h2>
                {/* Contenido: Texto Claro y Legible */}
                <div className="font-mono text-sm md:text-md leading-relaxed text-zinc-300 border-l border-dashed border-zinc-700 pl-4 py-1 flex-1 overflow-y-auto custom-scrollbar-navy selection:bg-blue-800 selection:text-white">
                    {/* Etiqueta de Info Discreta */}
                    <span className="inline-block bg-blue-950 text-blue-200 px-2 py-[2px] mb-4 text-[10px] font-medium uppercase tracking-widest border border-blue-800">
                        REVIEW // 01/01/2026
                    </span>
                    <p>{content}</p>
                </div>
                {/* Tu Botón de Cerrar (Intacto y Centrado) */}
                <div className="flex justify-center mt-2">
                    <button
                        className="px-6 py-2 bg-zinc-950 text-white font-bold uppercase text-sm hover:bg-zinc-800 transition-colors shadow-[3px_3px_0px_0px_rgba(30,58,138,1)] "
                        onClick={setShowModal}
                    >
                        CERRAR
                    </button>
                </div>
            </div>
            {/* Cinta Adhesiva: Azul Transparente */}
            <div className="absolute -top-3 -right-1 w-12 h-6 bg-blue-950 rotate-[-10deg] opacity-70 pointer-events-none [clip-path:polygon(5%_10%,100%_0,95%_90%,0_100%)] border border-blue-900"></div>
            <div className="absolute -bottom-2 -left-3 w-12 h-6 bg-blue-950 rotate-[10deg] opacity-70 pointer-events-none [clip-path:polygon(5%_10%,100%_0,95%_90%,0_100%)] border border-blue-900"></div>

        </div>
    )
}

export default Modal