//Coustom Hooks funcionan commo si fueran funtional Components pueden tener efecto, pueden usar reducer, contextos ... 

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    console.log('render useFetchGifs')

    useEffect(() => {  //unicamente se va a renderizar si la categoria cambia
        getGifs(category)
            .then(imgs => {
                        setstate({
                        data: imgs,
                        loading: false
                    });
            })
    },[category])

    // setTimeout(() => {
    //     setstate({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     })
    // }, 3000);

    return state;// {data: [], loading: true}
}