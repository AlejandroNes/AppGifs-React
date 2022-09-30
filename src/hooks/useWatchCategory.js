import { useState, useEffect } from 'react';
import { consultarAPI } from "../helpers/api";

export const useWatchCategory = (item) => {

    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true)

    const mostrarDatos = async () => {
        const gifsCategory = await consultarAPI(item);
        setDatos(gifsCategory);
        setLoading(false);
    }
    useEffect(() => {
        mostrarDatos();
    }, [])

    return {
        datos,
        loading
    }
}
