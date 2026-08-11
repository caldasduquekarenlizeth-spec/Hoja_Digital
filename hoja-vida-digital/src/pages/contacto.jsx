import { useState } from "react";
import { enviarContacto } from "../services/contactoService";

function Contacto() {

    const [formulario, setFormulario] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        asunto: "",
        mensaje: ""
    });

    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState("");

    const manejarCambio = (e) => {

        const { name, value } = e.target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    };


    const manejarEnvio = async (e) => {

        e.preventDefault();

        setEnviado(false);
        setError("");

        try {

            await enviarContacto(formulario);

            setEnviado(true);

            setFormulario({
                nombre: "",
                correo: "",
                telefono: "",
                asunto: "",
                mensaje: ""
            });

        } catch (error) {

            setError(
                error.message || "No se pudo enviar el mensaje"
            );

        }
    };


    return (
        <main className="contacto">

            <h2>Contáctame</h2>

            <form
                className="contact-form"
                onSubmit={manejarEnvio}
            >

                <div className="form-group">

                    <label htmlFor="nombre">
                        Nombre
                    </label>

                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formulario.nombre}
                        onChange={manejarCambio}
                        required
                    />

                </div>


                <div className="form-group">

                    <label htmlFor="correo">
                        Correo electrónico
                    </label>

                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formulario.correo}
                        onChange={manejarCambio}
                        required
                    />

                </div>


                <div className="form-group">

                    <label htmlFor="telefono">
                        Teléfono
                    </label>

                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formulario.telefono}
                        onChange={manejarCambio}
                    />

                </div>


                <div className="form-group">

                    <label htmlFor="asunto">
                        Asunto
                    </label>

                    <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        value={formulario.asunto}
                        onChange={manejarCambio}
                    />

                </div>


                <div className="form-group">

                    <label htmlFor="mensaje">
                        Mensaje
                    </label>

                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formulario.mensaje}
                        onChange={manejarCambio}
                        required
                    />

                </div>


                <button
                    type="submit"
                    className="btn-enviar"
                >
                    Enviar mensaje
                </button>


                {enviado && (
                    <p className="mensaje-exito">
                        ¡Mensaje enviado correctamente!
                    </p>
                )}


                {error && (
                    <p className="mensaje-error">
                        {error}
                    </p>
                )}

            </form>

        </main>
    );
}

export default Contacto;