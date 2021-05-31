// import React, { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGiifs";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  // const state = useFetchGifs();

  const {data:  images,loading} = useFetchGifs(category); // objeto desestructurado

  console.log(images);

  // useEffect(() => { // unicamente se va a renderizar si la categoria cambia
  //     getGifs(category)
  //       //  .then(imgs => setImages(imgs)) 
  //        .then(setImages);
  // }, [category]);

  return (
      <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        {loading && <p className='animate__animated animate__flash'>Loading</p>}

         {/* <ol>
          {
            images.map(({id,title}) => (
              <li key={id}>{title}</li>
            ))
          }
        </ol>  */}

        <div className='card-grid'>
            {
                images.map(img => (
                    <GifGridItem 
                        key={img.id} 
                        {...img} 
                    />
                ))
            }
        </div>
      </>
    
  );
};
/*Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse
  useEffect nos permite expresar diferentes tipos de efectos secundarios después de que un componente se renderice.
    Si quieres ejecutar un efecto y sanearlo solamente una vez (al montar y desmontar), puedes pasar un array vacío ([]) 
    como segundo argumento. Esto le indica a React que el efecto no  depende de ningún valor proveniente
     de las props o el estado, de modo que no necesita volver a ejecutarse.
    Si pasas un array vacío ([]), las props y el estado dentro del efecto siempre tendrán sus valores iniciales. */


    