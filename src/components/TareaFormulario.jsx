import React, { useState } from 'react';
import '../styles/TareaFormulario.css'
import { v4 as uuidv4 } from  'uuid';

export default function TareaFormulario(props) {


    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    };

    const manejarEnvio = e => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        };
        
        props.onSubmit(tareaNueva);
        
        const inputDOM =document.getElementById('tarea-input');
        inputDOM.value='';
        setInput('');

    };

    return (
        <form 
            className='tarea-formulario'
            onSubmit={manejarEnvio}>
            <input 
                id="tarea-input"
                className='tarea-input'
                type='text'
                placeholder='Escribe una Tarea...'
                name='texto'
                onChange={manejarCambio}
            />
            <button 
                className='tarea-boton' > 
                Agregar Tarea
            </button>
        </form>
    )
}