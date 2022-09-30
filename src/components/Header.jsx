import React from 'react'

export const Header = ({ clearGifs }) => {
    return (
        <header className='primario d-flex justify-content-between align-items-center px-2'>
            <h1
                className='text-uppercase text-center p-1 text-white'
            >
                Gifs - APP
            </h1>
            <button
                className='boton-limpiar text-white rounded-0'
                onClick={clearGifs}
            >
                Limpiar
            </button>
        </header>
    )
}
