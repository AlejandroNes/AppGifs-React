import React, { useState } from 'react'

export const Form = ({ addCategory }) => {

    const [nombregif, setNombregif] = useState('');
    const [alert, setAlert] = useState(false);

    //funciones
    const handleChange = (e) => {
        setNombregif(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombregif.trim()) {
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 1500);
            return
        };

        addCategory(nombregif);
        setNombregif('');

    }

    return (
        <div className='bg-white mx-auto w-75 my-3 p-4 shadow'>
            {!alert ? (
                <p className='text-center fw-bold'>BUSCAR GIFS</p>
            ) : (
                <p className='text-center text-danger'>COMPLETE LOS CAMPOS</p>
            )}
            <form className='d-flex ' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Ej. Mario Bross'
                    className='form-control rounded-0'
                    value={nombregif}
                    onChange={handleChange}
                />
                <button
                    type='submit'
                    className='boton text-white rounded-0'
                >
                    Buscar
                </button>
            </form>

        </div>
    )
}
