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

    // Crear state para manejar error de formulario
    const [error, actualizarError] = useState(false);

    // Función que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = (e) => {
        console.log(e.target.value)
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Cuando el usuario presiona en enviar cita
    const submitCita = (e) => {
        // prevenir que se envíe por método get
        e.preventDefault();
        
        // Validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true)
            return ;
        }

        // Insertar id

        // Crear la cita

        // Reiniciar el form



    }



    return (
        <Fragment>
            <h2>Crear cita</h2>
            {
                error ? <h3 className='alerta-error'>Todos los campos son obligatorios</h3> : null
            }

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota:</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de mascota"
                    onChange={actualizarState}
                    value={mascota}
                >
                </input>

                <label>Nombre Dueño:</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={actualizarState}
                    value={propietario}
                >
                </input>

                <label>Fecha de ingreso:</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                >
                </input>

                <label>Hora de ingreso:</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                    >
                </input>

                <label>Síntomas:</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}
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