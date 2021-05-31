import React, { useState } from 'react'
import { AddCategories } from './components/AddCategories';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // const categories = ['One Punch','Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = ()=>{
    // //    setCategories([...categories,'HunterXHunter']);
    //     setCategories(cats => [...cats,'HunterXHunter']);
    // }
    console.log('render GifExpertApp')

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategories setCategories = {setCategories}/>
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                //     categories.map(category =>
                //         <li key= {category}>{category}</li>
                //    )s
                    categories.map(category =>(
                        <GifGrid category ={category} key= {category}/>
                    ) )
                }
            </ol>
        </>
    )
}


