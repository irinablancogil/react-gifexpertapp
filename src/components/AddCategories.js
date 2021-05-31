/** Fragment <> es utilizado para agrupar elementos Html */

import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategories = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');//undefined ()!!

  const handledInputChange = (e) => { //actualiza el valor del estado con el valor que tiene el input
    setInputValue(e.target.value);

    console.log(e);
  };

  const handledSubmit = (e) => { // envia el formulario y agrega una categoria al estado de categoria 
    e.preventDefault();//preventDefault previene que se recargue la pagina
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue,...cats]);
      setInputValue('');
    }
  };
  console.log('render AddCategories')

  return (
    <form onSubmit={handledSubmit}>
      <input type="text" value={inputValue} onChange={handledInputChange} />
    </form>
  );
}

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
}
