import React, { Fragment } from 'react';

const Formulario = () => {
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
                >
                </input>

                <label>Nombre Dueño:</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                >
                </input>

                <label>Fecha de ingreso:</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                >
                </input>

                <label>Hora de ingreso:</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    >
                </input>

                <label>Síntomas:</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
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