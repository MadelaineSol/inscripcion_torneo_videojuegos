import { useState } from 'react';
import './Formulario.css';

function Formulario() {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    return (
        <div className="formulario">

            <h1>Formulario de inscripción</h1>

            <div className="campo">
                <label>Nombre:</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(evento) => setNombre(evento.target.value)}
                />
            </div>

            <div className="campo">
                <label>Apellido:</label>
                <input
                    type="text"
                    value={apellido}
                    onChange={(evento) => setApellido(evento.target.value)}
                />
            </div>

            <div className="campo">
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(evento) => setEmail(evento.target.value)}
                />
            </div>

            <div className="campo">
                <label>Teléfono:</label>
                <input
                    type="text"
                    value={telefono}
                    onChange={(evento) => setTelefono(evento.target.value)}
                />
            </div>

            <button type="submit" className="boton">
                INSCRIBIRME
            </button>

        </div>
    );
}

export default Formulario;