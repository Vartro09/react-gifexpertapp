import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GiftExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Add_Prueba']);
    //     setCategories( cats => [ ...cats, 'Add_Prueba'] );

    // };


  return (
    <div>
        <h2>Gift Expert App</h2>

        {/* Enviamos la referencia de setCategories al componente AddCategoriy por medio de params */}
        <AddCategory setCategories={ setCategories }/>

        <hr />



        <ol>
            {
                categories.map( category => 
                    <GifGrid 
                        key={ category }
                        category={ category } 
                    />   
                )
            }
        </ol>
    </div>
  )
}
