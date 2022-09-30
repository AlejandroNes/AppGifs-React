import React, { useState } from 'react';
import { Categories, Form, Header } from './components';


export const App = () => {

  const [gifs, setGifs] = useState([]);

  //funciones
  const addCategory = (valor) => {
    let newValor = valor.toLowerCase();
    //si hay un repetido
    if (gifs.includes(newValor)) return;

    //agregamos a las categorias de gifs
    setGifs([...gifs, newValor]);
  }


  //limpiar arreglo 
  const clearGifs = () => {
    setGifs([])
  }



  return (
    <div>
      <Header clearGifs={clearGifs} />
      <Form addCategory={addCategory} />
      <div className="container">
        <div className="row">
          {gifs.length < 1 ? (
            <h1 className='text-muted fw-light text-center mt-5'>Busca algun Gif {":)"}</h1>
          ) : gifs.map((item) => (
            <Categories key={item} item={item} />
          ))}
        </div>
      </div>

    </div>
  )
}
