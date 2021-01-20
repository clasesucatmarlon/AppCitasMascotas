import React, { Fragment, useState} from 'react';

const Formulario = () => {

    // Crear state de citas
    const [cita, actualizarCita] = useState({
        // mismos de los names del formulario
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // Función que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = () => {
        console.log('Escribiendo.....')
    }

    return (
        <Fragment>
            <h2>Crear cita</h2>

            <form>
                <label>Nombre Mascota:</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de mascota"
                    onChange={actualizarState}
                >
                </input>

                <label>Nombre Dueño:</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={actualizarState}
                >
                </input>

                <label>Fecha de ingreso:</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                >
                </input>

                <label>Hora de ingreso:</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    >
                </input>

                <label>Síntomas:</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
                    >
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                    >
                    Agregar cita
                </button>
            </form>


        </Fragment>
    );
}

export default Formulario;