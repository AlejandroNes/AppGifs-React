
//api key
const key = 'mtI8YrKjRTvEeVnPItkz2f5loaz622jn';

//funcion retorno arrglo de gifs
export const consultarAPI = async (item) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${item}&limit=6`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    return data;
}
