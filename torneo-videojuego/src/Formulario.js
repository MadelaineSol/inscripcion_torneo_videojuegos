import './Formulario.css';

function Formulario() {
    return (
        <div className="formulario">

            <h1>Formulario de inscripción</h1>

            <div className="campo">
                <label>Nombre:</label>
                <input type="text" />
            </div>

            <div className="campo">
                <label>Apellido:</label>
                <input type="text" />
            </div>

            <div className="campo">
                <label>Email:</label>
                <input type="email" />
            </div>

            <div className="campo">
                <label>Teléfono:</label>
                <input type="text" />
            </div>

            <button type="submit" className="boton">
     INSCRIBIRME
</button>

        </div>
    );
}

export default Formulario;